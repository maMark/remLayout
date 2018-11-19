//  该方案跟浏览器的字体相关 修改浏览器默认字体可适应
//  默认为750px的设计稿  100为换算基数 即1rem = 100px
//  不考虑dpr，如需考虑dpr使用淘宝的flexible.js  flexible方案是跟屏幕宽度挂钩，无法根据浏览器字体自适应
(function remLayout(window, document) {
  var designWidth = 750, rem2px = 100;
  var html = document.querySelector("html");
  //考虑android浏览器默认字体大小不是16px的情况，需要获取实际的字体大小
  var htmlFontSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
  function refreshRem() {
    //  html标签的字体大小设为百分比；html字体大小为百分比即 fontSize = 默认字体大小（16px） * 百分比；
    html.style.fontSize = html.getBoundingClientRect().width / designWidth * rem2px / htmlFontSize * 100 + '%';
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
