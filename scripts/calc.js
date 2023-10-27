var oper = {
    '+': (x, y) => x+y,
    '-': (x, y) => x-y,
    '*': (x, y) => x*y,
    '/': (x, y) => x/y,
    '%': (x, y) => x%y,
    '^': (x, y) => x**y  
}
let pressed = false;
let solution = 0;
let answered = false;
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
    })
    if(curr !== "")
        nums.push(Number(curr));
    console.log(nums);
    console.log(op);
    if(nums.length===op.length+1){
        while(op.length !== 0){
            op.forEach((ele, i) => {
                if(ele === '^'){
                    nums[i] = nums[i]**nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
            })
            op.forEach((ele, i) => {
                if(ele === '/'){
                    nums[i] = nums[i]/nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
                if(ele === '*'){
                    nums[i] = nums[i]*nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
            })
            op.forEach((ele, i) => {
                if(ele === '-'){
                    nums[i] = nums[i]-nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
                if(ele === '+'){
                    nums[i] = nums[i]+nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
            })
            op.forEach((ele, i) => {
                if(ele === '%'){
                    nums[i] = nums[i]%nums[i+1];
                    nums.splice(i+1, 1);
                    op.splice(i, 1);
                    console.log(nums);
                }
            })
        }
    }else if(pressed){
        document.querySelector('.disp').value = 'err';
        pressed = false;
        answered = true;
    }
    solution = nums[0];
    if(pressed){
        document.querySelector('.disp').value = solution;
        pressed = false;
        answered = true;
    }

}
function toDisplay(para) {
    if(!answered)
        document.querySelector(".disp").value +=para;
    else{
        document.querySelector(".disp").value=para;
        answered = false;
    }
    calculate(document.querySelector('.disp').value);
}

function displayClear(){
    document.querySelector(".disp").value = "";
}