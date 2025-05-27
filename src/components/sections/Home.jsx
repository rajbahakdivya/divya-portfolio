import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
<<<<<<< HEAD
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
=======
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 md:px-10 max-w-3xl w-full flex flex-col items-center justify-center gap-8">
          
          {/* Square Photo */}
          <div className="w-48 h-48 overflow-hidden rounded-xl shadow-lg group">
  <img
    src="/images/right-image.jpg"
    alt="Divya Profile"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>


          {/* Text Content */}
          <div>
>>>>>>> 2dfa36b (Update projects and added links)
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_10px_rgba(255,204,128,0.3)]">
              Hi, I'm Divya
            </h1>

<<<<<<< HEAD
            <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto sm:mx-0">
=======
            <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto">
>>>>>>> 2dfa36b (Update projects and added links)
              A passionate software developer with a background in computer applications. 
              I specialize in Django, React.js, and .NET, with hands-on experience in
              creating web applications and interactive platforms.
            </p>

<<<<<<< HEAD
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
=======
            <div className="flex flex-wrap justify-center gap-4">
>>>>>>> 2dfa36b (Update projects and added links)
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
<<<<<<< HEAD
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
=======

              <a
                href="/cv/Divya Rajbahak CV.pdf"
                download
                className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
>>>>>>> 2dfa36b (Update projects and added links)
    </section>
  );
};
