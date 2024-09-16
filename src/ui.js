export const $initialCurrency = document.querySelector('#initial-currency');
export const $finalCurrency = document.querySelector('#final-currency');
export const $initialAmount = document.querySelector('#initial-amount');
export const $finalAmount = document.querySelector('#final-amount');
export const $calculateButton = document.querySelector('#calculate');
export const $errorContainer = document.querySelector('#error');

export function displayFinalAmount(finalAmount, finalCurrency) {

    $finalAmount.value = finalAmount.toFixed(2) + " " + finalCurrency;
}

export function displayError(errorMessage) {
    $errorContainer.textContent = errorMessage;
    $errorContainer.classList.replace('hidden', 'block');
}
export function hideErrors() {
    $errorContainer.classList.replace('block', 'hidden');
}