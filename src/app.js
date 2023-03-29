const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send({
    message: "no data found on this page ",
  }),
);

app.get("/help", (req, res) => {
  res.send({
    help: "no help found so youre not getin help ",
  });
});

app.get("/*", (req, res) => {
  res.send("<h1>404 error page not found </h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
