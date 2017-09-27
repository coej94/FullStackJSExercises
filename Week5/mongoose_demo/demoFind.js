require("./connection");
User = require("./models/user");

User.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    console.log(users);
  });