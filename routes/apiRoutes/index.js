const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.Use(animalRoutes);

module.exports = router;
