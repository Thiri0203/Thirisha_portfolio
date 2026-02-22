import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Thirisha S | Full Stack Developer",
  description:
    "Thirisha S is a Full Stack Developer skilled in Next.js, React, TypeScript, Tailwind CSS, and Spring Boot. Explore projects, experience, and resume.",
  keywords: [
    "Thirisha S",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer Chennai",
  ],
  authors: [{ name: "Thirisha S" }],
  creator: "Thirisha S",
  metadataBase: new URL("https://thirisha.vercel.app"), // change if custom domain
  openGraph: {
    title: "Thirisha S | Full Stack Developer",
    description:
      "Portfolio of Thirisha S — Full Stack Developer specializing in modern web technologies.",
    url: "https://thirisha.vercel.app",
    siteName: "Thirisha Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        min-h-screen bg-background text-foreground 
        font-sans antialiased`}
      >
        {/* Background Glow Layer */}
        <div className="fixed inset-0 -z-10 section-gradient pointer-events-none" />

        {children}
      </body>
    </html>
  )
}