// 返回顶部
var oGoTop = document.querySelector('.toTop');
function goTop(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = setInterval(function(){
        scrollTop -= 30;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        if(scrollTop <= 0){
            clearInterval(timer)
        }
    },10)
}
oGoTop.onmouseover = function(){
    oGoTop.innerHTML = '返回顶部';
}
oGoTop.onmouseout = function(){
    oGoTop.innerHTML = '^';
}
oGoTop.onclick = function(){
    goTop();
}
