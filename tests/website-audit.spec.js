import { test, expect } from "@playwright/test";

test("homepage loads without major layout problems", async ({
  page,
}, testInfo) => {
  const pageErrors = [];
  const consoleErrors = [];

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  const response = await page.goto("/", {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  await expect(page.locator("body")).toBeVisible();

  // Wait for fonts and layout to settle.
  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  const layout = await page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;

    return {
      title: document.title,
      viewportWidth: window.innerWidth,
      documentWidth: Math.max(root.scrollWidth, body.scrollWidth),
      horizontalOverflow:
        Math.max(root.scrollWidth, body.scrollWidth) > window.innerWidth + 1,
      brokenImages: [...document.images]
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src),
    };
  });

  await page.screenshot({
    path: testInfo.outputPath("homepage.png"),
    fullPage: true,
    animations: "disabled",
  });

  console.log(
    `BROWSER: ${testInfo.project.name}\n`,
    JSON.stringify(layout, null, 2),
  );

  console.log("PAGE ERRORS:", JSON.stringify(pageErrors, null, 2));
  console.log("CONSOLE ERRORS:", JSON.stringify(consoleErrors, null, 2));

  expect(pageErrors, "Uncaught JavaScript errors").toEqual([]);
  expect(layout.horizontalOverflow, "Unexpected horizontal page overflow").toBe(
    false,
  );
  expect(layout.brokenImages, "Images that failed to load").toEqual([]);
});
