window.onload=function (){
	var lis=document.getElementById("list").getElementsByTagName("li");
	var top=document.getElementById("top");
	var linum=lis.length;
	var color=new Array
		color[0]="#8F8DD2"
		color[1]="#E1CF97"
		color[2]="#E1AE97"
		color[3]="#CEDB93"
		color[4]="#8DAFD2"
	for(var i=0;i<linum;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			var index=this.id;
			document.getElementById("top").innerHTML=color[index];
			top.style.backgroundColor=color[index];
		}
	}
}