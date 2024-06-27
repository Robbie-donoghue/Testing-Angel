import { test, expect } from "@playwright/test";

test.describe("incorrect perspective login", () => {
  test("has err", async ({ page }) => {
    await page.goto(`${process.env.HOST_URL}`);
    await page.getByRole("link", { name: "Login" }).click();
    await page.getByRole("link", { name: "Perspective Login Page " }).click();
    await page.getByLabel("Username or Email:").click();
    await page.getByLabel("Username or Email:").fill("hello");
    await page.getByLabel("Password:").click();
    await page.getByLabel("Password:").fill("password");
    await page.getByRole("link", { name: "Login " }).click();
    // incorrect login details
    await expect(
      page
        .locator("div")
        .filter({
          hasText:
            /^Incorrect Login DetailsPlease try again or request a reset\. Password Reset$/,
        })
        .first()
    ).toBeVisible();
  });
});
