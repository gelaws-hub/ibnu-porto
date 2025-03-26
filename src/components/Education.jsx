import { Calendar, Award, MapPin } from "react-feather";
import { AnimatedLink } from "./AnimatedLink";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-teal-200 dark:bg-teal-800 transform -skew-x-12"></span>
              <span className="relative">Education</span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                  <img
                    src="/undip.png"
                    alt="Universitas Diponegoro"
                    className="text-4xl font-bold text-teal-600 dark:text-teal-400"
                  />
                </div>
              </div>

              <div className="flex-row">
                <AnimatedLink
                  href="https://undip.ac.id"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  Universitas Diponegoro
                </AnimatedLink>
                <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-4">
                  <AnimatedLink href="https://tekkom.ft.undip.ac.id">
                    Bachelor of Engineering in Computer Engineering
                  </AnimatedLink>
                </h4>

                <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">
                      Expected Graduation: May 2025
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">Semarang, Indonesia</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award
                      size={16}
                      className="mr-2 text-teal-600 dark:text-teal-400"
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      Achievements
                    </span>
                  </div>
                  <ul className="space-y-2 pl-6">
                    <li className="flex">
                      <span className="mr-2 text-teal-500 dark:text-teal-400">
                        •
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Cumulative GPA: 3.95/4.0
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-teal-500 dark:text-teal-400">
                        •
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Finalist in Cybersecurity C2C Capture the Flag 2025,
                        Northeastern University, Boston, USA
                      </span>
                    </li>
                    <li className="flex">
                      <span className="mr-2 text-teal-500 dark:text-teal-400">
                        •
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Awardee of the Adaro Foundation Scholarship 2024-2025
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative pt-6">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700"></div>
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Relevant Coursework
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Microprocessor Engineering
                    </div>
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Control Systems
                    </div>
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Database Systems
                    </div>
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Computer Networks
                    </div>
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Web Development
                    </div>
                    <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300">
                      Embedded Systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
