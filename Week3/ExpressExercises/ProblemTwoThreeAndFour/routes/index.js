var express = require('express');
var router = express.Router();
var {allJokes, getRandomJoke, addJoke} = require('../model/jokes');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {'username': req.session.userName});
});

router.get('/joke', (req, res, next) => {
  
  console.log('------------------------------------');
  console.log(getRandomJoke());
  console.log('------------------------------------');
  req.session.jokeCount++;
  console.log(`JokeCount: ${req.session.jokeCount}`);
  return res.render('joke', {'rndJoke': getRandomJoke()});
});

router.get('/jokes', (req, res, next) => {
  
  console.log('------------------------------------');
  console.log(allJokes);
  console.log('------------------------------------');
  req.session.jokesCount++;
  console.log(`JokesCount: ${req.session.jokesCount}`);
  return res.render('allJokes', {'ajokes': allJokes});
})

router.get('/addJoke', (req, res, next) => {
  req.session.storeJokeCount++;
  console.log(`storeJokeCount: ${req.session.storeJokeCount}`);
  res.render("addjoke");
})

router.post('/storeJoke', (req, res, next) => {
  let joke = req.body.storeJoke;
  addJoke(joke);
  req.session.storeJokeCount++;
  console.log(`JokeCount: ${req.session.jokeCount}`);
  res.redirect('/addJoke');
  next();
})

router.get('/login',(req, res, next) => {
  res.render('login');
});

module.exports = router;