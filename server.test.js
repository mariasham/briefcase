const assert = require("node:assert/strict");
const { once } = require("node:events");
const { test } = require("node:test");
const app = require("./server");

test("the starter serves the Briefcase home page", async (context) => {
  const server = app.listen(0, "127.0.0.1");
  context.after(() => new Promise((resolve) => server.close(resolve)));
  await once(server, "listening");

  const response = await fetch(`http://127.0.0.1:${server.address().port}/`);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "Briefcase is running.");
});