"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Internships", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const [hovered, setHovered] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.href)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`
          relative flex items-center gap-2 
          px-4 py-2 rounded-full
          backdrop-blur-2xl
          border border-white
          bg-white
          shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          transition-all duration-500
          ${scrolled ? "scale-95" : "scale-100"}
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered("")}
            className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {(active === link.href || hovered === link.href) && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/15 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            <span
              className={`relative z-10 ${active === link.href ? "text-primary" : ""
                }`}
            >
              {link.name}
            </span>
          </Link>
        ))}

        {/* CTA BUTTON */}
        <Link
          href="#contact"
          className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
        >
          <Mail className="w-4 h-4" />
          Let’s Talk
        </Link>
      </motion.nav>
    </div>
  )
}