import { showOnScreen } from "../function.js";
var count = 0;

var lcount: number = 0;

export class Brackets {
    openCloseBracket(valueId: string) {
        switch (valueId) {
            case "openBracket":
                showOnScreen.value += "(";
                count++;
                document.getElementById("cnt").innerHTML = count.toString();
                break;
            case "closeBracket":
                let lastValue = showOnScreen.value[showOnScreen.value.length - 1];
                if (count > 0) {
                    if (lcount == 0 && lastValue == "(") {
                        showOnScreen.value += "0)";
                    }
                    else {
                        showOnScreen.value += ")";
                    }
                    count--;
                    lcount++;
                    if (count == 0) {
                        lcount = 0;
                        showOnScreen.value += "*";
                    }
                    if (count == 0) {
                        document.getElementById("cnt").innerHTML = "";
                    }
                    else {
                        document.getElementById("cnt").innerHTML = count.toString();
                    }
                }
        }
    }
}

function setBracket(value:number)
{
    count = value;
}

    
export {count, setBracket };