import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "../src/utils.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Marianne" }));
    expect(getUserName()).toBe("Marianne");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUserName()).toBeNull();
  });
});
