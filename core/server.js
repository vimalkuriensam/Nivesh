const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "build");

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => res.sendFile(path.join(publicPath, "index.html")));

app.use(function (req, res, next) {
  if (req.method === "OPTIONS") {
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = "86400"; // 24 hours
    headers["Access-Control-Allow-Headers"] =
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,X-Access-Token,X-Key";
    res.writeHead(200, headers);
    res.end();
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,X-Access-Token,X-Key",
      "access_token",
      "transaction_id"
    );
    next();
  }
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
