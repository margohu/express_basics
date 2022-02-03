const express = require('express')
const app = express();

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

app.get('*', (reg, res)=> {
    //create html response
    res.send ('404. This page does not exist. <a href="/">Go to home page</a>')
});

app.listen( 3000, ()=> {
    console.log('Server started on http://localhost/3000');
})