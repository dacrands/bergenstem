const express   = require('express'),
      app       = express(),
      ejs       = require('ejs'),
      mongoose  = require('mongoose');

// ROUTES
const indexRoutes   = require('./routes/index'),
      projectRoutes = require('./routes/projects');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));



app.use("/", indexRoutes);
app.use("/projects", projectRoutes);


app.listen(8888, process.env.IP,  () => {
    console.log("app online");
});