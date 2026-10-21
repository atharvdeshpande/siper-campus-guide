// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

// Automatically sync user-provided images from Downloads / Screenshots if present
try {
  const downloadHero = "C:\\Users\\conte\\Downloads\\ChatGPT Image Sep 28, 2026, 10_18_52 AM.png";
  const targetHero = path.resolve(__dirname, "src/assets/campus-hero.jpg");
  const targetPublicHero = path.resolve(__dirname, "public/campus-hero.jpg");
  if (fs.existsSync(downloadHero)) {
    fs.copyFileSync(downloadHero, targetHero);
    fs.copyFileSync(downloadHero, targetPublicHero);
    console.log("Successfully copied hero image from Downloads!");
  }

  const downloadLab = "C:\\Users\\conte\\Downloads\\ChatGPT Image Sep 28, 2026, 10_30_32 AM.png";
  const targetLab = path.resolve(__dirname, "src/assets/lab.jpg");
  const targetPublicLab = path.resolve(__dirname, "public/lab.jpg");
  if (fs.existsSync(downloadLab)) {
    fs.copyFileSync(downloadLab, targetLab);
    fs.copyFileSync(downloadLab, targetPublicLab);
    console.log("Successfully copied lab image from Downloads!");
  }

  const downloadLibrary = "C:\\Users\\conte\\Downloads\\ChatGPT Image Sep 28, 2026, 10_38_45 AM.png";
  const targetLibrary = path.resolve(__dirname, "src/assets/library.jpg");
  const targetPublicLibrary = path.resolve(__dirname, "public/library.jpg");
  if (fs.existsSync(downloadLibrary)) {
    fs.copyFileSync(downloadLibrary, targetLibrary);
    fs.copyFileSync(downloadLibrary, targetPublicLibrary);
    console.log("Successfully copied library image from Downloads!");
  }

  const screenshotLogo = "C:\\Users\\conte\\Pictures\\Screenshots\\Screenshot 2026-09-28 002510.png";
  const targetLogo = path.resolve(__dirname, "public/siper-logo.png");
  if (fs.existsSync(screenshotLogo)) {
    fs.copyFileSync(screenshotLogo, targetLogo);
    console.log("Successfully copied logo from Screenshots!");
  }
} catch (e) {
  console.error("Image sync hook error:", e);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
