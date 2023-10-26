import { useEffect, useState } from 'react';

/**
 * Custom React Hook for Debouncing Values
 *
 * This hook is designed to debounce changes to a value, which is often used to
 * improve the performance of real-time user interactions, such as search input.
 *
 * @param {any} value - The current value to debounce.
 * @param {number} delay - The delay (in milliseconds) before updating the debounced value.
 *
 * @returns {any} - The debounced value, updated after the specified delay.
 *
 * @example
 * // Import the hook
 * import useDebounce from '@hooks/useDebounce';
 *
 * // Inside a functional component
 * function ExampleComponent() {
 *     const [searchValue, setSearchValue] = useState('');
 *
 *     // Apply the debouncing hook
 *     const debouncedSearchValue = useDebounce(searchValue, 300); // Delay of 300ms
 *
 *     // The debounced value is now available for use
 *     // Perform fetch or other operations using debouncedSearchValue
 * };
 */

export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
