/**
 * Created by jszhou on 2017/1/2.
 */
var wrap = document.querySelector('.js-wrap'),
    docFragWrap = document.createDocumentFragment(),
    docFrag = document.createDocumentFragment(),
    h2 = document.createElement('h2'),
    p = document.createElement('p');

h2.textContent = 'head';
docFragWrap.appendChild(h2);

p.textContent = 'content';
docFrag.appendChild(p);

docFragWrap.appendChild(docFrag);
console.log(docFrag.childNodes.length); // 0

wrap.appendChild(docFragWrap);
console.log(docFragWrap.childNodes.length); // 0