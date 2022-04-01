
noseX=0
noseY=0


function setup(){

    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on ('pose',got_Poses);
}

function modelLoaded(){

console.log('poseNet is initialized')



}

function preload(){

    clown_nose=loadImage("https://i.postimg.cc/tg8xdbNw/red-removebg-preview.png")
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}


function got_Poses(results)
{
if(results.length>0)

{
console.log(results);
console.log("nose x=" +results[0].pose.nose.x)
console.log("nose y=" +results[0].pose.nose.y)

noseX= results[0].pose.nose.x
noseY= results[0].pose.nose.y


}


}





function take_snapshot(){
save('clown_pic_ready .png')
}

function draw(){

image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);

image(clown_nose,noseX-10,noseY-72,25,25)
image(mustache,noseX-10,noseY-50,25,25)
//circle(noseX,noseY-70,20);




}



