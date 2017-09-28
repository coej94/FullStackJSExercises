require('./connection');
var User = require('./models/user');

// get a user with ID of 1
User.findById('59cbe188e693e506b7a39125', function(err, user) {
    if (err) throw err;
  
    // show the one user
    console.log(user);
  });