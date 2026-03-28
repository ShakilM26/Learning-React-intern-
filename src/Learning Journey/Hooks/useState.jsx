import { useState } from "react";

export default function Form() {

  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // form reload stop
    // read data from state
    alert("Submitted Name: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Your Name</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder="Type your name"
      />

      <button type="submit">Submit</button>

    </form>
  );
}