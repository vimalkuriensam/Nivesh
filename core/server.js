/**
 *This file creates a server for serving requirements.
 */

//Required node modulus.
const express = require("express"),
  bodyParser = require("body-parser");
const path = require("path");
const { externalMapping } = require("./externalMapping");
const { internalMapping } = require("./internalMapping");

//server initilization starts here.
app = express();
app.use(express.static(path.resolve(__dirname, "build")));

const externalUrls = Object.keys(externalMapping);
const internalUrls = Object.keys(internalMapping);

const getRedirectUrl = (oldUrl) =>
  externalMapping.hasOwnProperty(oldUrl) ? externalMapping[oldUrl] : "";

const handleExternalUrls = (req, resp) => {
  const redirectURL = `${getRedirectUrl(req.baseUrl + req.path)}`;
  resp.redirect(301, redirectURL);
};

app.use(internalUrls, (req, res) => {
  res.redirect(301, internalMapping[req["_parsedOriginalUrl"]["pathname"]]);
});

app.use(externalUrls, handleExternalUrls);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

/**
 * Inner function here server the purpuse of 'OPTIONS' method which is used in most of front end js libraries.
 */
app.use(function (req, res, next) {
  if (req.method === "OPTIONS") {
    var headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
