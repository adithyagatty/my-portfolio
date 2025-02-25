const Home = () => {
    return (
      <div className="flex flex-col md:flex-row w-screen h-screen">

        <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E03AQED375CYSQ17A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652323206024?e=1746057600&v=beta&t=Zhar2jD-YIfnsjvZrAzbqZ4kZ7olaM1NANN407ApWic"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-6 border-black shadow-lg"
          />
        </div>

        <div className="flex-1/4 flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg">
            <h2 className="text-3xl font-bold text-gray-900">Hello, I'm Adithya</h2>
            <p className="mt-4 text-gray-600 text-lg">
              I'm a passionate full-stack developer skilled in{' '}
              <strong>React.js, Tailwind CSS, and modern web technologies</strong>.
              I love building sleek, high-performance applications that provide value and innovation.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  