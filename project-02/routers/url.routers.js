const express = require("express");
const shortID = require("shortid");
const Url = require("../models/url.models");

const router = express.Router();


router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  const short = shortID.generate();
  await Url.create({
    shortId: short,
    redirectId: body.url,
  });
  return res.redirect("/api/url");
});

router.get("/", async(req, res)=>{
  const urls = await Url.find({});
  res.render("home",{
    urls: urls,
  });
})

router.get("/:shortId", async (req, res) => {
  const result = await Url.findOneAndUpdate(
    { shortId: req.params.shortId },
    { $inc: { numberOfVisits: 1 } },
    { new: true }
  );
  return res.redirect(result.redirectId);
});

module.exports = router;
