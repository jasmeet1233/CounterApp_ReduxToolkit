import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increaseByValue } from "./redux/counter";

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App">
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
         () => setTimeout(() => dispatch(increaseByValue({value})), 3000)
        }
      >
        Increase by value {value}
      </button>
    </div>
  );
}

export default App;
