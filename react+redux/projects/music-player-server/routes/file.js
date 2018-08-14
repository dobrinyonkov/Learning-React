const Busboy = require('busboy');
var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');

const BUCKET_NAME = 'personal-music-player';
const IAM_USER_KEY = 'AKIAJYEGF3LZGCTYJRRQ';
const IAM_USER_SECRET = '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';

function uploadToS3(file, res, req) {
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
    });
    s3bucket.createBucket(function () {
        var params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            ACL: 'public-read',
            Body: file.data,
            ContentType: 'audio/mp3'
        };
        s3bucket.upload(params, function (err, data) {
            console.log(data);
            data.playlists = [];
            if (err) {
                console.log('error in callback');
                console.log(err);
            }
            console.log('success');
            var songsCollection = req.db.get('songs');
            songsCollection.insert({ data })
                .then(docs => {
                    console.log(docs);
                    res.status(200).json(docs);
                }).catch(err => {
                    res.status(400).json(err);
                });
        });
    });
}

router.post('/api/upload', /* upload.any(),*/ function (req, res, next) {
    // This grabs the additional parameters so in this case passing     
    // in "element1" with a value.
    const element1 = req.body.element1;
    var busboy = new Busboy({ headers: req.headers });
    // The file upload has completed
    busboy.on('finish', function () {
        console.log('Upload finished');
        // Your files are stored in req.files. In this case,
        // you only have one and it's req.files.element2:
        // This returns:
        // {
        //    element2: {
        //      data: ...contents of the file...,
        //      name: 'Example.jpg',
        //      encoding: '7bit',
        //      mimetype: 'image/png',
        //      truncated: false,
        //      size: 959480
        //    }
        // }
        // Grabs your file object from the request.
        const file = req.files.element2;
        // Begins the upload to the AWS S3
        uploadToS3(file, res, req);
    });
    req.pipe(busboy);
});

module.exports = router;
