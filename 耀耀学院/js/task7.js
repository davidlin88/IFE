var tbody = document.getElementsByTagName('tbody')[0];
var ascBtn = document.getElementsByClassName('asc');
var descBtn = document.getElementsByClassName('desc');
for (var i = 0; i < ascBtn.length; i++) {
	!function(i){
		ascBtn[i].onclick = function(){
			sortTable(i+1,true);
		}
		descBtn[i].onclick = function(){
			sortTable(i+1);
		}

	}(i);
}
// 表格排序函数
function sortTable(colNum,flag){
	var rowsArr = [];
	var colsArr = [];

	// 获取表格行与列
	for (var i = 0; i < tbody.rows.length; i++) {
		rowsArr[i] = tbody.rows[i];
		colsArr[i] = rowsArr[i].cells[colNum];
	}
	// 降序排序
	colsArr.sort(function(a,b){
		return b.innerHTML - a.innerHTML;
	});
	// 根据flag判断是否反排序
	if (flag) {
		colsArr.reverse();
	}
	
	// 排序后放入临时数组中
	var rowsTem = [];
	for (var i = 0; i < colsArr.length; i++) {
		var rowTem = colsArr[i].parentNode.innerHTML;
		rowsTem[i] = rowTem;
	}

	// 用临时数组替换原表格
	for (var i = 0; i < tbody.rows.length; i++) {
		tbody.rows[i].innerHTML = rowsTem[i];
	} 


}




