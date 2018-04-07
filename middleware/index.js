const Project = require('../models/projects');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    },

    getProject: (req, res, next) => {
        Project.findById(req.params.id, (err, foundProject) => {
            if (err || !foundProject) {
                console.log(err);
                res.redirect('/projects');
            }
            req.project = foundProject;
            next();
        })
    }
}

