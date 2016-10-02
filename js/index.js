 $(document).ready(function(){
      $('.parallax').parallax();
    });

function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("intro", "Welcome to Jerk Squad Automated Assistant");
writeToP("question", "Are you the User or the Professional?");
document.getElementById("user").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1.html';", 500);
}, false);

document.getElementById("pro").addEventListener("mousedown", function(){
  setTimeout("window.location.href='2.html';", 500);
}, false);