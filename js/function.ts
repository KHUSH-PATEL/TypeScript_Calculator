import { Numericals } from "./classes/number.js";
import {ArithmeticOperation} from "./classes/arithmetic.js"
import { ClearValue } from "./classes/clearvalue.js"
import { RevertValues } from "./classes/revert.js"
import { MathematicalFunction } from "./classes/mathematics.js"
import { RaiseTo } from "./classes/power.js"
import { Brackets } from "./classes/bracket.js"
import { Trigonometry } from "./classes/trigonometry.js"
import { MemoryOperation, clickclr, memoryCheck } from "./classes/memory.js"

memoryCheck();
//Screen Variables
export var showOnScreen = document.getElementById('display')! as HTMLInputElement;
showOnScreen.style.display = "block";
export var showOnScreen2 = document.getElementById('display2')! as HTMLInputElement;
showOnScreen2.style.display = "block";
export var PIE: Number = Math.PI;

clickclr();

//Numericals Operations
var printvalue = new Numericals();
let numbers = document.querySelectorAll('.numbers');
for (let elements of numbers) {
    elements.addEventListener('click', function () {
        printvalue.numbers(this.id);
    });
}

//Arithmetic Operations
var arithmeticOperation = new ArithmeticOperation();
let operation = document.querySelectorAll('.arith');
for (let elements of operation) {
    elements.addEventListener('click', function () {
        arithmeticOperation.arithmetic(this.id);
    });
}

//Clear values operations
var clearValue = new ClearValue();
let clear = document.querySelectorAll('.clr');
for (let elements of clear) {
    elements.addEventListener('click', function () {
        clearValue.clearScreen(this.id);
    });
}

//change value on clicking 2nd
var revertValue = new RevertValues();
let revert = document.querySelectorAll('#twoo');
for (let elements of revert) {
    elements.addEventListener('click', function () {
        revertValue.revert();
    });
}

//Mathematical Operations
var mathematicalFunction = new MathematicalFunction();
let functions = document.querySelectorAll('.mathematics');
for (let elements of functions) {
    elements.addEventListener('click', function () {
        mathematicalFunction.functions(this.id);
    });
}

//Brackets Operations
var brackets = new Brackets();
let bracket = document.querySelectorAll('.brackets');
for (let elements of bracket) {
    elements.addEventListener('click', function () {
        brackets.openCloseBracket(this.id);
    });
}

//Factorial function
document.getElementById("factorial").addEventListener('click', function () {
    factorialResult(showOnScreen.value);
});
function factorialResult(n:string):void {
    var result = factorial(Number(n));
    showOnScreen.value = result;
}
function factorial(x:number):any {
    if (x == 0 || x == 1) {
        return 1;
    }
    //if number is negative
    else if (x < 0) {
        return "Invalid Input";
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

//Raise to operations
var raiseTo = new RaiseTo();
let raise = document.querySelectorAll('.pow');
for (let elements of raise) {
    elements.addEventListener('click', function () {
        raiseTo.power(this.id);
    });
}

//Trigonometry Operations
var trigo = new Trigonometry();
let trigono = document.querySelectorAll('.trigo');
for (let elements of trigono) {
    elements.addEventListener('click', function () {
        trigo.trigonometry(this.id);
    });
}

//Memory Operation
var memoryvalue = new MemoryOperation();
let mem = document.querySelectorAll('.memory');
for (let elements of mem) {
    elements.addEventListener('click', function () {
        memoryvalue.memoryOperation(this.id);
    });
}