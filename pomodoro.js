function pomodoro(TOTAL_MINUTES){
  var TOTAL_MINUTES = TOTAL_MINUTES || 25;
  var MINUTE_LENGTH = 60000 
  var minutes = 0; 
  var minuteTimer = function(){
    minutes++;
    console.log('completed ' + minutes + ' minutes out of ' + TOTAL_MINUTES); 
    if (minutes >= TOTAL_MINUTES) {
      alert("allotted " + TOTAL_MINUTES + " minute period has elapsed")
    } else {
      setTimeout(minuteTimer, MINUTE_LENGTH)
    }
  };
  setTimeout(minuteTimer, MINUTE_LENGTH);
};
pomodoro(25);