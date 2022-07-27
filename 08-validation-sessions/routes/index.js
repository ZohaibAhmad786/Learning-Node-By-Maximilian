var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(JSON.stringify(req.session))
  res.render('index', { title: 'Express Handlebars', condition: false, users: [{ name: "Zohaib Ahmad", age: 26 }], errors: req.session.errors, success: req.session.success });
  req.session.errors = null;
});


router.get('/:id', function (req, res, next) {
  res.render('test', { title: 'Query Params', param: req.params.id });
});


router.post('/test/submit', function (req, res, next) {
  res.redirect('/' + req.body.id)
});


router.post('/submit',
  body('email', 'Invalid email address').isEmail(),
  body('password', 'Password is invalid').isLength({ min: 4 }),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
  function (req, res, next) {
    // Check the validity here

    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.session.errors = errors.errors;
      req.session.success = false
    } else {
      req.session.success = true
    }
    res.redirect('/')

  });

module.exports = router;
