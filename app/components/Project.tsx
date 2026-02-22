"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Secure Document Management System",
    description:
      "Enterprise-grade web application built using Next.js and TypeScript. Integrated 8+ REST APIs and improved UI performance by 30% through optimization and modular design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "REST APIs"],
  },
  {
    title: "Arduino-Based Gaming Glove",
    description:
      "Gesture-controlled gaming interface using Arduino UNO and motion sensors. Research work published in IEEE Xplore, demonstrating real-time interaction systems.",
    tech: ["Arduino", "Sensors", "Embedded C", "IEEE"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#0b1220] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            Featured Projects
          </h2>
          <p className="text-blue-200/70 mt-6 text-lg max-w-2xl mx-auto">
            A selection of real-world applications demonstrating full-stack
            expertise and embedded system innovation.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-px rounded-4xl bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/20">

                <div className="bg-[#0f172a] rounded-[2rem] p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-200/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-blue-500/40 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-blue-400/30 text-black hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}