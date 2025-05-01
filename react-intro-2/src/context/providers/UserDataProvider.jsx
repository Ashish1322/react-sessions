import { useState } from "react";
import { UserDataContext } from "../UserDataContext";

function UserDataProvider({ children }) {
  const [name, setName] = useState("Ashish");
  return (
    <UserDataContext.Provider value={{ name }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataProvider;
