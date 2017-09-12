let express = require('express');

let router = express.Router();

let todoItems = [
    {id: 1, desc: 'foo'},
    {id: 2, desc: 'bar'},
    {id: 3, desc: 'baz'}
];

router.get('/', (req, res)=>{
    res.render('index', {
        title: 'My App',
        items: todoItems 
    });
});

router.post('/add', (req,res) =>{
    var newItem = req.body.newItem;
    console.log('------------------------------------');
    console.log(`"${newItem}" was added to the list`);
    console.log('------------------------------------');
    todoItems.push({
        id: todoItems.length+1,
        desc: newItem
    });
    res.redirect('/');
});

module.exports = router;