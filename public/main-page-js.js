// JavaScript source code
let counter = 0;
document.querySelector('.gallery__arrow').addEventListener('click', move1);
setInterval(move1, 3000);
var o1 = document.getElementById("o1");
function move1() {
    o1.classList.remove('gallery-1', 'gallery-2', 'gallery-3');
    if(counter == 0){
        o1.classList.add('gallery-2');
        counter = 1;
    }
    else if(counter == 1){
        o1.classList.add('gallery-3');
        counter = 2;
    }
    else if(counter == 2){
        o1.classList.add('gallery');
        counter = 0;
    }
}