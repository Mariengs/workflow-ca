import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL("/");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.fill('input[name="email"]', "wrong@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    await page.waitForSelector(".error-message", {
      state: "visible",
      timeout: 3000,
    });

    await expect(page.locator(".error-message")).toHaveText(
      "Invalid credentials",
    );
  });
});
