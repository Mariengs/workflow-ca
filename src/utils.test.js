import { describe, it, expect } from "vitest";
import { isActivePath, getUserName } from "../src/utils.js";

beforeEach(() => {
  global.window = { location: { pathname: "/" } };
});

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    window.location.pathname = "/about";
    expect(isActivePath("/about")).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    window.location.pathname = "/";
    expect(isActivePath("/")).toBe(true);
    expect(isActivePath("/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    window.location.pathname = "/products/shoes";
    expect(isActivePath("/products")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    window.location.pathname = "/contact";
    expect(isActivePath("/about")).toBe(false);
  });
});

describe("getUserName", () => {
  beforeEach(() => {
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
