import { showOnScreen } from "../function.js";

export class RaiseTo{
    power(valueId:string){
        switch(valueId){
            case "xySquare":
                if (!showOnScreen.value.includes("^")) {
                    showOnScreen.value += "^";
                }
                break;
            case "yRootx":
                showOnScreen.value += "Yroot";
                break;
            case "logyx":
                showOnScreen.value += "baseY";
                break;
            case "xTimes10":
                showOnScreen.value = Math.pow(10, Number(showOnScreen.value)).toString();
                break;
            case "twoRaiseX":
                showOnScreen.value = Math.pow(2, Number(showOnScreen.value)).toString();
                break;
            case "log":
                (showOnScreen.value =="" || showOnScreen.value == "0") ? showOnScreen.value = "Invalid Input" : showOnScreen.value = Math.log10(Number(showOnScreen.value)).toString();
                break;
            case "logE":
                (showOnScreen.value =="" || showOnScreen.value == "0") ? showOnScreen.value = "Invalid Input" : showOnScreen.value = Math.log(Number(showOnScreen.value)).toString();
                break;
            case "EraiseX":
                showOnScreen.value = Math.pow(Math.E, Number(showOnScreen.value)).toString();
                break;
        }
    }
}