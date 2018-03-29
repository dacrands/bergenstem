const express = require('express'),
      router  = express.Router(),
      Project = require('../models/projects');

router.get("/", (req, res) =>{
    Project.find({}, function(err, allProjects) {
        if (err) {
            console.log(err);
        } else {
            console.log(allProjects);
            res.render('projects/index', {projects: allProjects});
        }
    });
});

router.post("/", (req, res) => {
    let name = req.body.name,
          image = req.body.image,
          desc = req.body.desc,
          newProject = {
                name:  name,
                img: image,
                desc: desc
            };

    Project.create(newProject, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/projects");
        }
    });
});

router.get("/new", (req, res) =>{
    res.render('projects/new');
});


module.exports = router;