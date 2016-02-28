function l() {
var arr = document.getElementsByTagName('div');
	for (i = 0; i < arr.length-1; i++) {
	//if ((arr[i].style.display == "block") && i <arr.length-1) {
		if((arr[i].style.display == "block")&&(i<arr.length-1)){
			arr[i-1].style.display = "block";
			arr[i-1].id="active";
			arr[i].style.display = "none";
			arr[i].id="";
			//arr[i+1].innerHTML=i;
			break;
		}
	//arr[i].style.display = "none";
	}
}
function r() {
var arr = document.getElementsByTagName('div');
	for (i = 0; i < arr.length-2; i++) {
	//if ((arr[i].style.display == "block") && i <arr.length-2) {
		if((arr[i].style.display == "block")&&(i<arr.length-2)){
			arr[i+1].style.display = "block";
			arr[i+1].id="active";
			3
			arr[i].style.display = "none";
			arr[i].id="";
			//arr[i+1].innerHTML=i;
			break;
		}
	//arr[i].style.display = "none";
	}
}
function xs(){
	//document.getElementById("active").innerHTML="block";
	document.getElementById("active").style.display="block";
}
function yc(){
	document.getElementById("active").style.display="none";
}



/*//下一个div
function r() {
var arr = document.getElementsByTagName('div');
for (i = 0; i < arr.length-1; i++) {
if ((arr[i].style.display == "block"||arr[i].style.display == "") && i <= 2) {
arr[i + 1].style.display = "block";
arr[i].style.display = "none";
}
}
}
//上一个div
function l() {
var arr = document.getElementsByTagName('div');
for (i = 0; i < arr.length; i++) {
if ((arr[i].style.display == "block"||arr[i].style.display == "") && i <= 3) {
arr[i - 1].style.display = "block";
arr[i].style.display = "none";
break;
}
}
}*/
/*	divs=document.getElementsByTagName("div");

	//var j=divs.length;
	//这里用divs.length为0，为什么。
window.onload=function(){
	for(i=0;i<divs.length;i++){
		divs[i].id=i;
	}
}

function xs(){
	document.getElementById("0").innerHTML="block";
	document.getElementById("0").style.display="block";
}
function yc(){
	document.getElementById("0").style.display="none";
}

/*
	function l(){
		var j=divs.length-1;
		//document.getElementById(j).style.display="block";
		document.getElementById("0").innerHTML=j;
	}
*/