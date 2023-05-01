$( window ).resize(function() {
    if($( window ).height() < 750){
        $(".footer").addClass("footer-padding");
        $(".footer p").addClass("footer-p")
    }else{
        $(".footer").removeClass("footer-padding");
        $(".footer p").removeClass("footer-p")
    }
  });
$(window).trigger("resize");


// initialize elements
let input_hours = $("#timer-hours");
let input_minutes = $("#timer-minutes");
let input_seconds = $("#timer-seconds");
let add_button = $("#add-timer");
let display_hours = $("#hours");
let display_minutes = $("#minutes");
let display_seconds = $("#seconds");

function displayTimer(){
    display_hours.val(hours);
    display_minutes.val(minutes);
    display_seconds.val(seconds);
}