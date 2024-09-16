const $finalCurrency = document.querySelector('#final-currency');
const $initialAmount = document.querySelector('#initial-amount');

export function convertInitialAmount(response) {
    const CONVERSION_RATE = getMatchingConversionRate(response.conversion_rates);

    const finalAmount = $initialAmount.value * CONVERSION_RATE;

    return finalAmount;
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

