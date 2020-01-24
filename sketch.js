function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  translate(window.innerWidth / 2, window.innerHeight / 2);
  rotate(-90);

  let mh = month();
  let dy = day();
  let hr = hour();
  let mn = minute();
  let sc = second();
  let hourColour = color(143, 52, 235);
  let minuteColour = color(52, 235, 52);
  let secondColour = color(235, 52, 52);

  if (window.innerHeight <= window.innerWidth) {
    var d = window.innerHeight;
  } else {
    var d = window.innerWidth;
  }

  noFill();
  strokeWeight(d / 250);
  stroke(secondColour);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, d / 1.32, d / 1.32, 0, secondAngle);

  stroke(minuteColour);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, d / 1.36, d / 1.36, 0, minuteAngle);

  stroke(hourColour);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, d / 1.4, d / 1.4, 0, hourAngle);

  strokeWeight(d / 62);

  push();
  rotate(secondAngle);
  stroke(secondColour);
  line(0, 0, d / 3, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(minuteColour);
  line(0, 0, d / 3.74, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(hourColour);
  line(0, 0, d / 5, 0);
  pop();

  push();
  strokeWeight(d / 500);
  stroke(255);
  ellipse(0, 0, d / 1.19, d / 1.19);
  pop();

  rotate(90);
  noStroke();
  fill(255);
  textSize(d / 10);
  if (hr >= 0 && hr <= 11) {
    text('AM', -d / 2.5, -d / 2.5)
  } else {
    text('PM', d / 2.5, -d / 2.5)
  }

  for (var a = 30; a <= 360; a += 30) {
    let x = d / 2.2 * cos(a - 90);
    let y = d / 2.2 * sin(a - 90);

    push();
    fill(hourColour);
    textSize(d / 20);
    text(a / 30, x, y);
    textSize(d / 42);
    for (var b = 0; b < 30; b += 6) {
      let x = d / 2.5 * cos(a + b - 120);
      let y = d / 2.5 * sin(a + b - 120);
      fill(secondColour);
      text((a + b - 30) / 6, x, y);
    }
    pop();
  }
  stroke(255);
  point(0, 0);
}
