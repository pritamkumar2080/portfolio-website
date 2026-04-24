import { useState } from 'react'
import contactImg from '../assets/contact.png'

const Contact = ({ darkMode }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 🔥 EMPTY VALIDATION
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.message.trim()
    ) {
      alert("⚠️ Please fill all fields!")
      return
    }

    // 🔥 EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("⚠️ Enter a valid email!")
      return
    }

    // 🔥 MOBILE VALIDATION (10 digits)
    const mobileRegex = /^[0-9]{10}$/
    if (!mobileRegex.test(formData.mobile)) {
      alert("⚠️ Enter valid 10-digit mobile number!")
      return
    }

    try {
      const res = await fetch("https://portfolio-website-ujdz.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent ✅")

        // RESET FORM
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: ""
        })
      } else {
        alert("Failed ❌")
      }
    } catch (err) {
      alert("Server error ❌")
    }
  }

  return (
    <section 
      id="contact"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
      className='py-12 sm:py-16 lg:py-24 overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Heading */}
        <div className='text-center mb-10'>
          <h2
            className='text-3xl font-bold'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Touch
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          
          {/* Image */}
          <div className='flex justify-center'>
            <img src={contactImg} alt="" className='max-w-sm' />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode ? '#1f2937' : '#ffffff',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='p-6 rounded-xl border shadow-lg'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className='w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none'
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className='w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none'
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className='w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none'
              />

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className='w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none'
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className='w-full sm:col-span-2 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none'
              />

              <button
                type="submit"
                className='w-full sm:col-span-2 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all'
              >
                Send Message
              </button>

            </div>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact