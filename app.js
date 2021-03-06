'use strict';

const express = require('express');
const exphbs  = require('express-handlebars');
const fs = require('fs');

const app = express();

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        math: mathHelper
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    fs.readFile('infos.json', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        var infos = JSON.parse(data);
        res.render('home', infos);
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/cv.pdf', function (req, res) {
    res.sendFile(__dirname + '/public/cv.pdf');
});

app.listen(8080, function () {
    console.log('express-handlebars example server listening on: 80');
});


function mathHelper(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        '+': lvalue + rvalue,
        '-': lvalue - rvalue,
        '*': lvalue * rvalue,
        '/': lvalue / rvalue,
        '%': lvalue % rvalue
    }[operator];
}
