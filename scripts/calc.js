var oper = {
    '+': (x, y) => x+y,
    '-': (x, y) => x-y,
    '*': (x, y) => x*y,
    '/': (x, y) => x/y,
    '%': (x, y) => x%y,
    '^': (x, y) => x**y  
}


function calculate(para){
    let nums = [];
    let op = [];
    let curr="";
    Array.from(para).forEach(element => {
        if((element>='0' && element<='9') || element === '.'){
            curr+=element;
        }else{
            nums.push(Number(curr));
            op.push(element);
            curr="";
        }
        console.log(nums);
        console.log(op);
    })


}
function toDisplay(para) {
    document.querySelector(".disp").value +=para;
    calculate(document.querySelector(".disp").value);
}

function displayClear(){
    document.querySelector(".disp").value = "";
}