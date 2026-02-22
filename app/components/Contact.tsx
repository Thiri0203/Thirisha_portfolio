"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })
      } else {
        console.error(data)
        alert("Failed to send message.")
      }
    } catch (error) {
      console.error("Frontend error:", error)
      alert("Something went wrong.")
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0b1220] overflow-hidden"
    >
      {/* Blue Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Let’s Work Together
            </h2>
            <p className="text-blue-200/70 text-lg leading-relaxed">
              I'm open to internships, collaborations, and exciting
              development opportunities. Feel free to reach out —
              I’d love to connect and discuss how we can build
              something impactful together.
            </p>
          </div>

          <div className="space-y-5 text-blue-200/80">

            <a
              href="mailto:thirisha97@gmail.com"
              className="flex items-center gap-4 group"
            >
              <Mail className="text-blue-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-blue-300 transition">
                thirisha97@gmail.com
              </span>
            </a>

            <a
              href="tel:+916369239993"
              className="flex items-center gap-4 group"
            >
              <Phone className="text-blue-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-blue-300 transition">
                +91 6369239993
              </span>
            </a>

            <a
              href="https://github.com/Thiri0203"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Github className="text-blue-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-blue-300 transition">
                GitHub Profile
              </span>
            </a>

            <a
              href="https://linkedin.com/in/thirisha-s-a19733275"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <Linkedin className="text-blue-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-blue-300 transition">
                LinkedIn Profile
              </span>
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative p-px rounded-4xl bg-linear-to-br from-blue-500/30 via-transparent to-purple-500/20">

            <div className="bg-[#0f172a] rounded-4xl p-10 backdrop-blur-xl">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-blue-500/5 border border-blue-500/20 text-blue-200 placeholder:text-blue-200/50 rounded-xl"
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-blue-500/5 border border-blue-500/20 text-blue-200 placeholder:text-blue-200/50 rounded-xl"
                  />

                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="bg-blue-500/5 border border-blue-500/20 text-blue-200 placeholder:text-blue-200/50 rounded-xl"
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    Send Message
                  </Button>

                </form>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-blue-400">
                    Message Sent Successfully 🚀
                  </h3>
                  <p className="text-blue-200/70 mt-4">
                    Thank you for reaching out. I’ve received your message and will respond shortly.
                  </p>
                </div>
              )}

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}