'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Code2, 
  Globe2, 
  BrainCircuit, 
  Users2, 
  Database, 
  Monitor, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  Heart, 
  Mail, 
  Github, 
  Twitter, 
  MessageSquare,
  Download,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  ArrowUpRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-30 dark:opacity-20 ${className}`} />
);

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const SectionWrapper = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, center = false, badge }: { title: string, subtitle?: string, center?: boolean, badge?: string }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`} style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
    {badge && (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6 ${center ? '' : ''}`}>
        <Sparkles size={14} className="animate-pulse" />
        {badge}
      </div>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const ValueCard = ({ icon: Icon, title, children, index }: { icon: any, title: string, children: React.ReactNode, index: number }) => (
  <div 
    className="group relative bg-white dark:bg-zinc-900/80 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards',
      opacity: 0
    }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Animated border gradient */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-20" />
    </div>
    
    <div className="relative z-10">
      <div className="p-4 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] w-fit rounded-2xl text-white mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">{title}</h3>
      <div className="text-[#52525B] dark:text-[#A1A1AA] leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </div>
);

const RoadmapColumn = ({ title, items, statusColor, icon: Icon, index }: { title: string, items: string[], statusColor: string, icon: any, index: number }) => (
  <div 
    className="flex-1 min-w-[280px]"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards',
      opacity: 0
    }}
  >
    <div className={`flex items-center gap-3 mb-6 pb-4 border-b-2 ${statusColor}`}>
      <div className={`p-2 rounded-lg ${statusColor.replace('border-', 'bg-').replace(']', '/20]')}`}>
        <Icon size={18} className={statusColor.replace('border-', 'text-')} />
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#18181B] dark:text-[#FAFAFA]">
        {title}
      </h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li 
          key={idx} 
          className="group bg-white dark:bg-zinc-900/80 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm text-[#52525B] dark:text-[#A1A1AA] hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-x-1 cursor-default"
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${statusColor.replace('border-', 'bg-')} group-hover:scale-150 transition-transform duration-300`} />
            {item}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({ year, title, children, index }: { year: string, title: string, children: React.ReactNode, index: number }) => (
  <div 
    className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 pb-16 last:pb-0 group"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards',
      opacity: 0
    }}
  >
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-zinc-200 dark:to-zinc-800 md:left-[20%] group-last:bottom-auto group-last:h-4"></div>
    
    {/* Timeline Dot */}
    <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] md:left-[calc(20%-6px)] ring-4 ring-white dark:ring-[#09090B] shadow-lg shadow-violet-500/50 group-hover:scale-150 transition-transform duration-300"></div>
    
    <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
      <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-sm font-bold text-[#7C3AED] dark:text-[#8B5CF6]">{year}</span>
    </div>
    <div className="md:col-span-4 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
      <h4 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">{title}</h4>
      <p className="text-[#52525B] dark:text-[#A1A1AA]">{children}</p>
    </div>
  </div>
);

const TechCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <div 
    className="group p-6 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards',
      opacity: 0
    }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      <Icon className="text-[#7C3AED]" size={24} />
    </div>
    <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">{title}</h3>
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{description}</p>
  </div>
);

const ContactCard = ({ icon: Icon, title, subtitle, index,link="https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues" }: { icon: any, title: string, subtitle: string, index: number,link?:string }) => (
  <a 
    href={link} 
    className="group p-6 text-center rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-2"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.6s ease-out forwards',
      opacity: 0
    }}
  >
    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-300">
      <Icon className="text-[#18181B] dark:text-[#FAFAFA] group-hover:text-white transition-colors duration-300" size={24} />
    </div>
    <div className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">{title}</div>
    <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">{subtitle}</div>
  </a>
);

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeInUp {
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
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.6);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #7C3AED 0%,
            #A78BFA 25%,
            #7C3AED 50%,
            #A78BFA 75%,
            #7C3AED 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #7C3AED, #8B5CF6, #6D28D9, #7C3AED);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
      
      <Navbar/>
      
      {/* HERO SECTION */}
      <div className="relative pt-32 pb-12 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
        {/* Background Effects */}
        <FloatingOrb className="w-[600px] h-[600px] bg-violet-400 -top-64 -right-64 animate-pulse" />
        <FloatingOrb className="w-[400px] h-[400px] bg-indigo-400 -bottom-32 -left-32 animate-pulse" />
        <FloatingOrb className="w-[300px] h-[300px] bg-purple-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
          >
            <Heart size={14} className="animate-pulse text-rose-500" />
            Built with passion, for the community
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s forwards', opacity: 0 }}
          >
            About <span className="shimmer-text">TimeMark</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}
          >
            A free, open-source productivity tool built by the community, for the community.
          </p>
        </div>
      </div>

      {/* MISSION & WHY */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div 
            className="relative"
            style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-transparent rounded-full" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium mb-4">
              <Zap size={12} />
              Our Mission
            </div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">Reclaiming Digital Autonomy</h2>
            <div className="space-y-4 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>We live in an age of engineered distraction. Every app is designed to capture and monetize your attention.</p>
              <p className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">TimeMark exists as an alternative.</strong>
              </p>
              <p>We believe that understanding your digital habits is a fundamental right, not a premium feature. That awareness should empower, not shame.</p>
              <p className="p-4 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50 border border-violet-200 dark:border-violet-800">
                Our mission is simple: <span className="text-[#7C3AED] dark:text-[#8B5CF6] font-semibold">give everyone the tools to understand their digital life, make informed choices, and work with their brain's natural rhythms—not against them.</span>
              </p>
            </div>
          </div>
          <div 
            className="relative"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-orange-500 to-transparent rounded-full lg:hidden" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-medium mb-4">
              <Heart size={12} />
              Our Story
            </div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">Born from Frustration</h2>
            <div className="space-y-4 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>TimeMark began as a personal project. I tried commercial screen time apps, but they were either too expensive, privacy-invasive, or treated me like a child to be controlled.</p>
              <ul className="space-y-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                {[
                  { text: "Free", desc: "so anyone could use it" },
                  { text: "Privacy-first", desc: "with local-only data" },
                  { text: "Insightful", desc: "providing real analytics" },
                  { text: "Respectful", desc: "of user autonomy" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group">
                    <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 size={16} />
                    </span>
                    <span><strong className="text-[#18181B] dark:text-[#FAFAFA]">{item.text}</strong>, {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p>What started as a personal tool has grown into a full-featured productivity suite. TimeMark proves that powerful tools can be built without surveillance.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* OUR VALUES */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        <FloatingOrb className="w-[500px] h-[500px] bg-violet-400/50 -top-64 -right-64" />
        <FloatingOrb className="w-[300px] h-[300px] bg-purple-400/50 -bottom-32 -left-32" />
        
        <div className="relative z-10">
          <SectionHeader 
            title="Our Values" 
            subtitle="The principles that guide every line of code we write."
            badge="What We Stand For"
            center 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={Shield} title="Privacy is Non-Negotiable" index={0}>
              <p>Your usage data reveals intimate details about your life. That's why TimeMark stores everything locally on your device.</p>
              <ul className="text-sm space-y-2 mt-4">
                {["No cloud servers", "No data collection", "No telemetry"].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50">
                    <XCircle size={16} className="text-[#F43F5E] flex-shrink-0"/> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium mt-4 text-[#18181B] dark:text-[#FAFAFA]">Your data never leaves your computer.</p>
            </ValueCard>

            <ValueCard icon={Code2} title="Open Source Builds Trust" index={1}>
              <p>Closed-source productivity apps are black boxes. TimeMark is fully open-source.</p>
              <ul className="text-sm space-y-2 mt-4">
                {["Anyone can audit the code", "Community owned"].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-900/50">
                    <CheckCircle2 size={16} className="text-[#14B8A6] flex-shrink-0"/> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">Open-source isn't just a development model—it's an ethical commitment to transparency.</p>
            </ValueCard>

            <ValueCard icon={Globe2} title="Accessibility for All" index={2}>
              <p>Productivity tools shouldn't be gatekept behind paywalls. TimeMark will always be 100% free.</p>
              <ul className="text-sm space-y-2 mt-4">
                {["No premium tiers", "No feature restrictions"].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50">
                    <XCircle size={16} className="text-[#F43F5E] flex-shrink-0"/> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-medium text-[#18181B] dark:text-[#FAFAFA]">Money will never be a barrier to digital wellness.</p>
            </ValueCard>

            <ValueCard icon={BrainCircuit} title="User Autonomy" index={3}>
              <p>You're an adult. You don't need an app to parent you. TimeMark provides information and reminders—not restrictions.</p>
              <div className="p-4 mt-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 italic text-sm">
                "You've reached your limit. You can continue if needed."
              </div>
              <p className="mt-4">The goal is awareness and intentionality, not control.</p>
            </ValueCard>

            <ValueCard icon={Users2} title="Community-Driven" index={4}>
              <p>TimeMark isn't built by a corporation optimizing for profits. It's built by users, for users.</p>
              <p className="mt-4">The roadmap reflects what users actually need, not what investors want to see.</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <Star className="text-amber-500" size={18} />
                <span className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">Shaped by real feedback</span>
              </div>
            </ValueCard>
          </div>
        </div>
      </SectionWrapper>

      {/* TECH STACK */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <SectionHeader 
          title="Built with Modern Tech" 
          subtitle="Carefully chosen technologies prioritizing performance and reliability."
          badge="Under the Hood"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard 
            icon={Layers} 
            title="Flutter" 
            description="Google's UI toolkit for beautiful, native interfaces with high performance."
            index={0}
          />
          <TechCard 
            icon={Code2} 
            title="Dart" 
            description="Modern, type-safe language optimized for UI development and stability."
            index={1}
          />
          <TechCard 
            icon={Database} 
            title="Hive DB" 
            description="Lightning-fast, local NoSQL database. No servers, complete privacy."
            index={2}
          />
          <TechCard 
            icon={Monitor} 
            title="Windows API" 
            description="Direct integration for accurate, low-impact foreground tracking."
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* ROADMAP */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        <FloatingOrb className="w-[400px] h-[400px] bg-teal-400/30 -top-32 -left-32" />
        <FloatingOrb className="w-[300px] h-[300px] bg-amber-400/30 -bottom-32 -right-32" />
        
        <div className="relative z-10">
          <SectionHeader 
            title="Development Roadmap" 
            subtitle="TimeMark is actively developed. Here's where we're going."
            badge="What's Next"
            center 
          />
          
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <RoadmapColumn 
              title="Recently Completed" 
              statusColor="border-[#14B8A6]"
              icon={CheckCircle2}
              items={["Backup & Restore", "Multi-language Support (10+)", "Enhanced App Details Modal", "Performance Optimizations"]}
              index={0}
            />
            <RoadmapColumn 
              title="In Progress" 
              statusColor="border-[#7C3AED]"
              icon={Zap}
              items={["Distraction Blocking (Focus Mode)", "Do Not Disturb Scheduling", "Weekly Email Reports (Local)", "CSV Export"]}
              index={1}
            />
            <RoadmapColumn 
              title="Planned" 
              statusColor="border-[#F59E0B]"
              icon={Star}
              items={["Weekday vs. Weekend Limits", "Application Tags", "macOS Support (Alpha)", "Goal System"]}
              index={2}
            />
            <RoadmapColumn 
              title="Future Vision" 
              statusColor="border-[#52525B]"
              icon={Sparkles}
              items={["Browser Extension Integration", "Mobile Companion App", "AI-Powered Insights", "Correlation Analysis"]}
              index={3}
            />
          </div>
          
          {/* <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50 border border-violet-200 dark:border-violet-800">
              <p className="text-[#52525B] dark:text-[#A1A1AA] mb-4">Have an idea? We prioritize based on community demand.</p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1">
                Vote on Features <ArrowRight size={16} />
              </a>
            </div>
          </div> */}
        </div>
      </SectionWrapper>

      {/* OUR STORY */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Our Story" 
            subtitle="From personal project to global tool."
            badge="The Journey"
          />
          
          <div className="mt-12">
            <TimelineItem year="Early 2025" title="The Beginning" index={0}>
              Started building TimeMark to solve a personal problem: understanding how I spent my computer time without compromising privacy.
            </TimelineItem>
            <TimelineItem year="Mar 2025" title="Initial Release" index={1}>
              v1.0.0 launched with real-time tracking, daily analytics, productive score, and custom categories. The foundation was set.
            </TimelineItem>
            <TimelineItem year="Apr 2025" title="Stability & Refinement" index={2}>
              Released v1.0.3 with enhanced tracking mechanisms and improved reliability based on early user feedback.
            </TimelineItem>
            <TimelineItem year="May 2025" title="Custom Date Reports" index={3}>
              v1.1.0 introduced flexible date range reporting, giving users more control over their analytics.
            </TimelineItem>
            <TimelineItem year="Dec 2025" title="Going Global" index={4}>
              v1.2.0 brought multi-language support for 11 languages and data import/export, making TimeMark accessible worldwide.
            </TimelineItem>
            <TimelineItem year="Today" title="Continuous Evolution" index={5}>
              Actively maintained and improved. 100% free. Privacy-first. Used by people around the world to reclaim their time.
            </TimelineItem>
          </div>
        </div>
      </SectionWrapper>

      {/* THE TEAM & CONTRIBUTORS */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
          <SectionHeader 
            title="The Team" 
            subtitle="Built by developer for community."
            badge="Our People"
            center 
          />
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div 
              className="p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
              style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
            >
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex-shrink-0">
                  <Code2 className="text-[#7C3AED]" size={20} />
                </div>
                Built By
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center p-4 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQFKSFtNR11urQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727085171286?e=1771459200&v=beta&t=dVwCEGly6oMPpayjIF2VqJFFqVwuB-qDOX2YsiiY_5A" 
                    alt="Harmanpreet Singh"
                    className="w-14 h-14 rounded-full object-cover shadow-lg shadow-violet-500/30 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <Link 
                      href={"https://www.linkedin.com/in/harman-developer/"}
                      className="group"
                    >
                      <div className="font-bold text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors duration-300 flex items-center gap-1">
                        Harmanpreet Singh
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                    <div className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Design, Development & Maintenance</div>
                  </div>
                </div>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-700">
                  A <strong className="text-[#18181B] dark:text-[#FAFAFA]">one-person project</strong> built with passion to help people understand and reclaim their time, with privacy as the foundation.
                </p>
              </div>
            </div>
            
            <div 
              className="p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-zinc-900/50 border border-rose-200 dark:border-rose-900/50"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
            >
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex-shrink-0">
                  <Heart className="text-[#F43F5E]" size={20} />
                </div>
                How You Can Help
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Code2, text: "Developers: Fix bugs & add features" },
                  { icon: Globe2, text: "Translators: Localize the app" },
                  { icon: MessageSquare, text: "Everyone: Report bugs & share ideas" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center p-3 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-700 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#7C3AED]"/>
                    </div>
                    <span className="text-[#52525B] dark:text-[#A1A1AA] text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="/community" className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] transition-colors">
                  Read Contributing Guide <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

      {/* PRIVACY & SUPPORT */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 hover:-translate-y-1"
            style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
              <Shield size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Our Privacy Promise</h2>
            <p className="text-lg font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-6">We don't collect your data. Period.</p>
            <ul className="space-y-3 mb-6">
              {["No accounts required", "No analytics tracking", "No cloud sync"].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50">
                  <XCircle size={18} className="text-[#F43F5E]"/> 
                  <span className="text-[#52525B] dark:text-[#A1A1AA]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              All data is stored locally in your <code className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-xs">Documents/</code> folder. You can verify this by auditing our open-source code.
            </p>
          </div>

          <div 
            className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-1"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
              <Heart size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Support the Project</h2>
            <p className="text-[#52525B] dark:text-[#A1A1AA] mb-6">
              TimeMark is free and always will be. We don't offer premium features because financial status shouldn't dictate digital wellness.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Ways to help:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: "💬", text: "Spread the word" },
                  { emoji: "⭐", text: "Star on GitHub" },
                  { emoji: "📝", text: "Write a review" },
                  { emoji: "💰", text: "Optional Donation" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-sm text-[#52525B] dark:text-[#A1A1AA] hover:border-violet-300 dark:hover:border-violet-700 transition-colors duration-300">
                    <span className="text-lg mr-2">{item.emoji}</span>{item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CONTACT */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="Get in Touch" badge="Connect With Us" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <ContactCard icon={Github} title="GitHub" subtitle="Bug Reports & Code" index={0} />
          <ContactCard icon={MessageSquare} title="Discussions" subtitle="Feature Requests" index={1} />
          <ContactCard link='mailto:general.timemark@harmanita.com' icon={Mail} title="Email" subtitle="General Inquiries" index={2} />
          <ContactCard link='https://x.com/harmanpreet277' icon={Twitter} title="Social" subtitle="Updates & News" index={3} />
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-900 overflow-hidden">
        <FloatingOrb className="w-[500px] h-[500px] bg-violet-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
          >
            <Download size={14} />
            Start Your Journey
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s forwards', opacity: 0 }}
          >
            Ready to Take Control of Your <span className="shimmer-text">Digital Life</span>?
          </h2>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}
          >
            <button onClick={()=>router.push("/download")} className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1">
              <Download size={20} className="group-hover:animate-bounce" /> Download TimeMark
            </button>
            <button onClick={()=>router.push("https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp")} className="group flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] text-[#18181B] dark:text-[#FAFAFA] font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <Github size={20} /> View on GitHub
            </button>
          </div>
          
          <div 
            className="flex flex-wrap justify-center gap-4"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.3s forwards', opacity: 0 }}
          >
            {[
              "100% Free",
              "Privacy First", 
              "Open Source",
              "No Account Required"
            ].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <CheckCircle2 size={14} className="text-[#14B8A6]"/> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="py-16 text-center border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-violet-200 dark:border-violet-800">
            <p className="text-lg italic text-[#52525B] dark:text-[#A1A1AA]">
              "Let's build a better digital future—<span className="text-[#7C3AED] dark:text-[#8B5CF6] font-semibold">together</span>."
            </p>
            <p className="text-sm mt-2 text-[#7C3AED] dark:text-[#8B5CF6] font-medium">— The TimeMark Team</p>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}