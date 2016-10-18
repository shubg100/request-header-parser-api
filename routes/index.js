var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
    res.header("Content-type: text/html; charset=utf-8");
    next();
});

router.get('/api/whoami/', function(req, res) {
    // req.socket.remoteAddress ||req.connection.socket.remoteAddress;
    var obj = {
        'ipaddress': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        'language': req.headers["accept-language"].split(',')[0],
        'software': req.headers['user-agent'].split(' (')[1].split(') ')[0]
    };
    res.json(obj); 
});

module.exports = router;
