// src/components/ScrollToTop.tsx
"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react" // nếu bạn đang dùng lucide-react

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full 
      bg-primary text-white shadow-lg border border-white/10
      transition-all duration-300
      hover:scale-110 hover:bg-secondary hover:text-primary
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
      style={{
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(8px)",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
