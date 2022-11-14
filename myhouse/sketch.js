
/*
time-stemp: 2 possiblities (rebuild/not rebuild)
rebuild: higher pitched sounds 
not rebuild: lower pitched sounds
3/4 pages per possiblity 



//use of repitition within both audio and viual qualities. 
p1   you are my house:
	[upside down, have to build house to be able to continue]
p2   down, 
	[(not moving) pile of down]
p3   all three hundurd and thirty three bricks are perfectly layed out:
	[counting to three hundurd and thirty three]
p4  the ceilings becomes the floor, the pillers becomes the floor, the walls becomes the floor, the doors beomes the floor, the floor becomes the floor 
	[positions of the text.]




the second one with more user control: the second half of the poem (when presenting pome as a whole)
input words to construct the poem (could go both ways) juse one page? 

*/




function setup() {
	createCanvas(window.innerWidth, window.innerHeight)

}


function draw() {
	var s = second()
	var m = minute()
	var h = hour()
	createCanvas(window.innerWidth, window.innerHeight)
	background(0,0,80)
	fill(255)
	textAlign(CENTER,CENTER)
	text("-"+h+":"+m+":"+s+"-",width/2, height/2)



	txt = createDiv('');
	var txt = createDiv("<a href='../p1'style='color: white'target='_self'>UAreMyHOUSE</a>");

    //var txt = createDiv("<a href='http://sourpress.org/youare/p2'style='color: white'target='_self'>NextPage-------></a>");
 
    //txt.transform('rotate',"90deg")
    //txt.style('rotate',"180deg")
    //txt.style('text-align',"CENTER");
    txt.position(width/2-43, height/2-30);
    txt.style('font-size', "12spx")
    txt.style('font-family', "monospace")
    txt.style('font-style', "normal")
}


