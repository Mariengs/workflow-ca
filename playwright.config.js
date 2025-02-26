import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://127.0.0.1:5500/", // Bytt ut med riktig URL om nødvendig
    headless: true, // Kjører testene i headless mode
    viewport: { width: 1280, height: 720 }, // Standard skjermstørrelse for tester
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: "npm run dev", // Starter utviklingsserveren før testene kjører
    port: 5173, // Samme port som baseURL
    reuseExistingServer: !process.env.CI, // Unngå å starte flere servere lokalt
  },
});
