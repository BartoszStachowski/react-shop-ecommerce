import { CURRENCIES } from '@/constants/currencies.ts';

export const CurrencySelector = () => {
    return (
        <select name="currency" id="currency" className="p-2">
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
};
