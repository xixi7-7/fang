// 动态配置rem 
// 默认1rem  10px
function setRem() {
    // 获取屏幕的宽度
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 通过js动态改变html根节点字体大小
    var html = document.querySelector('html');
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px';
}

window.onresize = setRem;
window.onload = setRem;

