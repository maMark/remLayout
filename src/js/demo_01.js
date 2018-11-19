//  简化版的flexible
//  该方案只跟屏幕宽度相关  不能根据浏览器字体自适应
//	该方案没有考虑dpr,如需考虑dpr使用flexible的方案
(function remLayout(window, document) {
  var docEl = document.documentElement;
  function refreshRem() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px'
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

