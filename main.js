function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(650, 200);

    video = createCapture(VIDEO);
    video.size(600, 600);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("lightblue");
}

function modelLoaded() {
    console.log("Posenet is Intiallized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}