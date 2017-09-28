require('./connection')
var User = require('./models/user');
// get a user with ID of 1
User.findById('59cbe188e693e506b7a39125', (err, user) => {
    if (err) throw err;
  
    // change the users location
    user.location = 'dk';
    user.username = 'CurryWurst'
    // save the user
    user.save(function(err) {
      if (err) throw err;
  
      console.log('User successfully updated!');
    });
  
  });