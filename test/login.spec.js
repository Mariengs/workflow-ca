import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config(); // Leser miljøvariabler fra .env-filen

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login"); // Bytt til riktig login-URL hvis nødvendig

    // Fyll inn login-form
    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
    await page.click('button[type="submit"]');

    // Bekreft at login er vellykket
    await expect(page).toHaveURL("/dashboard"); // Bytt til riktig side etter innlogging
    await expect(page.locator("text=Welcome")).toBeVisible(); // Sjekk at "Welcome" er synlig
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    // Skriv inn ugyldige login-data
    await page.fill('input[name="email"]', "wrong@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    // Sjekk at feilmelding vises
    await expect(page.locator(".error-message")).toBeVisible();
    await expect(page.locator(".error-message")).toHaveText(
      "Invalid credentials",
    );
  });
});
