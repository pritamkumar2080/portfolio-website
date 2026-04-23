import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
// import tiktok from '../assets/tiktok.png'
import hero from '../assets/hero3.png'
import hi from '../assets/hi.png'
import CV from '../assets/CV2.pdf'

// icons (make sure lucide-react is installed)
import { Download, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {

  const socialIcons = [
     { icon: linkedin, alt: 'linkedin', link: 'https://www.linkedin.com/in/pritam-kumar-1a65b9371'},
      { icon: github, alt: 'github', link: 'https://github.com/pritamkumar2080' },
      { icon: youtube, alt: 'youtube', link: 'https://youtube.com/@hungryfood943?' },
    { icon: instagram, alt: 'instagram', link: 'https://instagram.com/mr_pyare_1619' },
    // { icon: tiktok, alt: 'tiktok' },
   
    
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">

      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >

        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_self"
                  rel="noopener noreferrer"
                  data-aos-delay={400 + index * 100}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? '' : 'filter brightness-75'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* HEADING */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm PRITAM 
            </h1>
            <h2>Full Stack Web Developer</h2>

            {/* PARAGRAPH */}
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I am a passionate Web Developer with a strong interest in building modern and scalable web applications, especially in the E-commerce domain.
            </p>

            {/* BUTTONS */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >

                {/* DOWNLOAD BUTTON */}
                <a href={CV} download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform">
                    <Download className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download Resume
                  </button>
                </a>

                {/* CONTACT BUTTON */}
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Image */}
          <div className='lg:w-1/2 w-full max-w-lg mt-8 lg:mt-0 flex justify-center'
          data-aos='fade-left'
          data-aos-delay='400'>

            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
            <div className='relative overflow-hidden'>
                <img 
                src= {hero}
                alt="Hero Image"
                className='w-full h-auto  object-cover transform rounded-full 
                hover:scale-105 transition-transform duration-500'/>

            </div>
            <img
            src={hi}
            alt="Hi Icon"
            className='absolute top-2 sm:top-4 left-12
            sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain
            animate-bounce opacity-90 z-10'/>
            </div>
          </div>
        </div>
        <div className={`absolute -top-20 -left-20 w-40 h-40
            sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
            mix-blend-multiply filter blur-3xl opacity-10 
            animate-pulse delay-1000 hidden sm:block`}>

        </div>

      </section>

    </div>
  );
};

export default Hero;