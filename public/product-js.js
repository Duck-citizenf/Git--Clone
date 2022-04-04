// JavaScript source code
document.querySelector('.gallery_1_product').addEventListener('click', move1);
document.querySelector('.gallery_2_product').addEventListener('click', move2);
document.querySelector('.gallery_3_product').addEventListener('click', move3);
let a = 0;
var o1 = document.getElementById("o1");
function move1() {
    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
    o1.classList.add('gallery-1_product');
    a = 0;
}
function move2() {
    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
    o1.classList.add('gallery-2_product');
    a = 1;
}
function move3() {
    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
    o1.classList.add('gallery-3_product');
    a = 2;
}
window.onload = function() {
    document.querySelector('.gallery-1_product').addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-3_product'); 
            a=2;
        }
        if (a==0){
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-2_product'); 
            a=1;
        }
        console.log(a);
    });

    document.querySelector('.gallery-1_product').addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-1_product'); 
            a=0;
        }
        if (a==2){
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-2_product'); 
            a=1;
        }
        console.log(a);
    });
}