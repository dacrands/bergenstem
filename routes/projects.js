const express = require('express'),
      router  = express.Router();

router.get("/", (req, res) =>{
    res.render('projects/index');
});


module.exports = router;