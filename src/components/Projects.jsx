import ailogo from '../assets/aievaluater.png';
import chatapp from '../assets/chatapp.png';
import tripguid from '../assets/tripguide.png';

const projects = [
    {
      title: "AI Interview Evaluater",
      description: "AI-Based Interview Evaluator is an advanced platform that leverages NLP and machine learning to assess emotions and confidence levels in interview responses.",
      image: ailogo,
    },
    {
      title: "Chat App",
      description: "Whatsup is a real-time chat application that enables seamless instant messaging with live online status tracking, secure authentication, and efficient error handling.",
      image: chatapp,
    },
    {
      title: "Travel Bucket List",
      description: "Travel Bucket List is a platform that lets users store and organize travel aspirations by saving destination details, images, and pricing information.",
      image: tripguid,
    },
  ];
  
  const Projects = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full">

          <h1 className="text-4xl font-bold text-gray-900 text-center">Projects</h1>
          <p className="mt-4 text-gray-600 text-center text-lg">Some of my recent work.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  