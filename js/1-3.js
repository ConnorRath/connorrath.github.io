function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Surprising...");
writeToP("question", "Is this related to Email or Outlook in anyway?");
document.getElementById("fixed").addEventListener("mousedown", function(){
  setTimeout("window.location.href='http://www.wikihow.com/Mail-a-Letter';", 500);
}, false);

document.getElementById("broke").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-4.html';", 500);
}, false);
 $(document).ready(function(){
      $('.parallax').parallax();
    });
