import about from '../assets/hero5.png'

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center relative order-2 lg:order-1">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">

            {/* BACKGROUND SHAPE */}
            <div className="absolute inset-0 scale-110 sm:scale-115 lg:scale-125 
            bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 
            rotate-6 sm:rotate-12 rounded-2xl z-0"></div>

            {/* IMAGE */}
            <img
              src={about}
              alt="about"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10"
            />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="text-center lg:text-left order-1 lg:order-2">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 
          bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            About Me
          </h1>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-8 leading-relaxed 
            p-4 sm:p-6 rounded-xl ${
              darkMode ? 'text-gray-300 bg-white/5' : 'text-gray-700 bg-orange-50'
            }`}
          >
            I work with HTML, CSS, JavaScript, and modern technologies like React.js, Tailwind CSS, Node.js, Express.js, MongoDB and MySQL to build full-stack applications.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                10+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Skills
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Year Experience
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                10+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Projects
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => alert('🚧 Feature coming soon! Stay tuned.')}
            className="mt-8 inline-flex items-center justify-center 
            bg-orange-500 hover:bg-orange-600 text-white 
            py-3 px-8 rounded-full text-lg font-semibold 
            transition-all duration-300 transform"
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  )
}

export default About