import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";

export default function Auth() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome" : null}</h1>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
