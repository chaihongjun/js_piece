/**
 * Created by jszhou on 2016/12/29.
 */
document.write('<p>test</p>');

// 如果document.write()在文档加载完的回调中运行，则会先清空文档，再在body中写入内容
// window.onload = function () {
//     document.write('<p>test</p>');
// };