const express = require('express');

const router = express.Router();

router.use('/', (req, res,next) => {
  console.log("Route default level ");
  next();
});

router.use('/student', (req, res, next) => {
  console.log("Route student level ");
  next();
});

module.exports = router;