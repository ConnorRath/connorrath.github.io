function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "You are a waste of bandwidth...");
writeToP("question", "Is this relate to Email or Outlook in anyway?");