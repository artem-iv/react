var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const users = [
    {
      id: "1",
      name: "Abraham",
      username: "Minsk",
      email: "",
      phone: ""
    },
    {
      id: "2",
      name: "Geron",
      username: "Moscow"
    },
    {
      id: "3",
      name: "David",
      username: "Polotsk"
    }
  ];
  res.json(users);
});

app.get("/events", (req, res) => {
  res.send("this file empty now");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
