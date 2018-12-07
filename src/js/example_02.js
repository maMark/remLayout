(function remLayout(window, document) {
  //  为了方便换算，当设计稿和设备为1:1关系时, 将html字体大小设为100px 即 1rem = 100px
  //  即设置htmlFontSize = (clientWidth/designWidth) * 100;
  var designWidth = 750, rem2px = 100;
  var html = document.querySelector("html");
  var htmlFontSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
  function refreshRem() {
    //  使用百分比响应浏览器的字体大小改变
    html.style.fontSize = html.clientWidth / designWidth * rem2px / htmlFontSize * 100 + '%';
  }
  refreshRem();
  //  监测窗口变化
  window.addEventListener('resize', refreshRem);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      refreshRem()
    }
  });
})(window, document);

