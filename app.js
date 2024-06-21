const express = require('express');
const app = express();
const port = 8080;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/login', (req, res) => {
    const name = req.query.name;
    if(name){
        res.cookie('name', name, { maxAge: 900000, httpOnly: true});
        res.send(`Cookie set for ${name}`);
    }
})

app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Welcome ${name}!`);
    } else {
        res.send('Hello... you');
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})