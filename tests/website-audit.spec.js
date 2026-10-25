import { test, expect } from "@playwright/test";

const ROUTES = ["/", "/packages", "/events", "/about", "/contact", "/contact/success"];

for (const route of ROUTES) {
  test(`${route} has no layout problems`, async ({ page }, testInfo) => {
    const pageErrors = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));

    const response = await page.goto(route, { waitUntil: "load" });
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator("main, body").first()).toBeVisible();

    await page.evaluate(() => document.fonts.ready);

    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForFunction(() => [...document.images].every((i) => i.complete));

    const layout = await page.evaluate(() => {
      const w = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      return {
        overflow: w > window.innerWidth + 1,
        broken: [...document.images]
          .filter((i) => i.naturalWidth === 0)
          .map((i) => i.currentSrc || i.src),
      };
    });

    const shot = testInfo.outputPath(`${route.replace(/\W+/g, "_") || "home"}.png`);
    try {
      await page.screenshot({ path: shot, fullPage: true, animations: "disabled" });
    } catch {
      await page.screenshot({ path: shot, animations: "disabled" }); // tall-page fallback
    }

    expect(pageErrors, "Uncaught JS errors").toEqual([]);
    expect(layout.overflow, "Horizontal overflow").toBe(false);
    expect(layout.broken, "Broken images").toEqual([]);
  });
}