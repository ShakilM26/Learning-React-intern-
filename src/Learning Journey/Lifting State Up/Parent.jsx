import { useState } from "react";
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";

export default function ParentInfo() {

  const [info, setInfo] = useState({name: "", age: "" });


  const handleChange = (field, value) => {
    setInfo((prev) => ({
      ...prev, // keep older state
      [field]: value   // and dynamic key updatee      
    }));
  };

  return (
    <div className="p-4 border">
      <h1 className="font-bold text-lg">Lifting State Up</h1>
      <h2 className="font-bold text-lg mb-3">Task 1: Name + Age</h2>

      {/* NameInput */}
      <NameInput
        value={info.name}
        onChange={(val) => handleChange("name", val)}
      />

      {/* Ageinput */}
      <AgeInput
        value={info.age}
        onChange={(val) => handleChange("age", val)}
      />

      <p className="mt-4 text-blue-700 font-medium">
        Hello, my name is <strong> {info.name || "___"} </strong> and I am <strong>{info.age || "__"}</strong> years old.
      </p>
    </div>
  );
}