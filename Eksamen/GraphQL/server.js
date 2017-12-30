const Express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = Express();

// Here we start the server with our schema.
// graphiql is set to true, so we can acces the graphical editor in our browser
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Express is working!');
});
 