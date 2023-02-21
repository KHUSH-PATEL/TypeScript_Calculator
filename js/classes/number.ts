import { showOnScreen, PIE } from "../function.js";
export class Numericals {
    numbers(num: any) {
        if (Number(showOnScreen.value) == PIE || Number(showOnScreen.value) == Math.E) {
            showOnScreen.value = "";
        }
        switch (num) {
            case "zero":
                showOnScreen.value += 0;
                break;
            case "one":
                showOnScreen.value += 1;
                break;
            case "two":
                showOnScreen.value += 2;
                break;
            case "three":
                showOnScreen.value += 3;
                break;
            case "four":
                showOnScreen.value += 4;
                break;
            case "five":
                showOnScreen.value += 5;
                break;
            case "six":
                showOnScreen.value += 6;
                break;
            case "seven":
                showOnScreen.value += 7;
                break;
            case "eight":
                showOnScreen.value += 8;
                break;
            case "nine":
                showOnScreen.value += 9;
                break;
        }
    }
}