import { useState, useEffect } from "react";
import axios from "axios";

function Joke() {
    // state value to update when API responds
    const [joke, setJoke] = useState("");
    const [pressedKey, setPressedKey] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // the function needs a name
        const handleKeyDown = (e) => setPressedKey(e.key);
        // mount the event lisener on the window
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // unmount the event listener to clean up
    }, [pressedKey]);

    // using intervals in react
    useEffect(() => {
        const incrementCounter = () => setCounter(counter + 1);
        const counterInterval = setInterval(incrementCounter, 500);
        return () => {
            // clean up window here
            clearInterval(counterInterval)
        };
    }, [counter]);

    useEffect(() => {
        // IIFE to have joke loaded  on component mount
        (async () => {
            try {
                const options = {
                    headers: {
                        Accept: "application/json",
                    },
                };
                const { data } = await axios.get(
                    `https://icanhazdadjoke.com/`,
                    options
                );
                setJoke(data.joke);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []); // data only needed on component mount
    const handleGetNewJoke = async () => {
        const options = {
            headers: {
                Accept: "application/json",
            },
        };
        const { data } = await axios.get(
            `https://icanhazdadjoke.com/`,
            options
        );
        setJoke(data.joke);
    };
    return (
        // hook into the component lifecycle and get data from api
        <div>
            <h2>Display Jokes Here:</h2>
            <h3>{joke}</h3>
            <button onClick={handleGetNewJoke}>Get new joke</button>
            <div>
                <h2>The pressed key is: {pressedKey}</h2>
            </div>
            <div>
                <h2>Counter: {counter}</h2>
            </div>
        </div>
    );
}

export default Joke;
