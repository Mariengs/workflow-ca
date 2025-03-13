import { test, expect } from "@playwright/test";

test("Navigation from home to venue details", async ({ page }) => {
  await page.goto("/");

  await page.waitForLoadState("load");

  await page.waitForFunction(
    () => document.querySelectorAll(".venue-list .venue-item").length > 0,
    { timeout: 120000 },
  );

  await page.waitForSelector(".venue-list .venue-item:first-child a", {
    state: "visible",
    timeout: 120000,
  });

  await page.click(".venue-list .venue-item:first-child a");

  await expect(page.locator("h1")).toHaveText(/Venue details/i);
});
