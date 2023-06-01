// 查找显示隐藏对应的div
var color = document.getElementsByClassName('color');
// 1.找到点击的a  给每一个a加一个下标
// var a = document.getElementsByTagName('a');
var cli = document.getElementsByClassName('cli')

console.log(cli);
for (var i = 0; i < cli.length; i++) {
    // 此时 每一个a 标签 对应有一个下标 0 1
    cli[i].setAttribute('index', i);

    // 当前a被点击时
    cli[i].onclick = function () {
        //拿到被点击a的index 值 0  或者1 
        var index = this.getAttribute('index');
        console.log(index);
        // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
        for (var j = 0; j < cli.length; j++) {
            cli[j].className = '';
            cli[index].className = 'active';
        }
        // 再次使用排他法  把对应a 对应的html进行显示隐藏
        for (var k = 0; k < color.length; k++) {
            color[k].style.display = 'none';
            color[index].style.display = 'block';
        }
    }


    // var atife = document.getElementsByClassName('atife');
    // if (index === 0) {
    //     atife.eq(index).css('display', 'flex');

    // } else {
    //     atife.eq(index).show();
    // }
    // return false;
}