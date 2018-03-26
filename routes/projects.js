const express = require('express'),
      router  = express.Router(),
      Project = require("../models/projects");

router.get("/", (req, res) =>{
    res.render('projects/index');
});

router.post("/", (req, res) => {
    let projectName = req.body.projectName,
          image = req.body.image,
          desc = req.body.desc,
          newProject = {
                projectName:  projectName,
                image: image,
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