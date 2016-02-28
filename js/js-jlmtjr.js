window.onload=function dig(){
	var testday="january 01,2002"
	var onday=new Date(testday);
	var today=new Date();
	var spass=today.getTime()-onday.getTime();
	//一定不要像下面这样子！！因为转换之后的spass已经变了！！！
	//var spass=Math.floor((today.getTime()-onday.getTime())/1000);
	//var spass=(today.getTime()-onday.getTime())/1000;
	var days=Math.floor(spass/(24*60*60*1000));
	var hs=Math.floor((spass-days*24*60*60*1000)/(60*60*1000));
	var mins=Math.floor((spass-days*24*60*60*1000-hs*60*60*1000)/(1000*60));
	var ss=Math.floor((spass-days*24*60*60*1000-hs*60*60*1000-mins*60*1000)/1000);
	var doc="距离"+testday+"已经过去了："+days+"天"+hs+"小时"+mins+"分"+ss+"秒";
	//alert(onday);
	document.getElementById("timeshow").innerHTML=doc;
	setTimeout(dig,1000);
}
