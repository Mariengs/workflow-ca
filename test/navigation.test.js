import { test, expect } from "@playwright/test";

test("Navigation from home to venue details", async ({ page }) => {
  await page.goto("/");

  // Vent på at listen med venues laster inn
  await page.waitForSelector(".venue-list");

  // Klikk på den første venue i listen
  await page.click(".venue-list .venue-item:first-child a");

  // Verifiser at Venue Details-siden laster inn
  await expect(page.locator("h1")).toHaveText(/Venue details/i);
});
