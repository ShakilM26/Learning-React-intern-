import { useState } from "react";

export default function MultiForm() {
  const [form, setForm] = useState({
    name: "", email: "",
  });

//   dynamic state update
  const handleChange = (e) => {
    setForm({...form,
      // dynamic key
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}/>

      <input 
        type="email" 
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}