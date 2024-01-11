import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    const foundValue = localStorage.getItem(key);
    if(foundValue) {
        initialValue = JSON.parse(foundValue);
    }

    const [value, setValue] = useState(initialValue);

    function updateValue(newValue) {

        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, updateValue];
}