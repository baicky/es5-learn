window.onload=function fest(){
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth()+1;
	var day=now.getDate();
	var x=now.getDay();
	//注意显示星期几的时候的这个数组的写法有好几种。
	var dayx=new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	//以下就是特殊节日的写法。
	var fest="";
	if(month==1&&day==1)
		{
			fest="元旦节";
		}
	if(month==4&&day==1)
		{
			fest="国际劳动节";
		}
	if(month==5&&day==1)
		{
			fest="劳动节";
		}
	if(month==6&&day==1)
		{
			fest="儿童节";
		}
	if(month==10&&day==1)
		{
			fest="国庆节";
		}
	if(month==12&&day==25)
		{
			fest="圣诞节";
		}
	var doc="现在时间是："+year+"年"+month+"月"+day+"日"+" "+dayx[x]+" "+fest;
	document.getElementById("timeshow").innerHTML=doc;
	//setTimeout(fest,10000);
}