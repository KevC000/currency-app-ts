import currencies from '../utils/currencies';

export default function SelectBaseCurrency(
    {
        baseValue,
        changeBaseCurrency,
        changeBaseValue,
    }: {
        baseValue: number,
        changeBaseCurrency: Function,
        changeBaseValue: Function,
    }
) {
    return (
        <div>
            <label htmlFor="baseCurrency" className="block text-sm font-medium text-gray-700">
                Base Currency
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-20 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="1.00"
                    defaultValue={baseValue}
                    onChange={(e) => changeBaseValue(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={'USD'}
                        onChange={(e) => changeBaseCurrency(e.target.value)}
                    >
                        {Object.keys(currencies).map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}