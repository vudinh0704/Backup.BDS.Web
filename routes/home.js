const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    let head = {
        title: "Home page",
        description: "Home page description"
    };

    res.render('pages/home', { head: head });
});

module.exports = router;