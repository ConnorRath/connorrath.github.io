function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Alright great!");
writeToP("question", "Would you like to use my age-to-issue automatic sensing technology?");