var express = require('express');

var app = express()






app.get('/home', function(req, res) {

	//app.set('views', path.join(__dirname, 'templates'))
	
	app.set('views', process.argv[3]);

	app.set('view engine', 'jade');
    
    res.render('index', {date: new Date().toDateString()});

    
}) 


app.listen(process.argv[2])
