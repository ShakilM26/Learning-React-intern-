import { useState } from "react";

export default function ValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    console.log("Valid Email:", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
       type="email"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

// If user submit Invalid email then sbumit will be block