"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
const react_2 = require("@emotion/react");
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const store_ts_1 = require("./redux/store.ts");
const theme = (0, material_1.createTheme)({
    palette: {
        primary: {
            main: '#347aeb'
        }
    }
});
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_ts_1.store}>
      <react_2.ThemeProvider theme={theme}>
        <material_1.CssBaseline />
        <App_tsx_1.default />
      </react_2.ThemeProvider>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
