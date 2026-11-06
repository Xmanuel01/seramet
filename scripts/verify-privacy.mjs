import assert from "node:assert/strict";
import test from "node:test";
import app from "../.vercel/output/functions/__server.func/index.mjs";

test("public privacy notice renders without authentication", async () => {
  const response = await app.fetch(new Request("https://seramet.co.ke/privacy"));
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Privacy Policy/);
  assert.match(html, /Emmanuel Odhiambo Onyango/);
  assert.match(html, /trading as Seramet/);
  assert.match(html, /mailto:admin@seramet.co.ke/);
  assert.match(html, /https:\/\/seramet.co.ke\/privacy/);
  assert.match(html, /Uber Eats and other delivery connections/);
  assert.match(html, /Storage, security and retention/);
  assert.match(html, /Your choices and requests/);
});

test("existing homepage links to the public privacy notice", async () => {
  const response = await app.fetch(new Request("https://seramet.co.ke/"));
  assert.equal(response.status, 200);
  assert.match(await response.text(), /href="\/privacy"/);
});
