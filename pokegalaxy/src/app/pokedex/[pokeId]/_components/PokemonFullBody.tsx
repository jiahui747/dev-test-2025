"use client";

import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import NextImage from "next/image";

const PokemonFullBody = ({ name }: { name: string | undefined }) => {
  const [fullImage, setFullImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fetchImage = useCallback(async () => {
    setIsLoadingImage(true);
    try {
      if (!name) return;
      const response = await axios.get(`/api/images/${name}`, {
        responseType: "blob",
      });
      const imageUrl = URL.createObjectURL(response.data);
      setFullImage(imageUrl);
    } catch {
      setFullImage(null);
    }
  }, [name]);

  useEffect(() => {
    fetchImage();
    if (!fullImage) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = fullImage;
    img.onload = () => {
      // Calculate scaling factors
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);

      // Calculate new dimensions
      const width = img.width * scale;
      const height = img.height * scale;

      // Calculate position to center the image
      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, width, height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // remove white background
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        if (r >= 255 && g >= 255 && b >= 255) {
          pixels[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setIsLoadingImage(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullImage?.length, fetchImage]);

  return (
    <div className="w-125 h-125 relative">
      {isLoadingImage ? (
        <NextImage
          src="/pokemon-substitute.png"
          alt={name ?? "unknown"}
          width={400}
          height={400}
          priority
          className="absolute left-0.5 bottom-0"
        />
      ) : (
        <NextImage
          src="/logo.png"
          alt={name ?? "unknown"}
          width={500}
          height={500}
          priority
          className="absolute left-0.5 bottom-0 opacity-50"
        />
      )}
      <canvas width={500} height={500} className="z-10 relative" ref={canvasRef} />
    </div>
  );
};

export { PokemonFullBody };
