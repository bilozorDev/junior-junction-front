import React, { createContext, useContext, useState } from "react";
const UserLoggedIn = createContext(false);

export const UserLoggedInProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <UserLoggedIn.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserLoggedIn.Provider>
  );
};
export const useUserLoggedIn = () => useContext(UserLoggedIn);
