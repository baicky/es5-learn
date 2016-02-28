//切换时钟显示方式
window.onload=function dig(){
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var halfday="AM";
		var showtimer=h+":"+m+":"+s+" "+halfday;
	if(h<10){
		h="0"+h;
	}
	if(h>=12){
		h=h-12;
		halfday="PM";//更改am-pm
	}
	if(m<10){
		m="0"+m;
	}
	if(s<10){
		s="0"+s;
	}
		document.getElementById("timeshow").innerHTML=showtimer;

			//注意函数调用时位置onload还是window.onload，注意dig（）还是dig；
		setTimeout(dig,500);
}
