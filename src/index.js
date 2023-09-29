const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;
const route = require('./routes')

// Http logger middleware
// app.use(morgan('combined'));

// Template engine setup
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/resources/views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
route(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});