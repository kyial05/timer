let second=00;
let tens=00;
let mins=00;

let getSeconds=document.querySelector('.seconds');
let getTens=document.querySelector('.tens');
let getMins=document.querySelector('.mins');
let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click',()=>{
    interval=setInterval(startTimer,10)
})
btnStop.addEventListener('click',()=>{
    clearInterval(interval)
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval)
    tens='00';
    seconds='00';
    getSeconds.innerHTML=seconds;
    getTens.innerHTML=tens;
})

function startTimer(){
    tens++;
    if(tens<=9){
        getTens.innerHTML='0'+tens;
    }
    if(tens>9){
        getTens.innerHTML=tens;
    }
    if(tens>99){
        second++;
        getSeconds.innerHTML='0'+ second;
        tens='0'
        getTens.innerHTML='0'+'0';
    }
    if(second>9){
        getSeconds.innerHTML= second;
    }
    if(second>59){
        mins++;
        getMins.innerHTML='0'+mins;
        second='0'
        getSeconds.innerHTML='0'+'0';
    }
}