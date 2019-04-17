$(document).ready(function() {

      var countDownDate = new Date("April 17, 2029 15:00:00").getTime();

    function countdown() {
      var currentTime = new Date().getTime();

      var distance = countDownDate - currentTime;

      if (distance > 0) {
        $("HTML").empty();
      }

    }

    setInterval(countdown, 1000);
});
