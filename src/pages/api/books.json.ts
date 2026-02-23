import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const GET: APIRoute = () => {
  const filePath = join(process.cwd(), "data", "books.json");
  const data = readFileSync(filePath, "utf-8");

  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
