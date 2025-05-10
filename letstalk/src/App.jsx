import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ChatProvider from "./context/providers/ChatProvider";
import LoginWrapper from "./auth/LoginWrapper";
function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/home"
          element={
            <LoginWrapper>
              <Home />
            </LoginWrapper>
          }
        />
      </Routes>
    </ChatProvider>
  );
}

export default App;
