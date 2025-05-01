import A from "./components/A";
import D from "./components/D";
import UserDataProvider from "./context/providers/UserDataProvider";
function App() {
  return (
    <div>
      <UserDataProvider>
        <A />
        <D />
      </UserDataProvider>
    </div>
  );
}

export default App;
