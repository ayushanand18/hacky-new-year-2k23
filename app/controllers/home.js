const express = require("express");
const router = express.Router();
const config = require('../../config');
const cohere = require('cohere-ai');
const animalConfig = require('../static/js/animal-script.js');

cohere.init(config.cohereKey);

router.get("/", function(req, res) {
  res.render("home/index");
});

router.get("/chat", function(req, res) {
  res.render("chat/index");
});

router.get("/cohere", async function(req, res) { 
  const response = await cohere.classify({
    inputs: [req.query.ask],
    examples: animalConfig.intent_examples,
  });
  await res.send(animalConfig.animal_characteristics[response.body.classifications[0].prediction]);
});

module.exports = router;
