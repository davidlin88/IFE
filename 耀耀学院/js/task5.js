function $(id){
	return document.getElementById(id);
}
var box = $('box'),
run = $('run'),
go = $('go'),
turnLeft = $('turnLeft'),
turnRight = $('turnRight'),
turnBack = $('turnBack'),
traTop = $('traTop'),
traRight = $('traRight'),
traBottom = $('traBottom'),
traLeft = $('traLeft'),
movTop = $('movTop'),
movRight = $('movRight'),
movBottom= $('movBottom'),
movLeft = $('movLeft');

// 给run按钮绑定指令对应事件函数
run.onclick = function(){
	var input = $('input').value;
	switch(input)
	{
		case('GO'):
		GO();
		break;

		case('TURN LEFT'):
		turnLeft.click();
		break;

		case('TURN RIGHT'):
		turnRight.click();
		break;

		case('TURN BACK'):
		turnBottom.click();
		break;

		case('TRA TOP'):
		traTop.click();
		break;

		case('TRA RIG'):
		traRight.click();
		break;

		case('TRA BOT'):
		traBottom.click();
		break;

		case('TRA LEF'):
		traLeft.click();
		break;

		case('TUMOV TOP'):
		movTop.click();
		break;

		case('MOV RIG'):
		movRight.click();
		break;

		case('MOV BOT'):
		movBottom.click();
		break;

		case('MOV LEF'):
		movLeft.click();
		break;
	}

	
}
// 给控制按钮绑定事件
// 前进和转向按钮
go.onclick = function(){
	GO();
}
turnLeft.onclick = function(){
	reg -= 90;
	turn();
}
turnRight.onclick = function(){
	reg += 90;
	turn();
}
turnBack.onclick = function(){
	reg += 180;
	turn();
}

// 平移按钮
traTop.onclick = function(){
	topValue -= 50;
	move();
}
traRight.onclick = function(){
	leftValue += 50;
	move();
}
traBottom.onclick = function(){
	topValue += 50;
	move();
}
traLeft.onclick = function(){
	leftValue -= 50;
	move();
}

// mov按钮
movTop.onclick = function(){
	reg = 0;	//改变角度值
	turn();		//转向
	traTop.click();	//触发平移按钮的click方法
}
movRight.onclick = function(){
	reg = 90;
	turn();
	traRight.click();
}
movBottom.onclick = function(){
	reg = 180;
	turn();
	traBottom.click();
}
movLeft.onclick = function(){
	reg = -90;
	turn();
	traLeft.click();
}

// 定义方块的初始坐标
var topValue = 400;
var leftValue = 400;

// 前进函数
function GO(){
	// 根据朝向，决定前进对坐标的改变
	var face = reg / 90 % 4;
	console.log(face);
	switch(face)
	{
		case(0):
		topValue -=50;
		break;

		case(1):
		case(-3):
		leftValue +=50;
		break;

		case(2):
		case(-2):
		topValue += 50;
		break;

		case(3):
		case(-1):
		leftValue -=50;
		break;
	}
	move();
}

// 移动函数
function move(){
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

// 定义初始角度
var reg = 0;
// 转向函数
function turn(){
	var rotate = "rotate(" + reg + "deg)"
	box.style.transform = rotate;
}