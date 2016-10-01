function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Okay then. Let's try this....");
writeToP("question", "Enter your problem in the text box below");