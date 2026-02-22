"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#0b1220] overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/20 blur-3xl"></div>

            <img
              src="/profile.jpg"
              alt="Thirisha"
              className="relative w-80 h-80 object-cover rounded-[2.5rem] border border-blue-500/20 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            About Me
          </h2>

          <p className="text-blue-200/80 leading-relaxed mb-6 text-lg">
            I am a passionate <span className="text-blue-300 font-medium">Full Stack Developer Intern </span> 
             and aspiring Software Engineer with hands-on experience in building 
            scalable enterprise-grade web applications using modern technologies.
          </p>

          <p className="text-blue-200/80 leading-relaxed mb-10 text-lg">
            My focus lies in performance optimization, clean and maintainable 
            architecture, and delivering seamless user experiences. 
            I enjoy solving real-world business problems through thoughtful 
            design and efficient implementation.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { value: "18+", label: "UI Components Built" },
              { value: "8+", label: "REST APIs Integrated" },
              { value: "40%", label: "Performance Improvement" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-blue-500/5 border border-blue-500/10 backdrop-blur-md text-center rounded-2xl"
              >
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold text-blue-400">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-blue-200/70 mt-2">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Shadcn UI",
              "Spring Boot",
              "MySQL",
            ].map((tech, index) => (
              <Badge
                key={index}
                className="bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full px-4 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}