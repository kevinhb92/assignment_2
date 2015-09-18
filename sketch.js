function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(16,55,82);

	// set a fill color for stage
	fill(89, 63, 63);
	// draw stage
	noStroke();
	rect(0, 300, 640, 100);

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
  fill(16, 55, 82);
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
	arc(150, 135, 70, 70, 0, PI);

  //draw eyes for character
	fill(255,255,255)
	ellipse(140, 115, 16, 30)
	ellipse(160, 115, 16, 30)
	ellipse(150, 135, 6, 2)

	//draw nose for character
	fill(0,0,0)
  ellipse(150, 135, 25, 10)

  //draw nose light for character
	fill(255,255,255)
	ellipse(152, 133, 13, 3)

	//draw mouth for character
	fill(57,0,11)
	arc(150, 145, 60, 30, 0, PI);
	fill(163,90,83)
	arc(150, 155, 20, 10, 0, PI);

 //draw a stik for the character


}
