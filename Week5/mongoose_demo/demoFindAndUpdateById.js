require('./connection') 
var User = require('./models/user');

// find the user with id 59cbe188e693e506b7a39125
// update username to LordOfTheDrinks
User.findByIdAndUpdate('59cbe188e693e506b7a39125', { username: 'LordOfTheDrinks' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
});
