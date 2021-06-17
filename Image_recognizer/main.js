Webcam.set({
    height:300,width:350, image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(date_uri){
document.getElementById("result").innerHTML='<img id="captured_image"src="'+date_uri+'"/>';
});
}
console.log('ml5version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SoarKVO8q/',modelloaded);
function modelloaded(){
    console.log('modelloaded')
}