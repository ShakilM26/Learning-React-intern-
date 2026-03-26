import { useState } from "react";

export default function SimpleForm() {
    // saving input value
    const [name, setName] = useState('');
    
    // after submit form this function will run
    const handleSubmit = (e) => {
        e.preventDefault(); // stop page relode
        alert("Your Name: " + name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Enter Name"
                value={name} // state -> input
                // input -> state
                onChange={(e) => setName(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    );
}