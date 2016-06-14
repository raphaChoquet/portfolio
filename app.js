'use strict';

const express = require('express');
const exphbs  = require('express-handlebars');
const fs = require('fs');

const app = express();

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/images', express.static('public/images'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
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

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
