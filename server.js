const express = require("express");
const app = express();

app.use("/", express.static("src"));
app.use("/", express.static("public"));

const logger = require("morgan");
app.use(logger("dev"));

const port = 8000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
