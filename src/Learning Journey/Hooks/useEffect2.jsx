import { useState, useEffect } from "react";

export default function TimerExample() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev+1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>useEffect Practice: 2</h1>
            <h2>Timer: {seconds}s</h2>
        </div>
    )
}