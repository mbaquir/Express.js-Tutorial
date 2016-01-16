var express = require('express');
var bodyparser = require('body-parser')

var app = express()

var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.post('/form',urlencodedParser, function(req, res){

	//app.use(bodyparser.urlencoded({extended: false}));

	 // console.log(a);
 	//console.log(req)
	 res.end(req.body.str.split('').reverse().join(''));


})

app.listen(process.argv[2])


//    req.body.str.split('').reverse().join('')
