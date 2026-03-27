import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = localStorage.getItem(key);

        if (item !== null) {
            return JSON.parse(item) as T;
        }

        return initialValue;
    });

    const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
        setStoredValue((prev) => {
            const valueToStore =
                value instanceof Function ? value(prev) : value;

            localStorage.setItem(key, JSON.stringify(valueToStore));

            return valueToStore;
        });
    };

    return [storedValue, setValue] as const;
};
