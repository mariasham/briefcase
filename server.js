const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_request, response) => {
  response.type("text").send("Briefcase is running.");
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Briefcase running at http://localhost:${port}`);
  });
}

module.exports = app;