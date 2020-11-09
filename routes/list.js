const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    let head = {
        title: "List page",
        description: "List page description"
    };

    res.render('pages/list', { head: head });
});

module.exports = router;