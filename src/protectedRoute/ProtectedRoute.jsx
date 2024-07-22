import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  // Check if user data exists in localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Return Navigate component if user data doesn't exist
  if (!user) {
    return <Navigate to={"/"} />;
  }

  // Return children if user data exists
  return children;
};
