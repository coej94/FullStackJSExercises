const express = require('express')
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express()



app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});