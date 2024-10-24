function setup() {
  createCanvas(windowWidth, windowHeight); //il canvas occupa tutto lo schermo
  noLoop();
  noStroke();
}

function draw() {
  background(255); //bianco


  let rectWidth = 40; // spessore dei rettangolini rossi
  let rectHeight = 120; // altezza base dei rettangoli 
  let spacingX = 5;
  let minSpacingY = -30; // dstanza verticale minima 
  let minSpacingX = 30; //distanza verticale massima

  let cols = Math.floor(width / (rectWidth + spacingX));
  let rows = Math.floor(height / rectHeight);

  

  fill (253, 120, 145,180);

  for (let i = 0; i < cols; i++) {
    let y = 0; //inizia dalla parte superiore di ogni colonna
    for (let j = 0; j < rows; j++) {
      let x = i * (rectWidth + spacingX);


      let variation = random(minSpacingY, minSpacingX);
      y += variation;
      let adjustedHeight = rectHeight + random(-10,15); 

      rect ( x, y, rectWidth, adjustedHeight);

      y += adjustedHeight;

    }
  }
}
