import { showOnScreen } from "../function.js";
export class Trigonometry {
    trigonometry(tigno) {
        switch (tigno) {
            case "sin":
                showOnScreen.value = Math.sin(Number(showOnScreen.value)).toString();
                break;
            case "cos":
                showOnScreen.value = Math.cos(Number(showOnScreen.value)).toString();
                break;
            case "tan":
                showOnScreen.value = Math.tan(Number(showOnScreen.value)).toString();
                break;
            case "sec":
                showOnScreen.value = (1 / Math.cos(Number(showOnScreen.value))).toString();
                break;
            case "cosec":
                showOnScreen.value = (1 / Math.sin(Number(showOnScreen.value))).toString();
                break;
            case "cot":
                showOnScreen.value = (1 / Math.tan(Number(showOnScreen.value))).toString();
                break;
        }
    }
}
