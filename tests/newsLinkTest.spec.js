import { test, expect } from "@playwright/test";

test("News", async ({ page }) => {
  await page.goto(`${process.env.HOST_URL}`);
  await expect(
    page.getByRole("heading", { name: "Making Education Heavenly" })
  ).toBeVisible();
  await page.getByRole("link", { name: "News" }).click();
  await expect(
    page.getByRole("heading", { name: "News", exact: true })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Visit Templates & An Activity" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Visit Templates & An Activity" })
  ).toBeInViewport();
});
