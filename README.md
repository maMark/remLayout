# remLayout
  移动端rem自适应方案

## 使用方法
  1. 在head标签中引入remLayout.js
  
      ```<script src="./src/js/remLayout.js"></script>```
  
  2. css中使用rem作为单位
    
    例：设计稿中的box宽度为120px；则css中： .box{ width: 1.2rem; }

### 额外内容
+ banFontSizeChange.js 禁用微信浏览器的字体大小调整
+ 禁用ios中浏览器的字体调整
```
html{
  -webkit-text-size-adjust: 100% !important;
}
```
+ 禁用微信浏览器的字体大小修改功能: src/js/banFontSizeChange.js



