'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Target, 
  Timer, 
  Bell, 
  LayoutGrid, 
  Shield, 
  Download, 
  Play, 
  Zap, 
  Github, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Menu,
  Monitor,
  Code2,
  Database,
  Layers,
  Moon,
  Sun,
  Activity,
  Sparkles
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// --- UI Components ---

const Section = ({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className={`py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children, color = "violet" }: { children: React.ReactNode, color?: "violet" | "teal" | "amber" | "rose" }) => {
  const styles = {
    violet: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20",
    teal: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20",
    amber: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
    rose: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${styles[color]} inline-flex items-center gap-1.5 animate-fade-in`}>
      <Sparkles size={12} className="animate-pulse" />
      {children}
    </span>
  );
};

const Button = ({ children, variant = "primary", className, icon: Icon, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/40 border border-transparent dark:bg-violet-600 dark:hover:bg-violet-500",
    secondary: "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm hover:shadow-md dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700",
    ghost: "text-zinc-600 hover:text-violet-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-violet-400 dark:hover:bg-zinc-800",
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {Icon && <Icon size={18} className="transition-transform group-hover:rotate-12" />}
      {children}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, points, explanation }: any) => (
  <div className="bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-500/50 hover:-translate-y-1 group flex flex-col h-full relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
    
    <div className="w-12 h-12 bg-violet-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 dark:group-hover:bg-violet-600 transition-colors duration-300 shadow-inner">
      <Icon className="text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" size={24} />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{title}</h3>
    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-sm">{description}</p>
    
    <div className="flex-grow">
      <ul className="space-y-3 mb-6">
        {points.map((point: string, i: number) => (
          <li key={i} className="flex items-start text-sm text-zinc-500 dark:text-zinc-400">
            <Check size={16} className="text-teal-500 dark:text-teal-400 mr-2 mt-0.5 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
      <p className="text-xs text-zinc-500 dark:text-zinc-500 italic leading-relaxed">
        "{explanation}"
      </p>
    </div>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-0 transition-all duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 rounded-lg px-4">
      <button 
        className="w-full py-5 flex items-center justify-between text-left text-zinc-900 dark:text-zinc-100 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-4">{question}</span>
        <div className="transition-transform duration-300 group-hover:scale-110">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
};

// --- Mock Dashboard ---
const DashboardPreview = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationComplete(true), 500);
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-200 dark:border-zinc-800 overflow-hidden max-w-5xl mx-auto transition-all duration-700 hover:shadow-3xl hover:scale-[1.02] animate-slide-up">
      {/* Header */}
      <div className="border-b border-zinc-100 dark:border-zinc-800 p-4 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-800/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <div className="text-xs font-mono text-zinc-400 animate-fade-in">TimeMark Dashboard v1.0</div>
      </div>
      
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Productivity Score */}
        <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 border border-zinc-100 dark:border-zinc-800 col-span-1 hover:shadow-lg transition-all duration-500 hover:scale-105">
          <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Productivity Score</h4>
          <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
            {/* Conic Gradient - Violet/Teal Theme with animation */}
            <div 
              className={`w-full h-full rounded-full transition-all duration-1000 ${animationComplete ? 'rotate-0' : '-rotate-180 opacity-0'}`}
              style={{ background: 'conic-gradient(#14b8a6 0% 72%, #f43f5e 72% 85%, #71717a 85% 100%)' }}>
            </div>
            <div className="absolute w-28 h-28 bg-zinc-50 dark:bg-zinc-950 rounded-full flex flex-col items-center justify-center shadow-inner">
              <span className={`text-3xl font-bold text-zinc-900 dark:text-white tabular-nums transition-all duration-1000 ${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>72%</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wide font-bold">Productive</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm group hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg p-2 transition-all duration-300">
              <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform duration-300"></span>
                Productive
              </span>
              <span className="font-mono text-zinc-900 dark:text-zinc-200 tabular-nums">5h 12m</span>
            </div>
            <div className="flex justify-between text-sm group hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg p-2 transition-all duration-300">
              <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-125 transition-transform duration-300"></span>
                Distracting
              </span>
              <span className="font-mono text-zinc-900 dark:text-zinc-200 tabular-nums">1h 45m</span>
            </div>
          </div>
        </div>

        {/* Activity Graph */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-100 dark:border-zinc-800 col-span-1 md:col-span-2 shadow-sm dark:shadow-none hover:shadow-lg transition-all duration-500 hover:scale-105">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Daily Activity</h4>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md font-medium">Last 7 Days</div>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 md:gap-4">
            {[65, 80, 45, 90, 75, 30, 60].map((h, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <div 
                  className={`w-full rounded-md transition-all duration-700 hover:opacity-80 ${h > 70 ? 'bg-violet-500 dark:bg-violet-500 hover:bg-violet-600' : 'bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300'}`} 
                  style={{ 
                    height: `${h}%`,
                    transitionDelay: `${i * 100}ms`,
                    transform: animationComplete ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'bottom'
                  }}
                ></div>
                <span className="text-xs text-zinc-400 font-mono group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 group-hover:scale-110">
                  {['M','T','W','T','F','S','S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function TimeMarkLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Initialize theme based on system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isSystemDark);
      
      // Parallax scroll effect
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Apply theme class to the HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    // Main Wrapper
    <div className="min-h-screen font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <Navbar/>

      {/* Hero Section */}
      <div className="relative pt-32 pb-40 overflow-hidden">
      {/* Enhanced Background Gradients with parallax */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[140px] animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-fuchsia-500/15 dark:bg-fuchsia-500/10 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: '4s', transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge color="violet">v1.0 Now Available</Badge>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.1] animate-fade-in">
            Take Control of Your{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-violet-400 animate-gradient bg-[length:200%_auto]">
              Digital Life
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Understand your habits, boost productivity, and reclaim your focus—without sacrificing privacy.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Track every application, analyze your productivity patterns, set meaningful limits, and build better habits with powerful insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="primary" icon={Download} className="w-full sm:w-auto text-base px-8 py-3.5 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow">
              Get from Microsoft Store
            </Button>
            <Button variant="secondary" icon={Github} className="w-full sm:w-auto text-base px-8 py-3.5">
              View on GitHub
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { label: 'Free Forever', icon: Check },
              { label: 'Open Source', icon: Check },
              { label: 'Local Data', icon: Check },
              { label: 'No Account', icon: Check }
            ].map((feature) => (
              <span 
                key={feature.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-colors"
              >
                <feature.icon size={16} className="text-teal-500 dark:text-teal-400" />
                {feature.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/20 dark:bg-[#8B5CF6]/10 blur-[120px] rounded-full z-10  pointer-events-none" />

    {/* Visual Analytics Preview */}
    <div className="px-4 mb-32 relative z-10">
      <div className="max-w-7xl mx-auto -mt-32">
        <DashboardPreview />
      </div>
    </div>

      {/* Problem Statement */}
      <Section>
        <div className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <div>
                <Badge color="rose">The Reality</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mt-4 mb-6">
                  You're Spending More Time Than You Think
                </h2>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                We live in an age of endless notifications, infinite scrolling, and constant context-switching. The average person checks their phone 96 times per day, spends over 7 hours on screens, and loses 2.5 hours daily to digital distractions.
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                But here's the problem: most of us have no idea where our time actually goes. We finish the day exhausted, feeling unproductive, wondering where the hours disappeared.
              </p>
              
              <div className="bg-violet-500/10 dark:bg-violet-500/5 p-6 rounded-2xl border-l-4 border-violet-500">
                <p className="text-base font-medium text-zinc-900 dark:text-white leading-relaxed">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">TimeMark changes that.</span> By automatically tracking your application usage in real-time, TimeMark gives you the clarity you need to make informed decisions about your digital life.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="bg-zinc-900 dark:bg-black p-8 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 blur-3xl rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-1 gap-6 w-full max-w-xs">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 group text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">7h</div>
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">Daily Screen Time</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-rose-400/50 transition-all duration-300 hover:scale-105 group text-center">
                  <div className="text-5xl md:text-6xl font-bold text-rose-400 mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">2.5h</div>
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">Lost to Distractions</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 group text-center">
                  <div className="text-5xl md:text-6xl font-bold text-teal-400 mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">96</div>
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">Daily Phone Checks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge color="violet">Features</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Everything You Need to Master Your Screen Time</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
            TimeMark isn't just another tracker. It's a comprehensive productivity ecosystem designed to help you understand, improve, and optimize how you spend your digital time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <FeatureCard 
            icon={BarChart3}
            title="Know Exactly Where Your Time Goes"
            description="TimeMark tracks every second you spend on your computer, automatically categorizing applications and providing detailed insights into your daily habits."
            points={[
              "Real-time tracking with zero setup",
              "Detailed daily, weekly, monthly reports",
              "Historical trends to track improvement"
            ]}
            explanation="Unlike simple timers, TimeMark runs silently in the background, capturing precise usage data for every application. See which apps you use most and how your patterns change over time."
          />
          <FeatureCard 
            icon={Target}
            title="Transform Screen Time into Productive Time"
            description="TimeMark lets you mark applications as productive or non-productive, automatically calculating your Productive Score to measure your efficiency."
            points={[
              "Mark apps as productive/distracting",
              "Automatic Productive Score calculation",
              "Identify your most productive hours"
            ]}
            explanation="Your Productive Score isn't about judgment—it's about awareness. Categorize your apps, set your intentions, and let TimeMark show you whether your actions align with your goals."
          />
          <FeatureCard 
            icon={Timer}
            title="Deep Work Made Simple"
            description="Built-in Focus Mode with customizable Pomodoro timer helps you maintain concentration, take regular breaks, and track your focused work sessions."
            points={[
              "Multiple focus modes (Deep Work, Quick Tasks)",
              "Distraction blocking during focus sessions",
              "Track daily focus trends"
            ]}
            explanation="The Pomodoro Technique is scientifically proven to improve focus. TimeMark tracks your session history, shows you trends, and helps you understand when you're most capable of deep work."
          />
          <FeatureCard 
            icon={Bell}
            title="Stay on Track Without Feeling Controlled"
            description="Set healthy boundaries with flexible time limits and smart notifications. TimeMark alerts you when you're approaching limits, without nagging."
            points={[
              "Overall daily & app-specific limits",
              "Customizable alert frequency",
              "Gentle reminders, not harsh restrictions"
            ]}
            explanation="Traditional parental control apps treat you like a child. TimeMark treats you like an adult. You set the limits, and TimeMark provides awareness when you're approaching them."
          />
          <FeatureCard 
            icon={LayoutGrid}
            title="Your Apps, Your Rules, Your Categories"
            description="Take complete control over how TimeMark tracks. Create custom categories, hide apps you don't want to track, and organize everything."
            points={[
              "Create unlimited custom categories",
              "Hide specific apps from tracking",
              "Search and filter applications instantly"
            ]}
            explanation="Everyone's workflow is different. TimeMark adapts to you. Create categories like 'Client Work' or 'Learning'. Toggle visibility for system apps. This ensures your data is always relevant."
          />
          <FeatureCard 
            icon={Shield}
            title="Your Data Stays Yours. Always."
            description="Unlike commercial tracking apps that sell your data, TimeMark stores everything locally on your device. No cloud sync. No accounts."
            points={[
              "100% local data storage (Hive database)",
              "No account creation required",
              "No data collection or telemetry"
            ]}
            explanation="In an era where every app wants to monetize your attention, TimeMark takes the opposite approach: radical privacy. Everything stays encrypted on your local machine."
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Get Started in 60 Seconds</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">No complex setup. No learning curve. Just install and start tracking immediately.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Enhanced Connector Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 dark:from-violet-800 dark:via-violet-600 dark:to-violet-800 -z-10"></div>

          {[
            { icon: Download, title: "1. Download & Install", text: "Download TimeMark from the Microsoft Store. The installation is automatic—no technical knowledge required.", color: "violet" },
            { icon: Play, title: "2. Automatic Tracking", text: "Launch TimeMark and it starts tracking instantly in the background. Intelligently monitoring usage with zero config.", color: "teal" },
            { icon: BarChart3, title: "3. Review Insights", text: "Open dashboard to see total usage, most-used apps, productivity score, and visual breakdowns.", color: "fuchsia" },
            { icon: Zap, title: "4. Optimize & Improve", text: "Use insights to set goals. Batch communications, plan deep work, and enable Focus Mode to soar.", color: "amber" },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 bg-white dark:bg-zinc-950 border-2 border-${step.color}-100 dark:border-${step.color}-900/30 rounded-2xl flex items-center justify-center shadow-sm dark:shadow-none mb-6 text-${step.color}-600 dark:text-${step.color}-400 z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl bg-gradient-to-br from-white to-${step.color}-50 dark:from-zinc-950 dark:to-${step.color}-950`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">{step.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Join Thousands Who've Reclaimed Their Time</h2>
          <div className="flex justify-center gap-6 mt-6 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
             <span className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">★★★★★ Rated on Microsoft Store</span>
             <span>•</span>
             <span className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">1000+ Active Users</span>
             <span>•</span>
             <span className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">Zero Data Collection</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "As a developer, I thought I had my screen time under control. TimeMark proved me wrong. I was spending 4 hours daily on Slack and email. Now I batch communications and protect my deep work time.", role: "Software Engineer", name: "Alex Chen" },
            { quote: "The Productive Score changed everything for me. I realized that 60% of my screen time was actually productive—way higher than I thought! That confidence helped me stop feeling guilty.", role: "UI/UX Designer", name: "Maria Rodriguez" },
            { quote: "Focus Mode + time limits = game changer. I used to procrastinate for hours on YouTube before starting homework. Now I set a 2-hour study goal in Deep Work mode and actually hit it.", role: "University Student", name: "James Kim" },
          ].map((t, i) => (
            <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 dark:hover:border-violet-700 group">
              <div className="text-4xl text-violet-200 dark:text-violet-900 absolute top-4 left-4 font-serif leading-none group-hover:scale-125 group-hover:text-violet-400 dark:group-hover:text-violet-600 transition-all duration-300">"</div>
              <p className="text-zinc-700 dark:text-zinc-300 relative z-10 mb-6 italic leading-relaxed pt-2">{t.quote}</p>
              <div>
                <div className="font-bold text-zinc-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-white dark:bg-zinc-950 transition-colors rounded-3xl shadow-lg dark:shadow-none">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Why Choose TimeMark?</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Compare TimeMark with other screen time solutions</p>
        </div>
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <table className="w-full min-w-[700px] border-collapse bg-white dark:bg-zinc-900">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950 border-b-2 border-zinc-100 dark:border-zinc-800">
                <th className="p-4 text-left text-zinc-500 dark:text-zinc-400 font-medium">Feature</th>
                <th className="p-4 text-center text-violet-700 dark:text-violet-400 font-bold bg-violet-50 dark:bg-violet-900/10">TimeMark</th>
                <th className="p-4 text-center text-zinc-500 dark:text-zinc-400 font-medium">Commercial Apps</th>
                <th className="p-4 text-center text-zinc-500 dark:text-zinc-400 font-medium">Built-in OS Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                ["Price", "Free Forever", "$5-15/month", "Free"],
                ["Privacy", "100% Local", "Cloud-based", "Mixed"],
                ["Open Source", true, false, false],
                ["Application Tracking", "All Apps", "Limited", "Basic"],
                ["Productivity Scoring", true, "Some", false],
                ["Focus Mode", "Advanced", "Basic", false],
                ["Custom Categories", "Unlimited", "Limited", false],
                ["Pomodoro Timer", true, "Varies", false],
                ["No Account Required", true, false, true],
                ["Backup/Export", true, "Cloud only", "Limited"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300">
                  <td className="p-4 text-zinc-700 dark:text-zinc-300 font-medium">{row[0]}</td>
                  <td className="p-4 text-center bg-violet-50/30 dark:bg-violet-900/5">
                    {typeof row[1] === 'boolean' ? (row[1] ? <Check size={20} className="inline text-teal-500 dark:text-teal-400 animate-bounce" /> : <X size={20} className="inline text-rose-300" />) : <span className="font-semibold text-zinc-900 dark:text-white">{row[1]}</span>}
                  </td>
                  <td className="p-4 text-center text-zinc-500 dark:text-zinc-500">
                    {typeof row[2] === 'boolean' ? (row[2] ? <Check size={20} className="inline text-teal-500" /> : <X size={20} className="inline text-rose-300 dark:text-rose-800" />) : row[2]}
                  </td>
                  <td className="p-4 text-center text-zinc-500 dark:text-zinc-500">
                    {typeof row[3] === 'boolean' ? (row[3] ? <Check size={20} className="inline text-teal-500" /> : <X size={20} className="inline text-rose-300 dark:text-rose-800" />) : row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="max-w-3xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Questions? We've Got Answers.</h2>
        <div className="space-y-2">
          <AccordionItem 
            question="Is TimeMark really completely free?" 
            answer="Yes! TimeMark is 100% free with no premium tiers, subscriptions, or hidden costs. It's open-source software maintained by the community. We believe productivity tools should be accessible to everyone."
          />
          <AccordionItem 
            question="How does TimeMark protect my privacy?" 
            answer="All your data is stored locally in an encrypted Hive database on your device. TimeMark never sends your usage data to any servers, doesn't require account creation, and has zero telemetry. You can verify this by reviewing our open-source code on GitHub."
          />
          <AccordionItem 
            question="Will TimeMark slow down my computer?" 
            answer="No. TimeMark is designed to be extremely lightweight, using minimal CPU and RAM resources. It runs silently in the background and won't impact your system performance or battery life."
          />
          <AccordionItem 
            question="Can I use TimeMark on Mac or Linux?" 
            answer="Currently, TimeMark is available exclusively on Windows through the Microsoft Store. However, as an open-source project, community contributions for other platforms are welcome!"
          />
          <AccordionItem 
            question="What happens if I want to stop tracking certain apps?" 
            answer="You have complete control! In the Applications section, you can mark any app as 'untracked' or hide it from reports. You can also delete historical data for specific apps or clear all data if you want a fresh start."
          />
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-violet-600 dark:text-violet-400 font-semibold hover:underline inline-flex items-center gap-2 group">
            View All FAQs 
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </Section>

      {/* Open Source & Tech Stack */}
      <Section id="opensource" className="bg-zinc-900 text-white rounded-3xl overflow-hidden relative shadow-2xl dark:shadow-none dark:border dark:border-zinc-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 blur-3xl rounded-full pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/20 blur-3xl rounded-full pointer-events-none animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12">
          <div>
            <Badge color="violet">Open Source</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white">Built by the Community, For the Community</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              TimeMark is proudly open-source. This means the code is transparent, auditable, and free for anyone to use, modify, or contribute to. We believe in the power of community-driven development.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Transparency matters. When privacy is a core value, open-source isn't optional—it's essential. You shouldn't have to trust us. You can verify the code yourself.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" icon={Github} className="bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 border-none shadow-none group">
                View on GitHub
              </Button>
              <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-white/10">
                Contribute
              </Button>
              <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-white/10">
                Report Bug
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-700 grid grid-cols-3 gap-4">
              <div className="group hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-xs text-zinc-400 uppercase">Contributors</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="text-2xl font-bold text-white">450+</div>
                <div className="text-xs text-zinc-400 uppercase">Commits</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="text-2xl font-bold text-white">1.2k</div>
                <div className="text-xs text-zinc-400 uppercase">Stars</div>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Built with Modern, Reliable Technology</h3>
            <p className="text-zinc-300 mb-8">
              TimeMark is built using Flutter for cross-platform compatibility and beautiful native interfaces. Data is stored locally using Hive, a fast, lightweight NoSQL database.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-4 rounded-xl flex items-center gap-3 border border-zinc-700 hover:border-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 group">
                <Monitor className="text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-white font-semibold">Flutter</div>
                  <div className="text-xs text-zinc-400">UI Framework</div>
                </div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl flex items-center gap-3 border border-zinc-700 hover:border-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group">
                <Database className="text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-white font-semibold">Hive</div>
                  <div className="text-xs text-zinc-400">Local DB</div>
                </div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl flex items-center gap-3 border border-zinc-700 hover:border-fuchsia-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/20 group">
                <Code2 className="text-fuchsia-400 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-white font-semibold">Dart</div>
                  <div className="text-xs text-zinc-400">Language</div>
                </div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl flex items-center gap-3 border border-zinc-700 hover:border-rose-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20 group">
                <Layers className="text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-white font-semibold">WinAPI</div>
                  <div className="text-xs text-zinc-400">Native Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 dark:from-violet-700 dark:via-fuchsia-800 dark:to-violet-700 py-24 px-4 text-center text-white mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Ready to Take Back Your Time?</h2>
          <p className="text-violet-100 text-lg max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of users who've transformed their digital habits with TimeMark. 
            <br />No credit card. No account. No catches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-white text-violet-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group">
              <Download size={20} className="group-hover:animate-bounce" /> Get it from Microsoft Store
            </button>
            <button className="bg-violet-900/30 backdrop-blur-md text-white border border-violet-400/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-900/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group">
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" /> Star on GitHub
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-violet-100 opacity-90">
             <span className="hover:scale-110 transition-transform duration-300 cursor-default">100% Free Forever</span>
             <span>•</span>
             <span className="hover:scale-110 transition-transform duration-300 cursor-default">Privacy Guaranteed</span>
             <span>•</span>
             <span className="hover:scale-110 transition-transform duration-300 cursor-default">Open Source</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}