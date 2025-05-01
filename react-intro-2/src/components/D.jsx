import useUserData from "../context/hooks/UserDataHook";
export default function D() {
  const { name } = useUserData();
  return (
    <div>
      <h1>{name} Component D</h1>
    </div>
  );
}
