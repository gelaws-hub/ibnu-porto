import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Minimize2,
  Maximize2,
  Briefcase,
  Users,
  Code,
  X,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

import ReactDOM from "react-dom";

import { categorizedExperiences } from "./data/experiences";
import { AnimatedLink } from "./AnimatedLink";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";


// Flatten all experiences for when "All" category is selected
// Replace the existing allExperiences definition with this:
const allExperiences = [
  ...categorizedExperiences.work,
  ...categorizedExperiences.organization,
  ...categorizedExperiences.project,
];

// Section Header Component
const SectionHeader = () => {
  return (
    <div className={`text-center mb-12 transition-all duration-400 transform`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
          <span className="relative">Experience</span>
        </span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        My professional journey and the valuable experiences I've gained along
        the way.
      </p>
    </div>
  );
};

// Category Tabs Component
const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-2 mb-6 transition-all duration-300`}
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
  );
};

// Experience Controls Component
const ExperienceControls = ({ isAllExpanded, toggleAll }) => {
  return (
    <div
      className={`flex justify-end mb-2 transition-all duration-400 delay-200 transform`}
    >
      <div
        onClick={toggleAll}
        className="px-4 rounded-lg flex gap-4 items-center cursor-pointer"
      >
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 opacity-100">
          {isAllExpanded ? "Collapse All" : "Expand All"}{" "}
        </span>

        <button
          aria-label="Toggle expand all"
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
  );
};

const ExperienceCard = ({ company, toggleExpand, expandedIds, index }) => {
  const hasMultipleRoles = company.roles.length > 1;

  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative mb-8 ${
        isEven ? "md:mr-8 md:ml-auto" : "md:pl-8 md:ml-1/2"
      } transition-all duration-400 transform ease-in group`}
    >
      <div className="hidden md:block absolute top-6 -left-3 md:left-auto md:right-auto md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-teal-500"></div>

      <div className="ml-8 md:ml-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
        {/* Company Header */}
        <div className="mb-4">
          <AnimatedLink
            href={company.companyUrl}
            target="_blank"
            group="group"
            className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          >
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
              {company.category.charAt(0).toUpperCase() +
                company.category.slice(1)}
            </span>
          </AnimatedLink>

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
                hasMultipleRoles && roleIndex > 0
                  ? "pt-4 border-t border-gray-200 dark:border-gray-700"
                  : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {role.role}
                </h3>

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
                        <span className="mr-2 text-teal-500 dark:text-teal-400">
                          •
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
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
              {role.images && role.images.length > 0 && (
                <ImageGallery images={role.images} altImage={role.role} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div
      className={`text-center py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg transition-all duration-400 transform`}
    >
      <p className="text-gray-600 dark:text-gray-400">
        No experiences found in this category.
      </p>
    </div>
  );
};

const ExperienceTimeline = ({ companies, toggleExpand, expandedIds }) => {
  return (
    <div className={`relative transition-all duration-400 delay-300 transform`}>
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
  );
};

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedIds, setExpandedIds] = useState([]);

  // Initialize expanded IDs with all role IDs
  useEffect(() => {
    const allRoleIds = allExperiences.flatMap((company) =>
      company.roles.map((role) => role.id)
    );
    setExpandedIds(allRoleIds);
  }, []);

  // Get experiences based on active category
  const companies =
    activeCategory === "all"
      ? allExperiences
      : categorizedExperiences[activeCategory];

  // Get all role IDs from the current companies
  const allRoleIds = companies.flatMap((company) =>
    company.roles.map((role) => role.id)
  );

  const toggleExpand = (id) => {
    setExpandedIds(
      expandedIds.includes(id)
        ? expandedIds.filter((item) => item !== id)
        : [...expandedIds, id]
    );
  };

  const toggleAll = () => {
    setExpandedIds(expandedIds.length === allRoleIds.length ? [] : allRoleIds);
  };

  const isAllExpanded = expandedIds.length === allRoleIds.length;

  const categories = [
    { id: "all", name: "All Experiences", icon: <Calendar size={18} /> },
    { id: "work", name: "Work", icon: <Briefcase size={18} /> },
    { id: "organization", name: "Organization", icon: <Users size={18} /> },
    { id: "project", name: "Project", icon: <Code size={18} /> },
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 dark:bg-teal-900/20 rounded-full blur-3xl -z-10"></div>

      <SectionHeader />

      {/* Category Tabs and Controls */}
      <div className="max-w-4xl mx-auto mb-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ExperienceControls
          isAllExpanded={isAllExpanded}
          toggleAll={toggleAll}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <ExperienceTimeline
          companies={companies}
          toggleExpand={toggleExpand}
          expandedIds={expandedIds}
        />
      </div>
      <div className="sticky bottom-2 w-full text-center animate-bounce hidden md:block">
        <a aria-label="Go to projects" href="#education" className="text-gray-400 dark:text-gray-500 inline-block ml-auto">
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
  );
};

const ImageGallery = ({ images, altImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showPrevImage = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const modal = selectedImage !== null && (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
          onClick={closeModal}
        >
          <X size={20} />
        </button>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
          onClick={showPrevImage}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
          onClick={showNextImage}
        >
          <ChevronRight size={24} />
        </button>

        <img
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={altImage || "Experience"}
          className="w-full max-h-[80vh] object-contain"
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                selectedImage === index ? "bg-white" : "bg-white/50"
              } transition-colors`}
              onClick={() => setSelectedImage(index)}
              aria-label={`${altImage} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-4 mb-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <LazyLoadImage
              className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300 rounded-md"
              alt={`Experience ${index + 1}`}
              src={image.optimized}
              effect="opacity"
              wrapperClassName="w-full h-24"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-medium">
                  +{images.length - 4} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {typeof window !== "undefined" &&
        ReactDOM.createPortal(modal, document.body)}
    </div>
  );
};

// export default Experience;
export default trackWindowScroll(Experience);
