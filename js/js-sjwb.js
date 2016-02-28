//var totalnum=5;
//var randomnum=Math.random();
//var index=Math.round(randomnum*totalnum)

//生成指定范围内的随机数
window.onload=function(){
var Min=1;
var Max=5;
var Range = Max - Min;
var Rand = Math.random();
var index=Min + Math.round(Rand * Range);
var link=new Array
	link[1]="http://www.sohu.com"
	link[2]="http://www.263.net.cn"
	link[3]="http://www.sina.com.cn"
	link[4]="http://cn.yahoo.com"
	link[5]="http://www.cctv.com.cn"
document.getElementById("timeshow").innerHTML="<a href="+link[index]+">"+"随机生成链接"+"</a>";
//document.getElementById("timeshow").innerHTML="wewetwetwet";
}

/*
//生成随机数
function GetRandomNum(Min,Max)
{
var Range = Max - Min;
var Rand = Math.random();
return(Min + Math.round(Rand * Range));
}
var num = GetRandomNum(1,10);
alert(num);
*/