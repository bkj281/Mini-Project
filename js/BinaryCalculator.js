var output = '';
var r = 0, s = 0, ope;

function b2d(o) {
    var x = output * 1;
    var i = 0;
    while (x != 0) {
        a = x % 10;
        r += a * Math.pow(2, i);
        x = Math.floor(x / 10);
        i++;
    }
    ope = o;
    output += ope;
    document.getElementById('res').innerHTML = output;
}

function clr() {
    output = '';
    document.getElementById('res').innerHTML = output;
}

function equal() {
    var t=output.indexOf(ope);
    var y = output.substring(t+1,output.length) * 1;
    var i = 0;
    while (y != 0) {
        a = y % 10;
        s += a * Math.pow(2, i);
        y = Math.floor(y / 10);
        i++;
    }
    if (ope == '+') {
        output = r + s;
    } else if (ope == '-') {
        output = r - s;
        document.getElementById('res').innerHTML = output;
    } else if (ope == '*') {
        output = r * s;
        document.getElementById('res').innerHTML = output;
    } else {
        output = r / s;
        document.getElementById('res').innerHTML = output;
    }
    r = 0;
    s = 0;
    var a=[];
    for (var i = 0; output > 0; i++) {
        a[i] = output % 2;
        output = Math.floor(output / 2);
    }
    output = a.reverse().join("");
    document.getElementById('res').innerHTML = output;
}

function num(n) {
    output += n;
    document.getElementById('res').innerHTML = output;
}
