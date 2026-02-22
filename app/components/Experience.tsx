"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const internships = [
  {
    role: "Full Stack Developer Intern",
    company: "EIPP Private Limited Solutions, Chennai",
    period: "Oct 2025 – Jan 2026",
    description:
      "Contributed to enterprise-grade applications by developing scalable UI components and integrating REST APIs. Focused on performance optimization and seamless user workflows.",
    highlights: [
      "Delivered 18+ UI components",
      "Integrated 8+ REST APIs",
      "Reduced form defects by 40%",
    ],
  },
  {
    role: "Software Intern",
    company: "Intellect Design Arena, Chennai",
    period: "Jul 2025 – Sep 2025",
    description:
      "Worked on backend systems and database optimization while collaborating with cross-functional teams to ensure stable and efficient application performance.",
    highlights: [
      "Built CRUD modules using Spring Boot",
      "Optimized 10+ SQL queries",
      "Resolved UAT defects",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#0b1220] overflow-hidden"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent_50%)]" />

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
            Internship Experience
          </h2>
          <p className="text-blue-200/70 mt-6 text-lg max-w-2xl mx-auto">
            Hands-on experience building real-world applications in enterprise environments.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-500/5 border border-blue-500/10 backdrop-blur-xl rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <CardContent className="p-8 space-y-6">

                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300">
                      {item.role}
                    </h3>
                    <p className="text-blue-400 font-medium mt-1">
                      {item.company}
                    </p>
                    <p className="text-sm text-blue-200/60 mt-1">
                      {item.period}
                    </p>
                  </div>

                  <p className="text-blue-200/80 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-blue-200/70">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-2 w-2 mt-2 rounded-full bg-blue-500"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}