import { useState } from 'react'
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {

  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skill', link: '#skill' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  const lightColors = {
    navBg: 'bg-gradient-to-r from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondry: 'text-gray-800',
    textHover: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500'
  };

  const darktColors = {
    navBg: 'bg-gradient-to-r from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondry: 'text-gray-300',
    textHover: 'text-orange-400',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500'
  };

  const colors = darkMode ? darktColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className='flex justify-center w-full fixed z-50 mt-4'>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 py-3 lg:px-8 shadow-lg`}
      >

        <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>

          {/* LOGO */}
          <motion.a 
            href='/' 
            whileHover={{ scale: 1.05 }}
            className='flex items-center space-x-2'
          >
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio <span className='text-orange-500'></span>
            </span>
          </motion.a>

          {/* NAV ITEMS */}
          <div className='hidden lg:flex items-center space-x-6'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className='relative'
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textPrimary
                    }
                  `}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${colors.indicator}`}
                  />
                )}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className='flex items-center space-x-2'>

            {/* DARK MODE TOGGLE */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode
                ? 'bg-gray-700'
                : 'bg-gray-200'
              } transition-colors`}
              aria-label={
                darkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300"/>
              ) : (
                <Moon className="w-5 h-5 text-gray-700"/>
              )}
            </motion.button>

            {/* BUTTON */}
            <motion.a
              href='#contact'
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button}
              text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              Hire
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className='flex lg:hidden items-center space-x-4 px-2'>
            <motion.button
              whileTap={{ scale:0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode
                ? 'bg-gray-700'
                : 'bg-gray-200'
              }`}
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode
                  ? 'text-white'
                  : 'text-gray-700'
                }`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode
                  ? 'text-white'
                  : 'text-gray-700'
                }`} />
              )}
            </motion.button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden 
              ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} 
              backdrop-blur-lg rounded-xl shadow-lg border 
              ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className='block px-4 py-2'
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`py-3 px-4 rounded-lg text-center ${
                    activeSection === item.name.toLowerCase()
                      ? (darkMode ? 'bg-gray-800' : 'bg-orange-50')
                      : ''
                  }`}
                >
                  <span
                    className={`font-medium ${
                      activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondry
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.div>
              </a>
            ))}

            <motion.a
              href='#contact'
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className={`block py-3 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button}
              text-white shadow-md`}
            >
              Hire Me
            </motion.a>

          </motion.div>
        )}

      </motion.nav>
    </div>
  );
}

export default Navbar;