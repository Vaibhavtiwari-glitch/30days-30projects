const body = document.querySelector('body');
const input = document.querySelector('.input');
const change = document.querySelector('.change');
let values = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
let index;
let hexcode;
function randomhex(){
    hexcode = '#';
for(let i =0;i<6;i++){
    index = Math.floor(Math.random()*values.length);
    hexcode = hexcode + values[index];
}
}
function colorchange(){
    body.style.backgroundColor = hexcode;
        hexcode= '';
}
change.addEventListener('click',function(){
    randomhex();
    colorchange();
    
})