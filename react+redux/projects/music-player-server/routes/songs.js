var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var songsCollection = req.db.get('songs');
    songsCollection.find()
        .then(docs => {
            res.status(200).json(docs);
        }).catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
