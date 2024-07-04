"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const redux_1 = require("./redux/redux");
function App() {
    const [value, setValue] = (0, react_1.useState)(0);
    const count = (0, react_redux_1.useSelector)((store) => store.count);
    const dispatch = (0, react_redux_1.useDispatch)();
    const incrementByValueHandler = () => {
        dispatch((0, redux_1.incrementByValue)(value));
        setValue(0);
    };
    const incrementHandler = () => {
        dispatch((0, redux_1.increment)());
    };
    const decrementHandler = () => {
        dispatch((0, redux_1.decrement)());
    };
    return <div>
    <h1>Toolkit</h1>
    <h2>Count: {count}</h2>
    <button onClick={incrementHandler}>+</button>
    <button onClick={decrementHandler}>-</button>
    <input type="number" value={value} onChange={e => setValue(Number(e.target.value))}/>
    <button disabled={value < 0} onClick={incrementByValueHandler}>Add</button>
  </div>;
}
exports.default = App;
