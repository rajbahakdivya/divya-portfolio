import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Container for Left Image and Content */}
      <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-10">
        
        {/* Left Image */}
        <div className="hidden sm:block w-[25vw] max-w-[300px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <img
            src={`${import.meta.env.BASE_URL}images/left-image.jpg`}
            alt="Left Image"
            className="h-full w-full object-cover shadow-lg"
          />
        </div>


        {/* Center Content */}
        <div className="text-center sm:text-left sm:px-10 max-w-3xl w-full">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_10px_rgba(255,204,128,0.3)]">
              Hi, I'm Divya
            </h1>

            <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto sm:mx-0">
              A passionate software developer with a background in computer applications. 
              I specialize in Django, React.js, and .NET, with hands-on experience in
              creating web applications and interactive platforms.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
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
  href="/divyacv.pdf"
  download
  className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
>
  Download CV
</a>



           </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
