const express = require('express'),
      router  = express.Router();


router.get('*', (req, res) => {
    res.status(404).send('You got lost!');    
});


module.exports = router;