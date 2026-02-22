"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1220]">

      {/* Blue Glow Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.2),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-blue-300 font-mono text-lg"
            >
              Hi, I’m
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Thirisha S.
              </span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-blue-100"
            >
              Full Stack Developer
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-200/80 text-lg leading-relaxed max-w-lg"
          >
            I build scalable, production-ready web applications using{" "}
            <span className="text-blue-300 font-medium">
              Next.js, React, TypeScript
            </span>. Focused on performance and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
            >
              <a href="/Thirisha_Resume_2026.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-blue-400/30 text-black hover:bg-blue-500/10 transition-all duration-300"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT PHOTO SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full -z-10" />

          {/* Image container */}
          <div className="relative w-80 h-80 rounded-[2.5rem] overflow-hidden border border-blue-500/20 shadow-2xl group">
            <img
              src="/profile.jpg"
              alt="Thirisha"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}