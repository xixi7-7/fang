var acc = document.getElementsByClassName('acc');

var a = document.getElementsByTagName('a');


console.log(a);
console.log(acc);
for (var i = 0; i < a.length; i++) {
    li[i].setAttribute('index', i);
    li[i].onclick = function () {
        var index = this.getAttribute('index');
        console.log(index);

        for (var j = 0; j < a.length; j++) {
            a[j].className = '';
            a[index].className = 'active';
        }

        for (var k = 0; k < color.length; k++) {
            color[k].style.display = 'none';
            color[index].style.display = 'block';
        }
    }
}