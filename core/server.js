﻿/**
 *This file creates a server for serving requirements.
 */

//Required node modulus.
const { response } = require("express");
const express = require("express"),
  bodyParser = require("body-parser");
const path = require("path");

//server initilization starts here.
app = express();
app.use(express.static(path.resolve(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const mapping = {
  "/webapp": "http://app.nivesh.com",
  "/gyan/all-you-should-know-about-liquid-funds":
    "https://blog.nivesh.com/mf/debt/all-you-should-know-about-liquid-funds/",
  "/gyan/fmps-a-perfect-choice-for-investors-looking-for-steady-returns":
    "https://blog.nivesh.com/",
  "/gyan/take-baby-steps-towards-investment-with-ultra-short-term-funds":
    "https://blog.nivesh.com/mf/debt/what-are-ultra-short-term-funds",
  "/crm": "https://crm.nivesh.com",
  "/Providential_CMS": "https://crm.nivesh.com",
  "/webapp/": "http://app.nivesh.com",
  "/gyan/all-you-should-know-about-liquid-funds/":
    "https://blog.nivesh.com/mf/debt/all-you-should-know-about-liquid-funds/",
  "/gyan/fmps-a-perfect-choice-for-investors-looking-for-steady-returns/":
    "https://blog.nivesh.com/",
  "/gyan/take-baby-steps-towards-investment-with-ultra-short-term-funds/":
    "https://blog.nivesh.com/mf/debt/what-are-ultra-short-term-funds",
  "/crm/": "https://crm.nivesh.com",
  "/Providential_CMS/": "https://crm.nivesh.com",
};

const externalUrls = Object.keys(mapping);
const getRedirectUrl = (oldUrl) => {
  console.log("ext" + externalUrls);
  console.log("old" + oldUrl);
  console.log(mapping.hasOwnProperty(oldUrl));
  const url = mapping.hasOwnProperty(oldUrl) ? mapping[oldUrl] : "";
  console.log("url" + url);
  return url;
};
const handleExternalUrls = (req, resp) => {
  const redirectURL = `${getRedirectUrl(req.baseUrl + req.path)}`;
  console.log(req.query);
  console.log(redirectURL);
  resp.status(301).redirect(redirectURL);
};

app.use(externalUrls, handleExternalUrls);

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

/**
 * Inner function here server the purpuse of 'OPTIONS' method which is used in most of front end js libraries.
 */
app.use(function (req, res, next) {
  if (req.method === "OPTIONS") {
    console.log("!OPTIONS");
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

var port = process.env.PORT || 80;
app.listen(port);
console.log(`Server is Started and listening on  ${port}`);

module.exports = app;
