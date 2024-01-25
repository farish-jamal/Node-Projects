const Url = require("../models/url.models");
const shortID = require("shortid");

async function handleGetUrl(req, res) {
  const urls = await Url.find({});
  res.render("home", {
    urls: urls,
  });
}

async function handleCreateShortId(req, res) {
  const body = req.body;
  const short = shortID.generate();
  await Url.create({
    shortId: short,
    redirectId: body.url,
  });
  return res.redirect("/");
}

async function handleRedirect(req, res) {
  const result = await Url.findOneAndUpdate(
    { shortId: req.params.shortId },
    { $inc: { numberOfVisits: 1 } },
    { new: true }
  );
  return res.redirect(result.redirectId);
}

module.exports = {
  handleGetUrl,
  handleCreateShortId,
  handleRedirect,
};
