"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
// import App from './App.tsx'
// import App2 from './App2.tsx'
require("./index.css");
const App5_1 = __importDefault(require("./App5")); //Redux toolkit.=
// import App3 from './App3.tsx' //context API using TS
// import App4 from './App4.tsx' //useReducer using TS
const react_redux_1 = require("react-redux");
const redux_1 = require("./redux/redux");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 />  */} {/* context API using TS */}
    {/*<App4 />*/} {/* useReducer using TS */}
    <react_redux_1.Provider store={redux_1.store}>
      <App5_1.default /> {/* Redux Toolkit */}
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
