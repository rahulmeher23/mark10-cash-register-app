const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector(".check-button");
const message = document.querySelector(".error-msg");
const returnNotes = document.querySelectorAll(".no-of-notes");

var lessCash = 0;
message.innerText = "";

function showMessage (msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage () {
    message.style.display = "none";
}


function calculateChange(amountToReturn) {
    const notes = [2000, 500,100,20,10,5,1];

    for (var i = 0; i < notes.length; i++) {
        var notesCount = Math.trunc(amountToReturn / notes[i]);
        amountToReturn = amountToReturn % notes[i];

        console.log("Deno. :", notes[i],"No. of notes:", notesCount,"Amt to return:", amountToReturn); 

        returnNotes[i].innerText = notesCount;
    }
}

function validateAmount () {
    const cashAmount = Number(cashGiven.value);
    const billAmount = Number(billAmt.value);

    hideMessage(); 

    if (billAmount > 0 && cashAmount > 0) {
        if ( billAmount == cashAmount) {
            showMessage("Cash received is equal to the bill amount. No cash needs to be returned.");
        } else if (cashAmount  > billAmount) {
            console.log ("less cash executed");
            const retAmt = cashAmount  - billAmount; 
            calculateChange(retAmt);
        } else {
            lessCash = billAmount - cashAmount ;
            showMessage(`₹ ${billAmount - cashAmount} short! Demand extra cash!`);
        }
    } else {
        if (cashAmount < 0) {
            showMessage("Please enter a valid cash received amount!");
        } else {
            showMessage("Please enter a valid bill amount!");
        }
    }
}

checkBtn.addEventListener("click", validateAmount);
