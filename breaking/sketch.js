
let x= 329
let y= 300
let a= 337
let b=300
let c= 345
let d=300


function setup() {
	createCanvas(window.innerWidth, window.innerHeight)

}


function draw() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
	textAlign(LEFT,CENTER)
	fill(255)
	textStyle(BOLD)
	text("AND 			 	ARE A HORIZON OF UNAMENDABLE BROKEN PIECES.", 300,300,width/1.5)
	text("Y",x,y)
	text("O",a,b)
	text("U",c,d)

	//frameRate(30)

}


function mousePressed(){

x=x+random(-100,100)
y=y+random(-100,100)
a=a+random(-100,100)
b=b+random(-100,100)
c=c+random(-100,100)
d=d+random(-100,100)

}