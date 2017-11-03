const express = require('express')
const expressGraphQL = require('express-graphql');
const scema = require('./schema/schema')

const app = express()



app.get('/graphiql',  {
    schema,
    graphiql: true
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});