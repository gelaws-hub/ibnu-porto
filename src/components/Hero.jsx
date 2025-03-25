"use client"

import { useState, useEffect } from "react"
import { GitHub, Linkedin, Mail, MapPin, ExternalLink } from "react-feather"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Engineering Student | Cloud Developer | Full Stack Developer"
  const typingSpeed = 50

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="mb-2 inline-block">
            <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
              Hello, I'm
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Muhamad Ibnu Fadhil
          </h1>
          <div className="h-8 mb-6">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            A final-year Computer Engineering student passionate about technological advancements and eager to gain new
            experiences and skills from experts worldwide.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 flex items-center"
            >
              <Mail size={18} className="mr-2" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>Semarang, Indonesia</span>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/gelaws-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-ibnu-fadhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://ibnu-fadhil.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="Website"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 dark:from-teal-500 dark:to-blue-600 absolute top-4 left-4 animate-blob animation-delay-4000"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500-500 dark:from-green-500 dark:to-green-600 absolute top-0 left-0 animate-blob animation-delay-2000"></div>
            <img
              src="/myphoto.jpg"
              alt="Muhamad Ibnu Fadhil"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 relative z-10"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#projects" className="text-gray-400 dark:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero

