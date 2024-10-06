// app/context/AuthContext.js

"use client"; // Mark this as a client-side component since it's managing state

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  // Simulate a logout function
  const logout = () => {
    setUser(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
