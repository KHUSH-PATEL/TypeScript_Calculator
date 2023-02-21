import { showOnScreen } from "../function.js";
export class MathematicalFunction {
    functions(valueId) {
        switch (valueId) {
            case "floor":
                showOnScreen.value = Math.floor(Number(showOnScreen.value)).toString();
                break;
            case "ceil":
                showOnScreen.value = Math.ceil(Number(showOnScreen.value)).toString();
                break;
            case "mod":
                showOnScreen.value = Math.abs(Number(showOnScreen.value)).toString();
                break;
        }
    }
}
