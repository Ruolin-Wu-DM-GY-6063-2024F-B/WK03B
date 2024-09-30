let tileSize = 200; 
let redStripeWidth = 4;
let blackStripeWidth = 20;
let redMargin = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 190, 150);

  translate(width / 2, height / 2); 
  
  rotate(100);

  translate(-width / 2, -height / 2);

  for (let x = -400; x < width+800; x += 200) {
    for (let y = -400; y < height+800; y += 200) {
      drawPlaid(x, y);
    }
  }
}

function drawPlaid(x, y) {

  stroke(255, 0, 0, 100);
  strokeWeight(redStripeWidth);
  
  line(x + redMargin, y, x + redMargin, y + tileSize); 
  line(x + tileSize - redMargin, y, x + tileSize - redMargin, y + tileSize); 
  

  line(x, y + redMargin, x + tileSize, y + redMargin);
  line(x, y + tileSize - redMargin, x + tileSize, y + tileSize - redMargin); 


  noStroke();
  fill(0, 0, 0, 75); 
  
  rect(x + tileSize / 3 - blackStripeWidth / 2, y, blackStripeWidth, tileSize); 
  rect(x + tileSize / 2 - blackStripeWidth / 2, y, blackStripeWidth, tileSize); 
  rect(x + (2 * tileSize) / 3 - blackStripeWidth / 2, y, blackStripeWidth, tileSize); 
  

  rect(x, y + tileSize / 3 - blackStripeWidth / 2, tileSize, blackStripeWidth); 
  rect(x, y + tileSize / 2 - blackStripeWidth / 2, tileSize, blackStripeWidth); 
  rect(x, y + (2 * tileSize) / 3 - blackStripeWidth / 2, tileSize, blackStripeWidth); 
  
  
  fill(255);
  rect(x + tileSize / 2 - blackStripeWidth / 2, y + tileSize / 2 - blackStripeWidth / 2, blackStripeWidth, blackStripeWidth);
}

function draw() {
  textSize(128); 
  let bloodEmoji = "🩸"; 
  text(bloodEmoji, mouseX, mouseY);
}
