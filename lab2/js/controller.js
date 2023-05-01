input_hours.on( "change", function() {
    hours = input_hours.val();
});
input_minutes.on( "change", function() {
    minutes = input_minutes.val();
});
input_seconds.on( "change", function() {
    seconds = input_seconds.val();
});
add_button.on( "click", function (){
    if(hours === 0 && minutes === 0 && seconds === 0){
        alert("Please enter values to timer!")
    }else{
        input_hours.attr("disabled", true);
        input_minutes.attr("disabled", true);
        input_seconds.attr("disabled", true);
        add_button.attr("disabled", true);
        const timer = setInterval(
            () => {
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
              displayTimer();
              if(hours === 0 && minutes === 0 && seconds === 0){
                alert("Timer Expired!");
                clearInterval(timer);
                input_hours.attr("disabled", false);
                input_minutes.attr("disabled", false);
                input_seconds.attr("disabled", false);
                add_button.attr("disabled", false);
              }
            },
            1000
          );
          
    }
});
