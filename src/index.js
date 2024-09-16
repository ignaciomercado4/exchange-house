import {
    $initialCurrency,
    $finalCurrency,
    $initialAmount,
    $calculateButton,
    displayFinalAmount
} from './ui.js';

import {
    convertInitialAmount,
} from './conversion.js';

const BASE_API_URL = "https://v6.exchangerate-api.com/v6/d8cb21195343f64d6681c718/latest/";

function calculateFinalAmount() {
    if ($initialAmount.value && $initialCurrency.value) {
        fetch(BASE_API_URL + $initialCurrency.value)
            .then(response => response.json())
            .then(responseJSON => convertInitialAmount(responseJSON))
            .then(finalAmount => displayFinalAmount(finalAmount, $finalCurrency.value))
            .catch(error => console.log(error))
    }
}

$calculateButton.onclick = calculateFinalAmount;






