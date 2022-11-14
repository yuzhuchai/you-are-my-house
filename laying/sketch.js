/*
p3   all three hundurd and thirty three bricks are perfectly layed out:
	[counting to three hundurd and thirty three]
	
*/

let a=1
var num

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
    
}


function draw() {
	
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
	fill(255)
	textAlign(CENTER,CENTER)
	textStyle(BOLD)
	text("ALL 						 BRICKS ARE PERFECTLY LAID OUT ON THE GROUND.",width/2, height/2,)

	frameRate(30)

	num = int(0)+a 
	text(num,width/2-149,height/2)

	a++

	if(a==3334){
		a=1
		nextpage()
	}


}



function nextpage(){
	txt = createDiv('');
    var txt = createDiv("<a href='../becoming/index.html'style='color: white'target='_self'>NextPage-------></a>");
    txt.position(20,20);
    txt.style('font-size', "15px")
    txt.style('font-family', "monospace")
    txt.style('font-style', "Bold")
}