import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("page is accessible and fits the viewport", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "I build dependableweb products.",
  );
  const portrait = page.getByRole("img", { name: "Fabian Kutsche", exact: true });
  await expect(portrait).toBeVisible();
  await expect(portrait).toHaveJSProperty("complete", true);
  await expect(portrait).not.toHaveJSProperty("naturalWidth", 0);
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map(({ id, nodes }) => ({
      id,
      targets: nodes.map((node) => node.target),
    })),
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("navigation and downloadable CVs work", async ({ page, request }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Explore my work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByRole("link", { name: "Let’s talk", exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole("link", { name: "kutschefabian@gmail.com" }),
  ).toHaveAttribute("href", "mailto:kutschefabian@gmail.com");
  for (const language of ["en", "de"]) {
    const response = await request.get(`/cv/fabian-kutsche-${language}.pdf`);
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
});
