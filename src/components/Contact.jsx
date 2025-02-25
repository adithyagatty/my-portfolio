import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <motion.h1
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <p className="text-gray-600 text-lg mt-2">Let's build something amazing together!</p>
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mt-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>
      <motion.div
        className="mt-8 flex space-x-6 text-3xl text-blue-600"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://www.linkedin.com/in/adithya-gatty-52388a22a/" target="_blank" rel="noopener noreferrer">
          🔗 <div className="text-[25px]">LinkedIn</div>
        </a>
        <a href="https://github.com/adithyagatty/adithyagatty" target="_blank" rel="noopener noreferrer">
          🖥 <div className="text-[25px]">Github</div>
        </a>
        <a href="mailto:adithyap9999@gmail.com">
          📧 <div className="text-[25px]">Email</div>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
