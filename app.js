const express       = require('express'),
      app           = express(),
      ejs           = require('ejs'),
      mongoose      = require('mongoose'),
      seedDB        = require('./seed'),
      bodyParser    = require('body-parser'),
      passport      = require('passport'),
      localStrategy = require('passport-local'),
      User          = require('./models/user');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

// PASSPORT
app.use(require('express-session')({
    secret: "Time is fun",
    resave: false,
    saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
      
// MONGODB
mongoose.connect("mongodb://localhost:27017/projects");
// seedDB();

// ROUTES
const indexRoutes   = require('./routes/index');
const projectRoutes = require('./routes/projects');


app.use('/', indexRoutes);
app.use('/projects', projectRoutes);


app.listen(8888, process.env.IP,  () => {
    console.log('app online');
});