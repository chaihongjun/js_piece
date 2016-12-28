/**
 * Created by jszhou on 2016/12/28.
 */
// document.write()方法用于把字符串写入文档，可以传多个参数，写入的字符串会按HTML解析

// 文档还未加载完，还处于打开状态，直接把字符串插入文档，且会运行script里的内容
document.write('<script>console.log(123)</script>');

window.onload = function () {
    // 如果文档已经加载完成，则先打开文档（清空文档），再把字符串插入文档
    document.write('<script>console.log("abc")</script>','nihao');
    console.log(document.write('abc')); // undefined
};