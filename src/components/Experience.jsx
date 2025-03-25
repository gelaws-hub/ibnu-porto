import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, ChevronDown, ChevronUp, Minimize2, Maximize2, Briefcase, Users, Code } from "react-feather"

import { categorizedExperiences } from "./data/experiences"

// Flatten all experiences for when "All" category is selected
// Replace the existing allExperiences definition with this:
const allExperiences = [
  ...categorizedExperiences.work,
  ...categorizedExperiences.organization,
  ...categorizedExperiences.project,
]

// Custom hook for scroll animations using Intersection Observer
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, no need to observe anymore
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

// Section Header Component
const SectionHeader = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`text-center mb-12 transition-all duration-400 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
          <span className="relative">Experience</span>
        </span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        My professional journey and the valuable experiences I've gained along the way.
      </p>
    </div>
  )
}

// Category Tabs Component
const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center gap-2 mb-6 transition-all duration-300 delay-100 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category.id
              ? "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 shadow-sm"
              : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70"
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  )
}

// Experience Controls Component
const ExperienceControls = ({ isAllExpanded, toggleAll }) => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`flex justify-end mb-2 transition-all duration-400 delay-200 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div onClick={toggleAll} className="px-4 rounded-lg flex gap-4 items-center cursor-pointer">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 opacity-100">
          {isAllExpanded ? "Collapse All" : "Expand All"}{" "}
        </span>

        <button
          onClick={toggleAll}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            isAllExpanded
              ? "bg-white/50 dark:bg-gray-700/50 text-teal-600 dark:text-teal-400 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          {isAllExpanded ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
        </button>
      </div>
    </div>
  )
}

// Update the ExperienceCard component to handle multiple roles
// Replace the entire ExperienceCard component with this:
// Experience Card Component
const ExperienceCard = ({ company, index, toggleExpand, expandedIds }) => {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const isEven = index % 2 === 0
  const hasMultipleRoles = company.roles.length > 1

  return (
    <div
      ref={ref}
      className={`relative mb-8 ${"md:pl-8 md:ml-1/2"} transition-all duration-400 transform ${
        isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="hidden md:block absolute top-6 -left-3 md:left-auto md:right-auto md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-teal-500"></div>

      <div className="ml-8 md:ml-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
        {/* Company Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {company.company}
            {/* Category Badge */}
            <span
              className={`ml-4 px-2 py-1 text-xs font-medium rounded-full ${
                company.category === "work"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  : company.category === "organization"
                    ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
              }`}
            >
              {company.category.charAt(0).toUpperCase() + company.category.slice(1)}
            </span>
          </h3>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-2">
            <div className="flex items-center mb-2">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{company.location}</span>
            </div>
          </div>
        </div>

        {/* Roles Section */}
        <div className="space-y-6">
          {company.roles.map((role, roleIndex) => (
            <div
              key={role.id}
              className={`${
                hasMultipleRoles && roleIndex > 0 ? "pt-4 border-t border-gray-200 dark:border-gray-700" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{role.role}</h4>

                <button
                  onClick={() => toggleExpand(role.id)}
                  className="mt-2 md:mt-0 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center self-end md:self-auto"
                >
                  {expandedIds.includes(role.id) ? (
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

              <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-2">
                <div className="flex items-center mr-4 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{role.period}</span>
                </div>
              </div>

              {expandedIds.includes(role.id) && (
                <div className="mt-4 animate-fadeIn">
                  <ul className="space-y-2">
                    {role.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-teal-500 dark:text-teal-400">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag, i) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}

// Empty State Component
const EmptyState = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`text-center py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg transition-all duration-400 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <p className="text-gray-600 dark:text-gray-400">No experiences found in this category.</p>
    </div>
  )
}

// Update the ExperienceTimeline component to pass company objects instead of individual experiences
// Replace the ExperienceTimeline component with this:
// Timeline Component
const ExperienceTimeline = ({ companies, toggleExpand, expandedIds }) => {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-400 delay-300 transform ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

      {companies.length > 0 ? (
        companies.map((company, index) => (
          <ExperienceCard
            key={company.companyId}
            company={company}
            index={index}
            toggleExpand={toggleExpand}
            expandedIds={expandedIds}
          />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

// Update the main Experience component to work with the new data structure
// Replace the Experience component with this:
// Main Experience Component
const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedIds, setExpandedIds] = useState([])

  // Initialize expanded IDs with all role IDs
  useEffect(() => {
    const allRoleIds = allExperiences.flatMap((company) => company.roles.map((role) => role.id))
    setExpandedIds(allRoleIds)
  }, [])

  // Get experiences based on active category
  const companies = activeCategory === "all" ? allExperiences : categorizedExperiences[activeCategory]

  // Get all role IDs from the current companies
  const allRoleIds = companies.flatMap((company) => company.roles.map((role) => role.id))

  const toggleExpand = (id) => {
    setExpandedIds(expandedIds.includes(id) ? expandedIds.filter((item) => item !== id) : [...expandedIds, id])
  }

  const toggleAll = () => {
    setExpandedIds(expandedIds.length === allRoleIds.length ? [] : allRoleIds)
  }

  const isAllExpanded = expandedIds.length === allRoleIds.length

  const categories = [
    { id: "all", name: "All Experiences", icon: <Calendar size={18} /> },
    { id: "work", name: "Work", icon: <Briefcase size={18} /> },
    { id: "organization", name: "Organization", icon: <Users size={18} /> },
    { id: "project", name: "Project", icon: <Code size={18} /> },
  ]

  return (
    <section id="experience" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 dark:bg-teal-900/20 rounded-full blur-3xl -z-10"></div>

      <SectionHeader />

      {/* Category Tabs and Controls */}
      <div className="max-w-4xl mx-auto mb-8">
        <CategoryTabs categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <ExperienceControls isAllExpanded={isAllExpanded} toggleAll={toggleAll} />
      </div>

      <div className="max-w-4xl mx-auto">
        <ExperienceTimeline companies={companies} toggleExpand={toggleExpand} expandedIds={expandedIds} />
      </div>
    </section>
  )
}

export default Experience

