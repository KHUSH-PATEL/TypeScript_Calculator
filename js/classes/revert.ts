var ButtonClicked: number = 0;

export class RevertValues {
    revert() {
        document.getElementById("square").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";
        document.getElementById("squareRoot").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";
        document.getElementById("xySquare").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";
        document.getElementById("xTimes10").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";
        document.getElementById("log").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";
        document.getElementById("logE").style.display = (ButtonClicked % 2 == 0) ? "none" : "block";

        document.getElementById("cube").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        document.getElementById("cubeRoot").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        document.getElementById("yRootx").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        document.getElementById("twoRaiseX").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        document.getElementById("logyx").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        document.getElementById("logyx").style.fontSize = "14px";
        document.getElementById("EraiseX").style.display = (ButtonClicked % 2 == 0) ? "block" : "none";
        ButtonClicked++;
    }
}