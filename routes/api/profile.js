"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../../config/middleware/auth");

const Profile = require("../../config/models/Profile");
const User = require("../../config/models/User");

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "No token, autherization denied" });
  }
});

module.exports = router;
