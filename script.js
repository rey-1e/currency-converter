const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

let convertBtn = document.querySelector("#convert-btn");
let dropdownFrom = document.querySelector("#from-currency");
let dropdownTo = document.querySelector("#to-currency");


for(const currencyCode in countryList) {
    
    let newOptionFrom = document.createElement("option");
    newOptionFrom.innerText = currencyCode; 
    dropdownFrom.appendChild(newOptionFrom);
    
    let newOptionTo = document.createElement("option");
    newOptionTo.innerText = currencyCode; 
    dropdownTo.appendChild(newOptionTo);

}

