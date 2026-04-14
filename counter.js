const mainbtn = document.querySelector('.start');
const screen = document.querySelector('.screen');
const reset = document.querySelector('.reset');
let sec = 0;
let min = 0;
let hrs = 0;
let timerid = null;
function timer(){
    if(timerid) return;
timerid = setInterval(function(){
    
sec ++;
          if(sec == 60){
            min++;
            sec = 0;
          }
          if(min == 60){
            hrs ++;
            min = 0;
          }
          screen.innerHTML = `${hrs} : ${min} : ${sec}`;
        },1000)
        
} 
    mainbtn.addEventListener('click',function(){
        if(timerid == null){
        timer();
         mainbtn.innerHTML = 'stop';
        }     
        else{
            clearInterval(timerid);
            timerid = null;
            mainbtn.innerHTML = 'start';
        }
    })
    reset.addEventListener('click',function(){
        clearInterval(timerid);
         timerid = null;
        sec = 0 ;
        min = 0;
        hrs = 0;
        screen.innerHTML = `${hrs} : ${min} : ${sec}`;
    })