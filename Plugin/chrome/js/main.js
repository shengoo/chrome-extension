var moduleName = (function  (my) {

  console.log("main.js loaded");
  var title = document.title;
  var description = "";
  var keywords = "";
  var url = document.URL;
  var icon;

  var metas = document.getElementsByTagName('meta');
  for (var x=0,y=metas.length; x<y; x++) {
    if (metas[x].name.toLowerCase() == "keywords") {
      keywords = metas[x].content;
    }
    if (metas[x].name.toLowerCase() == "description") {
      description = metas[x].content;
    }
  }
  var links = document.getElementsByTagName("link");
  for(var x=0,y=links.length;x<y;x++){
    if(links[x].rel.indexOf("icon") > -1){
      icon = links[x].href;
    }
  }


  my.do = function  () {
    console.log("title:" + title)
    console.log("keywords:" + keywords)
    console.log("description:" + description)
    console.log("url:" + url)
    console.log("icon:" + icon)
  }

  return my;
}(moduleName || {}));

moduleName.do();