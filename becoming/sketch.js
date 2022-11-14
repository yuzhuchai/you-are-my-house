stanza = ["THE CEILING BECOMES THE FLOOR,","THE PILLARS BECOME THE FLOOR,","THE WINDOWS BECOME THE FLOOR,","THE WALLS BECOME THE FLOOR,","THE DOORS BECOME THE FLOOR,","THE FLOOR BECOMES THE FLOOR."]

iii=["intere"]
function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
	txt = createDiv('');
    var txt = createDiv("<a href='../breaking/index.html'style='color: white'target='_self'>NextPage-------></a>");
    txt.position(20,20);
    txt.style('font-size', "15px")
    txt.style('font-family', "monospace")
    txt.style('font-style', "Bold")

}


function draw() {
	createCanvas(window.innerWidth, window.innerHeight)
	background(0)
	fill(255)
	textStyle(BOLD)
	textAlign(LEFT,CENTER)
	//now
	//text(stanza[0], 100,150)
	//ceiling
	textAlign(CENTER,CENTER)
	text("NOW "+stanza[0]+"  "+stanza[0],width/2,height/3)//150)
	//pillar
	y=height/3+2
	n=0
	for (let n=0;n<stanza[1].length+1;n++){
		text(stanza[1][n],width/2,y+=11)
	}

	//window
	text(stanza[2].substring(0,8), width/2+150,height/3+100)//250)
	window2()
	text("EHT EMO",width/2+150,height/3+166)//316)
	window3()


    //WALLS
   wallleft()
   wallright()


   //doors
   makedoor()

   //floors
   textAlign(CENTER)
   text(stanza[5]+"									" +stanza[5],width/2,height/3+340)//490)

}

function window2(){
	y = height/3+89//239
	n=0
	for (let n=0;n<stanza[2].substring(8,15).length+1;n++){
		text(stanza[2].substring(8,15)[n],width/2+184,y+=11)
	}
}



function window3(){
	let hi = ",ROOLF"
	y = height/3+90//240
	n=0
	for (let n=0;n<hi.length+1;n++){
		text(hi[n],width/2+114,y+=11)
	}
}


function wallleft(){
	y = height/3+20//170
	n = 0
	for (let n=0;n<stanza[3].length+1;n++) {
		text(stanza[3][n],width/2-250,y+=11)
	}

}


function wallright(){
	y = height/3+20 //170
	n = 0
	for (let n=0;n<stanza[3].length+1;n++) {
		text(stanza[3][n],width/2+250,y+=11)
	}

}

function makedoor(){
	let left = "	SROOD EHT"
	y = height/3+205 //355
	n = 0
	for (let n=0;n<left.length+1;n++){
		text(left[n],width/2-150,y+=11)
	}
	textAlign(LEFT)
	text("BECOME",width/2-150,height/3+210) //360)

	q = height/3+205 //355
	let right = "THE FLOOR,"
	for (let n=0;n<right.length+1;n++){
		text(right[n],width/2-92,q+=11)
	}
}










