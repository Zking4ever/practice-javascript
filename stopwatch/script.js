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
    elapseTimeInHour = elapseTime / (1000);
    _('display').innerHTML = elapseTimeInHour;
}