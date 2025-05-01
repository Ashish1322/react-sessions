import C from "./C";
import useUserData from "../context/hooks/UserDataHook";
export default function B() {
  const { name } = useUserData();
  return (
    <div>
      <h1>Component B : {name}</h1>
      <C />
    </div>
  );
}
