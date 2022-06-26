
var input = document.getElementById("input").value;
var clear = document.getElementById("clear").value;
var div = document.getElementById("div").value;
var no7 = document.getElementById("no7").value;
var no8 = document.getElementById("no8").value;
var no9 = document.getElementById("no9").value;
var mult = document.getElementById("mult").value;
var no6 = document.getElementById("no6").value;
var no5 = document.getElementById("no5").value;
var no4 = document.getElementById("no4").value;
var min = document.getElementById("sub").value;
var no1 = document.getElementById("no1").value;
var no2 = document.getElementById("no2").value;
var no3 = document.getElementById("no3").value;
var plus = document.getElementById("sum").value;
var no0 = document.getElementById("no0").value;
var equal = document.getElementById("equal").value;
// var reset = document.getElementById("clear").value;

function operation1() {
  
        input += no1;
        document.getElementById("input").value = input;
}
function operation2() {
       
        input += no2;
        document.getElementById("input").value = input;
}
function operation3() {
        input += no3;
        document.getElementById("input").value = input;
}
function operation4() {
        input += no4;
        document.getElementById("input").value = input;
}
function operation5() {
        input += no5;
        document.getElementById("input").value = input;
}
function operation6() {
        input += no6;
        document.getElementById("input").value = input;
}
function operation7() {
        "use strict";
        input += no7
        document.getElementById("input").value = input;
}
function operation8() {
        input += no8;
        document.getElementById("input").value = input;
}
function operation9() {
        input += no9;
        document.getElementById("input").value = input;
}
function operation0() {
        input += no0;
        document.getElementById("input").value = input;
}
function sum() {
        input += plus;
        document.getElementById("input").value = input;
}
function sub() {
        input += min;
        document.getElementById("input").value = input;
}
function multi() {
        input += mult;
        document.getElementById("input").value = input;
}
function divide() {
        input += div;
        document.getElementById("input").value = input;
}

function operationequal() {
        document.getElementById("input").value = eval(input);

}
function clear() {
        document.getElementById("reset").reset() = "";
        
}





