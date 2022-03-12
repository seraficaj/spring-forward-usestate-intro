import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        name: "Jason",
        favFood: 'macaroni'
    });
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
            <h2>the current user is: {user.name}</h2>
            <h2>their favFood is: {user.favFood}</h2>
            <form>
                <label htmlFor="name-input">Enter your name</label>
                <input
                    type="text"
                    id="name-input"
                    placeholder="enter username"
                    onChange={e => setUser({...user, name: e.target.value})}
                    value = {user.name}
                />
                  <input
                    type="text"
                    id="food-input"
                    placeholder="enter fave food"
                    onChange={e => setUser({...user, favFood: e.target.value})}
                    value = {user.favFood}
                />
            </form>
        </div>
    );
}

export default Counter;
