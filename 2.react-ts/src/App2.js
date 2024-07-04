"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const App = () => {
    const [user, setUser] = (0, react_1.useState)();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user);
    };
    return (<div>
      <form onSubmit={submitHandler}>
        <input type="number" placeholder="Age" value={(user === null || user === void 0 ? void 0 : user.age) || ''} onChange={(e) => setUser((prevVal) => (Object.assign(Object.assign({}, prevVal), { age: Number(e.target.value) })))}/>
        <input type="text" placeholder="Name" value={(user === null || user === void 0 ? void 0 : user.name) || ''} onChange={(e) => setUser((prevVal) => (Object.assign(Object.assign({}, prevVal), { name: e.target.value })))}/>

        <button type='submit'>Register</button>
      </form>
    </div>);
};
exports.default = App;
