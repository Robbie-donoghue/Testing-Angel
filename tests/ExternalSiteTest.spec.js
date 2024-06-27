import { test, expect } from "@playwright/test";

test("linkedin", async ({ page }) => {
  await page.goto(`${process.env.HOST_URL}`); // process.host.url
  await expect(
    page.getByRole("heading", { name: "Making Education Heavenly" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Contact" }).click();
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "See us on LinkedIn" }).click();
  const page2 = await page2Promise;
  await page2.getByRole("button", { name: "Sign in" }).click();
  await page2.getByLabel("Email or phone").click();
  await page2.getByLabel("Email or phone").fill(`${process.env.EMAIL}`);
  await page2.getByLabel("Password", { exact: true }).click();
  await page2.getByLabel("Password", { exact: true }).click();
  await page2
    .getByLabel("Password", { exact: true })
    .fill(`${process.env.PASSWORD}`);
  await page2.getByLabel("Password", { exact: true }).press("Enter");
  await page2.goto(
    process.env.SUBDOMAIN_URL //process.env.linkedin
  );
  await expect(page2.locator('[id="-target-image"]')).toBeVisible();
});
