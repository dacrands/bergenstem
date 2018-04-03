const express = require('express'),
      router  = express.Router(),
      Project = require('../models/projects');

router.get("/", (req, res) =>{
    Project.find({}, (err, allProjects) =>{
        if (err) {
            console.log(err);
        } else {
            res.render('projects/index', {projects: allProjects});
        }
    });
});

router.post("/", (req, res) => {
    let name = req.body.name,
        image = req.body.image,
        desc = req.body.desc,
        team = req.body.team,
        advisor = req.body.advisor
        newProject = {
            name:  name,
            img: image,
            desc: desc,
            team: team,
            advisor: advisor
        };

    Project.create(newProject, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/projects");
        }
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('projects/new');
});

//SHOW
router.get('/:id', (req, res) => {
    Project.findById(req.params.id, function(err, foundProject){
        if (err) {
            console.log("Whoops");
        } else {
            res.render("projects/show", {project: foundProject});
        }
    });
});


module.exports = router;