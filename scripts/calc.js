function calculate(){
    let solution = Number(document.querySelector(".disp").value);
    console.log(solution);
}

function toDisplay(para) {
    document.querySelector(".disp").value +=para;
    calculate();
}