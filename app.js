var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
  res.json(["civilizations", "units", "structures", "technologies"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});