function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}

writeToP("intro", "Welcome to Jerk Squad Automated Assistant");
writeToP("question", "Are you the User or the Professional?");