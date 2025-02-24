import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("User can successfully log in with valid credentials", async ({
  page,
}) => {
  await page.goto("/login");

  await page.fill("input[name='email']", process.env.TEST_USER);
  await page.fill("input[name='password']", process.env.TEST_PASS);
  await page.click("button[type='submit']");

  await expect(page.locator("text=Welcome")).toBeVisible();
});

test("User sees an error message with invalid credentials", async ({
  page,
}) => {
  await page.goto("/login");

  await page.fill("input[name='email']", "wrong@example.com");
  await page.fill("input[name='password']", "wrongpassword");
  await page.click("button[type='submit']");

  await expect(page.locator("text=Invalid credentials")).toBeVisible();
});
