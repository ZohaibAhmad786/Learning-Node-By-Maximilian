var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/details', function (req, res, next) {
  res.status(200).json({
    success: true, details: {
      name: "Zohaib Ahmad",
      date_of_birth: "09-02-1996"
    }
  })
});

module.exports = router;
