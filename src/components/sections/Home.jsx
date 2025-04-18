import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Left Image */}
      <div className="absolute top-0 left-0 h-full w-[25vw] max-w-[300px] hidden sm:block">
        <img
          src="/images/left-image.jpg"
          alt="Left Image"
          className="h-full w-full object-cover shadow-lg aspect-square"
        />
      </div>   

      {/* Center Content */}
      <RevealOnScroll>
        <div className="text-center z-10 px-4 md:px-10 max-w-3xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_10px_rgba(255,204,128,0.3)]">
            Hi, I'm Divya
          </h1>

          <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto">
            A passionate software developer with a background in computer applications. 
            I specialize in Django, React.js, and .NET, with hands-on experience in
            creating web applications and interactive platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
            >
              Contact Me
            </a>

            <a
              href="/cv/Divya Rajbahak CV.pdf"
              download
              className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
