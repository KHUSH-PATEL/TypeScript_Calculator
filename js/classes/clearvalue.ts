import { showOnScreen, showOnScreen2 } from "../function.js";
import { count,setBracket }  from "./bracket.js";
let x:number = count;

export class ClearValue {
    clearScreen(clear: string) {
        switch (clear) {
            case "clickclr":
                showOnScreen.value = "";
                showOnScreen2.value = "";
                setBracket(0);
                document.getElementById("cnt").innerHTML = "";
                break;
            case "backSpace":
                if (showOnScreen.value != "") {
                    let lastValue = showOnScreen.value[showOnScreen.value.length - 1];
                    if (lastValue == "(") {
                        //DecrementBracket();
                        setBracket(x--);
                        document.getElementById("cnt").innerHTML = count.toString();
                        showOnScreen.value = showOnScreen.value.slice(0, -1);
                    }
                    else if (lastValue == ")") {
                        //IncrementBracket();
                        setBracket(x++);
                        document.getElementById("cnt").innerHTML = count.toString();
                        showOnScreen.value = showOnScreen.value.slice(0, -1);
                    }
                    else {
                        showOnScreen.value = showOnScreen.value.slice(0, -1);
                    }
                }
                break;
        }
    }
}