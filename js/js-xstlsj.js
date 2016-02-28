//++++++++++++++++++++++++++++++++++++++++++++++
//注意和之前的显示登录时间作对比，实际上是差不多的。
var s=0;
function up(){
	s+=1;
	var doc="您在本页停留了："+s+"秒";
	document.getElementById("timeshow").innerHTML=doc;
	setTimeout(up,1000);
}
setTimeout(up,1000);
//+++++++++++++++++++++++++++++++++++++++++++++++
//方法二：通过new Date()来取得时间。以此来计算停留的时间差。
var fir=new Date();
function updater(){
var nowtime=new Date();
var dtime=nowtime.getTime()-fir.getTime();
//注意这个地方用Math.floor和Math.round的区别：Math.floor会出现数字不跳动和以此跳动两个数的情况。。。。。
//var sec=Math.floor(dtime/1000);
var sec=Math.round(dtime/1000);
//这个是案例代码。
//var minutes = Math.floor(seconds /60);
var min=Math.floor(dtime/(1000*60));
	if(sec>=60){
		sec-=min*60;
	}

	var doc2="您在本页停留了："+min+"分"+sec+"秒";
	document.getElementById("timeshow2").innerHTML=doc2;
	setTimeout(updater,1000);
}
setTimeout(updater,1000);
