import { useState, useEffect } from "react";
import axios from "axios";

function Joke() {
    // state value to update when API responds
    const [joke, setJoke] = useState("");
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
        </div>
    );
}

export default Joke;
