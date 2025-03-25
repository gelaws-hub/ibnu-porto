import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Certifications from "./components/certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App

