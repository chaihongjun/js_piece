/**
 * Created by jszhou on 2016/12/29.
 */
// 异步加载js，运行document.write()，必须先运行document.open()，否则无效且有如下提示：
/**
 * Failed to execute 'write' on 'Document': It isn't possible to write into a document
 * from an asynchronously-loaded external script unless it is explicitly opened.
 */
document.open();
document.write('<p>test</p>');
document.close();

// 如果document.write()在文档加载完的回调中运行，则会先清空文档，再在body中写入内容
// window.onload = function () {
//     document.write('<p>test</p>');
// };
