const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#Check-button");
const errorMessage  = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll(".no-of-notes");



const availableNotes = [2000,500,100,50,10,5,1]
checkButton.addEventListener("click", function validateBillAndCashAmount(){
  hideMessage()
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            errorDisplay("Amount Shuold Be Atleat Equal To Bill Amount");
        }
    }
    else{
       errorDisplay("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){
    for(let i = 0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    
        amountToBeReturned = amountToBeReturned%availableNotes[i];
        noOfNotes[i].innerHTML  = numberOfNotes;
    }
}

function hideMessage(){
    errorMessage.style.display = 'none';
}


function errorDisplay(message){
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = message;
}