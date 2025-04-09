"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-6xl">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            NH
          </span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <ModeToggle />
        </nav>
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col gap-6 p-6">
            <a
              href="#"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
