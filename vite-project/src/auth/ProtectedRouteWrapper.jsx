import useAuth from "../context/hooks/useAuth";

export default function ProtectedRouteWrapper({ children }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return children;

  return <div>You are not logged in please login!</div>;
}
