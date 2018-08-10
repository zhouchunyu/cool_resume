var result = `/* 你好，欢迎来到前端世界。
在这里你可以实现所有你想象的效果。

你可以轻易的改变这个世界的色彩。*/

* {
  transition: all 1s
}

#code {
  background: #ddd;
  font-size: 16px;
}

/* 代码看着不清晰，没关系，加点高亮再看看 */

.token.selector {
  color: #690;
}

.token.property {
  color: #905;
}

.token.function {
  color: #DD4A68;
}

/* 再加点酷炫的动画 */

#code {
  transform: rotate(360deg);
}

/* 展示结束了，准备自我介绍了 */
#code {
  width: 50%;
}

body {
  display: flex;
}

`;

var selfInfoString = `/* 我是周春雨，我为自己袋盐 */
`;

var js = "var data = 1;";

var n = 0;
id = setInterval(() => {
  n+=1;
  code.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css);
  styleTag.innerHTML = result.substring(0, n);
  if(n === result.length ){
    console.log('clear')
    window.clearInterval(id);
    createSelfInfo();
    addSelfInfo();
  }
}, 10)

function createSelfInfo(){
  div = document.createElement('div');
  div.id = 'selfInfo';
  document.body.appendChild(div);
}

function addSelfInfo(){
  var n = 0;
  addSelfInfoId = setInterval(() => {
    n+=1;
    selfInfo.innerHTML += Prism.highlight(selfInfoString.substring(n-1, n), Prism.languages.css);
    styleTag.innerHTML += result.substring(n-1, n);
    if(n === result.length ){
      window.clearInterval(addSelfInfoId);
    }
  }, 10)
}