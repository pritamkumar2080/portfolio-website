import html from '../assets/html.webp'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/nodejs.webp'
import expressjs from '../assets/expressjs.webp'
import mongodb from '../assets/mongodb.webp'
import mysql from '../assets/mysql.png'

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'html', icon: html, level: 99, color: 'from-orange-500 to-amber-500' },
    { name: 'css', icon: css, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'js', icon: js, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'React', icon: react, level: 90, color: 'from-orange-500 to-amber-500' },
    { name: 'Tailwind', icon: tailwind, level: 95, color: 'from-teal-500 to-cyan-500' },
    { name: 'nodejs', icon: nodejs, level: 90, color: 'from-red-500 to-cyan-500' },
    { name: 'expressjs', icon: expressjs, level: 90, color: 'from-teal-500 to-cyan-500' },
    { name: 'mongodb', icon: mongodb, level: 90, color: 'from-orange-500 to-amber-500' },
    { name: 'mysql', icon: mysql, level: 95, color: 'from-pink-500 to-cyan-500' },
  ]

  return (
    <section
      id="skill"
      className="py-16 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
    >
      <div className="container px-5 mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1
            className="sm:text-4xl text-3xl font-bold mb-4"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            MY{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Skills
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
          >
            Technologies and tools I use to build modern web applications           
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="flex flex-wrap -m-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 w-1/2 md:w-1/2 lg:w-1/4"
            >
              <div
                className={`h-full p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 ${
                  darkMode ? 'bg-white/5' : 'bg-white'
                }`}
              >
                {/* ICON */}
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* NAME */}
                <h2
                  className="text-lg font-semibold text-center mb-4"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {skill.name}
                </h2>

                {/* PROGRESS BAR */}
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* PERCENT */}
                <p className="text-center mt-2 text-sm text-gray-500">
                  {skill.level}%
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills