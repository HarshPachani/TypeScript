import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, decrement, increment, incrementByValue } from "./redux/redux";

function App() {
  const [value, setValue] = useState<number>(0);
  const count = useSelector((store: StateType) => store.count)

  const dispatch = useDispatch();

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(value));
    setValue(0);
  }

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return <div>
    <h1>Toolkit</h1>
    <h2>Count: {count}</h2>
    <button onClick={incrementHandler}>+</button>
    <button onClick={decrementHandler}>-</button>
    <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
    <button disabled={value < 0} onClick={incrementByValueHandler}>Add</button>
  </div>
}

export default App;