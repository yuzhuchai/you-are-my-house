txt ="BUT WHAT DOES IT MEAN WHEN THE DEMOLITION CREW COMES WITH THEIR DRILLS & THEIR FIRE HOOKS & THEIR STEEL GRIPS & THEIR HEAVY DUTY JACK HAMMERS / AND THE HOUSE COMES TUMBLING 									?"
txt2="DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN"


function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0);


	txt = createDiv('')
	var txt = createDiv("<a href='../laying/index.html'style='color: white'target='_self'>NextPage-------></a>")
	    txt.position(20,20);
		txt.style('font-size', "15px")
		txt.style('font-family', "monospace")
		txt.style('font-style', "Bold")
   
}

function draw() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0);

	fill(255)
	textAlign(CENTER)
	textStyle(BOLD)
	text(txt, 20, 100, width/1.02)

	text(txt2.substring(0,2),width/1.3+90, height-127)
    text(txt2.substring(3,8),width/1.3+80, height-117)
    text(txt2.substring(3,9),width/1.3+80, height-110)
    text(txt2.substring(0,13),width/1.3+70, height-103)
    text(txt2.substring(1,14),width/1.3+60, height-100)
	text(txt2.substring(2,24),width/1.3+50, height-94)
    text(txt2.substring(1,25),width/1.3+50, height-86)
	text(txt2.substring(0,35),width/1.3+50, height-79)
    text(txt2.substring(1,42),width/1.3+50, height-75)
	text(txt2.substring(2,47),width/1.3+50, height-64)
    text(txt2.substring(0,50),width/1.3+60, height-59)
    text(txt2.substring(3,58),width/1.3+60, height-53)
    text(txt2.substring(0,64),width/1.3+60, height-46)
    text(txt2.substring(2,69),width/1.3+60, height-40,)
    text(txt2.substring(3,78),width/1.3, height-35)
	text(txt2.substring(0,80),width/1.3, height-28)
	text(txt2.substring(1,86),width/1.3, height-20,)
  	text(txt2.substring(1,90),width/1.3, height-10)
  	text(txt2.substring(0,106),width/1.3, height-2)
 	text(txt2.substring(0,110),width/1.3, height)

	

}


