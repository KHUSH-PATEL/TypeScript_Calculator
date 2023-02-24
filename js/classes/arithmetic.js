import { Validation } from "./validation.js";
import { showOnScreen, showOnScreen2, PIE } from "../function.js";
var validation = new Validation();
export class ArithmeticOperation {
    arithmetic(arithmetics) {
        switch (arithmetics) {
            case "substraction":
                if (validation.validateInput()) {
                    showOnScreen.value = showOnScreen.value.slice(0, -1) + '-';
                }
                else if (showOnScreen.value == "") {
                    showOnScreen.value = "0-";
                }
                else {
                    showOnScreen.value += "-";
                }
                break;
            case "addition":
                if (validation.validateInput()) {
                    showOnScreen.value = showOnScreen.value.slice(0, -1) + '+';
                }
                else if (showOnScreen.value == "") {
                    showOnScreen.value = "0+";
                }
                else {
                    showOnScreen.value += "+";
                }
                break;
            case "multiplication":
                if (validation.validateInput()) {
                    showOnScreen.value = showOnScreen.value.slice(0, -1) + '*';
                }
                else if (showOnScreen.value == "") {
                    showOnScreen.value = "0*";
                }
                else {
                    showOnScreen.value += "*";
                }
                break;
            case "division":
                if (validation.validateInput()) {
                    showOnScreen.value = showOnScreen.value.slice(0, -1) + '/';
                }
                else if (showOnScreen.value == "") {
                    showOnScreen.value = "0/";
                }
                else {
                    showOnScreen.value += "/";
                }
                break;
            case "pi":
                showOnScreen.value = PIE.toString();
                break;
            case "ex":
                showOnScreen.value = Math.E.toString();
                break;
            case "square":
                (showOnScreen.value != "") ? showOnScreen.value = Math.pow(Number(showOnScreen.value), 2).toString() : showOnScreen.value += "0";
                break;
            case "cube":
                (showOnScreen.value != "") ? showOnScreen.value = Math.pow(Number(showOnScreen.value), 3).toString() : showOnScreen.value += "0";
                break;
            case "inverse":
                (showOnScreen.value != "") ? showOnScreen.value = (1 / Number(showOnScreen.value)).toString() : showOnScreen.value = "Cannot divide by zero";
                break;
            case "squareRoot":
                showOnScreen.value = Math.sqrt(Number(showOnScreen.value)).toString();
                break;
            case "cubeRoot":
                showOnScreen.value = Math.cbrt(Number(showOnScreen.value)).toString();
                break;
            case "clickequ":
                if (showOnScreen.value.includes("^")) {
                    xySquare();
                }
                if (showOnScreen.value.includes("Yroot")) {
                    xyRoot();
                }
                if (showOnScreen.value.includes("baseY")) {
                    calculatelogBaseY();
                }
                if (showOnScreen.value == "") {
                    showOnScreen.value = "0";
                }
                var Display = eval(showOnScreen.value);
                display2();
                showOnScreen.value = Display;
                break;
            case "exponential":
                if (!showOnScreen.value.includes(".e+0")) {
                    showOnScreen.value = showOnScreen.value + '.e+0';
                }
                break;
            case "modulo":
                if (validation.validateInput()) {
                    showOnScreen.value = showOnScreen.value.slice(0, -1) + '%';
                }
                else if (showOnScreen.value == "") {
                    showOnScreen.value = "0%";
                }
                else {
                    showOnScreen.value += "%";
                }
                break;
            case "inverseValue":
                let num = showOnScreen.value[0];
                let a = num[0];
                let b = "-";
                if (a != "-") {
                    showOnScreen.value = b.concat(showOnScreen.value);
                }
                else if (num == "-") {
                    showOnScreen.value = showOnScreen.value.slice(1);
                }
                break;
            case "operator":
                var last = showOnScreen.value[showOnScreen.value.length - 1];
                if (last != ".") {
                    if (showOnScreen.value == "") {
                        showOnScreen.value = "0.";
                    }
                    else {
                        showOnScreen.value += ".";
                    }
                }
                break;
        }
    }
}
function xySquare() {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("^");
        showOnScreen.value = (Math.pow(Number(b[0]), Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function xyRoot() {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("Yroot");
        showOnScreen.value = (Math.pow(Number(b[0]), 1 / Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function calculatelogBaseY() {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("baseY");
        showOnScreen.value = (Math.log(Number(b[0])) / Math.log(Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
function display2() {
    let z = showOnScreen.value + "=";
    showOnScreen2.value = z;
}
