function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
function sleep(milliseconds) {
    "use strict";
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
writeToP("narrative", "Don't lie to me");
writeToP("question", "Have you tried restarting it?");

document.getElementById("Yes!!").addEventListener("mousedown", function(){
  setTimeout("location.href='user3_email.html';", 500);
}, false);
