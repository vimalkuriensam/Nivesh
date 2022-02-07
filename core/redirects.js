const express = require("express");

const router = express.Router();

const { externalMapping } = require("./externalMapping");
const { internalMapping } = require("./internalMapping");

const externalUrls = Object.keys(externalMapping).map(
  (val) => `${val}${val[val.length - 1] == "/" ? "" : "/"}`
);
const internalUrls = Object.keys(internalMapping).map(
  (val) => `${val}${val[val.length - 1] == "/" ? "" : "/"}`
);

const handleUrls = ({ urlList, path }) => {
  const list = Object.keys(urlList);
  const urlfragments = path
    .split("/")
    .filter((val) => !val.includes("undefined"))
    .filter((val) => !!val);
  const urlMatch = list
    .filter((val) =>
      val
        .split("/")
        .filter((val) => !!val)
        .every((val) => urlfragments.includes(val))
    )
    .sort((a, b) => b.length - a.length)[0];
  let extraLink = path.replace(urlMatch, "");
  extraLink = extraLink.includes("undefined") ? "" : extraLink;
  const isLastCharSlash =
    urlList[urlMatch][urlList[urlMatch].length - 1] == "/";
  return { urlMatch, isLastCharSlash, extraLink };
};

router.use(internalUrls, (req, res) => {
  const path = req["_parsedUrl"].pathname;
  const { urlMatch, isLastCharSlash, extraLink } = handleUrls({
    urlList: internalMapping,
    path,
  });
  res.redirect(
    301,
    `${internalMapping[urlMatch]}${isLastCharSlash ? "" : "/"}${extraLink}`
  );
});

router.use(externalUrls, (req, res) => {
  const path = req["_parsedUrl"].pathname;
  const { urlMatch, isLastCharSlash, extraLink } = handleUrls({
    urlList: externalMapping,
    path,
  });
  res.redirect(
    301,
    `${externalMapping[urlMatch]}${isLastCharSlash ? "" : "/"}${extraLink}`
  );
});

module.exports = router;
