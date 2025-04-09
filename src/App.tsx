"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import AnimatedBackground from "./components/AnimatedBackground"
import ScrollToTop from "./components/ScrollToTop" // ✅ Thêm dòng này
import "./App.css"

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop /> {/* ✅ Nút cuộn về đầu */}
      </div>
    </ThemeProvider>
  )
}

export default App
