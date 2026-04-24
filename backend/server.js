import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// ✅ CORS FIX (allow all)
app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend working 🚀")
})

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // ✅ FIXED
        pass: process.env.EMAIL_PASS    // ✅ FIXED
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message 🚀",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Message:</b> ${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ success: true })
  } catch (error) {
    console.log("EMAIL ERROR:", error)
    res.status(500).json({ success: false })
  }
})

// ✅ PORT FIX (VERY IMPORTANT)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})