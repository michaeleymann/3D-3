
let boxSize;
let boxes = [];
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke()
  strokeWeight(3);
  ortho();

  speed = 0.01;

  let boxSize = 100

  let c1 = "#3a86ff"
  let c2 = "#ff006e"
  let c3 = "#8338ec"
  let c4 = "#FB5607"

  boxes = [
    { num: 1, x: 0, z: 200, c: c1, s: boxSize },
    { num: 2, x: 0, z: -200, c: c2, s: boxSize },
    { num: 3, x: 200, z: 0, c: c3, s: boxSize },
    { num: 4, x: -200, z: 0, c: c4, s: boxSize },
  ]
}

function draw(){
  background("#FFFAEB");
  ambientLight(150,150,150)
  pointLight(255,255,255,0,-300,0)

  camera(0,-50,-260,0,0,0,0,1,0)
  
  rotateY(frameCount * speed)
  
  for ( b of boxes ) {
    push();
    fill(b.c)
    translate(b.x, 0, b.z )
    box(b.s)

    pop();
  }
  
  if ( (frameCount * speed) % PI < 0.01 ){
    let memory = boxes[0].c
    boxes[0].c = boxes[1].c
    boxes[1].c = memory

  }

  if ( 
    (frameCount * speed) % ( 0.5 * PI ) < 0.01 && 
    (frameCount * speed) % PI > 0.01 
    ) {
    memory = boxes[2].c
    boxes[2].c = boxes[3].c
    boxes[3].c = memory
  }
  
}

