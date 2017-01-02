/**
 * Created by jszhou on 2016/12/31.
 */
var wrap = document.querySelector('.js-wrap'),
    appendStr = '<script id="first">wrap.append("first");</script>' +
        '<script>wrap.append("second");</script>';

wrap.appendChildPlus(appendStr, '<div>nihao</div>');
