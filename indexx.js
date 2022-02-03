const express = require('express')
const app = express()

app.get('/demo'), (reg: , res: )=> {
    res.render ('index.ejs')
});

app.listen (3000, ()=>) {
    console.log('Server started on http://localhost:3000')
})