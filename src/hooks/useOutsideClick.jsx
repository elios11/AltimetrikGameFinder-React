import { useEffect } from 'react';

/**
 * Custom React Hook for handling outside click events.
 *
 * This hook attaches a click event listener to the document. It allows you to detect
 * when a user clicks outside a specified DOM element, typically a React ref. When an
 * outside click is detected, it calls the provided handler function.
 *
 * @param {React.RefObject} ref - A reference to the DOM element that should trigger
 * the handler when a click occurs outside of it.
 * @param {Function} handler - The function to be called when an outside click is detected.
 */

export default function useOutsideClick(ref, handler) {
    useEffect(() => {
        function listener(e) {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }

            handler(e);
        }

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}
