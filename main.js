noseX= 0;
noseY= 0;
difference = 0;
rightWristX= 0;
leftWristX= 0;

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
background('#8072db');


fill ('#F90093');
stroke('#F90093');
text("Anusha", noseX, noseY);
}

document.getElementById('square_side').innerHTML = "Width and the Height of a text will be = " + difference + "px";

function modelLoaded() {
console.log('Jolly is adorable !!!!!!!!');
}

function gotPoses(results) 
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "noseY = " + noseY); 
 
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}
