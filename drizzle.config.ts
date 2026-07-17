import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: process.env.TURSO_DATABASE_URL
    ? {
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
      }
    : { url: "file:local.db" },
});
