var express = require('express');
var router = express.Router();

let users = {items: []}
router.post('/', function(req, res) {
  users.items.push(req.body);
  res.json(users);
});

module.exports = router;
