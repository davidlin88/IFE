function $(id){
	return document.getElementById(id);
}
var showIt = $('show'),
mask = $('mask'),
popup = $('popup'),
close = $('close');

function hide() {
	mask.style.display = "none";
	popup.style.display = "none";
}
function show(){
	mask.style.display = "block";
	popup.style.display = "block";
}
showIt.onclick = show;
mask.onclick = hide;
close.onclick = hide;
trag(popup);
// 定义一个拖拽函数
function trag(o){
	var params = {
		flag:false,
		left:0,
		top:0,
		currentX:0,
		currentY:0
	}
	var flag = false;
	o.onmousedown = function(event){
		params.currentX = event.clientX;
		params.currentY = event.clientY;
		params.left = o.offsetLeft;
		params.top = o.offsetTop;
		flag = true;
		o.style.cursor = "move";
	}
	o.onmousemove = function(event){
		if (!flag) {
			return;
		}
		o.style.cursor = "move";
		var disX = event.clientX - params.currentX;
		var disY = event.clientY - params.currentY;
		console.log(params.left + disX +'px');
		o.style.left = params.left + disX +'px';
		o.style.top = params.top + disY +'px';
	}
	o.onmouseup = function(event){
		flag = false;
		o.style.cursor = "default";
	}
}