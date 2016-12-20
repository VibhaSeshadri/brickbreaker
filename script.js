var indexList = 0;
$( document ).ready(function(){
	$("h1").fadeIn(3000);
});

function instruction(){
	var list = new Array("paragraph 2", "paragraph 3","Click start to play!");
	var str = document.getElementById("iText").innerHTML;
	if(indexList>2){
		indexList=2;
	}
	var rStr = str.replace(str,list[indexList]);
	document.getElementById("iText").innerHTML=rStr;
	indexList++;

}
