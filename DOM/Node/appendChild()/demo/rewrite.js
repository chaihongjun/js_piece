/**
 * Created by jszhou on 2016/12/31.
 */
(function () {
    var oldAppendChild = Node.prototype.appendChild,
        toArray = Array.from || function (arg) {
            return Array.prototype.slice.call(arg);
        };

    function strToNode(str){
        var div = document.createElement('div');
        div.innerHTML = str;
        return toArray(div.childNodes);
    }

    function isNode(arg) {
        return Boolean(typeof(arg) === 'object' && arg !== null && arg.nodeType > 0);
    }

    Node.prototype.appendChild = function () {
        var args = toArray(arguments),
            docFrag = document.createDocumentFragment();

        args.forEach(function (arg) {
            if (isNode(arg)) {
                return oldAppendChild.call(docFrag,arg);
            }

            strToNode(String(arg)).forEach(function (item) {
                oldAppendChild.call(docFrag,item);
            });
        });

        oldAppendChild.call(this, docFrag);
    };
})();

var wrap = document.querySelector('.js-wrap');
wrap.appendChild('<div>nihao</div>');
