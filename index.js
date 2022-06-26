const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
