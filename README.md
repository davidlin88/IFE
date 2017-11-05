
## 任务三：三栏式布局
[代码预览1](https://davidlin88.github.io/IFE/三栏式布局-float.html)
[代码预览2](https://davidlin88.github.io/IFE/三栏式布局-position.html)
### Tips:
* 代码预览1中，使用float浮动时，左右块的html代码要写在中间块（未浮动）的后面；
* 代码预览1中，使用float浮动时，用h3做左块标题时发现，定位出现问题，疑似h标签带有默认边距，会破坏构想的布局，遂换成span标签，**（暂时不知道原因，待补充）**；
* 代码预览2用`positon:absolute`定位时，其父容器要加`position:relative`，否则会以根元素进行定位；
* 容器内元素超出容器大小时，可用对容器添加`overflow:auto`，让容器根据内容扩张；
## 任务四：定位和居中
[代码预览1](https://davidlin88.github.io/IFE/定位和居中-float.html)
[代码预览2](https://davidlin88.github.io/IFE/定位和居中-position.html)
### Tips:
* 代码预览1中，对黄色块用float浮动中，使用了
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
  进行定位，原理是用`margin: 0 auto;`让div水平居中，再用`top: 50%;`让div下移父元素50%高度，最后`transform: translateY(-50%);`往上移回div高度的50%，注意，这里要**对body和html标签添加`height=100%`，否则他两的高度会以div的高度为准撑开，无法占满屏幕**;
