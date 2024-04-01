mega = "j.mp3";
music2="music2.mp3"
function preload(){
    song = loadSound("music2.mp3");
    song = loadSound("j.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
draw(VIDEO);
}