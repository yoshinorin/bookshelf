import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

let cache: string | null = null;
let cachedAt: number = 0;

export const GET: APIRoute = () => {
  const now = Date.now();
  if (!cache || now - cachedAt > TTL_MS) {
    const filePath = join(process.cwd(), "data", "books.json");
    cache = readFileSync(filePath, "utf-8");
    cachedAt = now;
  }

  return new Response(cache, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
