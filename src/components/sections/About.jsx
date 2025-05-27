import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Javascript", "React"];
  const backendSkills = ["Django", "Dotnet"];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full space-y-16">
          
          {/* About Me Title */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Secondary */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Secondary (NEB)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>V.S Niketan Secondary School</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/images/academic-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div>
              </div>

              {/* Higher Secondary */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Higher Secondary (HSEB)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Makawanpur Multiple College (2019)</li>
                  <li>Relevant Coursework: Science, Math, Computer ...</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/images/academic-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div>
              </div>

              {/* Bachelor */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Bachelor in Computer Application (TU)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Hetauda City College (2019–2025)</li>
                  <li>Relevant Coursework: Web Development, Data Structures, Editing...</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/images/academic-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Internship Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Internship Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Internship 1 */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Django Developer – Truenary Solutions (2024)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Built backend functionalities using Python Django.</li>
                  <li>Implemented APIs with POST, GET, filtering, pagination.</li>
                  <li>Managed driver and vehicle profiles with associations.</li>
                </ul>
                <div className="mt-4">
<<<<<<< HEAD
                <a
                   href="/images/truneryIntern.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                >
                    View Academic Certificate
                </a>

=======
                  <a
                    href="/images/truneryIntern.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Internship Certificate
                  </a>
>>>>>>> 2dfa36b (Update projects and added links)
                </div>
              </div>

              {/* Internship 2 */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">.NET + React Developer – Icon Soft (2024–Present)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Contributed to a full-stack application using .NET and React.</li>
                  <li>Built backend services and reusable React components.</li>
                  <li>Collaborated in Agile team environment.</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/images/internship-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Internship Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Tech Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Frontend Skills */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
=======

         {/* Tech Skills Section */}
<div>
  <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Technical Skills</h3>
  
  <ul className="space-y-6 max-w-3xl mx-auto">
    <li>
      <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc] cursor-pointer">
        <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Frontend</h4>
        <div className="flex flex-wrap gap-2">
          {frontendSkills.map((tech, key) => (
            <span
              key={key}
              className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>

    <li>
      <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc] cursor-pointer">
        <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Backend</h4>
        <div className="flex flex-wrap gap-2">
          {backendSkills.map((tech, key) => (
            <span
              key={key}
              className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  </ul>
</div>


</div>

>>>>>>> 2dfa36b (Update projects and added links)
      </RevealOnScroll>
    </section>
  );
};
