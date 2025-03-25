import { Award, ExternalLink } from "react-feather"

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "CyberOps Associate",
      issuer: "Cisco",
      date: "2024",
      icon: "🔒",
      link: "#",
    },
    {
      id: 2,
      name: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "2023",
      icon: "🌐",
      link: "#",
    },
    {
      id: 3,
      name: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      date: "2024",
      icon: "☁️",
      link: "#",
    },
    {
      id: 4,
      name: "Oracle Academy: Database Design and Foundation",
      issuer: "Oracle",
      date: "2023",
      icon: "💾",
      link: "#",
    },
    {
      id: 5,
      name: "Learning Machine Learning Implementation with Google Cloud",
      issuer: "Dicoding Indonesia",
      date: "2024",
      icon: "🤖",
      link: "#",
    },
    {
      id: 6,
      name: "Becoming a Google Cloud Engineer",
      issuer: "Dicoding Indonesia",
      date: "2024",
      icon: "⚙️",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
              <span className="relative">Certifications</span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-2xl">
                    {cert.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Award size={16} className="text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Issued {cert.date}</span>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

