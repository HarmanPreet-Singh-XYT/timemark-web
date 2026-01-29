'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Monitor,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- Types & Data ---

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  src: string;
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

// Gallery items with your actual images
const GALLERY_ITEMS: GalleryItem[] = [
  // Overview
  { 
    id: 1, 
    category: "Overview", 
    title: "Daily Dashboard", 
    description: "See your productivity at a glance with real-time stats.", 
    src: "/images/dashboard.png", 
    icon: LayoutDashboard 
  },
  { 
    id: 2, 
    category: "Overview", 
    title: "Application Analysis", 
    description: "Track your most-used apps and categories.", 
    src: "/images/applications.png", 
    icon: LayoutDashboard 
  },
  { 
    id: 3, 
    category: "Overview", 
    title: "Usage Analysis", 
    description: "Visual breakdown of your time tracking data.", 
    src: "/images/analysis.png", 
    icon: LayoutDashboard 
  },
  
  // Reports
  { 
    id: 4, 
    category: "Reports", 
    title: "App Analysis Chart", 
    description: "Comprehensive bar charts showing usage peaks.", 
    src: "/images/app analysis chart.png", 
    icon: BarChart2 
  },
  { 
    id: 5, 
    category: "Reports", 
    title: "Pattern Analysis", 
    description: "Detailed analysis of your digital habits and patterns.", 
    src: "/images/pattern analysis.png", 
    icon: BarChart2 
  },
  { 
    id: 6, 
    category: "Reports", 
    title: "Custom Date Ranges", 
    description: "Analyze usage patterns over any time period.", 
    src: "/images/custom range.png", 
    icon: BarChart2 
  },
  
  // Apps
  { 
    id: 7, 
    category: "Apps", 
    title: "Application Settings", 
    description: "Search and filter through hundreds of apps instantly.", 
    src: "/images/app setting.png", 
    icon: Layers 
  },
  
  // Focus
  { 
    id: 8, 
    category: "Focus", 
    title: "Pomodoro Timer", 
    description: "Beautiful circular timer for deep work sessions.", 
    src: "/images/pomodoro.png", 
    icon: Clock 
  },
  { 
    id: 9, 
    category: "Focus", 
    title: "Pomodoro Modes", 
    description: "Different timer modes for various work styles.", 
    src: "/images/pomodoro modes.png", 
    icon: Clock 
  },
  { 
    id: 10, 
    category: "Focus", 
    title: "Pomodoro Settings", 
    description: "Customize your focus sessions to match your workflow.", 
    src: "/images/pomodoro settings.png", 
    icon: Clock 
  },
  
  // Alerts
  { 
    id: 11, 
    category: "Alerts", 
    title: "Set Time Limits", 
    description: "Set flexible limits for specific applications.", 
    src: "/images/set limit.png", 
    icon: Bell 
  },
  
  // Settings
  { 
    id: 12, 
    category: "Settings", 
    title: "App Settings", 
    description: "Extensive options to make TimeMark yours.", 
    src: "/images/settings.png", 
    icon: Settings 
  },
  { 
    id: 13, 
    category: "Settings", 
    title: "Backup & Restore", 
    description: "Your data, your control—export anytime.", 
    src: "/images/backup restore.png", 
    icon: Settings 
  },
  { 
    id: 14, 
    category: "Settings", 
    title: "FAQ", 
    description: "Frequently asked questions and helpful tips.", 
    src: "/images/faq.png", 
    icon: Settings 
  },

  // Themes (Light/Dark)
  { 
    id: 15, 
    category: "Themes", 
    title: "Dark Mode", 
    description: "Easy on the eyes for late-night work.", 
    src: "/images/dark mode.png", 
    icon: Moon 
  },
  { 
    id: 16, 
    category: "Themes", 
    title: "Light Mode", 
    description: "Clean, crisp design for bright environments.", 
    src: "/images/light mode.png", 
    icon: Monitor 
  },
];

export default function GalleryPage() {
  // Add mounted state to prevent hydration issues
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Video player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter logic
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Download screenshot functionality - with proper browser check
  const handleDownloadScreenshot = async (item: GalleryItem) => {
    if (typeof window === 'undefined') return;
    
    try {
      const response = await fetch(item.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `timemark-${item.title.toLowerCase().replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Video player functions
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setVolume(vol);
      setIsMuted(vol === 0);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const toggleFullscreen = useCallback(async () => {
    if (typeof document === 'undefined' || !containerRef.current) return;
    
    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  }, [isFullscreen]);

  const formatTime = useCallback((seconds: number) => {
    if (!isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isPlaying]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Handle fullscreen change events
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Lightbox Navigation
  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  
  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard support for lightbox
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F5] to-[#FAFAFA] dark:from-[#09090B] dark:via-[#0F0F12] dark:to-[#09090B]">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7C3AED]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F5] to-[#FAFAFA] dark:from-[#09090B] dark:via-[#0F0F12] dark:to-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-transparent blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent blur-3xl animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10">
        <Navbar/>
        {/* HERO SECTION */}
        <div className="pt-32 pb-16 px-6 text-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl relative overflow-hidden">
          {/* Decorative gradient lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-violet-600/10 text-[#7C3AED] dark:text-violet-400 text-sm font-semibold mb-6 border border-[#7C3AED]/20 backdrop-blur-sm shadow-lg shadow-violet-500/10">
              <ImageIcon size={16} className="animate-bounce" style={{ animationDuration: '2s' }} /> 
              Visual Tour
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              See TimeMark in Action
            </h1>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Explore the interface with high-quality screenshots showcasing every feature.
            </p>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden
                    ${activeCategory === cat 
                      ? 'bg-gradient-to-r from-[#7C3AED] to-violet-600 text-white shadow-xl shadow-violet-500/30 scale-105' 
                      : 'bg-white/80 dark:bg-zinc-900/80 text-[#52525B] dark:text-[#A1A1AA] border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#7C3AED]/50 hover:text-[#7C3AED] hover:shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm hover:scale-105'}
                  `}
                >
                  {activeCategory === cat && (
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => {
                const isHovered = hoveredCard === index;
                return (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer flex flex-col h-full"
                    onClick={() => openLightbox(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 aspect-[4/3] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 mb-4 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Animated gradient border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                      
                      {/* Actual Image - using next/image */}
                      <Image 
                        src={item.src} 
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                        <div className={`p-4 bg-white/20 backdrop-blur-md rounded-full text-white shadow-2xl transition-all duration-500 ${isHovered ? 'scale-100 rotate-0' : 'scale-75 rotate-45'}`}>
                          <Maximize2 size={28} className="drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                      <div className="h-0.5 bg-gradient-to-r from-[#7C3AED] to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2" />
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              Video Walkthrough
            </h2>
            <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch TimeMark in action. See how easy it is to set up tracking, use focus mode, and analyze your productivity in this 1 minute 50 second video.
            </p>
            
            {/* Custom Video Player */}
            <div 
              ref={containerRef}
              className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/50 group transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] bg-black"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10" />
              
              {/* Video Element */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                src="/video.mp4"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                poster="/images/dashboard.png"
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity duration-300">
                  <button 
                    onClick={togglePlay}
                    className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-violet-600 flex items-center justify-center text-white shadow-2xl shadow-violet-600/50 hover:scale-110 transition-all duration-300 group/play"
                    aria-label="Play video"
                  >
                    <Play size={36} fill="currentColor" className="ml-1 drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                    
                    {/* Pulsing rings */}
                    <div className="absolute w-32 h-32 rounded-full bg-[#7C3AED]/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute w-40 h-40 rounded-full bg-[#7C3AED]/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                  </button>
                </div>
              )}
              
              {/* Custom Controls */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 transition-all duration-300 ${
                  showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Progress Bar */}
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-4 
                      [&::-webkit-slider-thumb]:h-4 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-gradient-to-r 
                      [&::-webkit-slider-thumb]:from-[#7C3AED] 
                      [&::-webkit-slider-thumb]:to-violet-600
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:shadow-violet-500/50
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-transform
                      [&::-webkit-slider-thumb]:hover:scale-125
                      [&::-moz-range-thumb]:w-4 
                      [&::-moz-range-thumb]:h-4 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-gradient-to-r 
                      [&::-moz-range-thumb]:from-[#7C3AED] 
                      [&::-moz-range-thumb]:to-violet-600
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:shadow-lg
                      [&::-moz-range-thumb]:shadow-violet-500/50
                      [&::-moz-range-thumb]:cursor-pointer
                      hover:bg-white/30"
                    style={{
                      background: duration > 0 
                        ? `linear-gradient(to right, rgb(124, 58, 237) 0%, rgb(124, 58, 237) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) 100%)`
                        : 'rgba(255,255,255,0.2)'
                    }}
                    aria-label="Video progress"
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  {/* Left Controls */}
                  <div className="flex items-center gap-4">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>

                    {/* Time */}
                    <div className="text-sm font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    {/* Volume */}
                    <div className="flex items-center gap-2 group/volume">
                      <button
                        onClick={toggleMute}
                        className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-0 group-hover/volume:w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer transition-all duration-300
                          [&::-webkit-slider-thumb]:appearance-none 
                          [&::-webkit-slider-thumb]:w-3 
                          [&::-webkit-slider-thumb]:h-3 
                          [&::-webkit-slider-thumb]:rounded-full 
                          [&::-webkit-slider-thumb]:bg-white
                          [&::-webkit-slider-thumb]:cursor-pointer
                          [&::-moz-range-thumb]:w-3 
                          [&::-moz-range-thumb]:h-3 
                          [&::-moz-range-thumb]:rounded-full 
                          [&::-moz-range-thumb]:bg-white
                          [&::-moz-range-thumb]:border-0
                          [&::-moz-range-thumb]:cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, white 0%, white ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                        }}
                        aria-label="Volume"
                      />
                    </div>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-2">
                    {/* Video Info Badge */}
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium hidden sm:block">
                      1080p HD
                    </div>

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Title Overlay */}
              <div className={`absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white transition-all duration-300 ${
                showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}>
                <div className="font-bold text-lg">Getting Started with TimeMark</div>
                <div className="text-sm text-zinc-300">Product Walkthrough</div>
              </div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            
            {/* Controls */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:rotate-90 group"
              aria-label="Close lightbox"
            >
              <X size={32} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 p-4 text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-[#7C3AED]/20 hover:to-violet-600/20 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:-translate-x-1 group"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} className="group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 p-4 text-zinc-400 hover:text-white hover:bg-gradient-to-l hover:from-[#7C3AED]/20 hover:to-violet-600/20 rounded-full transition-all duration-300 z-50 backdrop-blur-sm border border-white/10 hover:scale-110 hover:translate-x-1 group"
              aria-label="Next image"
            >
              <ChevronRight size={40} className="group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            </button>

            {/* Image Content */}
            <div className="max-w-7xl w-full max-h-full flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden flex items-center justify-center mb-8 border border-zinc-800/50 shadow-2xl shadow-violet-500/20">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-violet-500 to-[#7C3AED] opacity-30 blur-xl animate-pulse" />
                
                {/* Actual Lightbox Image */}
                <Image 
                  src={filteredItems[lightboxIndex].src} 
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain relative z-10"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="text-center max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  {filteredItems[lightboxIndex].description}
                </p>
                
                <button 
                  onClick={() => handleDownloadScreenshot(filteredItems[lightboxIndex])}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-violet-600 hover:from-[#6D28D9] hover:to-violet-700 text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 hover:scale-105 backdrop-blur-sm group"
                >
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA]">
              Experience It Yourself
            </h2>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-12 leading-relaxed">
              Screenshots only tell part of the story. Download TimeMark and explore every feature firsthand.
            </p>
            <button onClick={()=>router.push("/download")} className="relative bg-gradient-to-r from-[#7C3AED] to-violet-600 hover:from-[#6D28D9] hover:to-violet-700 text-white font-bold py-5 px-10 rounded-xl shadow-[0_20px_40px_-12px_rgba(124,58,237,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(124,58,237,0.6)] group overflow-hidden">
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                Download Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
}