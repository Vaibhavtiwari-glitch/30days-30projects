const btns = document.querySelectorAll('.btns');
const screen = document.querySelector('.screen');
const equal = document.querySelector('#equalto');
const clear = document.querySelector('.clear');
const del = document.querySelector('.dl')
let value;
let delet;
btns.forEach(function(e){
e.addEventListener('click',function(k){
    if(k.target.innerHTML == 'AC'){
        screen.innerHTML ='';
    }
    else if(k.target.innerHTML != '=' && k.target.innerHTML != 'Del'){
value = screen.innerHTML += k.target.innerHTML;
    }
    delet = screen.innerHTML;
})
})
equal.addEventListener('click',function(e){
    e.target.classList.add('active');
    if(e.target.classList.contains('active')){
    screen.innerHTML = eval(value);
}
});
del.addEventListener('click',function(){
delet = screen.innerHTML.substring(0,screen.innerHTML.length-1);
screen.innerHTML = delet;
})