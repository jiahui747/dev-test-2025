# List + Detail Pattern (Optional)

This companion document describes a common approach: a **Home / Listing page** that links to **Detail pages** via **Next.js dynamic routes**. You can **use, adapt, or ignore** this pattern. It’s here to speed you up if you want a straightforward data‑driven flow.

> For data choices and constraints, see **[Data Source (Flexible)](./instructions.md/#data-source-flexible)** in the main spec. If your dataset is small or local, scale the ideas sensibly.

---

## 1) Home / Listing View

* Render a list/grid of items from your chosen dataset or API.
* If the dataset is large, add **pagination** with a **fixed page size of 10**.
* Include **filtering or searching** (client-side or server-side) to refine results.
* Consider empty, loading, and error states.

## 2) Detail View (Next.js Dynamic Routes)

* Use **dynamic routes** (e.g., `/items/[id]`) to render details for a selected item.
* Enrich the page with **additional related data**:

  * If your source offers multiple endpoints, combine **at least two**.
  * If not, you may **synthesize related content** (e.g., “similar items,” derived metadata, or recommendations). Briefly explain your approach in the README.
* Handle partial/missing data gracefully and keep navigation smooth back to the list.

## 3) Pagination & Search Notes

* **Pagination size:** 10 items per page for large datasets.
* **Search/filter:** Choose fields that make sense (title, tags, categories, etc.).

## 4) Routing & Transitions (Optional)

* Feel free to add **shared‑element transitions** (e.g., Framer Motion `layoutId`) for list → detail.

## 5) What We’re Looking For

* Clear component structure and state management.
* Resilience to quirky or incomplete data.
* Polished UX and attention to loading/error/empty states.

---

### Quick Checklist

* [ ] List shows items with pagination (if needed)
* [ ] Search/filter available
* [ ] Detail route uses dynamic routing
* [ ] Additional/related data shown on detail
* [ ] Loading/error/empty states covered

> Reminder: For API choices and example quirks, see the main test document’s **Data Source (Flexible)** and **Data Resilience** sections.
