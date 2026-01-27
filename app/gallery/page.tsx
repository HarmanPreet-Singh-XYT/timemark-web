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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-16 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <ImageIcon size={16} /> Visual Tour
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            See TimeMark in Action
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Explore the interface with high-quality screenshots showcasing every feature.
          </p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat 
                    ? 'bg-[#7C3AED] text-white shadow-lg shadow-violet-500/25' 
                    : 'bg-white dark:bg-zinc-900 text-[#52525B] dark:text-[#A1A1AA] border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/50 hover:text-[#7C3AED]'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 mb-4">
                    {/* Placeholder Visual Construction since we lack real images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center opacity-20">
                        <Icon size={64} className="mx-auto mb-4 text-[#18181B] dark:text-[#FAFAFA]" />
                        <span className="font-bold text-lg text-[#18181B] dark:text-[#FAFAFA]">{item.title} Preview</span>
                      </div>
                    </div>
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <Maximize2 size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div>
                    <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1 group-hover:text-[#7C3AED] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO WALKTHROUGH */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Video Walkthrough
          </h2>
          <p className="text-[#52525B] dark:text-[#A1A1AA] mb-10 max-w-2xl mx-auto">
            Watch TimeMark in action. See how easy it is to set up tracking, use focus mode, and analyze your productivity in this 2-minute video.
          </p>
          
          <div className="relative aspect-video w-full max-w-4xl mx-auto bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 group cursor-pointer">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-xl shadow-violet-600/40 group-hover:scale-110 transition-transform">
                 <Play size={32} fill="currentColor" className="ml-1" />
               </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <div className="font-bold text-lg">Getting Started with TimeMark</div>
              <div className="text-sm text-zinc-300">02:14 • 1080p</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          
          {/* Controls */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <ChevronLeft size={40} />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Content */}
          <div className="max-w-7xl w-full max-h-full flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center mb-6 border border-zinc-800">
               {/* Visual Placeholder for Lightbox */}
               <div className="text-center opacity-30">
                 {React.createElement(filteredItems[lightboxIndex].icon, { size: 96, className: "mx-auto mb-6 text-white" })}
                 <div className="text-2xl font-bold text-white tracking-widest uppercase">
                   {filteredItems[lightboxIndex].title} Screenshot
                 </div>
               </div>
            </div>

            <div className="text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-zinc-400 text-lg">
                {filteredItems[lightboxIndex].description}
              </p>
              
              <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm font-medium">
                <Download size={16} /> Download Screenshot
              </button>
            </div>
            
            <div className="mt-4 text-zinc-500 text-sm">
              Image {lightboxIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Experience It Yourself
          </h2>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-10">
            Screenshots only tell part of the story. Download TimeMark and explore every feature firsthand.
          </p>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-0.5">
            Download from Microsoft Store
          </button>
        </div>
      </section>
      <Footer/>

    </div>
  );
}