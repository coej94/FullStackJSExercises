require('./connection');
var User = require('./models/user');
User.find({ username: 'starlord55' }, function(err, user) {
    if (err) throw err;
  
    // delete him
    user.remove(function(err) {
      if (err) throw err;
  
      console.log('User successfully deleted!');
    });
  });