const BASE_API_URL = "https://v6.exchangerate-api.com/v6/d8cb21195343f64d6681c718/latest/";
const $initialCurrency = document.querySelector('#initial-currency');
const $finalCurrency = document.querySelector('#final-currency');
const $initialAmount = document.querySelector('#initial-amount');
const $finalAmount = document.querySelector('#final-amount');
const $calculateButton = document.querySelector('#calculate');
let finalAmount = 0;


$calculateButton.onclick = function () {
    if ($initialAmount.value && $initialCurrency.value) {
        fetch(BASE_API_URL + $initialCurrency.value)
            .then(response => response.json())
            .then(responseJSON => a(responseJSON))
            .catch(error => console.log(error))

    }
}

function a(res) {
    console.log(res)
}