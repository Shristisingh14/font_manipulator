noseX=0;
noseY=0;
difference=0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(450, 400);
    canvas = createCanvas(650, 550);
    canvas.position(600, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftwristX);
        console.log("rightWristX = " + rightwristX);
        console.log("difference = " + difference);
    }
}

function draw() {
    background('#808080');
    document.getElementById("text_side").innerHTML = "Width and height of the text will be = " +difference +"px";
   var word = document.getElementById("word").value;
    textSize(difference);
 text(word, noseX, noseY);
 fill('#000000');

}