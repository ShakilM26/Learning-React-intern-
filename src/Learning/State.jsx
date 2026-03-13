import React, {useState} from "react";

const CounterTask = () => {
    const [count, setCount] = useState(0);

    // different state for input 
    const [name, setName] = useState('')

    return (
        <div style={{border: '2px dashed', marginBottom: '20px', padding: '20px'}}>
        <h2>Example: Basic State Management with Counter</h2>

        <p>Current Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount(count-1)}>Decrease</button>

        </div>
    )
}

export default CounterTask;