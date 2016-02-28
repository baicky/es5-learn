window.onload=function(){
	var big=document.getElementById("big");
	big.onmouseover=function(){
		clearInterval();
		var inn=setInterval(move,20);
		function move(){
			var big=document.getElementById("big");
			if(big.offsetLeft==180){
				clearInterval(inn);
			}
			else{
				big.style.left=big.offsetLeft+10+"px";
			}
		}
	}
	big.onmouseout=function(){
		var uott=clearInterval();
		setInterval(movee,20);
		function movee(){
			var big=document.getElementById("big");
			if(big.offsetLeft==0){
				clearInterval(outt);
			}
			else{
				big.style.left=big.offsetLeft-10+"px";
			}
		}
	}
}


