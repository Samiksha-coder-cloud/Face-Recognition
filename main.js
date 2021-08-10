Webcam.set ({
    height:350,
    width:400,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function take_snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("capturedImage").innerHTML="<img id='captured_Image' src='" + data_uri + "'>";
    });
}

console.log("ml5 Version: ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CONKQ0bCc/model.json",modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}