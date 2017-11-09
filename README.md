此篇写一些做任务中积累的小知识点，欢迎交流指正~~
## 任务三：三栏式布局
[代码预览1](https://davidlin88.github.io/IFE/任务三-三栏式布局-float.html)
[代码预览2](https://davidlin88.github.io/IFE/任务三-三栏式布局-position.html)
### Tips:
* 代码预览1中，使用`float`浮动时，左右块的html代码要写在中间块（未浮动）的后面；
* 代码预览1中，使用`float`浮动时，用h3做左块标题时发现，定位出现问题，疑似h标签带有默认边距，会破坏构想的布局，遂换成span标签，**（暂时不知道原因，待补充）**；
* 代码预览2用`positon:absolute`定位时，其父容器要加`position:relative`，否则会以根元素进行定位；
* 容器内元素超出容器大小时，可用对容器添加`overflow:auto`，让容器根据内容扩张；
## 任务四：定位和居中
[代码预览1](https://davidlin88.github.io/IFE/任务四-定位和居中-float.html)
[代码预览2](https://davidlin88.github.io/IFE/任务四-定位和居中-position.html)
### Tips:
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
## 任务五
[代码预览](https://davidlin88.github.io/IFE/任务五.html)
### Tips：
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
## 任务六：报纸排版
[代码预览](https://davidlin88.github.io/IFE/任务六-报纸排版.html)
### Tips：
* 网页头部左侧块，写一半的时候文字是在红色块居上的，第一反应是想用`veitical-align:bottom`，但并没有效果。我的理解是veitical-align是用在元素在文档流中的垂直方向的对齐定位，而此处左侧文字就是全部的文档流（右侧被浮动了），所以无效~]<br>
另外，`vertical-align`可用于单选复选框与文字的对齐等，了解更多请点击：<br>
[vertical-align与line-height的基友关系](http://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)<br>
[vertical-align的理解(一)](http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/)<br>
[vertical-align的理解(二)](http://www.zhangxinxu.com/wordpress/2010/06/css-vertical-align%E7%9A%84%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89%E4%B9%8Btext-top%E7%AF%87/)
* 在写`.what :nth-child(2)`的时候偶然发现，`.what`和`:nth-child`中间有无空格完全不一样，测试后得出：<br>有空格时，即`.what :nth-child(2)`，表示选择`class = what`元素下的第二个子元素；<br>无空格时，即`.what:nth-child(2)`表示选择`class = what`元素的父元素下的第二个子元素，使用时要注意区别；
* 伪元素选择器-首字符，即`::first-letter`对英文，选到的是第一个字母而非单词；对中文，选到的是第一个汉字，但其仍占一行的空间；
