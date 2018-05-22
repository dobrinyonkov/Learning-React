var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var dbColl = req.db.get('test');
  dbColl.find({ _id: '5b044e42fb6fc06ed0745a41'}, {}, function (err, docs) {
    if (!err) {
      res.status(200).json({
        data: docs
      });
    } else {
      console.log(err);
    }

  })
});

module.exports = router;
