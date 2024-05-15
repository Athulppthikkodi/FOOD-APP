const express = require("express");
const router = express.Router();
const user = require("../models/Users");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  body("name").isLength({ min: 5 }),
  body("email").isEmail(),
  body("password", "Incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);
module.exports = router;
