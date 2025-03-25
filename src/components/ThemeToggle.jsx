"use client"

import { Sun, Moon } from "react-feather"

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-teal-600 dark:bg-teal-500 text-white shadow-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-300 z-50 md:hidden"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default ThemeToggle

