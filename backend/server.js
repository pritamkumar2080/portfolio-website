import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({ path: "./.env" })

const app = express()

app.use(cors({
  origin: "http://localhost:5173"
}))
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
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Hire Request 🚀",
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

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000")
})