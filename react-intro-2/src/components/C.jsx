import { UserDataContext } from "../context/UserDataContext";
import { useContext } from "react";
export default function C() {
  const { name } = useContext(UserDataContext);
  return (
    <div>
      <h1>{name} Component C</h1>
    </div>
  );
}
