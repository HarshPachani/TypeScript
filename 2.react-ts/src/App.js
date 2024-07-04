"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Box_1 = __importDefault(require("./components/Box"));
const App = () => {
    const [search, setSearch] = (0, react_1.useState)('');
    return (<div>
      {/* <Box
          heading="Hello world"
          // count={1}
          func1={(a: string) => {
            console.log(a)
          }}
        >
          {<>This is reserved children prop...</>}
        </Box>
        */}
      <Box_1.default label="Search" value={search} setter={setSearch}/>
    </div>);
};
exports.default = App;
