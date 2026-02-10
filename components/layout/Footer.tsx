import React from 'react';
import Link from 'next/link';
import { Clock, Github, Twitter, Mail, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-gradient-to-b from-zinc-50 to-white dark:from-[#09090B] dark:to-black border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200/20 dark:bg-fuchsia-900/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Column 1: Brand - Enhanced */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
                <Image
                  src="/logo.svg"
                  alt="Scolect Logo"
                  width={30}
                  height={30}
                  priority
                />
                <span className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  Scolect - Track Screen Time & App Usage
                </span>
              </Link>
              
              <p className="text-[#52525B] dark:text-[#A1A1AA] mb-6 max-w-sm leading-relaxed">
                Free, open-source screen time tracking for desktop. Reclaim your digital autonomy with local-first analytics and focus tools.
              </p>
              
              <div className="flex gap-3">
                <a 
                  href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp" 
                  className="group relative p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#52525B] dark:text-[#A1A1AA] hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-violet-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Github size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="https://x.com/harmanpreet277" 
                  className="group relative p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#52525B] dark:text-[#A1A1AA] hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Twitter size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:scolect@harmanita.com" 
                  className="group relative p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#52525B] dark:text-[#A1A1AA] hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/10 to-rose-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Mail size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>

              {/* Open Source Badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 border border-violet-200 dark:border-violet-800/50 rounded-full text-xs font-semibold text-violet-700 dark:text-violet-400 animate-gradient">
                <Sparkles size={12} className="animate-pulse-glow" />
                100% Open Source
              </div>
            </div>

            {/* Column 2: Product - Enhanced */}
            <div className="group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
                Product
                <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </h4>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Features', href: '/features' },
                  { name: 'Download', href: '/download' },
                  { name: 'Screenshots', href: '/gallery' },
                  { name: 'Changelog', href: '/changelog' },
                ].map((link, i) => (
                  <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      href={link.href} 
                      className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-2 group/link"
                    >
                      <span className="w-0 h-px bg-violet-600 group-hover/link:w-3 transition-all duration-300"></span>
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources - Enhanced */}
            <div className="group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
                Resources
                <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </h4>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {[
                  { name: 'Documentation', href: '/docs' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'About', href: '/about' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Comparison', href: '/comparison' },
                ].map((link, i) => (
                  <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      href={link.href} 
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2 group/link"
                    >
                      <span className="w-0 h-px bg-teal-600 group-hover/link:w-3 transition-all duration-300"></span>
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Community - Enhanced */}
            <div className="group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
                Community
                <div className="w-8 h-0.5 bg-gradient-to-r from-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </h4>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {[
                  { name: 'GitHub Repo', href: 'https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp', external: true },
                  { name: 'Contribute', href: '/community' },
                  { name: 'Report Bug', href: '/report-bug', external: true },
                  { name: 'Submit Feedback', href: '/feedback', external: true },
                  { name: 'Contact', href: '/contact' },
                ].map((link, i) => (
                  <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2">
                    {link.external ? (
                      <a 
                        href={link.href} 
                        className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2 group/link"
                      >
                        <span className="w-0 h-px bg-fuchsia-600 group-hover/link:w-3 transition-all duration-300"></span>
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2 group/link"
                      >
                        <span className="w-0 h-px bg-fuchsia-600 group-hover/link:w-3 transition-all duration-300"></span>
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              &copy; {currentYear} Scolect. Open source under 
              <a href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/blob/main/LICENSE" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">LGPL-2.1 License</a>
            </div>
            
            <div className="flex items-center gap-2 group cursor-default">
              Made with 
              <Heart size={14} className="text-rose-500 fill-current animate-pulse-glow group-hover:scale-125 transition-transform duration-300" />
              for people
            </div>
            
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="hover:text-[#18181B] dark:hover:text-[#FAFAFA] transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}