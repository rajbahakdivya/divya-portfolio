import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MdVideocam } from "react-icons/md";  // Added Video Icon
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
            {/* Project 1 */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
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

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
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
        
      </RevealOnScroll>
    </section>
  );
};
