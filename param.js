var express = require('express');
var crypto = require('crypto');
var app = express()

/*
app.param('id', function (req, res, next, id) {
  req.id = id
  console.log(req.id)
  next()
})	

app.get('/message/:id', function(req, res, next){ 

	res.end(crypto.createHash('sha1')
      .update(new Date().toDateString() + req.id)
      .digest('hex'))

	next()

})*/

app.put("/message/:id", function(req, res) {
    var id = req.params.id;
    var date = crypto.createHash("sha1").update(new Date().toDateString() + id).digest("hex");
    res.end(date);
});


app.listen(process.argv[2])