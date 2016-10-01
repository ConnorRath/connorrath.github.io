function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}

writeToP("question","Hello User. I'm glad you've chosen to use me over google.");