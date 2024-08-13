var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/:firstName/:lastName', (req, res, next) => {
  res.render('hello', {
    firstName: req.params.firstName,
    lastName: req.params.lastName
  })
});

module.exports = router;
