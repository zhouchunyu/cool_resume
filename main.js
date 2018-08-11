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

var selfInfoString = `/* 我是zcy4coding，我喂自己袋盐。
想要更多了解我可以访问我的个人网站
*/
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
    addSelfInfo(addResumeLink);
  }
}, 50)

function createSelfInfo(){
  div = document.createElement('div');
  div.id = 'selfInfo';
  document.body.appendChild(div);
}

function addSelfInfo(cb){
  var n = 0;
  addSelfInfoId = setInterval(() => {
    n+=1;
    selfInfo.innerHTML += selfInfoString.substring(n-1, n);
    styleTag.innerHTML += selfInfoString.substring(n-1, n);
    if(n === selfInfoString.length ){
      window.clearInterval(addSelfInfoId);
      cb.call();
    }
  }, 50)
}

function addResumeLink() {
  resume_link = document.createElement('a');
  resume_link.href = "https://zhouchunyu.github.io/resume/";
  resume_link.target = '_blank';
  resume_link.innerHTML = '个人简历';
  selfInfo.appendChild(resume_link);
}