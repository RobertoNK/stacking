var topp = "a1";
function toTop(newTop){
    domTop = document.getElementById(topp).style;
    domNew = document.getElementById(newTop).style;

    domTop.zIndex = "0";
    domNew.zIndex = "10";
    topp=newTop;

}
