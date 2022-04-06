const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/greet", (req, res) => {
  res.send("Hello, Everyone");
});

app.listen(6000, () => {
  console.log("🚀 Server up and runing on PORT 6000");
});
