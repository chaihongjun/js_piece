/**
 * Created by jzhou on 2016/12/28.
 */
// document.writeln()方法用于把字符串写入文档，可以传多个参数，写入的字符串会按HTML解析

// 文档还未加载完，还处于打开状态，直接把字符串+换行符插入文档，且会运行script里的内容
//document.writeln('<script>console.log(123)</script>');
document.writeln('jszhou');


window.onload = function () {
  // 如果文档已经加载完成，则先打开文档（清空文档），再把字符串+换行符插入文档
  document.writeln('<script>console.log("abc")</script>', '123', 'nihao');
  console.log(document.writeln('abc')); // undefined
  document.write('abc\n');
};
