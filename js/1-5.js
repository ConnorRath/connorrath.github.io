function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Okay then. Let's try this....");
writeToP("question", "Enter your problem on the line below");
document.getElementById("submit").addEventListener("mousedown", function(){
  setTimeout("window.location.href='http://www.google.com/#q=I\'m+incompetent+and+' + userInput.value;", 500);
}, false);
 
$(document).ready(function(){
      $('.parallax').parallax();
    });
