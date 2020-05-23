//printing Total on page
let totalNo = {
    originalNo: '0',
    newNo: '0',
    requestedOperator: 'nothing',
    decimal: false,
    usable: true, //determines if I can continue adding numbers to newNo. False restarts after operate()
    operateReady: false //determines if an operator button was already pushed. 
};
let displayNo = totalNo.newNo;
let totalPrint= document.getElementById('totalNum');
totalPrint.innerHTML = displayNo;

//Getting buttons' inputs
//#region Main
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

//Decimal Button
document.getElementById('decimalBut').addEventListener('click', () => {
    decimalButtonClick();
});

//Delete Button
document.getElementById('deleteBut').addEventListener('click', () => {deleteButton();});


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
//Equal Sign
document.getElementById('equalSign').addEventListener('click', () => {
    totalNo.operateReady = false;
    operate();
});
//Clear Button
document.getElementById('clear').addEventListener('click', () => {
        totalNo.originalNo = '0';
        totalNo.newNo = '0';
        totalNo.requestedOperator = 'nothing';
        totalNo.usable = true;
        totalNo.operateReady = false;
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
})
//#endregion

//keyboard Input
window.addEventListener("keydown", function(e) {
    switch (event.key) {
        case "1":
            numberButtonClick('1');
        break;
        case "2":
            numberButtonClick('2');
        break;
        case "3":
            numberButtonClick('3');
        break;
        case "4":
            numberButtonClick('4');
        break;
        case "5":
            numberButtonClick('5');
        break;
        case "6":
            numberButtonClick('6');
        break;
        case "7":
            numberButtonClick('7');
        break;
        case "8":
            numberButtonClick('8');
        break; 
        case "9":
            numberButtonClick('9');
        break;
        case "0":
            numberButtonClick('0');
        break; 
        case ".":
            decimalButtonClick();
        break;
        case "Backspace":
            deleteButton();
        break;
        case "+":
            operatorButtonClick('plus');
        break;
        case "-":
            operatorButtonClick('subtract');
        break;
        case "*":
            operatorButtonClick('multiply');
        break;
        case "/":
            operatorButtonClick('divide');
        break;
        case "Enter":
            totalNo.operateReady = false;
            operate();
        break;
        case "c":
            clearButton();
        break;
        case "C":
            clearButton();
        break;
        default:
        return;
    }
});

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

function decimalButtonClick() {
    if(totalNo.decimal == false){
        totalNo.newNo = totalNo.newNo + '.';
        totalNo.decimal = true;
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
        }
    else {
        return;
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
        totalNo.decimal = false;
        displayNo = totalNo.originalNo;
        totalPrint.innerHTML = displayNo;
        console.log(totalNo.originalNo);
    }
}

function operate() {
    if(totalNo.newNo == '0' && totalNo.requestedOperator == 'divide') {
        displayNo = 'To Infinity & Beyond'
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
    totalNo.decimal = false;
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
    totalNo.decimal = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function multiply(){
    let completeTotal = Number(totalNo.originalNo) * Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.decimal = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function divide(){
    let completeTotal = Number(totalNo.originalNo) / Number(totalNo.newNo);
    totalNo.originalNo = completeTotal.toString();
    totalNo.newNo = '0';
    displayNo = totalNo.originalNo;
    totalNo.usable = false;
    totalNo.decimal = false;
    totalNo.requestedOperator = 'nothing';
    return totalPrint.innerHTML = displayNo;
}

function clearButton() {
    totalNo.originalNo = '0';
    totalNo.newNo = '0';
    totalNo.requestedOperator = 'nothing';
    totalNo.usable = true;
    totalNo.operateReady = false;
    displayNo = totalNo.newNo;
    totalPrint.innerHTML = displayNo;
}

function deleteButton() {
    if(totalNo.newNo == '0' || totalNo.newNo.length < 2){
        totalNo.newNo = '0';
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
    }
    else {
        let tempNo = totalNo.newNo;
        totalNo.newNo = tempNo.substring(0, tempNo.length - 1);
        displayNo = totalNo.newNo;
        totalPrint.innerHTML = displayNo;
    }
}