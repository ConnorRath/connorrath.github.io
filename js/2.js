function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Hello Professional, thank you for chosing me for your IT issues");
writeToP("question", "Is the client's issue WAY over your head, and you don't know where to begin?");
document.getElementById("yes").addEventListener("mousedown", function(){
  setTimeout("window.location.href='https://www.google.com/#q=fast+food+jobs+hiring+near+me';", 500);
}, false);

document.getElementById("no").addEventListener("mousedown", function(){
  setTimeout("window.location.href='2-1.html';", 500);
}, false);