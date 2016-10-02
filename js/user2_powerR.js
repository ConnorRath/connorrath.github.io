function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Don't lie to me");
writeToP("question", "Have you tried restarting it?");

document.getElementById("yes").addEventListener("mousedown", function(){
  setTimeout("window.location.href='user3_email.html';", 500);
}, false);

document.getElementById("no").addEventListener("mousedown", function(){
  setTimeout("window.location.href='user0_WDH.html';", 500);
}, false);

