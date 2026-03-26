import { useRef } from "react";

export default function UncontrolledForm() {
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', nameRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef} />
            <button type="submit">Submit</button>
        </form>
    )
};

// value state a na giye direct DOM theke pora hoy
// and performance good