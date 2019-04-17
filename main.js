$(document).ready(function() {
  var vid = document.getElementById("horror");

  vid.autoplay = true;
  vid.load();

      var countDownDate = new Date("April 17, 2029 15:00:00").getTime();


//changes the background based on the time
    function countdown() {
      var currentTime = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - currentTime;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("clockDiv").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        $("#clockDiv").remove();
      }

    }

    //setInterval(displayTime, 1000);
    setInterval(countdown, 1000);


});
