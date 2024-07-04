"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const initialState = {
    count: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { count: state.count + action.payload };
            break;
        case 'Decrement':
            return { count: state.count - action.payload };
            break;
        default:
            return state;
    }
};
function App() {
    const [state, dispatch] = (0, react_1.useReducer)(reducer, initialState);
    const increment = () => {
        dispatch({
            type: 'Increment',
            payload: 1
        });
    };
    const decrement = () => {
        dispatch({
            type: 'Decrement',
            payload: 1
        });
    };
    return <div>
    <h1>Count Change</h1>
    <p>Count: {state.count}</p>
    
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>;
}
exports.default = App;
