'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck, 
  Download, 
  Laptop, 
  Smartphone, 
  CloudOff, 
  Lock, 
  Zap,
  DollarSign,
  Sparkles,
  ArrowRight,
  Heart
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// Floating Orb Component
const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-20 dark:opacity-10 blur-[100px] pointer-events-none ${className}`} />
);

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = end / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
};

// Helper for Table Status Icons
const StatusIcon = ({ status }: { status: 'yes' | 'no' | 'partial' | 'dev' }) => {
  switch (status) {
    case 'yes':
      return (
        <div className="flex items-center justify-center gap-1 text-[#14B8A6] font-medium">
          <div className="p-1 rounded-full bg-[#14B8A6]/10">
            <CheckCircle2 size={16} />
          </div>
        </div>
      );
    case 'no':
      return (
        <div className="flex items-center justify-center gap-1 text-[#F43F5E] font-medium">
          <div className="p-1 rounded-full bg-[#F43F5E]/10">
            <XCircle size={16} />
          </div>
        </div>
      );
    case 'partial':
      return (
        <div className="flex items-center justify-center gap-1 text-[#F59E0B] font-medium">
          <div className="p-1 rounded-full bg-[#F59E0B]/10">
            <AlertTriangle size={16} />
          </div>
        </div>
      );
    case 'dev':
      return (
        <div className="flex items-center justify-center gap-1 text-[#7C3AED] font-medium">
          <div className="p-1 rounded-full bg-[#7C3AED]/10 animate-pulse">
            <RefreshCw size={16} />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ComparisonRow = ({ feature, timemark, rescue, os, cold, focusme, isHeader = false, index = 0 }: { feature: string, timemark: any, rescue: any, os: any, cold: any, focusme: any, isHeader?: boolean, index?: number }) => {
  if (isHeader) {
    return (
      <div className="grid grid-cols-6 gap-4 p-5 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900 font-bold text-sm md:text-base text-[#18181B] dark:text-[#FAFAFA] items-center text-center sticky top-0 z-10 backdrop-blur-sm">
        <div className="text-left pl-4">Feature</div>
        <div className="text-[#7C3AED] dark:text-[#8B5CF6] flex items-center justify-center gap-2">
          <Sparkles size={14} className="animate-pulse" />
          TimeMark
        </div>
        <div>RescueTime</div>
        <div className="hidden md:block">OS Built-in</div>
        <div className="hidden lg:block">Cold Turkey</div>
        <div className="hidden lg:block">FocusMe</div>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-6 gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-gradient-to-r hover:from-[#7C3AED]/5 hover:via-transparent hover:to-transparent dark:hover:from-[#7C3AED]/10 text-sm items-center text-center transition-all duration-300 group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="text-left font-medium text-[#18181B] dark:text-[#FAFAFA] pl-4 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors">{feature}</div>
      <div className="font-bold bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5 dark:from-[#7C3AED]/20 dark:to-[#7C3AED]/10 py-3 rounded-xl text-[#18181B] dark:text-[#FAFAFA] border border-[#7C3AED]/20 shadow-sm group-hover:shadow-[#7C3AED]/20 group-hover:border-[#7C3AED]/40 transition-all">
        {typeof timemark === 'string' ? <span className="text-[#7C3AED] dark:text-[#8B5CF6] font-semibold">{timemark}</span> : <StatusIcon status={timemark} />}
      </div>
      <div className="text-[#52525B] dark:text-[#A1A1AA]">{typeof rescue === 'string' ? rescue : <StatusIcon status={rescue} />}</div>
      <div className="hidden md:block text-[#52525B] dark:text-[#A1A1AA]">{typeof os === 'string' ? os : <StatusIcon status={os} />}</div>
      <div className="hidden lg:block text-[#52525B] dark:text-[#A1A1AA]">{typeof cold === 'string' ? cold : <StatusIcon status={cold} />}</div>
      <div className="hidden lg:block text-[#52525B] dark:text-[#A1A1AA]">{typeof focusme === 'string' ? focusme : <StatusIcon status={focusme} />}</div>
    </div>
  );
};

const CompetitorCard = ({ title, advantages, disadvantages, summary, icon: Icon, index = 0 }: { title: string, advantages: string[], disadvantages: string[], summary: React.ReactNode, icon: any, index?: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Glow effect */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-[#7C3AED]/20 rounded-full blur-3xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl text-[#52525B] dark:text-[#A1A1AA] group-hover:from-[#7C3AED]/20 group-hover:to-[#7C3AED]/10 group-hover:text-[#7C3AED] transition-all duration-300 shadow-inner">
            <Icon size={28} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA]">vs. {title}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-6 rounded-2xl border border-[#14B8A6]/10">
            <h4 className="font-bold text-[#14B8A6] mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
              <CheckCircle2 size={14} />
              TimeMark Advantages
            </h4>
            <ul className="space-y-3">
              {advantages.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#52525B] dark:text-[#A1A1AA] group/item hover:text-[#18181B] dark:hover:text-[#FAFAFA] transition-colors">
                  <div className="mt-0.5 p-1 rounded-lg bg-[#14B8A6]/10 group-hover/item:bg-[#14B8A6]/20 transition-colors">
                    <CheckCircle2 size={12} className="text-[#14B8A6]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-zinc-100/50 to-transparent dark:from-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <h4 className="font-bold text-[#52525B] dark:text-[#A1A1AA] mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-zinc-400 flex items-center justify-center text-[8px]">vs</span>
              {title} Advantages
            </h4>
            <ul className="space-y-3">
              {disadvantages.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  <div className="w-5 h-5 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center shrink-0 text-[9px] text-zinc-500 mt-0.5">vs</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-950 dark:to-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-sm leading-relaxed text-[#52525B] dark:text-[#A1A1AA] shadow-inner">
          {summary}
        </div>
      </div>
    </div>
  );
};

const FeatureHighlight = ({ icon: Icon, title, description, index = 0 }: { icon: any, title: string, description: string, index?: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative flex gap-5 p-6 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-[#7C3AED]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -top-10 -left-10 w-20 h-20 bg-[#7C3AED]/30 rounded-full blur-2xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`} />
      
      <div className="shrink-0 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center text-white shadow-lg shadow-[#7C3AED]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon size={26} />
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors">{title}</h4>
        <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function ComparisonPage() {
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

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <Navbar/>
      
      {/* HERO SECTION */}
      <div className="relative pt-32 pb-32 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
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
            <ShieldCheck size={14} className="animate-pulse" />
            Honest Comparison
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s forwards', opacity: 0 }}
          >
            How <span className="shimmer-text">TimeMark</span> Compares
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}
          >
            See how TimeMark stacks up against commercial screen time apps and built-in OS solutions.
          </p>
          
          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.3s forwards', opacity: 0 }}
          >
            {[
              { value: 100, suffix: "%", label: "Free Forever" },
              { value: 100, suffix: "%", label: "Local Privacy" },
              { value: 0, prefix: "$", suffix: "", label: "Monthly Cost" },
              { value: 100, suffix: "%", label: "Open Source" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/10">
                <div className="text-3xl font-bold text-[#7C3AED] dark:text-[#8B5CF6]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#14B8A6]/10 border border-[#7C3AED]/20 mb-4">
              <Sparkles size={14} className="text-[#7C3AED]" />
              <span className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">Feature Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
              Side-by-Side <span className="shimmer-text">Comparison</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
            <div className="min-w-[900px]">
              <ComparisonRow feature="" timemark="" rescue="" os="" cold="" focusme="" isHeader />
              
              <ComparisonRow feature="Price" timemark="Free" rescue="$12/mo" os="Free" cold="$39" focusme="$60" index={1} />
              <ComparisonRow feature="Privacy" timemark="100% Local" rescue="Cloud" os="Mixed" cold="Local" focusme="Local" index={2} />
              <ComparisonRow feature="Open Source" timemark="yes" rescue="no" os="no" cold="no" focusme="no" index={3} />
              <ComparisonRow feature="Auto Tracking" timemark="yes" rescue="yes" os="partial" cold="yes" focusme="yes" index={4} />
              <ComparisonRow feature="Productivity Score" timemark="yes" rescue="yes" os="no" cold="no" focusme="partial" index={5} />
              <ComparisonRow feature="Focus/Pomodoro" timemark="yes" rescue="partial" os="no" cold="yes" focusme="yes" index={6} />
              <ComparisonRow feature="Detailed Analytics" timemark="yes" rescue="yes" os="partial" cold="partial" focusme="partial" index={7} />
              <ComparisonRow feature="Distraction Blocking" timemark="dev" rescue="yes" os="partial" cold="yes" focusme="yes" index={8} />
              <ComparisonRow feature="Historical Data" timemark="Unlimited" rescue="Limited (Free)" os="30 Days" cold="Unlimited" focusme="Unlimited" index={9} />
              <ComparisonRow feature="No Account Req." timemark="yes" rescue="no" os="partial" cold="yes" focusme="yes" index={10} />
              <ComparisonRow feature="Multi-Platform" timemark="Windows" rescue="All" os="Built-in" cold="Win/Mac" focusme="Win/Mac" index={11} />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-[#52525B] dark:text-[#A1A1AA]">
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <div className="p-1 rounded-full bg-[#14B8A6]/10"><CheckCircle2 size={14} className="text-[#14B8A6]"/></div>
              Full Support
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <div className="p-1 rounded-full bg-[#F59E0B]/10"><AlertTriangle size={14} className="text-[#F59E0B]"/></div>
              Partial/Limited
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <div className="p-1 rounded-full bg-[#F43F5E]/10"><XCircle size={14} className="text-[#F43F5E]"/></div>
              Not Available
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <div className="p-1 rounded-full bg-[#7C3AED]/10"><RefreshCw size={14} className="text-[#7C3AED]"/></div>
              In Development
            </span>
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISONS */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-[#14B8A6]/10 rounded-full blur-[80px] z-0" />
        
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#14B8A6]/10 border border-[#7C3AED]/20 mb-4">
              <Sparkles size={14} className="text-[#7C3AED]" />
              <span className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">Detailed Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
              In-Depth <span className="shimmer-text">Comparisons</span>
            </h2>
          </div>
          
          <CompetitorCard
            title="RescueTime"
            icon={CloudOff}
            advantages={[
              "Completely Free (vs $78/year)",
              "Privacy-First: Local storage only",
              "No Account Required",
              "Built-in Pomodoro Timer",
              "Unlimited history for free users"
            ]}
            disadvantages={[
              "No mobile app (yet)",
              "No automatic AI classification",
              "Windows only (currently)"
            ]}
            summary={
              <p>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">The Verdict:</strong> Choose TimeMark if privacy and cost are your main concerns, or if you want Pomodoro integration without a subscription. Choose RescueTime if you need mobile tracking or cross-device syncing and are comfortable with cloud data storage.
              </p>
            }
            index={0}
          />

          <CompetitorCard
            title="Built-in Screen Time"
            icon={Laptop}
            advantages={[
              "Far more detailed analytics (Trends, Insights)",
              "Productivity Scoring (Productive vs. Distracting)",
              "Custom Categories",
              "Focus Mode Integration",
              "Unlimited History (OS usually limits to 7-30 days)"
            ]}
            disadvantages={[
              "Requires installation (Screen Time is built-in)",
              "No parental controls",
              "No cross-device sync (like iCloud)"
            ]}
            summary={
              <p>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">The Verdict:</strong> OS tools are great for basic awareness ("I used my laptop for 4 hours"). TimeMark is for <em className="text-[#7C3AED]">optimization</em> ("I was 75% productive and my peak hours were 9-11 AM").
              </p>
            }
            index={1}
          />

          <CompetitorCard
            title="Cold Turkey / FocusMe"
            icon={Lock}
            advantages={[
              "Completely Free (vs $39-60)",
              "Respectful Approach: Awareness over strict locks",
              "Better Analytics & Insights",
              "Open Source Transparency",
              "Focus Mode History"
            ]}
            disadvantages={[
              "Hardcore blocking (cannot create un-bypassable locks)",
              "Website-level blocking (browser extension coming soon)",
              "Scheduled blocks"
            ]}
            summary={
              <p>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">The Verdict:</strong> Cold Turkey is a blocking tool; TimeMark is an awareness tool. If you have zero self-control, use a blocker. If you want to understand your habits and build self-regulation, use TimeMark.
              </p>
            }
            index={2}
          />
        </div>
      </section>

      {/* WHY CHOOSE TIMEMARK */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950 overflow-hidden">
        <FloatingOrb className="w-[400px] h-[400px] bg-violet-400 top-1/2 -right-32 animate-pulse" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#14B8A6]/10 border border-[#7C3AED]/20 mb-4">
              <Heart size={14} className="text-[#7C3AED] animate-pulse" />
              <span className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">Why TimeMark</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Why Choose <span className="shimmer-text">TimeMark</span>?</h2>
            <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto">Six reasons we believe this is the best tool for digital autonomy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureHighlight 
              icon={DollarSign} 
              title="It's Free. Forever." 
              description="No trials. No premium tiers. No subscriptions. All features available to everyone, always."
              index={0}
            />
            <FeatureHighlight 
              icon={ShieldCheck} 
              title="Privacy Respected" 
              description="No cloud servers analyzing your habits. No data sold to advertisers. Just local tracking."
              index={1}
            />
            <FeatureHighlight 
              icon={RefreshCw} 
              title="Open Source" 
              description="Verify our privacy claims yourself. Contribute features. Fork the project if you need customization."
              index={2}
            />
            <FeatureHighlight 
              icon={Zap} 
              title="Comprehensive" 
              description="Not just a timer or a blocker. A complete ecosystem with tracking, analytics, and focus tools."
              index={3}
            />
            <FeatureHighlight 
              icon={Smartphone} 
              title="Flexible" 
              description="Set the rules that work for you. Adjust limits. Disable notifications. Make it yours."
              index={4}
            />
            <FeatureHighlight 
              icon={CheckCircle2} 
              title="Respectful" 
              description="We treat you like an autonomous adult, not a child who needs surveillance."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Final <span className="shimmer-text">Summary</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 rounded-3xl border border-[#14B8A6]/20 hover:border-[#14B8A6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#14B8A6]/10">
              <h3 className="font-bold text-[#14B8A6] mb-6 flex items-center gap-3 text-xl">
                <div className="p-2 rounded-xl bg-[#14B8A6]/20">
                  <CheckCircle2 size={24} />
                </div>
                Choose TimeMark if...
              </h3>
              <ul className="space-y-4 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {[
                  "You want free, feature-rich tracking",
                  "You demand 100% local privacy",
                  "You want productivity insights, not just usage stats",
                  "You want an integrated Pomodoro timer",
                  "You value open-source transparency"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#14B8A6] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-8 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl">
              <h3 className="font-bold text-[#52525B] dark:text-[#A1A1AA] mb-6 flex items-center gap-3 text-xl">
                <div className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800">
                  <XCircle size={24} />
                </div>
                Choose Others if...
              </h3>
              <ul className="space-y-4 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {[
                  "You need mobile device tracking (RescueTime)",
                  "You need strict, unblockable locks (Cold Turkey)",
                  "You rely on AI auto-categorization",
                  "You need seamless cross-device cloud sync"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center p-8 rounded-2xl bg-gradient-to-br from-[#7C3AED]/5 to-[#14B8A6]/5 border border-[#7C3AED]/10 shadow-inner">
            <p className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">
              <strong className="text-[#7C3AED]">Pro Tip:</strong> TimeMark plays well with others. Use it for Windows desktop tracking and combine it with RescueTime for mobile or Cold Turkey for blocking.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/10 dark:bg-[#7C3AED]/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#14B8A6]/10 dark:bg-[#14B8A6]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-white/10 backdrop-blur-sm mb-8">
            <Download size={16} className="text-[#7C3AED]" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Free Download</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zinc-900 via-[#7C3AED] to-zinc-900 dark:from-white dark:via-[#8B5CF6] dark:to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Ready to Try TimeMark?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Download for free from Microsoft Store and see the difference for yourself.
          </p>
          <button className="group relative flex items-center justify-center gap-3 mx-auto bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold py-5 px-10 rounded-2xl shadow-2xl shadow-violet-500/30 dark:shadow-violet-900/40 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <Download size={22} />
              Get TimeMark Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 animate-shimmer-bg" />
          </button>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}