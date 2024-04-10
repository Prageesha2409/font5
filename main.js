function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
      
    canvas=createCanvas(550,150);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modalLoaded() {
    console.log('PoseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
       leftWristX=results[0].pose.leftWrist.X;
       rightWristX=results[0].pose.rightWrist.X;
       difference=floor( leftWristX-rightWristX);
    }

}
function draw() {
background(doodle.jfif);

textSize(difference);
fill('FFE787');
text('Prageesha',50,400);
}