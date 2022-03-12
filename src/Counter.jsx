import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncreaseCount = () => {
        setCount(count + 1);
    };
    const handleDecreaseCount = () => {
        setCount(count - 1);
    };
    const handleResetCount = () => {
        setCount(0);
    };
    return (
        <div>
            <h1>Counter</h1>
            <h3>The count is currently: {count}</h3>
            <button onClick={handleIncreaseCount}>+</button>
            <button onClick={handleResetCount}>Reset</button>
            <button onClick={handleDecreaseCount}>-</button>
        </div>
    );
}

export default Counter;
