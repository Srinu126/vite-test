import { useState } from "react"


const useCounter = (value:number) => {
    const [counter, setCounter] = useState<number>(value);

    const increment = () => {
        setCounter(prev => prev+1);
    }

    const decrement = () => {
        setCounter(prev => prev-1);
    }

    return {counter, increment, decrement};
}

export default useCounter;