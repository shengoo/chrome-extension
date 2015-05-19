javascript:var d=document;var b=d.body;if(b&&!document.xmlVersion){
    if(!theName){
        void(y=document.createElement('script'));
        void(y.src='http://localhost:7777/p/bookmark.js');
        void(b.appendChild(y));
    }
    else{
        theName.do();
    }
}