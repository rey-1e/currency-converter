const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let convertBtn = document.querySelector("#convert-btn");
let dropdownFrom = document.querySelector("#from-currency");
let dropdownTo = document.querySelector("#to-currency");
let result = document.querySelector("#result");

window.addEventListener("load", async () => {
    let promise = await fetch(`${BASE_URL}/${"usd"}.json`)
    let usable = await promise.json();
    let val = usable.usd["inr"];

    result.innerText = `${1} USD = ${val.toFixed(2)} INR`;
    console.log(result.innerText);

})

for(const currencyCode in countryList) {
    
    let newOptionFrom = document.createElement("option");
    newOptionFrom.innerText = currencyCode; 
    dropdownFrom.appendChild(newOptionFrom);

    let newOptionTo = document.createElement("option");
    newOptionTo.innerText = currencyCode; 
    dropdownTo.appendChild(newOptionTo);

}

convertBtn.addEventListener("click", async () => {
    
    //query selector for user's input field.
    let userInput = document.querySelector(".form-group input");

    //exact amount the user has entered.
    let amount = userInput.value;

    //check for edge cases.
    if(amount <= 0) {
        amount = 1; 
        userInput.value.innerText = "1";
    }

    //FROM INPUT; 
    let fromInput = dropdownFrom.value;

    //TO INPUT; 
    let toInput = dropdownTo.value;

    //query selector for the output field; 
    let outputPlace = document.querySelector("#result");

    //call the fetch API; 
    //wait first; 
    let calculation = await fetch(`${BASE_URL}/${fromInput.toLowerCase()}.json`);
    let usableObj = await calculation.json();

    let toInputBetter = toInput.toLowerCase()

    let conversionRate = usableObj.usd[toInputBetter];

    //query selector for the result field;
    let final = amount * conversionRate;
    final = final.toFixed(2);
    result.innerText = `${amount} ${fromInput} = ${final} ${toInput}`;
    console.log(result.innerText);

})