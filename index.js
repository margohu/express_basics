const express = require('express');
const app = express();
const path = require('path')

app.get('/', (reg, res)=> {
    //create html response
    res.send ('<a href="/contact">Contact us</a> <br> <a href="/about">About us</a>')
});

app.get('/contact', (reg, res)=> {
    //create html response
    res.send ('<h1>Contact us page</h1>')
});

app.get('/about', (reg, res)=> {
    //create html response
    res.send ('<h1>About us page</h1>')
});

//app.get('*', (reg, res)=> {
    //create html response
//    res.send ('404. This page does not exist. <a href="/">Go to home page</a>')
//});


//app.get('/demo', (reg, res)=> {
  //  res.render('index.ejs')
//});

//add public directory
app.use(express.static('public_html'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add views template engine
app.set('view engine', 'ejs');

app.get ('/questions', (reg, res) => {
    let questions = [
        {title:"What is node.js", user : "Kadi", votes: "10"},
        {title:"What is express.js", user : "Madli", votes: "8"},
        {title:"What color is love?", user : "Vadli", votes: "1"}
    ]
    res.render('index', {questions:questions})
})

app.get ('/user/:username', (reg, res)=>{
    let user = reg.params.username;
    res.render('index', {username: user});
});

app.listen (3000, ()=>{
    console.log('Server started on http://localhost:3000')
})