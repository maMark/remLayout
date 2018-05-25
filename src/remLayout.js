//不考虑dpr，如需考虑dpr使用淘宝的flexible.js 或添加demo_02里的dpr处理代码
function refreshRem() {
	var designWidth = 750, rem2px = 100;
	var html = document.querySelector("html");
	//考虑android浏览器默认字体大小不是16px的情况，需要获取实际的字体大小
	var htmlFontSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
	html.style.fontSize = html.getBoundingClientRect().width / designWidth * rem2px / htmlFontSize * 100 + '%';
}
refreshRem();
//window.resize检测用户设备横屏和竖屏
window.addEventListener("resize", function(){
	refreshRem();
});