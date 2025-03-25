"use client"

import { useState } from "react"
import { Code, Server, Database, Monitor, Cpu, Layers } from "react-feather"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming")

  const categories = [
    { id: "programming", name: "Programming", icon: <Code size={20} /> },
    { id: "cloud", name: "Cloud", icon: <Server size={20} /> },
    { id: "database", name: "Database", icon: <Database size={20} /> },
    { id: "web", name: "Web Dev", icon: <Monitor size={20} /> },
    { id: "embedded", name: "Embedded", icon: <Cpu size={20} /> },
    { id: "tools", name: "Tools", icon: <Layers size={20} /> },
  ]

  const skills = {
    programming: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "TypeScript", level: 80 },
    ],
    cloud: [
      { name: "Google Cloud Platform", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Cloudflare", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "App Engine", level: 80 },
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 85 },
      { name: "Cloud SQL", level: 80 },
    ],
    web: [
      { name: "React.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "TailwindCSS", level: 85 },
    ],
    embedded: [
      { name: "Arduino", level: 80 },
      { name: "Matlab", level: 75 },
      { name: "Simulink", level: 70 },
      { name: "Microcontrollers", level: 75 },
      { name: "Embedded C", level: 70 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Blender 3D", level: 85 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
              <span className="relative">Technical Skills</span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise and proficiency in various technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              {categories.find((c) => c.id === activeCategory)?.icon}
              <span className="ml-2">{categories.find((c) => c.id === activeCategory)?.name} Skills</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills[activeCategory].map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 rounded-full transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-teal-500 dark:group-hover:from-blue-400 dark:group-hover:to-teal-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

