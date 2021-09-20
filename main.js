
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
   });
   camera=document.getElementById("camera");
   Webcam.attach(camera);


   camera=document.getElementById("camera");
   Webcam.attach(camera);

   function take_snapshot(){
       Webcam.snap(function(data_uri){
           document.getElementById("picture").innerHTML ='<img id="captured_image" src="'+data_uri+'">';
       });
   }
   console.log("ml5 version:", ml5.version);

   classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yyaDVmpSq/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model has been loaded");
}
