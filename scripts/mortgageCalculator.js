window.onload = handleOnload;

function handleOnload(){
    const calculateButtonEl = document.getElementById("calculateButton");

    calculateButtonEl.onclick = handleCalculateOnclick;
}

function handleCalculateOnclick(){
    console.log("calculate button clicked");
    const loanAmountInputEl = document.getElementById("loanAmount");
    const interestRateInputEl = document.getElementById("interestRate");
    const loanTermInputEl = document.getElementById("loanTerm");
    const answerInputEl = document.getElementById("mortgageRate");

    const loanAmount = Number(loanAmountInputEl.value);
    const interestRate = Number(interestRateInputEl.value) / 100 / 12; 
    const loanTerm = Number(loanTermInputEl.value) * 12;

     answerInputEl.value = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) /
     (Math.pow(1 + interestRate, loanTerm) - 1);
}
