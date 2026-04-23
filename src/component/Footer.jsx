import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
  return (
    <footer
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
        borderTop: '1px solid',
        borderColor: darkMode ? '#374151' : '#e5e7eb'
      }}
      className="py-6 sm:py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">

        {/* NAME */}
        <h2
          className="text-lg sm:text-xl font-bold mb-3"
          style={{ color: darkMode ? 'white' : '#1f2937' }}
        >
          Pritam Kumar
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-4">

          <a
          href={'https://github.com/pritamkumar2080'}
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
            className="hover:text-orange-500 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={'https://www.linkedin.com/in/pritam-kumar-1a65b9371'}
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://instagram.com/mr_pyare_1619"
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
            className="hover:text-orange-500 transition"
          >
            <FaInstagram size={18} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <p
          className="text-sm"
          style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer