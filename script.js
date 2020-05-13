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
let requestedOperator = 'nothing';
totalPrint.innerHTML = displayNo;

//Getting buttons' inputs

document.getElementById('oneBut').addEventListener('click', numberButtonClick('1'));
    // if(totalNo.newNo == '0' || totalNo.usable == false){
//     totalNo.newNo = '1';
//     totalNo.usable = true;
//     displayNo = totalNo.newNo;
//     totalPrint.innerHTML = displayNo;
//     }
//     else {
//         totalNo.newNo = totalNo.newNo + '1';
//         displayNo = totalNo.newNo;
//         totalPrint.innerHTML = displayNo;
//     }
// });

document.getElementById('plusSign').addEventListener('click', () => {
    totalNo.originalNo = totalNo.newNo;
    requestedOperator = 'plus';
    totalNo.newNo = '0';
    displayNo = totalNo.newNo;
    totalPrint.innerHTML = displayNo;
    console.log(totalNo.originalNo);
})

document.getElementById('equalSign').addEventListener('click', operate);

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

function operate() {
    add();
}


//Operator functions
function add() {
    let completeTotal = Number(totalNo.originalNo) + Number(totalNo.newNo);
    totalNo.originalNo = totalNo.newNo;
    totalNo.newNo = '0';
    displayNo = completeTotal.toString();
    totalNo.usable = false;
    return totalPrint.innerHTML = displayNo;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
 return a*b;
}

function divide(a,b){
    return a/b;
}

//need to get button inputs

//need to run functions and post to website
 //function operate()