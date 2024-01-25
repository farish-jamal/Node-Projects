const express = require("express");
const shortID = require("shortid");
const Url = require("../models/url.models");

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const short = shortID.generate();
  await Url.create({
    shortId: short,
    redirectId: body.url,
  });
  return res.status(201).json({ msg: "success", id: short });
});

router.get("/:shortId", async (req, res) => {
  const result = await Url.findOneAndUpdate(
    { shortId: req.params.shortId },
    { $inc: { numberOfVisits: 1 } }
  );
  return res.redirect(result.redirectId);
});

module.exports = router;
