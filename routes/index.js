const express = require('express'),
      router  = express.Router(),
      passport = require('passport'),
      User = require('../models/user');

router.get('/', (req, res) =>{
    res.render("index");
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/3sp', (req, res) => {
    res.render('3sp');
});



// =========
// REGISTER
// =========

// router.get('/register', (req, res) => {
//     res.render('register');
// });


// router.post('/register', (req, res) => {
//     const newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, (err, user) => {
//         if (err) {
//             console.log(err);
//             return res.render("/");
//         }
//         passport.authenticate('local')(req, res, ()=> {
//             res.redirect('/projects');
//         })
//     });
// });


// =========
// LOGIN
// =========
router.get('/login', (req, res) => {
    res.render('login');
});


router.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/projects',
        failureRedirect: '/login'
    }), 
    (req, res) => {        
});

// =========
// LOGOUT
// =========
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
 

module.exports = router;