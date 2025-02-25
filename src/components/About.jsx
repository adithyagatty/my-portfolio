const About = () => {
    return (
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-5 overflow-hidden">
        <div className="w-full max-w-4xl px-5 md:px-8 py-6 rounded-lg shadow-lg ">

          <h1 className="text-4xl font-bold text-black text-center">About Me</h1>
          <p className="mt-4 text-gray-800 text-center text-lg">
            Passionate Full-Stack Developer crafting modern and efficient web applications.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-black">Who I Am</h2>
            <p className="mt-5 text-gray-800 text-lg leading-relaxed">
              I am a <strong>B.Tech graduate</strong> currently working as a <strong>Full-Stack Web Developer</strong> at 
              <span className="font-semibold text-blue-600"><a href="https://doctorjavatechnologies.com/" target="_blank" rel="noopener noreferrer"> Docter Java Technologies
  </a></span>.  
              With a strong foundation in <strong>React, Next.js, Tailwind, MongoDB, and Python</strong>,  
              I am dedicated to building scalable and high-performance web applications.
            </p>
          </section>
  

          <section className="mt-8 mb-4">
            <h2 className="text-2xl font-semibold text-black">Skills</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Python", "Node.js"].map((skill, index) => (
                <span key={index} className="bg-blue-200 text-black px-4 py-2 rounded-lg text-sm font-semibold text-center">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;
  