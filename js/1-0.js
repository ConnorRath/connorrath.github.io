function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("question", "Then do it");
writeToP("narrative", "And leave me alone");
document.getElementById("fixed").addEventListener("mousedown", function(){
  setTimeout("window.location.href='http://www.quizrocket.com/stupid-test';", 500);
}, false);

document.getElementById("broke").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-3.html';", 500);
}, false);