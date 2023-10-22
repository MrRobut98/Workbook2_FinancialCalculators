window.onload = handleOnload;

function handleOnload(){
    const calculateButtonEl = document.getElementById("calculateButton");

    calculateButtonEl.onclick = handleCalculateOnclick;
}

function handleCalculateOnclick(){
    console.log("calculate button clicked");
    const depositInputEl = document.getElementById("deposit");
    const interestRateInputEl = document.getElementById("interestRate");
    const loanTermInputEl = document.getElementById("loanTerm");
    const futurevalueInputEl = document.getElementById("futureValue");
    const interestEarnedinputEl = document.getElementById("interestEarned");

    const deposit = Number(depositInputEl.value);
    const interestRate = Number(interestRateInputEl.value) / 100; 
    const loanTerm = Number(loanTermInputEl.value);

     futurevalueInputEl.value = deposit * Math.pow(1 + interestRate / 365, 365 * 5);
    interestEarnedinputEl.value = deposit * Math.pow(1 + interestRate / 365, 365 * 5)- deposit;
}
