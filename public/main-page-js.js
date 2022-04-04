// JavaScript source code
let a = 0;
document.querySelector('.gallery__arrow').addEventListener('click', move1);
setInterval(move1, 3000);
var o1 = document.getElementById("o1");
function move1() {
    o1.classList.remove('gallery-1', 'gallery-2', 'gallery-3');
    if(a == 0){
        o1.classList.add('gallery-2');
        a = 1;
    }
    else if(a == 1){
        o1.classList.add('gallery-3');
        a = 2;
    }
    else if(a == 2){
        o1.classList.add('gallery');
        a = 0;
    }
}