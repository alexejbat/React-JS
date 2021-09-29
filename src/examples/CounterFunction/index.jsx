import React, { useState, useMemo, useEffect, useCallback } from "react";

export const CounterFunction = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

    }, []);


    useEffect(() => {
        console.log('componentDidUpdate')
    });

    const date = useMemo(() => {
        debugger
        return new Date().toISOString();
    }, [])

    const increment = useCallback(() => {
        setCount((count) => count + 1);

    }, [])

    // const increment = () => {
    //     setCount(count + 1);

    //     // setTimeout(() => {
    //     //     setCount((count) => count + 1);
    //     // }, 2000)
    // }

    return <div>
        <div>
            date: {date}
        </div>
        <div>
            CounterFunction counter: {count}
        </div>
        <button onClick={increment}>
            increment
        </button>
    </div>
}