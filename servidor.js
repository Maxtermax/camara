var express =require('express')
var app=express();

var fs=require('fs');

	app.get('/',function(req,res)
{
	fs.readFile(__dirname + '/frontend de camara/index.html', 'utf8', function(err, text)
		{ ﻿ 
			res.send(text);
		 });

});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});



console.log("express esta listo");
app.listen(8888);

