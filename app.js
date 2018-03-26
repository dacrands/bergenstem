const express    = require("express"),
      app        = express(),
      ejs        = require("ejs"),
      mongoose   = require("mongoose"),
      bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
      
//MongoDB
mongoose.connect("mongodb://localhost:27017/project");

// ROUTES
const indexRoutes   = require("./routes/index"),
      projectRoutes = require("./routes/projects");


app.use("/", indexRoutes);
app.use("/projects", projectRoutes);


app.listen(8888, process.env.IP,  () => {
    console.log("app online");
});