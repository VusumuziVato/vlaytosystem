const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv"); 
dotenv.config();
const passport = require("passport");
const {loginCheck} = require("./auth/passport");
loginCheck(passport);
const indexRouter = require('./routes/index')
const bookRouter = require('./routes/books')



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


mongoose.connect('mongodb+srv://henryvato:qY1Z9llr6vUwOqNf@cluster0.fteh3.mongodb.net/vlay');

const moviesSchema = {
    _id: String,
    role: String,
    name: String,
    email:String,
}

const Users = mongoose.model('Users', moviesSchema);

app.get('/', (req, res) => {
  List.find({}, function(err, users) {
        res.render('artist', {
            userList: users
        })
    })
})




//Routes
app.use('/', require('./routes/login'));

app.use('/', require('./routes/upload')); 

app.use('/', indexRouter)
app.use('/books', bookRouter) 
app.listen(process.env.PORT || 4000)  
 
 