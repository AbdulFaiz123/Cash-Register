const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#Check-button");
const errorMessage  = document.querySelector('#error-message');

console.log(cashGiven.value);

checkButton.addEventListener("click", function validateBillAndCashAmount(){
  hideMessage()
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount;
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

function calculateChange(){

}

function hideMessage(){
    errorMessage.style.display = 'None';
}


function errorDisplay(message){
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = message;
}