var button
count = 0
radius = 0
txts= ["YOU ARE MY HOUSE.", "YOUAREMYHOUSE.","YOU ARE MY HOOOOOOOOOOOOOOOOOOOOUSE.", "YOURE MY HOU   SE.","YOO        OOOU ARE MY HOUSE.", "YOU ARRRRRRE MY HOUSE."]

y = 350

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0);
  button = createButton('enter')
  button.position(width/2-button.width/2,height/2-80)
  button.style('alignment',"Center")
  button.style('color','white')
  button.style("background",'none')
  button.style('border','none')
  button.style('cursor','pointer')
  button.mousePressed(enter)



  fill(255)
  textAlign(CENTER,CENTER)
  translate(width/2,height/2-100)
  rotate(PI)
  textStyle(BOLD)
  text("UAreMyHOUSE", 0,0)

	   
		

 }


function draw() {


  
}


  
function enter(){

	fill(255)

	if(count == 0) { 
    	background(0)
    	house1 = txts[3]
    	house2 = txts[1]
    	house3 = txts[2]
    	house4 = txts[4]


   }

    text(house1.substring(0,count), width/8, y-100)

	text(house4.substring(0,count), width/3, y)

	//house2 = txts[1]
	text(house2.substring(0,count), width/1.8, y+170)

	//house3 = txts[2]
	text(house3.substring(0,count), width/1.2, y-300)

	


	count ++
	y +=10

	if (count == 45) {
 		txt = createDiv('');
		var txt = createDiv("<a href='../hammering/index.html'style='color: white'target='_self'>NextPage-------></a>");
		txt.position(20,20);
		txt.style('font-size', "15px")
		txt.style('font-family', "monospace")
		txt.style('font-style', "Bold")
	
}

}




/*
var button;
function setup(){
	createCanvas(400, 200);
	background(0);
	button = createButton("Simple Button");
	button.position(10, 300);
	button.mousePressed(clickFunction);
}
 
function clickFunction(){
	background(random(255));
}
*/