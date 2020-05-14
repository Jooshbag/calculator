//printing Total on page
let totalNo = {
    originalNo: '0',
    newNo: '0',
    requestedOperator: 'nothing',
    usable: true, //determines if I can continue adding numbers to newNo. False restarts after operate()
    operateReady: false //determines if an operator button was already pushed. 
};
let displayNo = totalNo.newNo;
let totalPrint= document.getElementById('totalNum');
totalPrint.innerHTML = displayNo;

//Getting buttons' inputs
//One Button
document.getElementById('oneBut').addEventListener('click', () => {
    numberButtonClick('1');
});
//Two Button
document.getElementById('twoBut').addEventListener('click', () => {
    numberButtonClick('2');
});
//Three Button
document.getElementById('threeBut').addEventListener('click', () => {
    numberButtonClick('3');
});
//Four Button
document.getElementById('fourBut').addEventListener('click', () => {
    numberButtonClick('4');
});
//Five Button
document.getElementById('fiveBut').addEventListener('click', () => {
    numberButtonClick('5');
});
//Six Button
document.getElementById('sixBut').addEventListener('click', () => {
    numberButtonClick('6');
});
//Seven Button
document.getElementById('sevenBut').addEventListener('click', () => {
    numberButtonClick('7');
});
//Eight Button
document.getElementById('eightBut').addEventListener('click', () => {
    numberButtonClick('8');
});
//Nine Button
document.getElementById('nineBut').addEventListener('click', () => {
    numberButtonClick('9');
});
//Zero Button
document.getElementById('zeroBut').addEventListener('click', () => {
    numberButtonClick('0');
});

//Plus Sign
document.getElementById('plusSign').addEventListener('click', () => {
    operatorButtonClick('plus');
})
//Subtract Sign
document.getElementById('subtractSign').addEventListener('click', () => {
    operatorButtonClick('subtract');
})
//Multiply Sign
document.getElementById('multiplySign').addEventListener('click', () => {
    operatorButtonClick('multiply');
})
//Divide Sign
document.getElementById('divideSign').addEventListener('click', () => {
    operatorButtonClick('divide');
})

document.getElementById('equalSign').addEventListener('click', () => {
    totalNo.operateReady = false;
    operate();
});

document.getElementById('clear').addEventListener('click', () => {
        totalNo.originalNo = '0';
        totalNo.newNo = '0';
        totalNo.requestedOperator = 'nothing';
        totalNo.usable = true;
        totalNo.operateReady = false;
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
})

//math functions
function numberButtonClick(mathnumber) {
    if(totalNo.newNo == '0' || totalNo.usable == false){
        totalNo.newNo = mathnumber;
        totalNo.usable = true;
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
        }
    else {
        totalNo.newNo = totalNo.newNo + mathnumber;
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
        }
}

function operatorButtonClick(mathOperator) {
    if(totalNo.operateReady == true) {
        operate();
        totalNo.requestedOperator = mathOperator
    }
    else {
        totalNo.originalNo = totalNo.newNo;
        totalNo.requestedOperator = mathOperator;
        totalNo.operateReady = true;
        totalNo.newNo = '0';
        displayNo = totalNo.originalNo;
        totalPrint.innerHTML = displayNo;
        console.log(totalNo.originalNo);
    }
}

function operate() {
    if(totalNo.newNo == '0' && totalNo.requestedOperator == 'divide') {
        displayNo = 'the fuck?'
        totalNo.usable = false;
        totalNo.requestedOperator = 'nothing';
        return totalPrint.innerHTML = displayNo;
    }
    else if(totalNo.requestedOperator == 'plus'){
    add();
    }
    else if(totalNo.requestedOperator == 'subtract'){
        subtract();
    }
    else if(totalNo.requestedOperator == 'multiply'){
        multiply();
    }
    else if(totalNo.requestedOperator == 'divide') {
        divide();
    }
    else {return console.log(totalNo.requestedOperator);}
}


//Operator functions
function add() {
    let completeTotal = Number(totalNo.originalNo) + Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function subtract(){
    let completeTotal = Number(totalNo.originalNo) - Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function multiply(){
    let completeTotal = Number(totalNo.originalNo) * Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function divide(){
    let completeTotal = Number(totalNo.originalNo) / Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}