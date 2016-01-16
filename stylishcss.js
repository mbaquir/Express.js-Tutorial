var express = require('express');
var styl = require('stylus');

var app = express()
	
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.use(styl.middleware(process.argv[3] || path.join(__dirname, 'public') ))


app.listen(process.argv[2])
