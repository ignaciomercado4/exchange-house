const BASE_API_URL = "https://v6.exchangerate-api.com/v6/d8cb21195343f64d6681c718/latest/";
const $initialCurrency = document.querySelector('#initial-currency');
const $finalCurrency = document.querySelector('#final-currency');
const $initialAmount = document.querySelector('#initial-amount');
const $finalAmount = document.querySelector('#final-amount');
const $calculateButton = document.querySelector('#calculate');

function calculateFinalAmount() {
    if ($initialAmount.value && $initialCurrency.value) {
        fetch(BASE_API_URL + $initialCurrency.value)
            .then(response => response.json())
            .then(responseJSON => convertInitialAmount(responseJSON))
            .catch(error => console.log(error))
    }
}

function convertInitialAmount(response) {
    const CONVERSION_RATE = getMatchingConversionRate(response.conversion_rates);

    const total = $initialAmount.value * CONVERSION_RATE;
    $finalAmount.value = total.toFixed(4) + " " + $initialCurrency.value;
}

function getMatchingConversionRate(conversionRateObject) {
    let matchingConversionRate;

    for (let key in conversionRateObject) {
        if (key === $finalCurrency.value) {
            matchingConversionRate = conversionRateObject[key]
        }
    }

    return matchingConversionRate;
}



