var result = `/* 你好，欢迎来到前端世界。
在这里你可以实现所有你想象的效果。

你可以轻易的改变这个世界的色彩。*/

* {
  transition: all 1s
}

body {
  background: #ddd;
  font-size: 16px;
}

`;
var js = "var data = 1;";

var n = 0;
setInterval(() => {
  n+=1;
  console.log(n);
  code.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css);;
  styleTag.innerHTML = result.substring(0, n);
}, 10)