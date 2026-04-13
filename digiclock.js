const screen = document.querySelector('.screen');
setInterval(function(){
let full = new Date();
let hrs = full.getHours();
let min = full.getMinutes();
let sec = full.getSeconds();
screen.innerHTML = hrs + ':' + min + ':' + sec ;
},1000);
