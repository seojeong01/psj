var wave;
var playing = false;
var button;
let r,g,b;

function setup() {
  createCanvas(720, 720);
  r = random(50, 255);
  g = random(0, 200);
  b = random(50,255);

  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.start();
  wave.freq(440);
  wave.amp(0.1);
  
  button = createButton('play/pause');
  button.mousePressed(toggle);
}
function draw() {
  background(r,g,b);
  //console.log('draw')
  Text(accelerationX, accelerationY, accelerationZ,10,10);
}
function toggle() {
  if(!playing){
    wave.start();
    wave.amp(0.5,1);
    playing=true;
  } else {
    wave.amp(0,1);
    playing = false;
  }
  r = map(accelerationX, -90, 90, 100, 175);
  g = map(accelerationY, -90, 90, 100, 200);
  b = map(accelerationZ, -90, 90, 100, 200);

}