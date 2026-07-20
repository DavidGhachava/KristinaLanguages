import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the completed Russian landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="ru">/i);
  assert.match(html, /<title>Уроки грузинского в Батуми — Кристина Беридзе<\/title>/i);
  assert.match(html, /<h1[^>]*>Уроки грузинского в Батуми/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /https:\/\/kristinalanguages\.com\/og\.png/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /20 ₾/);
  assert.match(html, /https:\/\/wa\.me\/995571010750/);
  assert.match(html, /https:\/\/www\.facebook\.com\/kristina\.beridze\.3/);
  assert.match(html, /src="\/kb-logo\.png"/);
  assert.match(html, /name="robots" content="index, follow/);
  assert.match(html, /rel="manifest" href="https:\/\/kristinalanguages\.com\/site\.webmanifest"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("ships contact, SEO, image, and accessibility assets", async () => {
  const [form, css, page, readme] = await Promise.all([
    readFile(new URL("../app/components/ContactForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    access(new URL("../public/images/hero-studio-640.avif", import.meta.url)),
    access(new URL("../public/images/children-georgian-lesson-1600.webp", import.meta.url)),
    access(new URL("../public/kb-logo.png", import.meta.url)),
    access(new URL("../public/robots.txt", import.meta.url)),
    access(new URL("../public/sitemap.xml", import.meta.url)),
  ]);
  assert.match(form, /formsubmit\.co\/ajax\/K\.beridze1982@gmail\.com/);
  assert.match(form, /_honey/);
  assert.match(form, /aria-live="polite"/);
  assert.match(form, /disabled=\{status === "loading"\}/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /:focus-visible/);
  assert.match(page, /canonical: "https:\/\/kristinalanguages\.com\/"/);
  assert.match(page, /"@type": "Service"/);
  assert.match(page, /"@type": "WebSite"/);
  assert.match(page, /"@type": "WebPage"/);
  assert.match(page, /"@type": "Offer"/);
  assert.match(readme, /письмо активации/i);
});
