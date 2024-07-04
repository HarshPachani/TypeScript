import { ReactNode, createContext, useState } from "react";
import Box3 from "./components/Box3";

type ThemeType = 'light' | 'dark';
interface IThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<ThemeType>('light');
  
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
}


function App() {
  return <ThemeProvider>
    <Box3 />
  </ThemeProvider>
  
}

export default App;
export { ThemeContext }