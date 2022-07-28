import { useState, useEffect } from "react";

const colors = ["goldenrod", "salmon", "sienna"];

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style = `background: ${colors[randomIndex]}`;
    }, [isVisible]);

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

            <div style={{ marginTop: "10px" }}>
                <input type={isVisible ? "text" : "password"} />
                <button onClick={() => setIsVisible(!isVisible)}>
                    Mostrar/ocultar contraseña
                </button>
            </div>
        </div>
    );
};

export default Counter;