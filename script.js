var indexList = 0; /*keeps track of instructions*/
var isClicked = false; /*keeps track of state of start button*/

/*goes through instructions*/
function instruction(){
	var list = new Array("Click the button at the bottom of the canvas to keep building more bricks","Click start to build!");
	var str = document.getElementById("iText").innerHTML;
	if(indexList>=(list.length)-1){
		indexList=(list.length)-1;
		document.getElementById("startBtn").style.visibility = "visible";
	}
	var rStr = str.replace(str,list[indexList]);
	document.getElementById("iText").innerHTML=rStr;
	indexList++;
}

var canvas = ""; /*variable canvas will eventually be assigned to*/
var context = ""
/*starts game*/
function clickStart(){
	isClicked = true;
	var elements = ['iText','startBtn','arrowBtn','iTextBox']
	if(isClicked==true){
		for(var i=0;i<elements.length;i++){
			document.getElementById(elements[i]).style.display='none';
		}
			document.getElementById('myCanvas').style.display='block';
			drawRectangles("red");

	}
}

/******************************************code for game *********************************************************************/

function drawRectangles(color){
	canvas = document.getElementById("myCanvas")
	context=canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	var cHeight=canvas.height;
	var cWidth = canvas.width;
	console.log("cHeight:" +cHeight +"cWidth:"+cWidth);
	var loopCounter = Math.floor((Math.random()*100)+1);
	
	console.log("corner x:" + cornerX +"cornerY"+cornerY+"width:"+width+"height:" +height);
	for(var i = 0; i<loopCounter; i++){
		var cornerX = Math.floor((Math.random()*(cWidth-100)+10));
		var cornerY = Math.floor((Math.random()*(cHeight/2))+1);
		var width = Math.floor((Math.random()*90)+10);
		var height = Math.floor((Math.random()*((cHeight/2)-10)+10));
		context.fillStyle = color;
		context.fillRect(cornerX,cornerY,width,height);
	}
	document.getElementById("reload").style.display='block';
}

