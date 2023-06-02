import { checkStatus, json } from './fetchUtils';

export type Rates = {
    currency: string;
    rate: number;
    total?: number;
}[];

export default async function getRates(baseCurrency: string): Promise<Rates | void> {
    return fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
        .then(checkStatus)
        .then(json)
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }

            return Object.keys(data.rates).map(key => ({
                currency: key,
                rate: data.rates[key]
            }));
        })
        .catch(error => console.error(error.message));
}