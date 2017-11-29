const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const register = require("./facade/FriendFacade");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})

app.get('/', function (req, res) {
  res.send('Friend Finder Demo!')
})

app.post('/api/friends/register/:distance', (req, res, next) => {
  register(req.body.userName, req.body.loc.coordinates, req.params.distance, (err, docs) => {
    if (err) {
      return console.log("ERROR", err)
    }
    res.send(docs);
  });
});