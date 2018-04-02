const express    = require('express'),
      app        = express(),
      ejs        = require('ejs'),
      mongoose   = require('mongoose'),
      seedDB     = require('./seed'),
      bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));
      
//MongoDB
mongoose.connect(process.env.DATABASEURL);
seedDB();

// ROUTES
const indexRoutes   = require('./routes/index');
const projectRoutes = require('./routes/projects');


app.use('/', indexRoutes);
app.use('/projects', projectRoutes);


app.listen(8888, process.env.IP,  () => {
    console.log('app online');
});