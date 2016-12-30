/**
 * Created by jszhou on 2016/12/30.
 */
var wrap = document.querySelector('.js-wrap'),
    newScript = document.createElement('script');

newScript.innerHTML = 'wrap.append("jszhou")';
wrap.appendChild(newScript);