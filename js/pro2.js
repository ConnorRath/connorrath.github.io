function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Thanks for trying out our new age-to-issue automatic sensing technology!");
writeToP("question", "How old is the client?");