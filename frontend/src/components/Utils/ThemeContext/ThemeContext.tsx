import { createContext } from 'react';

export type ThemeContextType = {
  themeMode: string;
  handleThemeToggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    themeMode:"light",
    handleThemeToggle:()=> {}
})