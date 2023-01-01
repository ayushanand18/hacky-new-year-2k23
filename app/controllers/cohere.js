const express = require("express");
const router = express.Router();
const config = require('../../config');
const cohere = require('cohere-ai');
const animalConfig = require('./animal-script.js');

cohere.init(config.cohereKey);

router.get("/cohere", async function(req, res) {
  const response = await cohere.classify({
    inputs: req.query.ask,
    examples: animalConfig.intent_examples,
  });

  res.send(animalConfig.animal_characteristics[animalConfig.animal[response]]);
});

module.exports = router;