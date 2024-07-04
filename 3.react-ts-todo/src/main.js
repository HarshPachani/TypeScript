"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
const react_2 = require("@emotion/react");
const theme_ts_1 = require("./theme.ts");
const material_1 = require("@mui/material");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_2.ThemeProvider theme={theme_ts_1.theme}>
      <material_1.CssBaseline />
      <App_tsx_1.default />
    </react_2.ThemeProvider>
  </react_1.default.StrictMode>);
