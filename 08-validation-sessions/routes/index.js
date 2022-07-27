var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express Handlebars', condition: false, users: [{ name: "Zohaib Ahmad", age: 26 }] });
});


router.get('/:id', function (req, res, next) {
  res.render('test', { title: 'Query Params', param: req.params.id });
});


router.post('/test/submit', function (req, res, next) {
  res.redirect('/' + req.body.id)
});

module.exports = router;
