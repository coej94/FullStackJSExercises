require('./connection');
var User = require('./models/user');
// create a new user
var newUser = User({
    name: 'Peter Quill',
    username: 'starlord55',
    password: 'password',
    admin: true
  });
  
  // save the user
  newUser.save(function(err) {
    if (err) throw err;
  
    console.log('User created!');
  });