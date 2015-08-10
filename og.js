var express = require('express');
var og = require('open-graph');
var apicache = require('apicache').options({ debug: true }).middleware;

var allowCrossDomain = function(req, res, next) {
    //res.header('Access-Control-Allow-Origin', 'buddycloud.org');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

var app = express();
app.use(allowCrossDomain);


//var url = "http://github.com/samholmes/node-open-graph/raw/master/test.html";

app.get('/',apicache('10 days'), function (req, res) {
og(req.query.url, function(err, meta){
    if(err){
        res.send(err);
    }else{
        res.json(meta);
        res.end();
    }
})

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});




/*
og(url, function(err, meta){
    console.log(meta);
})
*/
