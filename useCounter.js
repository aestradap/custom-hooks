import React, {useState} from "react";

export const useCounter = (initState = 10) => {

    const [state, setState] = useState(initState);

    const reset = () => {
        setState(initState)
    }
    const increment = (factor = 1) => {
        setState(state + factor)
    }
    const decrement = (factor = 1) => {
        setState(state - factor)
    }
    return {
        state,
        reset,
        increment,
        decrement
    };
}