var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Handlebars', condition: false, users:[{name:"Zohaib Ahmad", age:26}] });
});

module.exports = router;
