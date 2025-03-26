import { ExternalLink, GitHub, Heart, Instagram, Linkedin } from "react-feather"
import { FiverrIcon } from "../assets/fiverr-icon"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-teal-600 dark:text-teal-400 flex items-center">
              <span className="mr-2">{"<"}</span>
              <span className="text-gray-900 dark:text-white">Ibnu</span>
              <span className="text-teal-600 dark:text-teal-400">{"Fadhil"}</span>
              <span className="ml-2">{"/>"}</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#certifications"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
            >
              Contact
            </a>
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
                href="https://www.instagram.com/ibnu_fadhil22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://fiverr.com/vid_designer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiverrIcon className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 pb-[4px]" size={20} />
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

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            © {currentYear} Muhamad Ibnu Fadhil. Made with
            <Heart size={16} className="mx-1 text-red-500" />
            using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

