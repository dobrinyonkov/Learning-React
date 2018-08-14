var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var songsCollection = req.db.get('playlists');

    songsCollection.find()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.status(400).json(err));
});

router.get('/:id/songs', function (req, res, next) {
    var playlistId = req.params.id;

    var playlistCollection = req.db.get('playlists');
    var songsCollection = req.db.get('songs');

    playlistCollection.find({ _id: playlistId })
        .then(docs => songsCollection.find({_id: { $in: docs[0].songs }}))
        .then(r => res.status(200).json(r))
        .catch(err => res.status(400).json(err));
});

router.post('/', function (req, res, next) {
    var name = req.body.name;

    let playlist = {
        text: name,
        color: '',
        name,
        songs: []
    };

    var playlistsCollection = req.db.get('playlists');

    playlistsCollection.find({ name: name }, {})
        .then(r => {
            if (r.length > 0) {
                res.status(200).json({
                    data: 'Playlist with that name already exists'
                })
            } else {
                playlistsCollection.insert(playlist).then(r => {
                    res.status(200).json({
                        data: r
                    })
                });
            }
        })
        .catch(err => res.json({data: 'Error occurred'}));
});

module.exports = router;
