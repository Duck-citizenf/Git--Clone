// JavaScript source code
let a = 0;
document.querySelector('.menu__target').addEventListener('click', move1);
var o1 = document.getElementById("o1");
function move1() {
    o1.classList.remove('gallery_magazin', 'gallery-2_magazin');
    if(a == 0){
        o1.classList.add('gallery-2_magazin');
        a = 1;
    }
    else if(a == 1){
        o1.classList.add('gallery_magazin');
        a = 0;
    }
}