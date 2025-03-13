import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  use: {
    baseURL: "http://127.0.0.1:5500/",
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: "playwright-tests",
});
