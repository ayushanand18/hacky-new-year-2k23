const express = require("express");

const router = express.Router();

router.get("/chat", function(req, res) {
  res.render("chat/index");
});

module.exports = router;
