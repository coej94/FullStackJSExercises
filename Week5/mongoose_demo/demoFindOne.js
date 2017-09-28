require('./connection');
var User = require('./models/user')
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
    if (err) throw err;
  
    // object of the user
    console.log(user);
});