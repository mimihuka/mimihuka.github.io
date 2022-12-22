function getCurrentTime(a) {
    var today = new Date();
    var day = today.getDay();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    switch (a) {
        case "day":
            return day;
            break;
        case "hours":
            if (parseInt(hours) < 10){
                return "0" + hours;
            }
            else{
                return hours;
            }
            break;
        case "minutes":
            if (parseInt(minutes) < 10){
                return "0" + minutes;
            }
            else{
                return minutes;
            }
            break;
        case "seconds":
            if (parseInt(seconds) < 10){
                return "0" + seconds;
            }
            else{
                return seconds;
            }
            break;
    }
  }
  function displaytime () {
    document.getElementById("curt").innerHTML = getCurrentTime("hours") + ":" + getCurrentTime("minutes") + ":" + getCurrentTime("seconds");
  }
  var a;
  var time;
  setInterval(displaytime, 1000);