function writeToP(nameOfP, stringToPrint) {
    "use strict";
    document.getElementById(nameOfP).innerHTML = (stringToPrint);
}
writeToP("narrative", "Alright great!");
writeToP("question", "Would you like to use my age-to-issue automatic sensing technology?");


document.getElementById("yes").addEventListener("mousedown", function(){
  setTimeout("window.location.href='pro2.html';", 500);
}, false);


/*document.getElementById("no").addEventListener("mousedown", function(){
  setTimeout("window.location.href='pro2.html';", 500);
}, false);


document.getElementById("imns").addEventListener("mousedown", function(){
  setTimeout("window.location.href='pro2.html';", 500);
}, false);


document.getElementById("poss").addEventListener("mousedown", function(){
  setTimeout("window.location.href='pro2.html';", 500);
}, false);*/
(function(){
var button1 = document.getElementById("imns");
    function toggle1() {
        if (button1.style.visibility === "hidden") {
            button1.style.visibility = "visible";
        } else {
            button1.style.visibility = "hidden";
        }
    }

    button1.addEventListener("mousedown", toggle1, false);
    
    var button2 = document.getElementById("poss");
    function toggle2() {
        if (button2.style.visibility === "hidden") {
            button2.style.visibility = "visible";
        } else {
            button2.style.visibility = "hidden";
        }
    }

    button2.addEventListener("mousedown", toggle2, false);
    
    var button = document.getElementById("no");
    function toggle() {
        if (button.style.visibility === "hidden") {
            button.style.visibility = "visible";
        } else {
            button.style.visibility = "hidden";
        }
    }

    button.addEventListener("mousedown", toggle, false);
})()


