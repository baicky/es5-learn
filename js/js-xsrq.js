window.onload=function showday(){
	var today=new Date();
	var y=today.getFullYear();
	var m=today.getMonth()+1;
	var d=today.getDate();
	var t=today.getDay();
	var weekday=new Array(7)
			weekday[0]="星期日"
			weekday[1]="星期一"
			weekday[2]="星期二"
			weekday[3]="星期三"
			weekday[4]="星期四"
			weekday[5]="星期五"
			weekday[6]="星期六"
	var text=y+"年"+m+"月"+d+"日"+" "+weekday[t];
	document.getElementById("timeshow").innerHTML=text;
}