import { useState } from "react";
import { ThemeContext } from "./Theme";
import Child from "./Child";

export default function Parent() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>ContextAPI Practice - 1</h1>
      <Child />
    </ThemeContext.Provider>
  );
}