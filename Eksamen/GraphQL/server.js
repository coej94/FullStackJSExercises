const Express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = Express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))
app.listen(4000, () => {
    console.log('Express is working!');
});
 