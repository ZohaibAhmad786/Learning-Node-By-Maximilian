var express = require('express');
var router = express.Router();

var mongodb = require("mongodb");
var assert = require('assert');
const Excercise = require('../models/Exercise');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.get('/get-data', async function (req, res, next) {
  var exerciseList = [];
  const data = await Excercise.find();

  data.forEach(doc => {
    console.log("DOCUMENT :: ", doc)
    exerciseList.push({
      title: doc.title,
      content: doc.content,
      author: doc.author,
      _id: doc._id
    })
  })
  res.render('index', { items: exerciseList });
});
router.post('/insert', async function (req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  }
  await Excercise.create(item)
  res.redirect("/")

});
router.post('/update', function (req, res, next) {
  var item = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  }


});
router.post('/delete', function (req, res, next) {
  var id = req.body.id
});

module.exports = router;
