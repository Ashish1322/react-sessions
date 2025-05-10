import React from "react";
import useChat from "../context/hooks/useChat";
import { Navigate } from "react-router-dom";
export default function LoginWrapper({ children }) {
  const { isLoggedIn } = useChat();
  console.log(isLoggedIn);
  if (isLoggedIn) return children;

  return <Navigate to="/" />;
}
