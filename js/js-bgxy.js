//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//setInterval
var y=0;
window.onload=function(){
	setInterval(gun,50);
}

function gun(){
	var yy=document.getElementById("timer2").offsetHeight;
	y+=2;
	if(y>=yy){
		y=0;
	}
	document.getElementById("timer2").style.backgroundPosition="0px "+y+"px";
	document.getElementById("timer2").innerHTML="背景下移:backgroundPosition:"+"0px,"+y+"px";
	//document.getElementById("timer2").innerHTML=y+"px";
	//setTimeout(gun,50);
}
/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//setTimeout
window.onload=function gun(){
	var yy=document.getElementById("timer2").offsetHeight;
	y+=2;
	if(y>=yy){
		y=0;
	}
	document.getElementById("timer2").style.backgroundPosition="0px "+y+"px";
	document.getElementById("timer2").innerHTML="背景下移:backgroundPosition:"+"0px,"+y+"px";
	//document.getElementById("timer2").innerHTML=y+"px";
	setTimeout(gun,50);
}
*/