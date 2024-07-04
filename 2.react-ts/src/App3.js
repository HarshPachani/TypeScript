"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const react_1 = require("react");
const Box3_1 = __importDefault(require("./components/Box3"));
const ThemeContext = (0, react_1.createContext)({
    theme: 'light',
    toggleTheme: () => { },
});
exports.ThemeContext = ThemeContext;
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = (0, react_1.useState)('light');
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>;
};
function App() {
    return <ThemeProvider>
    <Box3_1.default />
  </ThemeProvider>;
}
exports.default = App;
