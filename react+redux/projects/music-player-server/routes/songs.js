var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    var songsCollection = req.db.get('songs');
    songsCollection.find()
        .then(docs => {
            res.status(200).json(docs);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.post('/addToPlaylist', function (req, res) {

    var songId = req.body.id;
    var playlistsIds = req.body.playlists

    let song = null;

    var songsCollection = req.db.get('songs');
    var playlistCollection = req.db.get('playlists');

    Promise.all([songsCollection.findOneAndUpdate(
            {_id: songId },
            { $push: { playlists: { $each: playlistsIds } } }),
        playlistCollection.find(
            { _id: { $in: playlistsIds }})])
        .then(r => {
            song = r[0];
            return Promise.all(r[1].map(c => playlistCollection.findOneAndUpdate({_id: c._id }, { $push: { songs: songId } })))
        })
        .then(pl => {
            const data = {
                beat: song,
                playlists: pl
            }
            res.status(200).json(data)
        })
        .catch(err => res.status(400).json(err));
});


router.get('/edit/:id/', function (req, res) {
    var songId = req.params.id;

    const data = req.body;

    var songsCollection = req.db.get('songs');

    songsCollection.findOneAndUpdate({_id: songId }, { $set: data })
        .then(r => res.status(200).json(r))
        .catch(err => res.status(400).json(err));
});

router.get('/:id/playlists', function (req, res) {
    const songId = req.params.id;

    var songCollection = req.db.get('songs');
    var playlistCollection = req.db.get('playlists');

    songCollection.find({ _id: songId})
        .then(docs => {
            return playlistCollection.find({ _id: { $in: docs[0].playlists }})
        })
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => res.status(400).json(err));
});

//
// router.get('/:id/playlists', function (req, res) {
//     var playlistId = req.params.id;
//
//     var playlistCollection = req.db.get('playlists');
//     var songsCollection = req.db.get('songs');
//
//     songsCollection.find({ _id: playlistId })
//         .then(docs => playlistCollection.find({_id: { $in: docs[0].playlists }}))
//         .then(r => res.status(200).json(r))
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;
