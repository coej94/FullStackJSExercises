var express = require('express');
var router = express.Router();
var {allJokes, getRandomJoke, addJoke} = require('../model/jokes');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/joke', (req, res, next) => {
  
  console.log('------------------------------------');
  console.log(getRandomJoke());
  console.log('------------------------------------');
  return res.json(getRandomJoke());
});

router.get('/jokes', (req, res, next) => {
  
  console.log('------------------------------------');
  console.log(allJokes);
  console.log('------------------------------------');
  return res.json(allJokes);
})
/* TO BE DONE TOMORROW
router.post('/addJoke', (req, res, next) => {
  addJoke()
})
*/
module.exports = router;
