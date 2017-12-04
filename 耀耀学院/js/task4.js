function $(id){
	return document.getElementById(id);
}
var box = $('box'),
run = $('run'),
go = $('go'),
turnLeft = $('turnLeft'),
turnRight = $('turnRight'),
turnBack = $('turnBack');

// 给run按钮绑定指令对应事件函数
run.onclick = function(){
	var input = $('input').value;
	switch(input)
	{
		case('GO'):
		GO();
		break;

		case('TURN LEFT'):
		TURNLEFT();
		break;

		case('TURN RIGHT'):
		TURNRIGTH();
		break;

		case('TURN BACK'):
		TURNBACK();
		break;
	}

	
}
// 给控制按钮绑定事件
go.onclick = function(){
	GO();
}
turnLeft.onclick = function(){
	TURNLEFT();
}
turnRight.onclick = function(){
	TURNRIGHT();
}
turnBack.onclick = function(){
	TURNBACK();
}

// 前进函数
// 定义方块的初始坐标
var topValue = 400;
var leftValue = 400;
function GO(){
	// 根据朝向，决定前进对坐标的改变
	switch(face)
	{
		case(0):
		topValue -=50;
		break;

		case(1):
		leftValue +=50;
		break;

		case(2):
		topValue += 50;
		break;

		case(3):
		leftValue -=50;
		break;

	}
	// 防止小方块超出网格的判定
	if (topValue < 50) {
		topValue = 50;
	} else if (topValue > 500) {
		topValue = 500;
	}
	if (leftValue < 50) {
		leftValue = 50;
	} else if (leftValue > 500) {
		leftValue = 500;
	}
	// 小方块前进：将坐标转换为小方块的top和left值
	box.style.top = topValue + "px";
	box.style.left = leftValue + "px";
	console.log("top:"+topValue+"left:"+leftValue);
}
// 转向实现：定义一个变量face，根据face的值判定旋转角度
var face = 0;
function turn(){
	// 将face限定在1~3间
	if (face === 4) {
		face = 0;
	} else if (face === -1) {
		face = 3;
	} else if (face ===5) {
		face = 1;
	}
	switch(face)
	{
		case(0):
		box.style.transform = "rotate(0deg)";
		break;
		case(1):
		box.style.transform = "rotate(90deg)";
		break;
		case(2):
		box.style.transform = "rotate(180deg)";
		break;
		case(3):
		box.style.transform = "rotate(270deg)";
		break;
	}
}

// 转向函数
function TURNLEFT(){
	face--;
	turn();
}
function TURNRIGHT(){
	face++;
	turn();
}
function TURNBACK(){
	face+=2;
	turn();
}
