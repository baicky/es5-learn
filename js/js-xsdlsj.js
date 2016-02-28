//++++++++++++++++++++++++++++++++++++++++++
//这个案例中根本不需要有window.onload这一行代码也是可以的。
//window.onload=function updater(){
	var s=0;
	var m=0;
	var h=0;
	//执行循环
	function updater(){
		s+=1;
		if(s==60){
			s=0;
			m+=1;
		}
		if(m==60){
			m=0;
			h+=1;
		}
		var doc="您在本页停留了："+h+"时"+m+"分"+s+"秒";
		document.getElementById("timeshow").innerHTML=doc;
		setTimeout(updater,1000);
	}
	setTimeout(updater,1000);
//}


