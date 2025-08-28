import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { FULL_POKEMON_IMAGE_BASE_URL } from "@/constants/constants";

export async function GET(request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  try {
    const { name } = await params;

    const res = await axios.get(`${FULL_POKEMON_IMAGE_BASE_URL}/${name}.jpg`, {
      responseType: "arraybuffer",
    });
    const fullImage = res.data;

    const headers = new Headers();
    headers.set("Content-Type", "image/jpeg");
    headers.set("Content-Length", fullImage.length.toString());
    headers.set("Cache-Control", "public, max-age=3600");

    return new NextResponse(fullImage, {
      status: 200,
      headers,
    });
  } catch {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
