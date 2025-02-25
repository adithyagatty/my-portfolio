import { motion } from "framer-motion";

const experiences = [
  {
    title: "B.Tech in Information Science",
    company: "AJ Institute of Engineering",
    date: "2020 - 2024",
    description: [
      "Built a strong foundation in core subjects like operating systems, computer networks, and database management systems.",
      "Gained hands-on experience in programming languages and project development using modern tools and frameworks.",
      "Enhanced logical thinking and analytical abilities by tackling complex coding problems, algorithms, and real-world challenges.",
    ],
  },
  {
    title: "React.js Intern",
    company: "CodeLab Solutions",
    date: "Sep 2023 - Aug 2023",
    description: [
      "Designed and built responsive user interfaces using React.js, focusing on state management and lifecycle methods.",
      "Created modern, responsive web pages using HTML, CSS, and Javascript frameworks for consistent design.",
      "Worked with APIs, local storage, and Redux for effective data handling and state management.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Doctor Java Technologies",
    date: "Feb 2024 - Present",
    description: [
      "Building scalable web applications using React.js, Next.js, and MongoDB.",
      "Implementing best practices for backend development with Node.js and Express.js.",
      "Enhancing website responsiveness and performance to improve user engagement.",
      "Working closely with clients to understand requirements and deliver customized solutions.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center">Experience</h1>
      <p className="mt-4 text-gray-600 text-center text-lg">My journey so far</p>

      <div className="mt-8 relative border-l-4 border-blue-500">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="ml-6 mb-8"
          >

            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-10px]"></div>


            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] sm:w-[400px] md:w-[500px]">
              <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
              <h3 className="text-gray-500 text-md">{exp.company}</h3>
              <p className="text-sm text-blue-600 mt-1">{exp.date}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="mt-1">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
