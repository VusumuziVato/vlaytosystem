const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv"); 
dotenv.config();
const passport = require("passport");
const {loginCheck} = require("./auth/passport");
loginCheck(passport);

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('e don connect'))
.catch(err => console.log(err));


app.set('view engine', 'ejs');  
//BodyParsing 
app.use(express.urlencoded({extended: false}));

app.use(session({ 
  secret:'oneboy',
  saveUninitialized: true, 
  resave: true
}));
app.use(passport.initialize());  
app.use(passport.session());

//Routes
app.use('/', require('./routes/login'));



app.listen(process.env.PORT || 4000) 
 
