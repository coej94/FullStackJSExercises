const express = require('express');
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended: false}));
let msg = `Try the calculator! just add "/api/calculator/operator/param1/param2" to the url. you can use "add", "sub", "div" and "mul" as operator`;
app.get('/', function (req, res) {
    res.send(msg);    
})
app.use("/api/calculator/*", function (req, res, next) {
    let result;
    let arr = req.params[0].split('/');
    if (arr !== 3) next();
    var calcReq = {
      operation: arr[0],
      n1: Number(arr[1]),
      n2: Number(arr[2])
    }
    console.log(calcReq);
    if (calcReq.operation == 'add') {
      result = `${calcReq.n1} + ${calcReq.n2} = ${calcReq.n1 + calcReq.n2}`;
    } else if(calcReq.operation == 'sub'){
        result = `${calcReq.n1} - ${calcReq.n2} = ${calcReq.n1 - calcReq.n2}`;
    } else if(calcReq.operation == 'mul'){
        result = `${calcReq.n1} * ${calcReq.n2} = ${calcReq.n1 * calcReq.n2}`;
    } else if(calcReq.operation == 'div'){
        result = `${calcReq.n1} / ${calcReq.n2} = ${calcReq.n1 / calcReq.n2}`;
    } else {
        result = `Sorry.. but that is not an option 😂 `;
    }
    res.send(result);
  });
app.listen(3000, ()=>{
    console.log('Server started at http://localhost:3000');
});