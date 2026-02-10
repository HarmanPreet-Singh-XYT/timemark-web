'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Github, 
  Moon, 
  Sun, 
  Download,
  Clock 
} from 'lucide-react';
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const pathname = usePathname();
  const isDocsPage = pathname === '/docs';

  // Handle scroll effect and theme initialization
  useEffect(() => {
    const isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkTheme);
    document.documentElement.classList.toggle("dark", isDarkTheme);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);


  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.theme = next ? "dark" : "light";
      return next;
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '/download' },
    { name: 'Docs', href: '/docs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <nav className={`
        fixed top-0 w-full z-50 transition-all duration-500 border-b
        ${isScrolled 
          ? 'bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'}
      `}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative">
              <Image
                src="/logo.svg"
                alt="Scolect Logo"
                width={30}
                height={30}
                priority
              />
              <span className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                Scolect
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${pathname === link.href 
                      ? 'text-violet-600 dark:text-violet-400' 
                      : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-violet-600 dark:hover:text-violet-400'
                    }
                    hover:bg-violet-50 dark:hover:bg-violet-500/10 group
                  `}
                >
                  {link.name}
                  <span className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 
                    transition-all duration-300 rounded-full
                    ${pathname === link.href ? 'w-1/2' : 'group-hover:w-1/2'}
                  `}></span>
                </Link>
              ))}
              
              <a 
                href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp" 
                target="_blank" 
                rel="noreferrer"
                className="ml-2 p-2 rounded-lg text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-110 group"
              >
                <Github size={20} className="group-hover:animate-pulse" />
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#52525B] dark:text-[#A1A1AA] transition-all duration-300 group overflow-hidden"
                aria-label="Toggle Theme"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 shimmer-effect"></div>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {!isDocsPage && (
                <button 
                  className="lg:hidden relative z-50 p-2 text-[#18181B] dark:text-[#FAFAFA]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-1 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`}></span>
                    <span className={`absolute top-3 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`}></span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {!isDocsPage && (
          <div className={`
            lg:hidden fixed inset-0 z-40 transition-all duration-500
            ${isOpen ? 'visible' : 'invisible'}
          `}>
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <div className={`
              fixed right-0 top-0 h-[100dvh] w-full max-w-sm bg-white dark:bg-[#09090B] shadow-2xl transition-transform duration-500 overflow-y-auto
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        font-medium text-lg px-4 py-3 rounded-xl transition-all duration-300 border-l-4
                        ${pathname === link.href
                          ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-600'
                          : 'text-[#18181B] dark:text-[#FAFAFA] border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }
                        animate-slideDown
                      `}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <a 
                    href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-medium text-lg px-4 py-3 rounded-xl text-[#18181B] dark:text-[#FAFAFA] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 border-l-4 border-transparent animate-slideDown"
                    style={{ animationDelay: `${navLinks.length * 0.05}s` }}
                  >
                    <Github size={20} /> GitHub
                  </a>
                  
                  <div className="flex items-center justify-between mt-6 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 animate-slideDown" style={{ animationDelay: `${(navLinks.length + 1) * 0.05}s` }}>
                    <span className="text-[#52525B] dark:text-[#A1A1AA] font-medium">Theme</span>
                    <button 
                      onClick={toggleTheme}
                      className="p-3 rounded-xl bg-white dark:bg-zinc-900 text-[#18181B] dark:text-[#FAFAFA] shadow-sm"
                    >
                      {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </div>

                  <Link 
                    href="/download"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-xl font-bold mt-4 shadow-lg flex items-center justify-center gap-2 animate-slideDown"
                    style={{ animationDelay: `${(navLinks.length + 2) * 0.05}s` }}
                  >
                    <Download size={20} />
                    Get Scolect Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}