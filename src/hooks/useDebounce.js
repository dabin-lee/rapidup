import React, { useEffect, useState } from "react";
import { useFetchTitle } from "./useFetchData";

export const UseDebounce = ({ value, delay }) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const { mutate: changTit } = useFetchTitle();
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
                changTit({
                    id: value.id,
                    title: value.title,
                });
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
};
