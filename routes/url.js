const express = require("express");
const {
  handle_NewShortURL,
  handle_GetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handle_NewShortURL);

router.get("/analytics/:shortId", handle_GetAnalytics);

module.exports = router;
