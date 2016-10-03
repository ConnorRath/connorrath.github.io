function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Well then...");
writeToP("question", "Is this related to your printer in anyway?");
document.getElementById("yes").addEventListener("mousedown", function(){
  setTimeout("window.location.href='https://www.google.com/#q=printer+centers+near+me';", 500);
}, false);

document.getElementById("no").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-5.html';", 500);
}, false);
 $(document).ready(function(){
      $('.parallax').parallax();
    });
