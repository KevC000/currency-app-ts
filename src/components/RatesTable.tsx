import type { Rates } from '../utils/getRates';

export default function RatesTable(
    {
        baseCurrency,
        baseValue,
        rates
    }:
        {
            baseCurrency: string
            baseValue: number
            rates: Rates
        }
) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-middle text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            Currency
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Rate
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {rates.map((rate, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{rate.currency}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-left text-sm text-gray-500">{`${baseValue} ${baseCurrency} : ${rate.total?.toFixed(2)} ${rate.currency}`}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}