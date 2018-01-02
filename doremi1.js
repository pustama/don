    $.each($(".post-share[data-id]"), function(a, e) {
        var l = $(e).parent().find("#postshares").addClass("share-load"),
            i = new Firebase("https://sukses-3bdcb.firebaseio.com/pages/id/" + $(e).attr("data-id"));
        i.once("value", function(a) {
            var n = a.val(),
                t = !1;
            null == n && (n = {}, n.value = 0, n.url = window.location.href, n.id = $(e).attr("data-id"), t = !0), l.removeClass("share-load").text(n.value), n.value++, "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value))
        })
    });


    function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("https://urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    }

function ignielCSE() {
  if (document.readyState != 'complete') {
    return google.setOnLoadCallback(ignielCSE, true);
  }
  google.search.cse.element.render({gname:'gsearch', div:'ignielCSE', tag:'searchresults-only', attributes:{linkTarget:'', webSearchResultSetSize:'small'}});
  var element = google.search.cse.element.getElement('gsearch');
  //]]>
  element.execute(&quot;<b:if cond='data:post.labels'> <b:loop values='data:post.labels' var='label'> <data:label.name/> <b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>&quot;);};
window.__gcse = {
  parsetags: 'explicit',
  callback: ignielCSE
};
(function() {
var cx = '002515231240260949624:mi0p7qogfqy';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();