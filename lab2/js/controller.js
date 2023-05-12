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
      changeAccessibilityOfInputs(false);
      const timer = setInterval(
        () => {
          decreaseTimer()
          displayTimer();
          if(hours === 0 && minutes === 0 && seconds === 0){
            alert("Timer Expired!");
            clearInterval(timer);
            changeAccessibilityOfInputs(true);
          }
        },
        1000
      );
          
    }
});
