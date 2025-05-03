import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/slices/counterSlice";
import Auth from "./component/Auth";
function App() {
  const { counter } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increaseCount({ offset: 5 }))}>
        Increase Count
      </button>
      <button onClick={() => dispatch(decreaseCount({ offset: 4 }))}>
        Decrease Count
      </button>
      <Auth />
    </div>
  );
}

export default App;
