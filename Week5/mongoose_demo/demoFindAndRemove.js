require('./connection');
var User = require('./models/user');
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });