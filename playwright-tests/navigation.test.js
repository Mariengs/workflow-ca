import { test, expect } from "@playwright/test";

test("Navigation from home to venue details", async ({ page }) => {
  await page.goto("/");

  await page.waitForLoadState("load");

  const firstVenueLink = page.locator("#venue-container a");

  await firstVenueLink.first().click();

  const heading = page.locator("h1");
  await expect(heading).toContainText("Venue details");
});
