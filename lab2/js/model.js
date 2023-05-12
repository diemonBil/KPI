let hours = 0;
let minutes = 0;
let seconds = 0;
function decreaseTimer(){
    if(seconds > 0){
        seconds -= 1;
    }else if(minutes > 0){
        minutes -= 1;
        seconds += 59;
    }else if(hours > 0){
        hours -= 1;
        minutes += 59;
        seconds += 59;
    }
}