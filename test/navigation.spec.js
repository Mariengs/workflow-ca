import { test, expect } from "@playwright/test";

test("Navigation test", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/");

  await page.waitForSelector(".venue-list", { timeout: 5000 });
  await page.click(".venue-list .venue:first-child a", { timeout: 5000 });

  await expect(page.locator("h1")).toHaveText(/Venue details/i);
});
