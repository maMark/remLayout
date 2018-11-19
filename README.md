# remLayout
1、demo_01 简化版flexible 不考虑dpr

2、demo_02 引用flexible

3、demo_03 使用百分比设置字体，可适应浏览器的字体大小改变

banFontSizeChange.js 禁用微信浏览器的字体大小调整

禁用ios中浏览器的字体调整
<pre>
  html{
    -webkit-text-size-adjust: 100% !important;
  }
</pre>

安卓应用中只能使用app原生功能

WebSettings settings = webView.getSettings();
settings.setTextZoom(100);

