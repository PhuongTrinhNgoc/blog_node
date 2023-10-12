const express = require('express');
const morgan = require('morgan');
const path = require('path');
var methodOverride = require('method-override')
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;
const route = require('./routes')
const db = require('./config/db')
db.conect()
// Http logger middleware
// app.use(morgan('combined'));

// Template engine setup
app.use(methodOverride('X-HTTP-Method-Override'))
app.engine('hbs', engine(
    { extname: '.hbs' , 
      helpers : {
        sum : (a,b) => a+ b
    }}
 
    ));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/resources/views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
route(app)
app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});