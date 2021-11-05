import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { increment, decrement, increaseByValue, getData} from "./redux/counter";

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { count, status } = useSelector((state) => state.counter);   // state.counter is the initial state



  // Returning JSX

  return (
    <div className="App">
      <h2 onClick = {getData}>{status}</h2>
      <h1>{count}</h1>
      <input
        type="text"
        placeholder={'add number'}
        value = {value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button
        onClick= {
         () => setTimeout(() => dispatch(increaseByValue(value)), 3000)
        }
      >
        Increase by value {value}
      </button>
      <button onClick = {() => dispatch(getData())}>Call api</button>
    </div>
  );
}

export default App;
