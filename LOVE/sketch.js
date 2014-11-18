var myOwl = new Owl(200, 200, 0.5);

function setup() {
  
  var myCanvas=createCanvas(400, 500);
  myCanvas.parent('myContainer');

  }

function draw() {
  noStroke();
  fill(255,255,255,1);
  rect(0,0,400,500);
  ellipseMode(CENTER);
  rectMode(CENTER);
  //myOwl.circle();
  //myOwl.display();

 
}



function Owl(x, y, s) {
	this.x = x;
	this.y = y;
	this.s = s;
	this.r =100;
}

Owl.prototype.display = function() {

	push();
    translate(this.x, this.y-random(-2, 2));
    scale(this.s);
    noStroke();
    //wing
    fill(77, 46, 41);
    triangle(-130, -140, -160, -40, -140, -50);
    fill(77, 46, 41);
    triangle(+130, -140, +160, -40, +140, -50);

    //ear
    fill(77, 46, 41);
    triangle(-130, -150, -50, -160, -130, -210);
    triangle(+130, -150, +50, -160, +130, -210);

    //body
    fill(236, 184, 74);
    rect(0, -50, 290, 260, 500);

    //pattern
    fill(132, 98, 61);
    for (var b=-90; b<+100; b+=10) {
      for (var c=-20; c<+50; c+=10) {
        ellipse(b, c, 5, 10);
      }
    }
    arc(-115, +10, 20, 30, 0, PI);
    arc(+115, +10, 20, 30, 0, PI);

    //head
    fill(77, 46, 41);
    ellipse(0, -155, 250, 100);
    fill(77, 46, 41);
    rect(0, -100, 280, 200, 600);
    fill(255);

    //eye
    noStroke();
    fill(132, 98, 61);
    ellipse(-65, -130, 130, 110);
    ellipse(+65, -130, 130, 110);

    //mouth
    fill(197, 92, 70);
    triangle(0, -100, -10, -90, +10, -90);

    //eye2
    noStroke();
    fill(255);
    ellipse(-60, -130, 115, 95);
    ellipse(+60, -130, 115, 95);

    //eyeball
    fill(77, 46, 41);
    frameRate(8);
    var m=random(-80, -28);
    var n=random(-160, -90);
    var w=random(+40, +87);
    var h=random(-160, -90);
    ellipse(m, n, 10, 10);
    ellipse(w, h, 10, 10);

    //feet
    fill(197, 92, 70);
    arc(-70, +80, 50, 20, PI, TWO_PI);
    arc(+70, +80, 50, 20, PI, TWO_PI);
    pop();
}

Owl.prototype.circle = function() {

	push();
    noFill();
    stroke(197, 92, 70);
    strokeWeight(7);
    ellipse(200, 170, this.r, this.r);
    ellipse(200,170,this.r+25,this.r+25);
    this.r=this.r+20;
    if(this.r>300){
     this.r=100; 
    }
    pop();
  }


   $(document).click(function() {

          window.open('skype:liewbaby123?call','_blank');
          clear();
          clock.stop();
          clock.setTime(0)
          clock.start();
          sendData(1)
        });

   






