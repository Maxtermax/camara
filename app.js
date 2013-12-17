var express=require('express');
var app=express();


app.get('/',function(req,res)
{
	
	res.sendfile(__dirname+"/frontend de camara/indexCamara.html");

});



app.listen(1111);
console.log("listen on 1111")