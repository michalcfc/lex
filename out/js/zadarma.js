(function() {
    var script = document.createElement('script');
    script.src = 'https://my.zadarma.com/callmewidget/v2.0.8/loader.js';
    document.getElementById('zadarmaScripts').appendChild(script);
}());

var ZCallbackWidgetLinkId  = '1f2c2eeb9418df615886283a9e1ccd5d';
var ZCallbackWidgetDomain  = 'my.zadarma.com';
(function(){
    var lt = document.createElement('script');
    lt.type ='text/javascript';
    lt.charset = 'utf-8';
    lt.async = true;
    lt.src = 'https://' + ZCallbackWidgetDomain + '/callbackWidget/js/main.min.js';
    var sc = document.getElementsByTagName('script')[0];
    if (sc) sc.parentNode.insertBefore(lt, sc);
    else document.documentElement.firstChild.appendChild(lt);
})();