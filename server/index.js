const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies

app.use(cors());

app.get("/", (req, res) => res.send("Todoapp backend!"));

app.get("/lista", (req, res) =>
  setTimeout(() => {
    res.json({
      lista: ["Item Um", "Item 2", "Item 3", "Item 4"],
    });
  }, 2000)
);

app.post("/add", (req, res) => {
  if (req.body.taskName.length > 0) {
    res.send("Success");
  } else {
    res.send({
      status: 400,
      data: "Error!",
    });
  }
});

app.listen(port, () =>
  console.log(`Backend for Todoapp running at http://localhost:${port}`)
);
