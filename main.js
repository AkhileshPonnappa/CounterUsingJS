let increase = document.getElementById('add');
let decrease = document.getElementById('sub');

let number = document.getElementById('number');

let integer = 0;

increase.addEventListener('click',function(){
    integer = integer + 1;
    number.innerHTML = integer;
})

decrease.addEventListener('click',function(){
    integer = integer - 1;
    number.innerHTML = integer;
})