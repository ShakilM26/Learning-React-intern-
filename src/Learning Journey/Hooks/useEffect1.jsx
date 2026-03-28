import { useEffect, useState } from "react";

export default function FetchData() {
  const [todo, setTodo] = useState(null);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setTodo(data));
  }, []);
  // [] - empty dependency, run only once 
  // when component mount hole API hit korbe 

  return (
    <div>
      <h1>useEffect Practice: Fetching Data</h1>
      <h3>Todo Data:</h3>

{/* // data load na houya porjonto dekhabe  */}
      {!todo && <p>Loading...</p>} 

      {todo && ( // data jokhon pabe tokhon dekhabe
        <div>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
        </div>
      )}
    </div>
  );
}