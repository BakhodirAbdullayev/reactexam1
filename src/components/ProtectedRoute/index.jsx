import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../utils/context";

const ProtectedRoute = ({ children }) => {
  const { inUser } = useContext(AuthContext);

  if (!inUser) {
    return <Navigate to={"/signin"} />;
  }

  return children;
};

export default ProtectedRoute;
