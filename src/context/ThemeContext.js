import { useState, createContext, useContext } from "react";
const ThemeContext = createContext(); //context

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// as a custom hook
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
