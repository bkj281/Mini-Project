var x=0;

function decrease() {
    x--;
    out();
}

function reset() {
    x=0;
    out();
}

function increase() {
    x++;
    out();
}

function out() {
    if (x>0) {
        document.getElementById("output").style.color="green";
    }                    
    else if (x<0) {
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").style.color="black";
    }
    document.getElementById("output").innerHTML= x + "<br>";
}
