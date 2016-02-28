//显示时钟

window.onload=function dig(){

function choose() {
return document.timer1224.time1224[0].checked;
}
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	var halfday="";
	if(h<10){
	h="0"+h;
	}
	if(m<10){
	m="0"+m;
	}
	if(s<10){
	s="0"+s;
	}
	if(choose()&&h>=12){
		h-=12;
		halfday="PM";
	}
	else if(choose()&&h<12)
		halfday = "AM";
	var showtimer=h+":"+m+":"+s+" "+halfday;
	document.timer1224.timescreen.value=showtimer;



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//全局函数
		setTimeout(dig,500);
		//注意函数调用时位置onload还是window.onload，注意dig（）还是dig；
}