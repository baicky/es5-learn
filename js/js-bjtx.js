//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//鼠标移入切换大图
function tx(onimg){
	var doc="<img src='"+"imgs/"+onimg+"'"+">";
	document.getElementById("timer2").innerHTML=doc;
	var bg="url(imgs/"+onimg+")";
	document.getElementById("timer").style.backgroundImage=bg;
	//document.getElementById("timer2").innerHTML=bg;
}
function txout(onimg){
	var doc="鼠标移入切换大图";
	document.getElementById("timer2").innerHTML="";
	document.getElementById("timer").style.backgroundImage="";
	//document.getElementById("timer2").innerHTML=doc;
}