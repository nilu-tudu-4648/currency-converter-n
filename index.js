import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_qTHpjb02DvhS5maEIGoVhusDe4bZpL8kl1i1nuGw');


export async function convertCurrency(fromCurrency,toCurrency,units) {
 const res = await  freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multi= res.data[toCurrency]
    return multi*units
}
