function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(189,189,189);

	// set a fill color for stage
	fill(89, 63, 63);
	// draw stage
	noStroke();
	rect(0, 300, 640, 100);

  //draw window
	fill(199,251,253)
	rect(173, 25, 110,70)

	//draw sky

	fill(255,255,0)
  ellipse(203,40,20,20)

	fill(255,255,255)
	ellipse(232,60,30,20)
	ellipse(242,70,30,20)
	ellipse(252,70,30,20)

  //draw wall
	fill(139,138,136)
  rect(0, 0, 140, 290)
  rect(490, 0, 160, 290)
  // set a fill color for ground
  fill(52,2,21)

	//draw stage
	quad(0,300,150,200,490,200,640,300)

  //draw wood for the floor
	fill(157,81,0)
	rect(0, 290, 640, 10)
	rect(0, 275, 640, 10)
	rect(0, 260, 640, 10)
	rect(0, 245, 640, 10)
	rect(0, 230, 640, 10)
	rect(0, 215, 640, 10)
	rect(0, 200, 640, 10)
  fill(139,138,136);
	triangle(0,300,150,200,0,200)
	triangle(640,300,640,200,490,200)

	//draw character's face

	fill(0,0,0)
	ellipse(150, 120, 95, 95);
	ellipse(105, 75, 55, 55);
	ellipse(195, 75, 55, 55);

	//draw shoes for character
	fill(254,198,0)
	arc(134, 275, 28, 40,  PI, 0);
	arc(166, 275, 28, 40, PI, 0);
	arc(134, 275, 28, 30,  0, PI);
	arc(166, 275, 28, 30, 0, PI);


	//draw body for character
	fill(0,0,0)
	rect(125, 150, 50, 80,20)
	rect(125, 220, 20, 50,20)
	rect(155, 220, 20, 50,20)

		//draw body for character (ARM)
		rect(110, 172, 12, 48,20)
		rect(177.5, 172, 12, 48,20)
		arc(170, 185, 40, 50, PI+QUARTER_PI, 0);
		arc(129, 185, 40, 50, PI,PI+HALF_PI );


		   //draw pants for character
			 fill (171,35,47)
			 rect(123, 220, 25, 30)
			 rect(153, 220, 25, 30)
		   rect(123, 200, 55, 40,20)

  //draw hand
	fill(255,255,255)
	rect(109, 210, 16, 20,20)
	rect(176.5, 210, 16, 20,20)



	 //draw buttons for pants
	 fill(251,250,255)
 	ellipse(141, 218, 11, 20)
 	ellipse(159, 218, 11, 20)

  //draw face for character
	fill(245,224,195)
	ellipse(140, 120, 32, 65)
	ellipse(160, 120, 32, 65)
	ellipse(122, 140, 35, 35);
	ellipse(178, 140, 35, 35)
	arc(150, 135, 80, 70, 0, PI);

  //draw eyes for character
	fill(255,255,255)
	ellipse(140, 115, 18, 30)
	ellipse(160, 115, 18, 30)
	ellipse(150, 135, 6, 2)

	//draw nose for character
	fill(0,0,0)
  ellipse(150, 135, 25, 10)

  //draw nose light for character
	fill(255,255,255)
	ellipse(152, 133, 13, 3)


 //draw a stik for the character
 fill(214,165,88)
 rect(125, 215, 89,4)
 rect(98, 215, 10,4)

  //draw a chalk board
	fill(214,165,88)
  rect(475, 215, 15,40)
  rect(275, 215, 15,40)
	 rect(253, 255, 260,10)
   fill(89,54,0)
	 rect(243, 205, 280,10)


  fill(161,141,101)
  rect(253, 25, 260,180)

		fill(87,86,84)
		rect(263, 35, 240,160)

 //chalk board eraser

	fill(181,181,181)
	rect(293, 190, 50,20,20)
	fill(0,0,0)
 	rect(293, 190, 50,5,20)


//chalk
	fill(255,255,255)
	rect(383, 200, 20,5,20)
	rect(433, 200, 30,5,20)



//two
//rect(453, 45, 30,40)
//rect(453, 48, 20,15)
//rect(461, 66, 30,15)

	var dayNight = random(1);

if (dayNight < 0.5) {
			 fill(0,0,0);
			 ellipse(165,105,10,10);
       ellipse(145,105,10,10);
		 } else {
			 fill(0,0,0)
			 ellipse(165,122,10,10)
       ellipse(145,122,10,10)
		}


if (dayNight < 0.5) {
		//draw mouth for character
		fill(57,0,11)
		arc(150, 145, 60, 30, 0, PI);
		fill(163,90,83)
		arc(150, 155, 20, 10, 0, PI);
	} else {
		fill(157,0,0)
		ellipse(155,162,10,10)

	}
if (dayNight < 0.5) {
	//draw light bulb
  fill(255,255,255)
  ellipse(80,50,50,50)
  rect(70,50,20,40,20)
  rect(70,50,20,55,20)
  fill(217,217,217)
  rect(69,80,22,20)
  fill(255,255,0)
  ellipse(80,50,30,30)
}

if (dayNight < 0.5){
//Math
 fill(255,255,255)
 rect(283, 45, 30,40)
 rect(323, 65, 35,5)
 rect(338, 50, 5,35)
 rect(370, 45, 30,40)
  rect(453, 45, 30,40)
	rect(410, 60, 35,5)
	rect(410, 70, 35,5)
 fill(87,86,84)
 rect(290, 42, 30,20)
 rect(290, 65, 15,15)
 rect(370, 48, 20,15)
 rect(370, 66, 20,15)
 rect(458, 48, 20,20)
 rect(451, 69, 27,20)
 } else{
 fill(255,255,255)
 rect(283, 145, 30,40)
 rect(323, 165, 35,5)
 ellipse(342,153,10,10)
 ellipse(342,183,10,10)
 rect(370, 145, 30,40)
	rect(453, 145, 30,40)
 rect(410, 160, 35,5)
 rect(410, 170, 35,5)
 fill(87,86,84)
 rect(290, 142, 30,20)
 rect(290, 165, 15,15)
 rect(370, 148, 20,15)
 rect(370, 166, 20,15)
 rect(453, 148, 20,15)
 rect(461, 166, 30,15)
}
}
