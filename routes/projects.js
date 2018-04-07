const express = require('express'),
      router  = express.Router(),
      middleware = require('../middleware'),
      {isLoggedIn, getProject} = middleware;
      Project = require('../models/projects');

router.get('/', (req, res) =>{
    if(req.user) {
        console.log('SUCESSS');
    }
    Project.find({}, (err, allProjects) =>{
        if (err) {
            console.log(err);
        } else {
            res.render('projects/index', {projects: allProjects, currentUser:req.user});
        }
    });
});

router.post('/', (req, res) => {
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
            res.redirect('/projects');
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
            res.render('projects/show', {project: foundProject});
        }
    });
});

//EDIT
router.get('/:id/edit', isLoggedIn, getProject, (req,res) => {
    res.render('projects/edit', {project: req.project});
});


module.exports = router;