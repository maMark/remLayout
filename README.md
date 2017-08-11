# remLayout
移动端rem自适应布局：以一张设计稿为基准适应所有手机设备的屏幕。

1、存在关系：与当前设备宽度1:1的网页宽度/与设计稿1:1的网页宽度 = 与当前设备1:1网页的html字体大小/与设计稿1:1网页的html字体大小。简化：当前度/设计稿宽度 = 当前宽html字体大小 / 设计稿宽html字体大小

2、思路：

	使用viewport让页面宽度为设备宽度;
	
	规定基准设计稿的宽度;
	
	规定与设计稿1:1网页的html字体大小;
	
	根据当前页面宽度与设计稿的缩放比例处理页面的html字体大小;
	
	按设计稿算出元素的尺寸，转换成rem单位。页面的所有尺寸使用rem作为单位。

3、例子： 750设计稿 设计稿html字体为100（为了好计算），1rem = 100px;算出设计稿元素的尺寸除以100即得到相应的rem单位尺寸。

比如750设计稿的100px*100px图片，转换成rem，由于1rem相当于（后面有解释为什么是相当于）是1*html字体大小，并且750对应的html字体大小是100px。所以图片的尺寸是1rem*1rem。

750的页面放到375的屏幕上，缩小了2倍，所以在375屏幕上网页的html字体大小就是 100/2 = 50；这个计算使用js动态计算就可以设备所有设备。

4、方案一:

<pre>
function refreshRem() {
	//750设计稿、100转换基数：在750设计稿上算得宽度为100px 转换为rem 即 1rem
	//对应关系 document.documentElement.getBoundingClientRect().width/750 = x/100，x为当前屏幕对应的字体大小
	var designWidth = 750; //以750设计稿为基准  也可以以640设计稿为基准
	var rem2px = 100; //转换基数为100（100好计算，如果是10px，1rem=10px，但是浏览器支持的最小字体是12px 会转成 1rem = 12px ）
	var currentDeviceWidth = document.documentElement.getBoundingClientRect().width;
	var currentFontSize = (currentDeviceWidth / designWidth) * rem2px;
	document.documentElement.setAttribute("style", "font-size:" + currentFontSize + "px;");
}
refreshRem();
window.addEventListener("resize", refreshRem);
</pre>

该方案的缺陷：没有考虑浏览器的默认字体大小，用户改变浏览器的字体大小会影响页面布局。

问题本质所在： 1rem = 1 * (htmlFontSize / 16) * defaultFontSize，而defaultFontSize在安卓手机的浏览器会被改变。

如果html字体大小使用percent百分比表示,就可以避免浏览器默认字体的问题。 

求html字体百分比的公式: htmlFontSize = defaultFontSize * percent ；=>percent = （designWidth / htmlWidth * rem2px） / defaulFontSize;

defaultFontSize可用window.getComputedStyle(html, null).getPropertyValue('font-size')获取。
<hr />
请使用方案三解决方案一的问题。

方案三：
<pre>
	var designWidth = 750, rem2px = 100;
	var html = document.querySelector("html");
	//考虑android浏览器默认字体大小不是16px的情况，需要获取实际的字体大小
	var htmlFontSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
	function refreshRem() {
		html.style.fontSize = html.getBoundingClientRect().width / designWidth * rem2px / htmlFontSize * 100 + '%';
	}
	refreshRem();
	//window.resize检测用户设备横屏和竖屏
	window.addEventListener("resize", function(){
		refreshRem();
	});
</pre>
	
