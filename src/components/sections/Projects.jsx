import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
<<<<<<< HEAD
import { MdVideocam } from "react-icons/md";  // Added Video Icon
=======
import { MdVideocam } from "react-icons/md";
>>>>>>> 2dfa36b (Update projects and added links)
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r 
            from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
            {/* Project 1 */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A stunning beginner portfolio template using ReactJS and TailwindCSS.
=======
            {/* Project 1: Water Donation Project */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Water Donation Project</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                Building an app with ASP.NET on the back end and React on the front end.
>>>>>>> 2dfa36b (Update projects and added links)
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

<<<<<<< HEAD
              <div className="flex items-center gap-4  mt-6">
=======
              <div className="flex items-center gap-4 mt-6">
>>>>>>> 2dfa36b (Update projects and added links)
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
<<<<<<< HEAD

                <a
                  href="https://github.com/your-username/your-repo"
=======
                <a
                  href="https://github.com/rajbahakdivya/WaterProject"
>>>>>>> 2dfa36b (Update projects and added links)
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
<<<<<<< HEAD

                {/* Video Icon */}
=======
                <a
                  href="/video/Recording waterproject.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project 2: Gemini-Clone */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Gemini-Clone</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A React.js app that replicates Google Gemini’s AI chat interface. 
                Features include generative AI chat, prompt saving in sidebar, smooth typing and loading animations, and a fully responsive design.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/rajbahakdivya/Gemini-Clone"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="/video/Gemini screenrecording.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project 3: RunGroopWebApp */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">RunGroopWebApp</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                Running Social Media Application is a platform built with ASP.NET Core 6 MVC, designed to connect users with clubs and race events based on their IP-based location. 
                It features secure login and registration, a personalized homepage, real-time search from an actual database, and a dashboard to explore clubs and races.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/rajbahakdivya/RunGroopWebApp"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
>>>>>>> 2dfa36b (Update projects and added links)
                <a
                  href="/video/project-demo.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div>

<<<<<<< HEAD
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A stunning beginner portfolio template using ReactJS and TailwindCSS.
=======
            {/* Project 4: React-MiniProjects */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">React-MiniProjects</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A simple and interactive web application built with React. 
                This project serves as an educational tool for learning React fundamentals, including components, state management, event handling, and routing.
>>>>>>> 2dfa36b (Update projects and added links)
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

<<<<<<< HEAD
              <div className="flex items-center gap-4  mt-6">
=======
              <div className="flex items-center gap-4 mt-6">
>>>>>>> 2dfa36b (Update projects and added links)
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
<<<<<<< HEAD

                <a
                  href="https://github.com/your-username/your-repo"
=======
                <a
                  href="https://github.com/rajbahakdivya/React-MiniProjects"
>>>>>>> 2dfa36b (Update projects and added links)
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
<<<<<<< HEAD

                {/* Video Icon */}
                <a
                  href="/video/project-demo.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div><div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A stunning beginner portfolio template using ReactJS and TailwindCSS.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4  mt-6">
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/your-username/your-repo"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                {/* Video Icon */}
=======
>>>>>>> 2dfa36b (Update projects and added links)
                <a
                  href="/video/project-demo.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div>
<<<<<<< HEAD
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A stunning beginner portfolio template using ReactJS and TailwindCSS.
=======

            {/* Project 5: NZWalks.API */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">NZWalks.API</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                This RESTful API, built with ASP.NET Core Web API and Entity Framework Core, provides information on New Zealand’s walks and trails.
                It supports CRUD operations, SQL Server integration, and dependency injection for efficient data management, offering features like trail listings, search, and filtering.
>>>>>>> 2dfa36b (Update projects and added links)
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Dotnet"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

<<<<<<< HEAD
              <div className="flex items-center gap-4  mt-6">
=======
              <div className="flex items-center gap-4 mt-6">
>>>>>>> 2dfa36b (Update projects and added links)
                <a
                  href="https://your-live-project-link.com"
                  className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
<<<<<<< HEAD

                <a
                  href="https://github.com/your-username/your-repo"
=======
                <a
                  href="https://github.com/rajbahakdivya/NZWalks.API"
>>>>>>> 2dfa36b (Update projects and added links)
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
<<<<<<< HEAD

                {/* Video Icon */}
                <a
                  href="/video/project-demo.mp4"
                  className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdVideocam className="w-5 h-5" />
                </a>
              </div>
            </div>
        </div>
        </div>
        
=======
              </div>
            </div>
          </div>
        </div>
>>>>>>> 2dfa36b (Update projects and added links)
      </RevealOnScroll>
    </section>
  );
};
