"use strict";

var title = document.getElementById('title');
var nextPage = document.getElementById('next-page');

title.addEventListener('click',()=>{
    document.location.href = '/';
})


nextPage.addEventListener('click',(ev)=> {
    console.log(document.location);
    const path = document.location.pathname;
    const param = path.substring(1);
    if(param !== ''){
        const nextPage = parseInt(param) + 1;
        document.location.href = origin + '/' + nextPage.toString();
    }else{
        const origin = document.location.origin;
        document.location.href = origin + '/1';
    }
})