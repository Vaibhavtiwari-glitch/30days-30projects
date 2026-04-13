const gen = document.querySelector('.generate');
const msg = document.querySelector('.msg');
let quotes = [
'billionaire',
'milionaire',
'trilionaire',
'multibillionaire',
'vaibhav',
'mummy',
'pappa',
'mouse',
'keyboard',
'dude',
'clear'
]
gen.addEventListener('click',function(){
let random = Math.round(Math.random()*10);
console.log(random);
if(random == random){
    random ++;
    msg.innerHTML = quotes[random];
    console.log(random)
}
else {
    msg.innerHTML = quotes[random];
}
});