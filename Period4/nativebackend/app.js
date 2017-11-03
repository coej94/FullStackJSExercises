const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/movies', function (req, res) {
    const result = [
        { 
            title: 'The Basics - Networking',
            description: 'This is just a test.'
       },
       {
           title: 'hej',
           description: 'med dig'
       }
    ]
    
    res.json(result);
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})