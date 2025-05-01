import { useContext } from "react";
import { UserDataContext } from "../UserDataContext";

export default function useUserData() {
  const data = useContext(UserDataContext);
  return data;
}
