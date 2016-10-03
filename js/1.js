 $(document).ready(function(){
      $('.parallax').parallax();
    });


function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}

writeToP("narrative","Hello User. I'm glad you've chosen to use me over google.");
writeToP("question","For a quick survey to understand my User base better, would you please pick the main reason you have decided to use me today?");
document.getElementById("wut").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-1.html';", 1000);
}, false);
document.getElementById("relig").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-1.html';", 1000);
}, false);
document.getElementById("track").addEventListener("mousedown", function(){  
  setTimeout("window.location.href='1-1.html';", 1000);
}, false);
document.getElementById("me").addEventListener("mousedown", function(){
  setTimeout("window.location.href='1-1.html';", 1000);
}, false);