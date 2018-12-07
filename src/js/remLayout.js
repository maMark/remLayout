(function remLayout(window, document) {
  //  为了方便换算，当设计稿和设备为1:1关系时, 将html字体大小设为100px 即 1rem = 100px
  //  htmlFontSize = (clientWidth/designWidth) * 100;
  var designWidth = 750, rem2px = 100;
  var html = document.querySelector("html");
  function refreshRem() {
    //  设置固定px （用户改变浏览器字体大小后不影响布局）
    html.style.fontSize = html.clientWidth / designWidth * rem2px + 'px';
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
