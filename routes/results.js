var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended:true}));

var boba = require('../boba.json');
var store = require('../stores.json');

console.log("does this work");

console.log(boba);
console.log(store);

console.log(boba.Boba[1].Name); //This is how to get the boba drinks
console.log(store.KungFu.MilkTea); //thius is how to get the store info
/* GET results page */
router.get('/', function(req, res, next) {
  console.log("Lets check if this works");
  res.render('results', { title: 'Boba Tí', boba: 'boba', store: 'store' });

});

router.post('/', function(req,res){
  console.log("Did we ever get into the post request");
  //console.log(req);
  console.log(req.body);
  var bobaData = req.body.bobaStuff;
  console.log(bobaData);

});

module.exports = router;

