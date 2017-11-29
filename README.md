# 目录
此篇写一些做任务中的笔记，欢迎交流指正~~
# 小薇学院(html+css)
* [任务三-定位和居中](#任务三-定位和居中)
* [任务四-三栏式布局](#任务四-三栏式布局)
* [任务五-简单排版](#任务五-简单排版)
* [任务六-报纸排版](#任务六-报纸排版)
* [任务七-一个常见的技术产品官网](#任务七-一个常见的技术产品官网)
* [任务八-响应式网格（栅格化）](#任务八-响应式网格-栅格化)
* [任务九-报表查询页面](#任务九-报表查询页面)
* [任务十-flex弹性布局](#任务十-flex弹性布局)
* [任务十二-css3新特性](#任务十二-css3新特性)
# 斌斌学院(javaScript)
* [任务一-单个表单项的检验](#任务一-单个表单项的检验)
* [任务二-排序](#任务二-排序)
* [任务三-重排序](#任务三-重排序)
* [任务四-队列增删](#任务四-队列增删)
# 小薇学院(html+css)
## 任务三-定位和居中
[代码预览1](https://davidlin88.github.io/IFE/小薇学院/任务三-定位和居中-float.html)
[代码预览2](https://davidlin88.github.io/IFE/小薇学院/任务三-定位和居中-position.html)
* 代码预览1中，使用`float`浮动时，左右块的html代码要写在中间块（未浮动）的后面；
* 代码预览1中，使用`float`浮动时，用h3做左块标题时发现，定位出现问题，疑似h标签带有默认边距，会破坏构想的布局，遂换成span标签，**（暂时不知道原因，待补充）**；
* 代码预览2用`positon:absolute`定位时，其父容器要加`position:relative`，否则会以根元素进行定位；
* 容器内元素超出容器大小时，可用对容器添加`overflow:auto`，让容器根据内容扩张；
## 任务四-三栏式布局
[代码预览1](https://davidlin88.github.io/IFE/小薇学院/任务四-三栏式布局-float.html)
[代码预览2](https://davidlin88.github.io/IFE/小薇学院/任务四-三栏式布局-position.html)
* 代码预览1中，对黄色块用`float`浮动中，使用了
```
margin: auto;
position: absolute;
top: 0;right: 0;bottom: 0;left: 0;
```
来达到让灰色块水平垂直居中的目的，有称此方法为“绝对居中”；
* 代码预览2中，对黄色块用`positon:absolute`定位中，使用
```
 position: relative;
 margin: 0 auto;
 top: 50%;
 transform: translateY(-50%);
 ```
  进行定位，原理是用`margin: 0 auto`让div水平居中，再用`top: 50%;`让`div`下移父元素50%高度，最后`transform: translateY(-50%);`往上移回div高度的50%，注意，这里要**对`body`和`html`标签添加`height=100%`，否则他两的高度会以`div`的高度为准撑开，无法占满屏幕**;
## 任务五-简单排版
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务五-简单排版.html)
* `header`左侧的logo素材上下空白留底过多，此处使用`margin:-19px`将logo移到合适的位置
* 链接居右通过对`header`增加`text-align:right`属性实现，同时让内容撑开`header`容器
* 去除列表的样式（ol的圆点）：`list-style:none`
* 表格单元格跨行：`rowspan:n`；表格单元格跨列`colspan:n`
* 合并表格边框模型：`border-collapse:collapse`
* **常用资料填写页面的对齐：**

*html：*
```
<div class="item">
    <label>姓名</label>
    <input type="text"/>
</div>
```
*..左侧若为空，label标签内容可不填*

*css：*
```
.item{
    margin:0 auto;  //容器水平居中
}
.item + label{
    display:inline-block;  //将label设为inline-block后，设置宽高并和input同行显示；
    width:150px;
    text-align:right;  //label内容向右，与input对齐
    margin-right:5px;
    vertical-align:top;  //垂直居上；
}
```
## 任务六-报纸排版
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务六-报纸排版.html)
* 网页头部左侧块，写一半的时候文字是在红色块居上的，第一反应是想用`veitical-align:bottom`，但并没有效果。我的理解是veitical-align是用在元素在文档流中的垂直方向的对齐定位，而此处左侧文字就是全部的文档流（右侧被浮动了），所以无效~]<br>
另外，`vertical-align`可用于单选复选框与文字的对齐等，了解更多请点击：<br>
[vertical-align与line-height的基友关系](http://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)<br>
[vertical-align的理解(一)](http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/)<br>
[vertical-align的理解(二)](http://www.zhangxinxu.com/wordpress/2010/06/css-vertical-align%E7%9A%84%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89%E4%B9%8Btext-top%E7%AF%87/)
* 在写`.what :nth-child(2)`的时候偶然发现，`.what`和`:nth-child`中间有无空格完全不一样，测试后得出：<br>有空格时，即`.what :nth-child(2)`，表示选择`class = what`元素下的第二个子元素；<br>无空格时，即`.what:nth-child(2)`表示选择`class = what`元素的父元素下的第二个子元素，使用时要注意区别；
* 伪元素选择器-首字符，即`::first-letter`对英文，选到的是第一个字母而非单词；对中文，选到的是第一个汉字，但其仍占一行的空间；
## 任务七-一个常见的技术产品官网
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务七-常见的技术产品官网.html)
* 这个网页我采用了大量样式分离的css命名方法，好处是提高了样式复用性，精简了css代码，弊端是html增多；
* 去除button等点击后出现的蓝色边框：
```
button:focus{
  ouline:none;
}
```
* 做一个三栏式布局时，我用了`ul`+`li`的方式，却发现含p、span等标签的li元素和空的li元素无法对齐，在Segmentfault上提问后方知：
**`li`元素`display:inline-blcok`，其默认是`vertical-align:baseline`，在正常流中，对齐方式是以最右的元素为基准，因此发生了无法对齐的情况**<br>
解决方法：（1）给每个`li`添加`vertical-align:top` 
（2）用其他方法布局：
1.最传统的表格布局
2.利用浮动
3.绝对定位
4.CSS3多列
5.flex布局
* 用`ul`+`li`时还有个问题，如果li与li标签间有空格，显示的li元素间就有间距，解决方法：给`ul`添加`font-size:0`，li内若有文字需再增加`font-size`属性
* 导航栏下图片的遮罩试了2种方法：<br>
1.css3的多个`background-image`+`linear-gradient`：
```
#part1{
	position: relative;
	width: 1280px;
	height: 855px;
	background-image: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),
	url(../img/images/1_03.png);
}
```
2.添加伪元素：
```
#part1::before{
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.2);
}
```
* 元素浮动后，会脱离父盒子导致盒子坍塌，解决方法：清除浮动
1.对父盒子使用伪元素：
```
#part2::after{
	content: "";
	display: block;
	height: 0;
	clear: both;
}
```
* css画三角形：
```
.triangle{
    height: 0;
    width: 0;
    border-left: 24px solid #fff;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
}
```
* 在根据ps设计图定位时，计算上下间距时减去了字体大小和ps图上所占高度差，效果看起来还好，不知实际工作是否可行，有待验证
### 后续改进计划 ：
* 添加指针在按钮和超链接等悬浮时的动画
* 添加下拉菜单的样式
* 等等
## 任务八-响应式网格-栅格化
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务八-响应式网格-栅格化.html)
* 此响应式网格实现原理：css3的media queries（媒体查询），即判断设备，引用不同的css代码;
除此任务的引用方法，还可借此引用不同的css文件，如`<link rel="stylesheet" type="text/css" href="example.css" 
	media="(max-width: 600px)">`
[了解更多](https://swordair.com/details-on-css3-media-queries/)
```
/*
	屏幕尺寸大于768px时，应用下面的css样式
	screen代表设备类型，设备前可加only、not筛选显示设备 
	and表与逻辑 可多个 如@media screen and (min-width:768px) and (max-width:1280px){...}
	注意and后有空格
 */
@media screen and (min-width:768px){
	.col-md-1{
		width: calc(8.333% - 20px);
	}
	.col-md-2{
		width: calc(16.666% - 20px);
	}
	.col-md-3{
		width: calc(25% - 20px);
	}
	.col-md-4{
		width: calc(33.333% - 20px);
	}
	.col-md-5{
		width: calc(41.666% - 20px);
	}
	.col-md-6{
		width: calc(50% - 20px);
	}

}
```
* 在使用百分百宽高时，`width:calc(100%-20px)`很方便
* 针对浏览器支持的最小中文字体为12px解决办法：使用`transform`按比缩放，如：
```
.fs10{
	font-size: 12px;
	transform:scale(0.83);
	display: inline-block;
}
```
## 任务九-报表查询页面
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务九-报表查询页面.html)
* `box-shadow`使用`inset`属性时，x和y坐标都要加个负号才和原来阴影位置相同
* 180度旋转元素（此处是上下页的按钮）：`transform:rotate(180deg);`
* 单独的圆角：`border-radius:5px 5px 0 0;`顺序依次是左上、右上、右下、左下
* 表格单元格间隙：`border-spacing: 3px;`
* css顺序选择`:nth-child(n)`，倒序选择：`:nth-last-child(n)`，父元素的末位子元素：`:last-child`
## 任务十-flex弹性布局
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务十-flex弹性布局.html)
[flex语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[flex实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
* `@media`媒体查询里`max-width`和`min-width`都包含那个值本身
* `flex-wrap: wrap;`换行后，交叉轴的定位要用`align-content`而不是`align-items`
## 任务十一-移动web页面布局
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务十一-移动web页面布局.html)
* 此任务实现响应式原理：用媒体查询,设备屏幕较大时，即`min-width = 401px`时，给`html`一个`font-size=625%`;设备屏幕较小时，即`max-width=400px`，`font-size=312.5%`，css部分的长度和字体大小单位除边框等少数元素外全部转化为rem，以实现在小屏幕上较好的阅读体验。设`font-size=625%`的原因是测试用的chrome浏览器支持的最小汉字字体是12px因此不能设`font-size=62.5%`
* 边写总结边测试的时候发现的：`flex:1`失效时，给元素加上任意宽度即可，结合知乎上的一个解释，我的理解是是`flex:1`中的`flex-flow:1`，指定的是除已被占的空间外，剩余空间的分配比，即使2元素设了`flex:1`，他们本身的宽度若不等，多出的剩余空间即使按1:1分配给他们，他们所占的空间也不会相等
* 设置`width`的方法可以解决页面最底部三只小熊即使设了`flex:1`后，扔会超出容器大小的问题，另：`img`外没有`div`包裹时，默认情况下改变宽度，高度不会变化，图片会变形，解决方法：设置`height:100%`，或用`div`包裹
## 任务十二-css3新特性
[代码预览](https://davidlin88.github.io/IFE/小薇学院/任务十二-css3新特性.html)
* 很实用的css选择器：`ul li:nth(-n+3){...}`，表示选择`ul`下第三个及第三个之前的`li`元素；n为正则表示选择之后的
* `transition:width 1s;`表示执行`width`属性的过渡动画，时间为1s，`width`也可为`all`，可配合`:hover`、`:target`等伪类使用
* 一个纯css轮播图，原理是利用锚点和`slide-content:target{...}`配合`animation`及`@keyframes`使用，轮播效果的实现是利用`div`块的`left`或`right`属性由-100%、0、100%间的变化构成的动画达到的，注意元素的初始位置应在左侧，关于这个，我在segmentfault上有个[提问](https://segmentfault.com/q/1010000012164644?_ea=2899131)。
# 斌斌学院(javaScript)
## 任务一-单个表单项的检验
[代码预览](https://davidlin88.github.io/IFE/斌斌学院/任务一-单个表单项的检验.html)
## 任务二-排序
[代码预览](https://davidlin88.github.io/IFE/斌斌学院/任务二-排序.html)
* `ArrayObject.sort(func)`：数组的排序，括号内为比较函数：
```
ArrayObject.sort(function(a,b){
  if (a < b) {
    return -1;
  }else if(a = b){
    return 0;
  }else if (a > b) {
    return 1;
  }
});
```
以上为升序排列，可简写为：
```
  ArrayObject.sort(function(a,b){
    return a - b;
  });
```
降序排列可简写为：
```
  ArrayObject.sort(function(a,b){
    return b - a;
  });
```
## 任务三-重排序
[代码预览](https://davidlin88.github.io/IFE/斌斌学院/任务三-重排序.html)
* 截取字符串：`stringObject.slice(start,end)`，不包括`end`，`end`省略时截取至字符串末尾
* 分割字符串：`stringObject.split(separator)`，以`separator`为分隔符分割字符串，返回数组
* 数组增加元素：`arrayObject.push(newelement1,....)`
## 任务四-队列增删
[代码预览](https://davidlin88.github.io/IFE/斌斌学院/任务四-队列增删.html)
* 正常书写情况下`span`间会有间距，类似[任务七](#任务七-一个常见的技术产品官网)，此处解决方法是`float:left`
* 判断是否为非数字：`isNaN()`，以前记过，太久没写js忘了T T
* 终止函数的方法：`return`，同时终止调用此函数的函数，让内部函数返回布尔值，外部函数做一个判断：
```
function numJudge(value){
	if (isNaN(value)) {
		alert("请输入数字~");
		return false;
	} else if(value == ""){
		alert("您倒是输点东西啊~")
		return false;
	}else return true;
}
```
```
if (!numJudge(value)) return;
```
* `childNodes`与`children`区别：`childNodes`取的是所有节点，包括元素节点和文本节点；`children`只获取文本节点，操作DOM推荐`children`;`firstChild`、`lastChild`、`firstElementChild`、`firstElementChild`同理，推荐后两者。
* 插入节点原理：前：`boxes.insertBefore(span,boxes.children[0])`；后：`boxes.appendChild(span)`
* 删除节点原理：前：`boxes.removeChild(boxes.children[0])`；后：`boxes.removeChild(boxes.lastElementChild)`

