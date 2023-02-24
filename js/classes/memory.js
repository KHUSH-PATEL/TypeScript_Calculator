import { showOnScreen } from "../function.js";
// var clearValue = new ClearValue();
export var memory = [];
var count;
var el = document.getElementById("#memoryClear");
if (el) {
    el.addEventListener('click', function () {
        console.log(memory);
        memoryCheck();
    });
}
export function memoryCheck() {
    (memory.length == 0) ? enableBtn() : disableBtn();
}
function enableBtn() {
    document.getElementById("memoryClear").disabled = true;
    document.getElementById("memoryResult").disabled = true;
}
function disableBtn() {
    document.getElementById("memoryClear").disabled = false;
    document.getElementById("memoryResult").disabled = false;
}
export class MemoryOperation {
    memoryOperation(memoryId) {
        switch (memoryId) {
            case "memoryClear":
                memory = [];
                alert("Memory Cleared");
                memoryCheck();
                break;
            case "memoryResult":
                showOnScreen.value = memory[memory.length - 1];
                console.log("memory");
                memoryCheck();
                break;
            case "memoryPlus":
                if (memory.length == 0 && (!isNaN(Number(showOnScreen.value)))) {
                    memory.push(showOnScreen.value);
                    clickclr();
                    memoryCheck();
                }
                else if (!isNaN(Number(showOnScreen.value))) {
                    let a = Number(showOnScreen.value) + Number(memory[memory.length - 1]);
                    memory.push(a);
                    clickclr();
                    memoryCheck();
                }
                break;
            case "memorySub":
                if (memory.length == 0 && !isNaN(Number(showOnScreen.value))) {
                    memory.push(showOnScreen.value);
                    let x = Number(memory[memory.length - 1]);
                    if (x > 0) {
                        x = -Math.abs(x);
                        memory.push(x);
                    }
                    clickclr();
                    memoryCheck();
                }
                else if (!isNaN(Number(showOnScreen.value))) {
                    let a = Number(memory[memory.length - 1]) - Number(showOnScreen.value);
                    memory.push(a);
                    clickclr();
                    memoryCheck();
                }
                break;
            case "memoryStore":
                if (!isNaN(Number(showOnScreen.value))) {
                    memory.push(showOnScreen.value);
                    clickclr();
                    memoryCheck();
                }
                break;
        }
    }
}
export function clickclr() {
    showOnScreen.value = "";
    count = 0;
    document.getElementById("cnt").innerHTML = "";
}
