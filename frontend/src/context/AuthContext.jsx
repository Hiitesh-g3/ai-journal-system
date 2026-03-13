// src/context/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Create the context
const AuthContext = createContext();

// 2. Create the Provider component
export const AuthProvider = ({ children }) => {
  // For now, we will hardcode a valid MongoDB ID here as your "logged in" user.
  // Once you build your login page, you will update this state with the real API response!
  const [user, setUser] = useState({
    id: "65f1a2b3c4d5e6f7a8b9c0d1", // Paste your REAL MongoDB ID here
    name: "Hacker"
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook so it's super easy to use in other files
export const useAuth = () => useContext(AuthContext);