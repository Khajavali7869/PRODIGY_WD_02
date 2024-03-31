window.onload=function(){
    let min=0;
    let sec=0;
    let tens=0;
    let appendmin=document.querySelector('#min');
    let appendtens=document.querySelector('#tens');
    let appendsec=document.querySelector('#sec');
    let start=document.querySelector('#start');
    let stop=document.querySelector('#stop');
    let reset=document.querySelector('#reset');
    let interval;

  const starttimer=()=>{
    tens++;
    if(tens<=9){
        appendtens.innerHTML='0'+tens;
    }
    if(tens>9){
        appendtens.innerHTML=tens;
    }
    if(tens>99){
        sec++;
        appendsec.innerHTML='0'+sec;
        tens=0;
        appendtens.innerHTML='0'+0;
    }
    if(sec>9){
        appendsec.innerHTML=sec;
    }
    if(sec>59){
        min++;
        appendmin.innerHTML='0'+min;
        sec=0;
        appendsec.innerHTML='0'+0;
    }
  };
start.onclick=()=>{
clearInterval(interval);
interval=setInterval(starttimer,10);
};
stop.onclick=()=>{
clearInterval(interval);
};
reset.onclick=()=>{
clearInterval(interval);
tens='00';
sec='00';
min='00';
appendtens.innerHTML=tens;
appendmin.innerHTML=min;
appendsec.innerHTML=sec;
};
};