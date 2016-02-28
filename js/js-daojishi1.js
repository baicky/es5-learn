window.onload=function count(){
	var inday=new Date("May 1,2016");

	//function djs(){
		var today=new Date();
		var durtime=inday.getTime()-today.getTime();
		var d=Math.floor(durtime/(24*60*60*1000));
		var h=Math.floor((durtime-d*(24*60*60*1000))/(60*60*1000));
		var m=Math.floor((durtime-d*(24*60*60*1000)-h*(60*60*1000))/(60*1000));
		var s=Math.floor((durtime-d*(24*60*60*1000)-h*(60*60*1000)-m*60*1000)/1000);
		var doc="距离2016年5月1日有："+d+"天"+h+"小时"+m+"分钟"+s+"秒";
		document.getElementById("timeshow").innerHTML=doc;
		setTimeout(count,1000);
	//}
	//++++++++++++++++++++++++++++++++++++++++++++++++


}