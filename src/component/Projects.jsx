import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import portfolioproject from '../assets/portfolioproject.png'
import local from '../assets/local.png'
import library from '../assets/library.png'
import music from '../assets/music.png'
import hostel from '../assets/hostel.png'
import saving from '../assets/saving.png'

const Projects = ({ darkMode }) => {

    const [selectedImage, setSelectedImage] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            desc: 'This portfolio showcases my skills, projects, and experience as a Full Stack Web Developer',
            image: portfolioproject,
            tags: ['React','Tailwind css', 'Node.js', 'Express.js'],
            link: ''
        },
        {
            id: 2,
            title: 'Landing page of e-commerce',
            desc: 'See why thousands of happy customers trust Loocals for fast, reliable, and hassle-free local shopping every day.',
            image: local,
            tags: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://loocals-com.vercel.app/'
        },
        {
            id: 3,
            title: 'Online Library',
            desc: 'This online library helps you to read any book online, no need to buy book',
            image: library,
            tags: ['React','Tailwind Css', 'Node.js', 'Express.js','MongoDB'],
            link: ''
        },
        {
            id: 4,
            title: 'Music System Website',
            desc: 'A clean and interactive music player with smooth controls and an immersive listening experience.',
            image: music,
            tags: ['React', 'Tailwind Css', 'Node.js', 'Express.js','MongoDB'],
            link: ''
        },
        {
            id: 5,
            title: 'Hostel Management System',
            desc: 'This system helps hostel owner to maintain the record of the student',
            image: hostel,
            tags: ['React', 'Tailwind Css', 'Node.js', 'Express.js','MongoDB'],
            link: ''
        },
        {
            id: 6,
            title: 'Monthly Money saving Website',
            desc: 'This website helps you to save the money for future use',
            image: saving,
            tags: ['React', 'Tailwind Css', 'Node.js', 'Express.js','MongoDB'],
            link: ''
        },
    ]

    // 🔥 CLICK FUNCTION
    const handleProjectClick = (link) => {
        if (link) {
            
        } else {
            alert('🚧 Project Coming Soon...')
        }
    }

    return (
        <section
            id='projects'
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'
        >
            <div className='container mx-auto px-4'>

                {/* Heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{ color: darkMode ? 'white' : '#1f2937' }}>
                        MY <span
                            style={{
                                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Projects
                        </span>
                    </h2>

                    <p className='max-w-xl mx-auto'
                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                        A showcase of my recent work
                    </p>
                </div>

                {/* Projects */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right,#1f2937,#111827)'
                                    : 'linear-gradient(to right,#ffffff,#f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border hover:border-orange-500/50 transition-all'
                        >

                            {/* Image */}
                            <div className='h-40 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onClick={() => setSelectedImage(project.image)}
                                    className='w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-4'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                    {project.title}
                                </h3>

                                <p
                                    className='text-sm mb-3'
                                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className='px-2 py-1 text-xs rounded-full'
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => handleProjectClick(project.link)}
                                    className='w-full flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-orange-500 text-white hover:opacity-90'
                                >
                                    <FaExternalLinkAlt />
                                    {project.link ? 'Live Demo' : 'Coming Soon'}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/*View All*/}
                <div className='text-center mt-10'>
                       <button
                            onClick={() => alert('🚧 Coming Soon...')}
                            className='inline-flex items-center gap-2 px-7 py-4 text-sm rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg'
                        >
                            <FaGithub />
                            View all projects
                        </button>
                   
                   
                   
                   
                   
                   
                </div>

            </div>

            {/* 🔥 IMAGE MODAL */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-5 right-5 text-white text-3xl"
                    >
                        ✕
                    </button>

                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[90%] rounded-lg"
                    />
                </div>
            )}
        </section>
    )
}

export default Projects