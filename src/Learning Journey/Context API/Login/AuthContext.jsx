import { createContext, useState, useContext } from "react";

// create context, (store)
const AuthContext = createContext();


// Parent 
export default function Parent() {
  // store loged in username 
  const [user, setUser] = useState(null);

  // login function
  const login = (username) => {
    setUser({ name: username });
  };

  // logout function, and user will null
  const logout = () => {
    setUser(null);
  };

  return (
    // Provider = all components are now user can use -> login, logout
    <AuthContext.Provider value={{ user, login, logout }}>

      <h1>ContextAPI Practice - 2</h1>
      
      {/* Login */}
      <LoginPanel />

      {/* UI dashboard */}
      <Dashboard />
    </AuthContext.Provider>
  );
}



// LoginPanel
function LoginPanel() {
  // login activated from context
  const { login, user } = useContext(AuthContext);
  const [name, setName] = useState("");

  if (user) return null;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Login</h3>

      <input
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)} // textbox value jabe state a
      />

{/* Button = login function call */}
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}


// UI - Dashboard  

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  // if not login then show this message
  if (!user) return <p>Please log in...</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>

      {/* logout button */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}