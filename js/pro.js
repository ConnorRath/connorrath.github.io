function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Hello Professional, thank you for chosing me for your IT issues");
writeToP("question", "Is the client's issue WAY over your head, and you don't know where to begin?");