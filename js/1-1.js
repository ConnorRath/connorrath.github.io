 $(document).ready(function(){
      $('.parallax').parallax();
    });


function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Results... inconclusive");
writeToP("question", "Have you tried restarting it?");
document.getElementById("yes").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-2.html';", 500);
}, false);

document.getElementById("no").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-0.html';", 500);
}, false);