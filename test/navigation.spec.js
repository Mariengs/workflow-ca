import { test, expect } from "@playwright/test";

test("Navigation works correctly", async ({ page }) => {
  await page.goto("/");

  // Vent på at venue-listen skal lastes
  await expect(page.locator(".venue-list")).toBeVisible();

  // Klikk på første venue
  const firstVenue = page.locator(".venue-item").first();
  await firstVenue.click();

  // Bekreft at vi er på detaljer-siden
  await expect(page).toHaveURL(/\/venue\/\d+/); // Bytt om URL-strukturen krever noe annet
  await expect(page.locator("h1")).toHaveText(/Venue details/i);
});
