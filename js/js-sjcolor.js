/*
//++++++++++++++++++++++++++++++++++++++++++++++++++
//改变颜色方法1
window.onload = function changecolor(){
		document.getElementById("timeshow").onmousemove = function cao(){
  	  	this.style.backgroundColor = findcolor();

  	}

    	function findcolor()
  	  	{
  	  		var s = '0123456789abcdef'
  			var color ="#";
  			for(var i=0;i<=5;i++)
  			color = color+s[Math.floor(Math.random() * 16)];
  			return color;
  		}
}*/



//++++++++++++++++++++++++++++++++++++++++++++++++
//改变颜色方法2
function changecolor(){
			var num1=Math.floor(Math.random() * 256);
  	  		var num2=Math.floor(Math.random() * 256);
  	  		var num3=Math.floor(Math.random() * 256);
  	  		var colorrgb="rgb("+num1+","+num2+","+num3+")";
			document.getElementById("timeshow").innerHTML=colorrgb;
			document.getElementById("timeshow").style.backgroundColor=colorrgb;
}