let capture; //this is the video camera
let capimg;

//emoji array 
let emoji = ["😊", "😛", "🙄", "😕", "🤫", "😘", "🤔", "😉"];
let startemoji = 0;
//background colors array 
let bgColor = ["#FE0879", "#FF82E2", "#FED715", "#0037B3", "#70BAFF"]
let startcolor = 0;

//add sound to the project
let mySong;
function preload(){
  mySong = loadSound("./Assets/sound/Sound.mp3");
}

function setup() {
  createCanvas(2480, 3508);
  pixelDensity(1);
  capture = createCapture(VIDEO); // this opens the digitizer
  capture.size(600, 600);
  capture.hide();
}

function draw() {
  background(bgColor[startcolor]);

 //write the title of the poster 
  push();
  let myText = "POSTER";
 textFont("Bungee");
 textAlign(CENTER);
 textStyle(NORMAL);
 textSize(180*2);
 fill(300);
 text(myText, width/2,350*2);
  pop();
  push();
  
  let myText2 = "Create                  your                     own";
 textFont("Bungee");
 textAlign(CENTER);
 textStyle(NORMAL);
 textSize(40*2);
 fill(300);
 text(myText2, width/2,200*2);
  pop();

  push();
  
  let myText3 = "imitating                                      emoji";
 textFont("Bungee");
 textAlign(CENTER);
 textStyle(NORMAL);
 textSize(40*2);
 fill(300);
 text(myText3, width/2,400*2);
  pop();

// write the instructions for using it
  push();
  let myText4 = "Click to change the emoji and background color";
 textFont("Bungee");
 textStyle(NORMAL);
 textSize(35);
 fill(300);
 text(myText4,200,3250);
  pop();
  push();
  
  let myText5 = "Move the mouse on the x and y to change the webcam filter";
 textFont("Bungee");
 textStyle(NORMAL);
 textSize(35);
 fill(300);
 text(myText5,200,3300);
  pop();  
  
  push();
  let myText6 = "press s to save your poster";
 textFont("Bungee");
 textStyle(NORMAL);
 textSize(35);
 fill(300);
 text(myText6,200,3350);
  pop(); 
  push();
  let x = random(emoji);
  textAlign(CENTER);
  textSize(500);
  text(emoji[startemoji], width/2, 1450);
  pop();
  
//draw a rectangle with white stroke around the camera 
  push();
  noFill();
  stroke(400)
  strokeWeight(30);
  rectMode(CENTER);
  rect(width/2, 2400,1200,1200);
  pop();

//set the camera and create the filter related to the mouse position
capimg = capture.get(); // copying the video

if(capimg.width > 0) {
  capimg.loadPixels(); // getting pixel array
  
  for(let i = 0; i < capimg.pixels.length; i += 4)
  {	
    let r = capimg.pixels[i+0];
    let g = capimg.pixels[i+1];
    let b = capimg.pixels[i+2];
    
    capimg.pixels[i+0] = mouseX;
    capimg.pixels[i+1] = g;
    capimg.pixels[i+2] = mouseY;
  }
  capimg.updatePixels();

  if (capture.loadedmetadata) {
    translate((width/2)+600, 1800);
    scale(-2, 2);
    image(capimg, 0, 0, 600, 600); 
  }
}
}

//mouse click allows change of emoji and background color
function mousePressed() {
  startemoji = startemoji + 1;

  if (startemoji == 6) {
	startemoji = 0;
  }
  startcolor = startcolor + 1;

  if (startcolor == 5) {
	startcolor = 0;
  }
}

//save the poster when "s" is typed
  function keyTyped(){
	if (key === "s" || key === "S") {
		save("Texture.png");
	}
}

//if I click the mouse the music starts and continues on a loop 
function mouseClicked(){
  if (!mySong.isPlaying()){
    mySong.play();
    mySong.loop();
  } 
  
}