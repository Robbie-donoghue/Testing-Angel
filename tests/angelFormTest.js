import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.angelsolutions.co.uk/");
  await page.getByRole("link", { name: "View All Products" }).click();
  await page.getByRole("link", { name: "Find out more" }).click();
  await page.getByRole("link", { name: "Contact" }).click();
  await page.getByLabel("Subject *").selectOption("Product Enquiry");
  await page.getByLabel("Product Query").selectOption("Perspective Lite");
  await expect(
    page.getByText("Please correct errors before")
  ).not.toBeVisible();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Please correct errors before")).toBeVisible();
});
