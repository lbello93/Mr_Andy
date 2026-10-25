# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\website-audit.spec.js >> homepage loads without major layout problems
- Location: tests\website-audit.spec.js:3:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("homepage loads without major layout problems", async ({
  4  |   page,
  5  | }, testInfo) => {
  6  |   const pageErrors = [];
  7  |   const consoleErrors = [];
  8  | 
  9  |   page.on("pageerror", (error) => {
  10 |     pageErrors.push(error.message);
  11 |   });
  12 | 
  13 |   page.on("console", (message) => {
  14 |     if (message.type() === "error") {
  15 |       consoleErrors.push(message.text());
  16 |     }
  17 |   });
  18 | 
> 19 |   const response = await page.goto("/", {
     |                               ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  20 |     waitUntil: "networkidle",
  21 |     timeout: 60_000,
  22 |   });
  23 | 
  24 |   expect(response).not.toBeNull();
  25 |   expect(response.status()).toBeLessThan(400);
  26 | 
  27 |   await expect(page.locator("body")).toBeVisible();
  28 | 
  29 |   // Wait for fonts and layout to settle.
  30 |   await page.evaluate(async () => {
  31 |     if (document.fonts) {
  32 |       await document.fonts.ready;
  33 |     }
  34 |   });
  35 | 
  36 |   const layout = await page.evaluate(() => {
  37 |     const root = document.documentElement;
  38 |     const body = document.body;
  39 | 
  40 |     return {
  41 |       title: document.title,
  42 |       viewportWidth: window.innerWidth,
  43 |       documentWidth: Math.max(root.scrollWidth, body.scrollWidth),
  44 |       horizontalOverflow:
  45 |         Math.max(root.scrollWidth, body.scrollWidth) > window.innerWidth + 1,
  46 |       brokenImages: [...document.images]
  47 |         .filter((img) => !img.complete || img.naturalWidth === 0)
  48 |         .map((img) => img.src),
  49 |     };
  50 |   });
  51 | 
  52 |   await page.screenshot({
  53 |     path: testInfo.outputPath("homepage.png"),
  54 |     fullPage: true,
  55 |     animations: "disabled",
  56 |   });
  57 | 
  58 |   console.log(
  59 |     `BROWSER: ${testInfo.project.name}\n`,
  60 |     JSON.stringify(layout, null, 2),
  61 |   );
  62 | 
  63 |   console.log("PAGE ERRORS:", JSON.stringify(pageErrors, null, 2));
  64 |   console.log("CONSOLE ERRORS:", JSON.stringify(consoleErrors, null, 2));
  65 | 
  66 |   expect(pageErrors, "Uncaught JavaScript errors").toEqual([]);
  67 |   expect(layout.horizontalOverflow, "Unexpected horizontal page overflow").toBe(
  68 |     false,
  69 |   );
  70 |   expect(layout.brokenImages, "Images that failed to load").toEqual([]);
  71 | });
  72 | 
```