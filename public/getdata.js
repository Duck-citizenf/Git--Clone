var ginsName = document.querySelectorAll('.main__card-middle-font');
var ginsPrice = document.querySelectorAll('.main__card-end-font');
document.querySelector('.product1').addEventListener('click', addToCart);
window.onload = function(){
    console.log(ginsName[1].innerHTML)
    console.log(ginsPrice[1].innerHTML)
}

function addToCart(){
    document.querySelector('.header__basket-list').innerHTML += '<div class="flex relative header__basket-middle"><span class="bottle"><img src="/images/like.png"/></span><div class="wide">    <a>Der Hopfen Gin</a>    <div class="flex header__basket-line">        <select>        <option>1</option>        <option>2</option>        <option>3</option>        <option>4</option>        <option>5</option>        <option>6</option>        <option>7</option>        <option>8</option>        <option>9</option>        <option>10</option>        <option>11</option>        <option>12</option>        <option>13</option>        <option>14</option>        <option>15</option>        <option>16</option>        <option>17</option>        <option>18</option>        <option>19</option>        <option>20</option>        </select>        <a>€29,50</a>    </div></div></div>'
}