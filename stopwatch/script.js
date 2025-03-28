let startTime =0;
let isRunning = false;
let elapseTime =0;
let intervalId;
function _(e){
    return document.getElementById(e);
}

//function to start counting
_('start').addEventListener('click',function(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        isRunning = true;
        intervalId = setInterval(update,10);
    }
});

//function to stop counting

_('stop').addEventListener('click',function(){
    if(isRunning){
        clearInterval(intervalId);
        isRunning =false;
    }
});

function update(){
    elapseTime = Date.now() - startTime;
    elapseTimeInSecond = Math.floor(elapseTime / (1000))%60;
    elapseTimeInMinute = Math.floor(elapseTime / (1000*60))%60;
    elapseTimeInHour = Math.floor(elapseTime / (1000*60*60));
    _('display').innerHTML = elapseTimeInHour +":"+ elapseTimeInMinute +":"+ elapseTimeInSecond+":"+elapseTime;
}

//function to restart

_('reset').addEventListener('click',function(){
    _('display').innerHTML= "00:00:00:00";
    startTime =0;
    elapseTime =0;
    isRunning =false;
    clearInterval(intervalId);
})