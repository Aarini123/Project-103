Webcam.set({
    width:350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera1");
Webcam.attach('#camera1');

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML='<img id="photo" src="'+ data_uri + '">';
    });
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WZqLlugHT/model.json',modelLoaded);
function modelLoaded(){
    console.log("model");
}