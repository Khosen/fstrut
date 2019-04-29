//'use strict';

var express = require('express');
var router = express.Router();

//bring in niominee model



router.get('/', function(req, res){
 
 
     // console.log(docs + category);
      res.render('index'); 
  });
 
  
module.exports = router;
