import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){

  const isLoggedIn = false; // simulate login

  if(!isLoggedIn){
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;