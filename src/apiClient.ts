import { Client } from "@hoseung-only/blog-api-client";

export const client = new Client({
  baseURL: process.env.API_BASE_URL!,
});
