import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'    
import AOS from 'aos'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });

    document.documentElement.classList.add('dark')
  }, []);

  useEffect(() => {
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
        : 'bg-white min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App