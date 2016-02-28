window.onload=function(){
	var top=document.getElementById("top");
	var index=0;
	var color=new Array
		color[0]="#8F8DD2"
		color[1]="#E1CF97"
		color[2]="#E1AE97"
		color[3]="#CEDB93"
		color[4]="#8DAFD2"
	function tuu(){
		top.innerHTML=color[index];
		top.style.background=color[index];
		//++++++++++++++++++++基本方式++++++++++++++++++++++++++
		if(index==color.length-1){
			index=0;
		}
		index+=1;
		//++++++++++++++++++++++++快捷的写法++++++++++++++++++++
		//(index < color.length-1) ? index++ : index = 0;
	}
	setInterval(tuu,1000);
		//	if(index=5){
		//		index=0;
		//	}
		//top.innerHTML=color[index];
}
