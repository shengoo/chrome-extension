javascript:var d=document;var b=d.body;if(b&&!document.xmlVersion){
    if(!moduleName){
        void(y=document.createElement('script'));
        void(y.src='http://localhost:7777/p/bookmark.js');
        void(b.appendChild(y));
    }
    else{
        moduleName.do();
    }
}