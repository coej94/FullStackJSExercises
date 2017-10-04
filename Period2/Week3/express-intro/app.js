let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');
let todo = require('todos');

let app = express();
//config:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyparser());
app.use(todo);

//Start the server:
app.listen(8080, () => {
    console.log('------------------------------------');
    console.log('Now listening to http://localhost:8080');
    console.log('------------------------------------');
});