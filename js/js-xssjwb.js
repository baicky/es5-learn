window.onload=function(){
var num=Math.random() + "";//加“”转换类型为字符串；再转回去则-0；就像var num=Math.random() + ""-0；
var index=num.charAt(2);
var txt=new Array
	txt[0]="werwerwerwerw"
	txt[1]="werafdz"
	txt[2]="gjjf"
	txt[3]="fgd"
	txt[4]="4234"
	txt[5]="uiyi"
	txt[6]="nfghfw"
	txt[7]="opiop"
	txt[8]="wasdzxc"
document.getElementById("timeshow").innerHTML=txt[index];
}