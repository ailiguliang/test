// 吸顶效果
var oFix = document.querySelector('.sec_con');
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 510){
        oFix.style.cssText = "position:fixed;top:0;";
    }else{
        oFix.style.cssText = "position:static;";
    }
}