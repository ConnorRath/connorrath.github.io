function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Nevermind...");
writeToP("question", "Have you tried restarting it?");