import { test, expect } from "@playwright/test";

const ROUTES = ["/", "/packages", "/events", "/about", "/contact", "/contact/success"];

for (const route of ROUTES) {
  test(`${route} has no layout problems`, async ({ page }, testInfo) => {
    const pageErrors = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));

    const response = await page.goto(route, { waitUntil: "load" });
    expect(response?.status()).toBeLessThan(400);

    // Wait for lazy-loaded route content to render
    await expect(page.locator("main h1, main h2, main section").first()).toBeVisible();
    await page.evaluate(() => document.fonts.ready);

    // Force all lazy images to load immediately
    await page.evaluate(() => {
      for (const img of document.images) {
        if (img.loading === "lazy") img.loading = "eager";
        if (!img.src && img.dataset.src) img.src = img.dataset.src;
      }
    });

    // Wait for every image to finish (30s to be safe under load)
    await page
      .waitForFunction(
        () => document.images.length > 0 && [...document.images].every((i) => i.complete),
        null,
        { timeout: 30000 }
      )
      .catch(async () => {
        const stuck = await page.evaluate(() =>
          [...document.images].filter((i) => !i.complete).map((i) => i.currentSrc || i.src)
        );
        throw new Error("Images never finished loading: " + JSON.stringify(stuck, null, 2));
      });

    const layout = await page.evaluate(() => {
      const w = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      return {
        overflow: w > window.innerWidth + 1,
        broken: [...document.images].filter((i) => i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
      };
    });

    const shot = testInfo.outputPath(`${route.replace(/\W+/g, "_") || "home"}.png`);
    try {
      await page.screenshot({ path: shot, fullPage: true, animations: "disabled" });
    } catch {
      await page.screenshot({ path: shot, animations: "disabled" });
    }

    expect(pageErrors, "Uncaught JS errors").toEqual([]);
    expect(layout.overflow, "Horizontal overflow").toBe(false);
    expect(layout.broken, "Broken images").toEqual([]);
  });
}