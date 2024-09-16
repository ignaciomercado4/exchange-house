export const $initialCurrency = document.querySelector('#initial-currency');
export const $finalCurrency = document.querySelector('#final-currency');
export const $initialAmount = document.querySelector('#initial-amount');
export const $finalAmount = document.querySelector('#final-amount');
export const $calculateButton = document.querySelector('#calculate');

export function displayFinalAmount(finalAmount, finalCurrency) {

    $finalAmount.value = finalAmount.toFixed(2) + " " + finalCurrency;
}