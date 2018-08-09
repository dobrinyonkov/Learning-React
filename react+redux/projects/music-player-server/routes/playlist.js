var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var songsCollection = req.db.get('playlists');
    songsCollection.find()
        .then(docs => {
            res.status(200).json(docs);
        }).catch(err => {
        res.status(400).json(err);
    });
});

router.post('/', function (req, res, next) {

    var name = req.body.name;
    let playlist = {
        name,
        songs: []
    };

    var songsCollection = req.db.get('playlists');

    songsCollection.find({ name: name }, {})
        .then(r => {
            if (r.length > 0) {
                res.status(200).json({
                    data: 'Playlist with that name already exists'
                })
            }   else {
                songsCollection.insert(playlist).then(r => {
                    res.status(200).json({
                        data: r
                    })
                });
            }
        })
        .catch(err => {
            res.json({
                data: 'Error occurred'
        })
    });
});

module.exports = router;
