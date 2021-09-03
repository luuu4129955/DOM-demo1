const div = dom.create("<div>我是用create()新建的一个节点</div>");
dom.after(test, div);
const div3 = dom.create(
  "<div id='parent'>我是create()创建的一个节点，稍后我将把test节点包起来</div>"
);

dom.wrap(test, div3);

dom.attr(test, "title", "我是test的新title");
// 获取test的新title并打印到控制台
const title = dom.attr(test, "title");
console.log(`title:${title}`);

dom.text(test, "我是test节点内的新文本，点我测试on()");
dom.text(test);

dom.html(getHTML, "<div>我是修改了html后的新节点</div>");

dom.text(style, "我的样式被修改了");
dom.style(style, "border", "2px solid red");
dom.style(style, "border");

dom.class.add(test, "red");
// test新添加的class打印到控制台
console.log(`我是test新增的class：${dom.class.add(test)}`);

dom.on(test, "click", () => {
  alert(`点击了test节点`);
});

const testDiv = dom.find("#test")[0];
console.log(testDiv);

//遍历travel的所有节点，修改字体颜色为红色
const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(`我是t2节点，我在我的全部兄弟节点中排行第${dom.index(t2)}`);
