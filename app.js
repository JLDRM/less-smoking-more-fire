const express = require("express");
const app = express();

// Serve all the static files form the root directory
app.use(express.static(__dirname + "/"));

app.get("/1", function(req, res) {
  res.sendFile(__dirname + "/pages/page1.html");
});
app.get("/2", function(req, res) {
  res.sendFile(__dirname + "/pages/page2.html");
});
app.get("/3", function(req, res) {
  res.sendFile(__dirname + "/pages/page3.html");
});
app.get("/4", function(req, res) {
  res.sendFile(__dirname + "/pages/page4.html");
});
// Fallback for all request
app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
