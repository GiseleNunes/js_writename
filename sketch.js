function setup() {
  createCanvas(800, 400);
  background("yellow");
}

function draw() {
  fill("red");
  stroke("blue");

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
