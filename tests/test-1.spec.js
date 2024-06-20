import { test, expect } from "@playwright/test";

test("has logo", async ({ page }) => {
  await page.goto("https://www.angelsolutions.co.uk/");
  await page.getByRole("img", { name: "Angel Solutions Logo" }).isVisible();
});
