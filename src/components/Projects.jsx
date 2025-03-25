"use client"

import { useState } from "react"
import { GitHub, ExternalLink } from "react-feather"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "FaceFit App",
      description:
        "A facial analysis application with backend infrastructure built using Express.js and Prisma ORM, deployed on Google Cloud Platform.",
      image: "/projects/facefit.jpg",
      category: "web",
      tags: ["Express.js", "Prisma", "GCP", "Cloud SQL", "App Engine"],
      github: "https://github.com/Capstone-FaceFit",
      demo: "https://www.linkedin.com/posts/muhamad-ibnu-fadhil_lifeatbangkit-bangkit24h2-bepchallenge-activity-7279447601391812609-soE9?utm_source=share&utm_medium=member_desktop&rcm=ACoAABwsSbUBN98d9fXu_RvN9nT8iqKtowIWjBY",
    },
    {
      id: 2,
      title: "PC Retail E-commerce Platform",
      description:
        "A comprehensive e-commerce platform for PC retail store using React.js, Express.js, and MySQL with optimized database architecture.",
      image: "/projects/mjteknologi.jpg",
      category: "web",
      tags: ["React.js", "Next.js", "Express.js", "MySQL", "RESTful API"],
      github: "https://github.com/gelaws-hub",
      demo: "https://ibnu-fadhil.my.id",
    },
    {
      id: 3,
      title: "Pulang Sekolah Game",
      description:
        "A Unity 3D game developed for the National Student Exhibition Information and Technology, achieving finalist status among 600+ teams.",
      image: "/projects/gemastik.jpg",
      category: "game",
      tags: ["Unity 3D", "Game Development", "C#"],
      demo: "https://www.youtube.com/watch?v=d6miMx6j7tw&t=2s",
    },
    {
        id: 4,
        title: "Nippon Computer Engineering",
        description:
          "Nippon CE is an online learning platform designed for Computer Engineering students to master Japanese language skills.",
        image: "/projects/nipponce.jpg",
        category: "web",
        tags: ["React.js", "PostgreSQL", "RESTful API"],
        github: "https://github.com/gelaws-hub",
        demo: "https://nipponce.web.app",
      },
    {
      id: 5,
      title: "Intern Attendance System",
      description:
        "A secure web-based system for intern attendance, replacing the previous WhatsApp based method",
      image: "/projects/diskominfo-magang.jpg",
      category: "web",
      tags: ["React.js", "Express.js", "UI/UX Design"],
      github: "https://github.com/gelaws-hub/Diskominfo-Magang-Deployment",
      demo: "https://magangkominfo.semarangkota.go.id",
    },
    {
      id: 6,
      title: "2D Shape Calculator",
      description:
        "A Simple web app to calculate the shape of various 2D shapes",
      image: "/projects/shape-calculator.jpg",
      category: "web",
      tags: ["React.js", "Express.js"],
      github: "https://github.com/gelaws-hub/ta-rplbk",
      demo: "https://ta-shape-calculator.web.app",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
            <span className="relative">My Projects</span>
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Check out some of my recent work and personal projects that showcase my skills and passion for development.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "all"
                ? "bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "web"
                ? "bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("game")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === "game"
                ? "bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Game Development
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <GitHub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-teal-600/80 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

