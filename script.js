let menu = 0
var cx, px, cy, py, cv, pv;


class Ball {
  constructor(x, y, h, w, vx, vy) {
    this.x = x
    this.y = y
    this.h = h
    this.w = w
    this.vx = vx
    this.vy = vy
  }

  drawBall() {
    ellipse(this.x, this.y, this.h, this.w);
    this.x = this.x + this.vx
    this.y = this.y + this.vy


    if (this.x < 0 || this.x > 600) {
      this.vx = this.vx * -1;
    }

    if (this.y < 0 || this.y > 400) {
      this.vy = this.vy * -1;
    }
  }
}

function setup() {
	createCanvas(600, 400)

  cx = 20;
  cy = 200;
  cv = 2;
  px = 560;
  py = 200;
  pv = 2;

  ball1 = new Ball(0, 300, 20, 20, 5, 5)
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  print(mouseX, mouseY)
  background(255);
  b= 'green'
  fill(b);
  rect(50, 50, 200, 75);
  fill(b);
  rect(50, 200, 200, 75);
  textSize(30)
  a= 'white'
  fill(a);
  text('start', 70, 96);
  text('instructions',70, 246);


  if (menu == 1) {
    function draw() {
	  background(0);

    let a = color('green')
    rect(cx, cy, 20, 70);
    fill(a)
    cy = cy + cv
 

    if(cy < 0 || cy > 350) {
    cv = cv * -1;
    }


    rect(px, mouseY, 20, 70);
    fill(a)
    py = py + pv

    if(py < 0 || py > 350) {
    pv = pv * -1;
    }
    ball1.drawBall()

}
    text('Right Click to return to MENU', 525, 30)
    if (mouseButton == RIGHT) {
      menu = 0
    }
  } 
  if (menu == 2) {
    background(0)
    textSize(15)
    text('druk op rechter muisknop om terug bij menu te komen', 230, 50)
    textSize(20)
    text('1. Gebruik je muis om de balk te bewegen. ', 20, 175)
    text('2. Probeer de bal tegen te houden.', 20, 225)
    text('Als de bal langs je balk komt heeft de tegenstnder een punt.', 20, 275)
    text('3. Het spel is afgelopen als iemand 10 punten behaald.', 20, 325)
    if (mouseButton == RIGHT) {
      menu = 0
    }
  } 
}

function mouseClicked() {
  if (menu == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        menu = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        menu = 2
      }
    }
  }
}
