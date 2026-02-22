"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Cpu,
  Layout,
  GitBranch,
  FileCode2,
  Palette,
  Braces,
  Atom,
} from "lucide-react"

const skills = [
  { name: "HTML", icon: FileCode2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layout },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Layout },
  { name: "REST APIs", icon: GitBranch },
]

export default function Skills() {
  return (
    <section id="skills"
    className="relative py-28 bg-[#0b1220] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            Technical Skills
          </h2>
          <p className="text-blue-200/70 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build scalable and efficient applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/20">

                  <div className="bg-[#0f172a] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/20">

                    <Icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />

                    <p className="text-blue-200 font-medium text-sm">
                      {skill.name}
                    </p>

                  </div>
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}