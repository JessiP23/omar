"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-extrabold text-red-600 transition-transform group-hover:scale-110 duration-300">J&O</span>
            <span className="font-bold ml-2 text-gray-900">Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-medium hover:text-red-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-600 after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+15551234567" 
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Call Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className={`w-6 h-6 transition-colors duration-300 ${menuOpen ? 'text-red-600' : 'text-gray-800'}`}>
              {menuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t animate-fadeIn">
            {navItems.map((item, idx) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="block py-2 hover:text-red-600 hover:pl-2 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+15551234567" 
              className="block py-2 mt-2 text-red-600 font-medium animate-pulse"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us: (555) 123-4567
              </span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}