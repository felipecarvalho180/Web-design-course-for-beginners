//Introduction class
document.getElementById("para").innerHTML="My first web page in js";

function mydate() {
    document.getElementById("data").innerHTML=Date();
}

//Variable class
function variable() {
    var fn = "Felipe";
    var ln = "Carvalho";
    var cn = fn + " " + ln;
    document.getElementById("name").innerHTML="Your name is: " + cn;
}

//String class
var strings = "Felipe Carvalho";
document.getElementById("javaslf").innerHTML= "Your string have: " + strings.length + " letters"  ;

//Operators class
var a = 6;
var b = 25;
document.getElementById("soma").innerHTML= "6 + 25 = " + (a + b);
document.getElementById("dimi").innerHTML= "6 - 25 = " + (a - b);
document.getElementById("multi").innerHTML= "6 * 25 = " + (a * b);
document.getElementById("divis").innerHTML= "6 / 25 = " + (a / b);

//If... else
var date = new Date().getHours();
if (date > 5 && date < 12) {
    document.getElementById("hour").innerHTML="Good Morning";
}else{
    if (date > 12 && date < 18) {
        document.getElementById("hour").innerHTML="Good Afternoon";
    } else {
        document.getElementById("hour").innerHTML="Good Night";
    }
}

var days = new Date().getUTCDate();
if (days <= 15) {
    document.getElementById("dayss").innerHTML="Beginning of the month";
} else {
    document.getElementById("dayss").innerHTML="Finishing of the month";
}

//Switch
function mydays() {
var days2 = new Date().getDay();
switch (days2) {
    case 0:
        document.getElementById("days2").innerHTML="Today is Sunday";
        break;

    case 1:
        document.getElementById("days2").innerHTML="Today is Monday";
        break;

    case 2:
        document.getElementById("days2").innerHTML="Today is Thuesday";
        break;

    case 3:
        document.getElementById("days2").innerHTML="Today is Wednesday";
        break;

    case 4:
        document.getElementById("days2").innerHTML="Today is Thursday";
        break;

    case 5:
        document.getElementById("days2").innerHTML="Today is Friday";
        break;

    case 6:
        document.getElementById("days2").innerHTML="Today is Saturday";
        break;

    default:
        break;
}
}
