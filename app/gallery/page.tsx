'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  Play, 
  LayoutDashboard, 
  BarChart2, 
  Layers, 
  Clock, 
  Bell, 
  Settings, 
  Moon,
  Image as ImageIcon,
  Monitor
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// --- Types & Data ---

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  src: string; // Using placeholders for this demo
  icon: React.ElementType;
};

const CATEGORIES = [
  "All",
  "Overview",
  "Reports",
  "Apps",
  "Focus",
  "Alerts",
  "Settings",
  "Themes"
];

// Mock Data representing the screenshots described in the prompt
const GALLERY_ITEMS: GalleryItem[] = [
  // Overview
  { id: 1, category: "Overview", title: "Daily Dashboard", description: "See your productivity at a glance with real-time stats.", src: "/api/placeholder/800/600", icon: LayoutDashboard },
  { id: 2, category: "Overview", title: "Top Applications", description: "Track your most-used apps and categories.", src: "/api/placeholder/800/600", icon: LayoutDashboard },
  { id: 3, category: "Overview", title: "Productive Score", description: "Visual breakdown of productive vs distracting time.", src: "/api/placeholder/800/600", icon: LayoutDashboard },
  
  // Reports
  { id: 4, category: "Reports", title: "Daily Analytics", description: "Comprehensive bar charts showing usage peaks.", src: "/api/placeholder/800/600", icon: BarChart2 },
  { id: 5, category: "Reports", title: "Category Breakdown", description: "Detailed pie charts of your digital habits.", src: "/api/placeholder/800/600", icon: BarChart2 },
  { id: 6, category: "Reports", title: "Custom Date Ranges", description: "Analyze usage patterns over any time period.", src: "/api/placeholder/800/600", icon: BarChart2 },
  
  // Apps
  { id: 7, category: "Apps", title: "Application List", description: "Search and filter through hundreds of apps instantly.", src: "/api/placeholder/800/600", icon: Layers },
  { id: 8, category: "Apps", title: "Edit Categories", description: "Complete control over how apps are tracked.", src: "/api/placeholder/800/600", icon: Layers },
  
  // Focus
  { id: 9, category: "Focus", title: "Focus Timer", description: "Beautiful circular timer for deep work sessions.", src: "/api/placeholder/800/600", icon: Clock },
  { id: 10, category: "Focus", title: "Session History", description: "Track your focus trends and completed sessions.", src: "/api/placeholder/800/600", icon: Clock },
  
  // Alerts
  { id: 11, category: "Alerts", title: "Limit Settings", description: "Set flexible limits for specific applications.", src: "/api/placeholder/800/600", icon: Bell },
  { id: 12, category: "Alerts", title: "Notifications", description: "Configure gentle alerts that work for you.", src: "/api/placeholder/800/600", icon: Bell },
  
  // Settings
  { id: 13, category: "Settings", title: "Customization", description: "Extensive options to make TimeMark yours.", src: "/api/placeholder/800/600", icon: Settings },
  { id: 14, category: "Settings", title: "Backup & Restore", description: "Your data, your control—export anytime.", src: "/api/placeholder/800/600", icon: Settings },

  // Themes (Light/Dark)
  { id: 15, category: "Themes", title: "Dark Mode", description: "Easy on the eyes for late-night work.", src: "/api/placeholder/800/600", icon: Moon },
  { id: 16, category: "Themes", title: "Light Mode", description: "Clean, crisp design for bright environments.", src: "/api/placeholder/800/600", icon: Monitor },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Filter logic
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Lightbox Navigation
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev || 0) + 1));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev || 0) - 1));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard support for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F5] to-[#FAFAFA] dark:from-[#09090B] dark:via-[#0F0F12] dark:to-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#7C3AED]/5 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-violet-500/5 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar/>
        {/* HERO SECTION */}
        <div className="pt-32 pb-16 px-6 text-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl relative overflow-hidden">
          {/* Decorative gradient lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-violet-600/10 text-[#7C3AED] dark:text-violet-400 text-sm font-semibold mb-6 border border-[#7C3AED]/20 backdrop-blur-sm shadow-lg shadow-violet-500/10 animate-fade-in">
              <ImageIcon size={16} className="animate-bounce" style={{ animationDuration: '2s' }} /> Visual Tour
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              See TimeMark in Action
            </h1>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Explore the interface with high-quality screenshots showcasing every feature.
            </p>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden
                    ${activeCategory === cat 
                      ? 'bg-gradient-to-r from-[#7C3AED] to-violet-600 text-white shadow-xl shadow-violet-500/30 scale-105' 
                      : 'bg-white/80 dark:bg-zinc-900/80 text-[#52525B] dark:text-[#A1A1AA] border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#7C3AED]/50 hover:text-[#7C3AED] hover:shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm hover:scale-105'}
                  `}
                  style={{ 
                    animationDelay: `${idx * 0.05}s`,
                    animation: 'fade-in-up 0.5s ease-out forwards'
                  }}
                >
                  {activeCategory === cat && (
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></span>
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredCard === index;
                return (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => openLightbox(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 aspect-[4/3] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 mb-4 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Animated gradient border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                      
                      {/* Placeholder Visual Construction */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 group-hover:scale-110 transition-transform duration-700">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        </div>
                        
                        <div className="text-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 relative z-10">
                          <div className="relative">
                            <Icon size={64} className="mx-auto mb-4 text-[#18181B] dark:text-[#FAFAFA] group-hover:scale-110 transition-transform duration-500" />
                            {/* Icon glow effect */}
                            <div className="absolute inset-0 blur-2xl bg-[#7C3AED]/20 group-hover:bg-[#7C3AED]/40 transition-all duration-500"></div>
                          </div>
                          <span className="font-bold text-lg text-[#18181B] dark:text-[#FAFAFA]">{item.title} Preview</span>
                        </div>
                      </div>
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                        <div className={`p-4 bg-white/20 backdrop-blur-md rounded-full text-white shadow-2xl transition-all duration-500 ${isHovered ? 'scale-100 rotate-0' : 'scale-75 rotate-45'}`}>
                          <Maximize2 size={28} className="drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>

                    {/* Caption */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 group-hover:text-[#7C3AED] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed group-hover:text-[#18181B] dark:group-hover:text-[#FAFAFA] transition-colors duration-300">
                        {item.description}
                      </p>
                      {/* Animated underline */}
                      <div className="h-0.5 bg-gradient-to-r from-[#7C3AED] to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VIDEO WALKTHROUGH */}
        <section className="py-24 px-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-y border-zinc-200/50 dark:border-zinc-800/50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              Video Walkthrough
            </h2>
            <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch TimeMark in action. See how easy it is to set up tracking, use focus mode, and analyze your productivity in this 2-minute video.
            </p>
            
            <div className="relative aspect-video w-full max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/50 group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)]">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10"></div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
              
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Pulsing rings */}
                <div className="absolute w-32 h-32 rounded-full bg-[#7C3AED]/20 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-40 h-40 rounded-full bg-[#7C3AED]/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-violet-600 flex items-center justify-center text-white shadow-2xl shadow-violet-600/50 group-hover:scale-125 group-hover:shadow-violet-600/70 transition-all duration-500">
                  <Play size={36} fill="currentColor" className="ml-1 drop-shadow-lg" />
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                </div>
              </div>
              
              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="font-bold text-xl mb-1">Getting Started with TimeMark</div>
                <div className="text-sm text-zinc-300 flex items-center gap-3">
                  <span>02:14</span>
                  <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>
                  <span>1080p</span>
                  <span className="ml-auto px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">HD</span>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            
            {/* Controls */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:rotate-90 group"
            >
              <X size={32} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 p-4 text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-[#7C3AED]/20 hover:to-violet-600/20 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:-translate-x-1 group"
            >
              <ChevronLeft size={40} className="group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 p-4 text-zinc-400 hover:text-white hover:bg-gradient-to-l hover:from-[#7C3AED]/20 hover:to-violet-600/20 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:translate-x-1 group"
            >
              <ChevronRight size={40} className="group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            </button>

            {/* Image Content */}
            <div className="max-w-7xl w-full max-h-full flex flex-col items-center animate-scale-in">
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden flex items-center justify-center mb-8 border border-zinc-800/50 shadow-2xl shadow-violet-500/20">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-30 blur-xl animate-pulse"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
                
                {/* Visual Placeholder for Lightbox */}
                <div className="text-center opacity-30 relative z-10">
                  <div className="relative">
                    {React.createElement(filteredItems[lightboxIndex].icon, { 
                      size: 96, 
                      className: "mx-auto mb-6 text-white drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]" 
                    })}
                    {/* Icon glow */}
                    <div className="absolute inset-0 blur-3xl bg-[#7C3AED]/40 animate-pulse"></div>
                  </div>
                  <div className="text-2xl font-bold text-white tracking-widest uppercase drop-shadow-lg">
                    {filteredItems[lightboxIndex].title} Screenshot
                  </div>
                </div>
              </div>

              <div className="text-center max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  {filteredItems[lightboxIndex].description}
                </p>
                
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-violet-600 hover:from-[#6D28D9] hover:to-violet-700 text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 hover:scale-105 backdrop-blur-sm group">
                  <Download size={18} className="group-hover:animate-bounce" /> 
                  <span>Download Screenshot</span>
                </button>
              </div>
              
              <div className="mt-6 text-zinc-500 text-sm font-medium px-4 py-2 bg-zinc-900/50 rounded-full backdrop-blur-sm border border-zinc-800/50">
                Image <span className="text-[#7C3AED] font-bold">{lightboxIndex + 1}</span> of {filteredItems.length}
              </div>
            </div>
          </div>
        )}

        {/* FINAL CTA */}
        <section className="py-28 px-6 text-center bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#7C3AED]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              Experience It Yourself
            </h2>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-12 leading-relaxed">
              Screenshots only tell part of the story. Download TimeMark and explore every feature firsthand.
            </p>
            <button className="relative bg-gradient-to-r from-[#7C3AED] to-violet-600 hover:from-[#6D28D9] hover:to-violet-700 text-white font-bold py-5 px-10 rounded-xl shadow-[0_20px_40px_-12px_rgba(124,58,237,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(124,58,237,0.6)] group overflow-hidden">
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                Download from Microsoft Store
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>
        <Footer/>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}