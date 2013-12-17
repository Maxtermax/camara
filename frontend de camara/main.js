$(document).on('ready',function()
{
	
	alert("prueba");

		    $("video").hide();
 
   var color="#B4B999";

   var cero=0;
   var uno=1;

   var canvas=document.getElementById('canvasvideo');
   var ctx=canvas.getContext('2d');
var alto=canvasvideo.width
var ancho=canvasvideo.height

   var video=document.querySelector('video');

            window.URL = window.URL || window.webkitURL;
            
            navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
            
            navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                      navigator.mozGetUserMedia || navigator.msGetUserMedia;
            //termina prefijos para google chorme y mozilla


if (navigator.getUserMedia) 
{
        navigator.getUserMedia({video: true, audio: false}, exito, error);
}
else
{


}




function exito(stream)
{

video.src = window.URL.createObjectURL(stream);
setInterval(function()
{

ctx.drawImage(video,0,0,ancho,alto);
    





  var imgData=ctx.getImageData(0,0,ancho,alto);



 for (var i=0;i<imgData.data.length;i+=4)
    {   
 var hsl = rgb2hsl(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]);
    var h = hsl[0], s = hsl[1], l = hsl[2];

    // ... and check if we have a somewhat green pixel.
    if (h >= 90 && h <= 160 && s >= 25 && s <= 90 && l >= 20 && l <= 75) {
      imgData.data[i + 3] = 0;
 
        $("span").text(imgData.data.length);
        $("span").css({'left':imgData.data.length/imgData.data.length});

      }
    }

  ctx.putImageData(imgData,0,0);

},1000/24);


 function rgb2hsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;

    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h, s, l;

    if (max == min) {
      h = 0;
    } else if (r == max) {
      h = (g - b) / delta;
    } else if (g == max) {
      h = 2 + (b - r) / delta;
    } else if (b == max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    l = (min + max) / 2;

    if (max == min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
  }




$("#canvasvideo").draggable()//jquery ui


$("#canvasvideo").click(function()
    {
        uno++
        cero++
        if(uno >= cero)
        {

        $(this).css({
            'width':ancho*1.5,
            'height':alto*1.5,
        '-webkit-transition':'all 0.25s',
                });
        uno--
        }
        else
        {
             $(this).css({
            'width':ancho,
            'height':alto,
        '-webkit-transition':'all 0.25s',
                });


            uno++
        }

    });//wide

}//termina exito




function error()
{
    alert("error tu navegador no soporta video prueba con otro");
}

});