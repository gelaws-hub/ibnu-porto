"use client"

import { useState } from "react"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "react-feather"

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const experiences = [
    {
      id: 1,
      role: "Laboratory Teaching Assistant",
      company: "Department of Computer Engineering, Diponegoro University",
      location: "Semarang, ID",
      period: "Mar 2024 – Present",
      description: [
        "Guided students in practical labs, focusing on microprocessor integration with computer systems.",
        "Facilitated hands-on workshops in automation systems and control theory implementation using Simulink and Matlab.",
        "Taught students 3D content creation and game development.",
      ],
      tags: ["Teaching", "Microprocessor", "Control Systems", "Multimedia"],
    },
    {
      id: 2,
      role: "Cloud Computing Student & Backend Developer",
      company: "Bangkit Academy 2024 By Google, GoTo, Tokopedia, Traveloka",
      location: "Bandung, ID",
      period: "Sep 2024 – Dec 2024",
      description: [
        "Engineered backend infrastructure for FaceFit app using Express.js and Prisma ORM, achieving 20% faster server response time.",
        "Deployed and managed application on Google Cloud Platform utilizing Cloud SQL, Cloud Storage, and App Engine.",
        "Coordinated with Machine Learning and Mobile Development teams to integrate facial analysis features and API implementations.",
        "Recognized as Top 1,000 Most Active Students and Top 5 Best Presenters in English ILT (Instructor Led Training) Activity Class.",
        "Graduated with distinction Top 10% Students in Cloud Computing with 96.20/100 average score.",
      ],
      tags: ["Cloud Computing", "Backend Development", "Express.js", "GCP", "Prisma ORM"],
    },
    {
      id: 3,
      role: "Full Stack Developer – Final Project",
      company: "PC Retail Store MJ-Teknologi",
      location: "Semarang, ID",
      period: "Aug 2024 – Jan 2025",
      description: [
        "Developed and deployed a comprehensive e-commerce platform using React.js, Express.js, and MySQL.",
        "Designed and optimized database architecture, improving inventory and transaction efficiency by roughly 25%.",
        "Created RESTful APIs to facilitate seamless communication between frontend and backend systems.",
      ],
      tags: ["Full Stack", "React.js", "Express.js", "MySQL", "RESTful API"],
    },
    {
      id: 4,
      role: "Project Manager and UI/UX Designer Internship",
      company: "Government of Communication Department and Informatics",
      location: "Semarang, ID",
      period: "Sep 2023 – Nov 2023",
      description: [
        "Developed a secure and scalable web-based system for intern attendance system, replacing the previous WhatsApp based method.",
        "Led a team of 5 developer interns to build the application using Express.js and React.js.",
        "Delivered a scalable application using React.js and Express.js, enhancing process efficiency by 30%.",
      ],
      tags: ["Project Management", "UI/UX Design", "React.js", "Express.js"],
    },
    {
      id: 5,
      role: "Multimedia Mentor",
      company: "Computer Engineering Research Club",
      location: "Semarang, ID",
      period: "Apr 2023 – Oct 2023",
      description: [
        "Introduced club members to the world of 3D, exploring its possibilities and applications.",
        "Led hands-on sessions in 3D modeling, texturing, and animation using Blender 3D.",
      ],
      tags: ["3D Modeling", "Blender", "Mentoring"],
    },
    {
      id: 6,
      role: "Freelance 3D Product Designer",
      company: "Fiverr Freelance Platform",
      location: "Remote",
      period: "Sep 2020 – Sep 2024",
      description: [
        "Delivered 100+ 3D product design projects for international clients with 100% on-time delivery rate.",
        "Achieved 80+ positive client satisfaction reviews, highlighting exceptional service and design quality.",
      ],
      tags: ["3D Design", "Freelancing", "Product Design"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
            <span className="relative">Work Experience</span>
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey and the valuable experiences I've gained along the way.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-8 ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"}`}
            >
              <div className="hidden md:block absolute top-6 -left-3 md:left-auto md:right-auto md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-teal-500"></div>

              <div className="ml-8 md:ml-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-2 md:mt-0 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center self-end md:self-auto"
                  >
                    {expandedId === exp.id ? (
                      <>
                        <span className="text-sm mr-1">Less</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span className="text-sm mr-1">More</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>

                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{exp.company}</h4>

                <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {expandedId === exp.id && (
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2 text-teal-500 dark:text-teal-400">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

