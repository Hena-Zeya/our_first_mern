const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
// User.find() is a mongoose method that gives a list of all users in the MongoDB Atlas DB.
  User.find()
    // Then we are going to return users in a json format
    .then(users => res.json(users))
    // Catch any errors
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

// newUser is saved to the MongoDB atlas DB
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;