const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

// import routes
const homeRoute = require('./routes/home');
const listRoute = require('./routes/list');
const detailRoute = require('./routes/detail');

// set the view engine to ejs
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRoute);
app.use('/list', listRoute);
app.use('/tin-dang', detailRoute);

// listening port
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    console.log(`App listening on port = ${server.address().port}`);
});

console.log(process.env.BDS_ENV);