const express = require('express');

const router = express.Router();

router.get('/:classifiedId', function (req, res) {
    let head = {
        title: "Detail page",
        description: "Detail page description"
    };

    res.render('pages/detail', { head: head, classifiedId: req.params.classifiedId });
});

module.exports = router;