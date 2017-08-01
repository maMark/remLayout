function refreshRem() {
	var baseWidth = 750;	//以750设计稿为基准  也可以以640设计稿为基准
	var baseFontSize = 100;	//转换基数为100
	var currentDeviceWidth = document.documentElement.getBoundingClientRect().width;
	var currentFontSize = (currentDeviceWidth / baseWidth) * baseFontSize;
	document.documentElement.setAttribute("style", "font-size:" + currentFontSize + "px;");
}
refreshRem();
window.addEventListener("resize", refreshRem);