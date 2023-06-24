const shortid = require("shortid");
const URL = require("../models/url");

async function handle_NewShortURL(request, response) {
  if (!request.body.url) return response.status(400).json({ error: "url is required" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirect_URL: request.body.url,
    visitHistory: [],
  });
  return response.json({ id: shortID });
}

async function handle_GetAnalytics(request, response) {
  const result = await URL.findOne({ shortId });
  const shortId = request.params.shortId;
  return response.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handle_NewShortURL,
  handle_GetAnalytics,
};
