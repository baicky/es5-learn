//显示时钟
window.onload=function dig(){
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var halfday="AM";
		if(h<10){
			h="0"+h;
		}
		if(h>=12){
			h=h-12;
			halfday="PM";
		}
		if(m<10){
			m="0"+m;
		}
		if(s<10){
			s="0"+s;
		}
		var showtimer=h+":"+m+":"+s+" "+halfday;
		document.getElementById("timeshow").innerHTML=showtimer;
		setTimeout(dig,500);
		//注意函数调用时位置onload还是window.onload，注意dig（）还是dig；
}