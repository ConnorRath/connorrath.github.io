function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Hello Professional, thank you for chosing me for your IT issues");
writeToP("question", "Would you like to use my age-to-issue automatic sensing technology?");