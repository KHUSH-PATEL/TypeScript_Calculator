import { showOnScreen } from "../function.js";

export class Validation {
    validateInput() {
        let z = showOnScreen.value[showOnScreen.value.length - 1];
        let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
        if (operators.includes(z)) {
            return true;
        }
        else {
            return false;
        }
    }
}