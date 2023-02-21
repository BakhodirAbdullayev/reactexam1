import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [regUsers, setRegUsers] = useState([]);
  const [inUser, setInUser] = useState(null);

  return (
    <AuthContext.Provider value={{ setRegUsers, regUsers, inUser, setInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
