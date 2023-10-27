let pressed = false;
let solution = 0;
let answered = false;


document.body.addEventListener('keydown', (event) => {
    
    let a = event.key;
    console.log(a);
    if((a>='0' && a<='9') || a === '+'  || a === '-'  || a === '/'  || a === '*'  || a === '%'  || a === '.' || a === '^'){
        toDisplay(a);
    }else if(a === 'Enter'){
        answered = true;
        calculate(document.querySelector('.disp').value);
    }else if(a === 'Backspace'){
        back();
        calculate(document.querySelector('.disp').value);
    }
})


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
        document.querySelector('.disp').value = 'error';
        pressed = false;
        answered = true;
    }
    solution = nums[0];
    document.querySelector('.current-answer').innerHTML = solution;
    if(pressed){
        document.querySelector('.disp').value = solution;
        pressed = false;
        answered = true;
    }

}



function toDisplay(para) {
    if(document.querySelector(".disp").value === '0' && para === '0')
        return;
    if(!answered)
        document.querySelector(".disp").value +=para;
    else if(para==='+' || para==='-' || para==='/' || para==='*' || para==='^' || para==='%'){
        document.querySelector(".disp").value +=para;
        answered = false;
    }else{
        document.querySelector(".disp").value=para;
        answered = false;
    }
    calculate(document.querySelector('.disp').value);
}

function displayClear(){
    document.querySelector(".disp").value = "";
}

function back(){
    let a = document.querySelector(".disp").value;
    a = a.slice(0, -1);
    document.querySelector(".disp").value = a;
    calculate(document.querySelector('.disp').value);
}