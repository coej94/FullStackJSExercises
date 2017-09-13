const express = require('express');
const app = express();

app.use(function (req, res, next){
    const date = new Date();
    console.log(`log: ${date.toISOString()}`);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    req.dateInfo = `${day}/${month} - ${year} 👾`;
    next();
});

app.get('/', function(req, res){
  res.send('Hello Christian! ' + req.dateInfo);
});

app.get('/numbers', function(req, res){
    res.json([1,2,3,4,5,6,7,8,9])
});

app.get('/emoji', function(req, res){
    res.send('😎')
});

app.listen(3000, ()=>{
    console.log('------------------------------------');
    console.log('Listening on port http://localhost:3000');
    console.log('------------------------------------');
});