import { useState, useEffect } from 'react';

function useDebouce(value, delay) {
    const [deboucedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deboucedValue;
}

export default useDebouce;
