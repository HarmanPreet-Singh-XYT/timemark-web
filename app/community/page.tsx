'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  PenTool, 
  BookOpen, 
  Globe, 
  Bug, 
  MessageCircle, 
  Megaphone, 
  Github, 
  Heart, 
  Terminal, 
  GitBranch, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users,
  Star,
  ExternalLink,
  Book,
  Sparkles
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// Floating Orb Component
const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-20 dark:opacity-10 blur-[100px] pointer-events-none ${className}`} />
);

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
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

  return <span ref={countRef}>{count}{suffix}</span>;
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#14B8A6]/10 border border-[#7C3AED]/20 mb-4">
      <Sparkles size={14} className="text-[#7C3AED]" />
      <span className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">Section</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#18181B] via-[#7C3AED] to-[#18181B] dark:from-[#FAFAFA] dark:via-[#8B5CF6] dark:to-[#FAFAFA] bg-clip-text text-transparent mb-6 bg-[length:200%_auto] animate-gradient">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const BenefitCard = ({ icon: Icon, title, items, index }: { icon: any, title: string, items: string[], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#7C3AED]/60 transition-all duration-500 h-full overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-[#7C3AED]/20 rounded-full blur-3xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`} />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#7C3AED]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon size={26} />
        </div>
        <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-5 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#52525B] dark:text-[#A1A1AA] group-hover:text-[#3F3F46] dark:group-hover:text-[#D4D4D8] transition-colors">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#14B8A6] shrink-0 group-hover:scale-150 transition-transform" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContributionSection = ({ 
  icon: Icon, 
  title, 
  headline, 
  whatToDo, 
  gettingStarted, 
  extraContent 
}: { 
  icon: any, 
  title: string, 
  headline: string, 
  whatToDo: string[], 
  gettingStarted: React.ReactNode, 
  extraContent?: React.ReactNode 
}) => (
  <div className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden mb-12 scroll-mt-24 hover:border-[#7C3AED]/40 transition-all duration-500 shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:shadow-[#7C3AED]/10" id={title.toLowerCase().replace(/\s/g, '-')}>
    <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative p-8 md:p-10 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950/80 dark:via-zinc-900/50 dark:to-zinc-950/80">
      <div className="flex items-center gap-5 mb-3">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h3>
      </div>
      <p className="text-lg text-[#7C3AED] dark:text-[#8B5CF6] font-medium ml-[72px]">{headline}</p>
    </div>
    
    <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-12">
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181B] dark:text-[#FAFAFA] mb-6 border-l-4 border-gradient-to-b from-[#14B8A6] to-[#0D9488] pl-4 flex items-center gap-2" style={{ borderColor: '#14B8A6' }}>
          <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
          What You Can Do
        </h4>
        <ul className="space-y-4">
          {whatToDo.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-[#52525B] dark:text-[#A1A1AA] group/item hover:text-[#18181B] dark:hover:text-[#FAFAFA] transition-colors">
              <div className="mt-0.5 p-1 rounded-lg bg-[#14B8A6]/10 group-hover/item:bg-[#14B8A6]/20 transition-colors">
                <CheckCircle2 size={16} className="text-[#14B8A6]" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {extraContent}
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181B] dark:text-[#FAFAFA] mb-6 border-l-4 pl-4 flex items-center gap-2" style={{ borderColor: '#7C3AED' }}>
          <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
          Getting Started
        </h4>
        <div className="text-[#52525B] dark:text-[#A1A1AA] space-y-4">
          {gettingStarted}
        </div>
      </div>
    </div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-300 p-4 rounded-xl text-xs font-mono overflow-x-auto my-3 border border-zinc-800/80 shadow-inner">
    <div className="absolute top-3 left-3 flex gap-1.5">
      <span className="w-3 h-3 rounded-full bg-red-500/80" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <span className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
    <code className="block mt-4">{children}</code>
  </pre>
);

export default function CommunityPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <Navbar/>
      
      {/* HERO SECTION - Matching About Page Style */}
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
            <Users size={14} className="animate-pulse" />
            Open Source Community
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-8"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s forwards', opacity: 0 }}
          >
            Join the <span className="shimmer-text">TimeMark</span> Community
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}
          >
            TimeMark is built by people like you. Whether you code, design, write, or simply have ideas, there's a way to contribute.
          </p>
          
          {/* Stats */}
          {/* <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.3s forwards', opacity: 0 }}
          >
            {[
              { value: 50, suffix: "+", label: "Contributors" },
              { value: 200, suffix: "+", label: "Pull Requests" },
              { value: 15, suffix: "+", label: "Countries" },
              { value: 100, suffix: "%", label: "Open Source" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-colors">
                <div className="text-3xl font-bold text-[#7C3AED] dark:text-[#8B5CF6]">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-4"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.4s forwards', opacity: 0 }}
          >
            <a href="#1.-code-contributions" className="group relative px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-2xl font-bold shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Contributing
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://github.com" target="_blank" className="group px-8 py-4 bg-white dark:bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-200 dark:border-zinc-800 text-[#18181B] dark:text-[#FAFAFA] rounded-2xl font-bold hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all duration-300 flex items-center gap-3 shadow-lg">
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

      {/* WHY CONTRIBUTE */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What's in It for You?" subtitle="Contributing to open-source projects like TimeMark offers benefits beyond altruism." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={Terminal} 
              title="1. Build Your Portfolio" 
              items={[
                "Real-world experience with Flutter & Dart",
                "Contributions visible on your GitHub profile",
                "Reference-worthy experience for jobs",
                "Collaborate with developers worldwide"
              ]}
              index={0}
            />
            <BenefitCard 
              icon={BookOpen} 
              title="2. Learn New Skills" 
              items={[
                "Work with production code",
                "Learn best practices from code reviews",
                "Understand software architecture",
                "Gain experience with Git version control"
              ]}
              index={1}
            />
            <BenefitCard 
              icon={GitBranch} 
              title="3. Shape a Tool You Use" 
              items={[
                "Fix the bugs that annoy you",
                "Add features you wish existed",
                "Influence the product roadmap",
                "See your ideas come to life"
              ]}
              index={2}
            />
            <BenefitCard 
              icon={Heart} 
              title="4. Give Back" 
              items={[
                "Help others improve their productivity",
                "Contribute to the digital wellness movement",
                "Support privacy-respecting software",
                "Be part of something meaningful"
              ]}
              index={3}
            />
            <BenefitCard 
              icon={Users} 
              title="5. Join a Community" 
              items={[
                "Connect with like-minded developers",
                "Receive support and mentorship",
                "Make friends with shared interests",
                "Collaborate on a common goal"
              ]}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* WAYS TO CONTRIBUTE */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-[#14B8A6]/10 rounded-full blur-[80px] z-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Ways to Contribute" subtitle="Pick the path that matches your skills and interests." />

          {/* 1. Code */}
          <ContributionSection
            icon={Code2}
            title="1. Code Contributions"
            headline="Develop Features, Fix Bugs, Improve Performance"
            whatToDo={[
              "Implement features from the roadmap",
              "Fix open bugs and issues",
              "Optimize performance and reduce resource usage",
              "Refactor code for better maintainability",
              "Add unit and integration tests"
            ]}
            gettingStarted={
              <div className="space-y-4 text-sm">
                <p>1. <strong className="text-[#18181B] dark:text-[#FAFAFA]">Fork & Clone</strong> the repository.</p>
                <div>
                  <p>2. <strong className="text-[#18181B] dark:text-[#FAFAFA]">Set Up Environment:</strong> Install Flutter/Dart.</p>
                  <CodeBlock>
                    flutter pub get{'\n'}
                    flutter run
                  </CodeBlock>
                </div>
                <p>3. <strong className="text-[#18181B] dark:text-[#FAFAFA]">Create Branch:</strong> <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg text-[#7C3AED]">git checkout -b feature/my-feature</code></p>
                <p>4. <strong className="text-[#18181B] dark:text-[#FAFAFA]">Code & Test:</strong> Make changes and write tests.</p>
                <p>5. <strong className="text-[#18181B] dark:text-[#FAFAFA]">Pull Request:</strong> Submit with a clear description.</p>
              </div>
            }
            extraContent={
              <div className="mt-8 bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-950 dark:to-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
                <h5 className="font-bold text-sm uppercase mb-3 bg-gradient-to-r from-[#7C3AED] to-[#14B8A6] bg-clip-text text-transparent flex items-center gap-2">
                  <Sparkles size={14} className="text-[#7C3AED]" />
                  Need Ideas?
                </h5>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">• Check issues labeled <span className="font-mono bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-2 py-0.5 rounded-lg text-xs">good first issue</span></li>
                  <li className="flex items-center gap-2">• Look for <span className="font-mono bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 px-2 py-0.5 rounded-lg text-xs">help wanted</span></li>
                </ul>
              </div>
            }
          />

          {/* 2. Design */}
          <ContributionSection
            icon={PenTool}
            title="2. Design Contributions"
            headline="Improve UI/UX, Create Visual Assets"
            whatToDo={[
              "Design new feature interfaces",
              "Improve existing screens for better usability",
              "Create icons and promotional materials",
              "Develop user flows and wireframes",
              "Conduct usability testing"
            ]}
            gettingStarted={
              <ol className="list-decimal pl-5 space-y-3 text-sm">
                <li><strong className="text-[#18181B] dark:text-[#FAFAFA]">Review Current Design</strong> by using the app extensively.</li>
                <li><strong className="text-[#18181B] dark:text-[#FAFAFA]">Identify Pain Points</strong> in the current UI/UX.</li>
                <li><strong className="text-[#18181B] dark:text-[#FAFAFA]">Create Mockups</strong> using Figma, Sketch, or Adobe XD.</li>
                <li><strong className="text-[#18181B] dark:text-[#FAFAFA]">Share Your Designs</strong> by opening a GitHub discussion.</li>
                <li>Collaborate with developers to implement.</li>
              </ol>
            }
            extraContent={
              <div className="mt-6 text-sm p-4 bg-[#7C3AED]/5 rounded-xl border border-[#7C3AED]/20">
                <strong className="text-[#7C3AED]">Tools We Use:</strong> <span className="text-[#52525B] dark:text-[#A1A1AA]">Figma, Material Design widgets, Lucide Icons.</span>
              </div>
            }
          />

          {/* 3. Documentation */}
          <ContributionSection
            icon={Book}
            title="3. Documentation"
            headline="Write Guides, Improve Docs, Help Users Learn"
            whatToDo={[
              "Write tutorials and how-to guides",
              "Improve existing documentation",
              "Create video walkthroughs",
              "Write blog posts about using TimeMark",
              "Document undocumented features"
            ]}
            gettingStarted={
              <ol className="list-decimal pl-5 space-y-3 text-sm">
                <li>Identify documentation gaps by reading current docs.</li>
                <li>Write clear content in Markdown.</li>
                <li>Include screenshots for visual learners.</li>
                <li>Submit via Pull Request to the <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-lg text-[#7C3AED]">docs</code> folder.</li>
              </ol>
            }
          />

          {/* 4. Translation */}
          <ContributionSection
            icon={Globe}
            title="4. Translation"
            headline="Make TimeMark Accessible Worldwide"
            whatToDo={[
              "Translate the app into new languages",
              "Improve existing AI-generated translations",
              "Localize date/time formats",
              "Adapt content for cultural context"
            ]}
            gettingStarted={
              <div className="space-y-3 text-sm">
                <p>1. Check supported languages in the repo.</p>
                <p>2. Request new language via Issue if needed.</p>
                <p>3. Translate the ARB file: <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-lg text-[#7C3AED]">app_en.arb</code> → <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-lg text-[#14B8A6]">app_es.arb</code></p>
                <p>4. Test your translation in the app.</p>
                <p>5. Submit Pull Request.</p>
              </div>
            }
          />

          {/* 5. Testing */}
          <ContributionSection
            icon={Bug}
            title="5. Testing & Bug Reports"
            headline="Find Bugs, Test Features, Ensure Quality"
            whatToDo={[
              "Use TimeMark daily and report bugs",
              "Test new features in beta releases",
              "Reproduce issues others have reported",
              "Test on different Windows versions",
              "Stress-test with large datasets"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-3 font-semibold text-[#18181B] dark:text-[#FAFAFA]">How to Report Bugs:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Check existing issues to avoid duplicates.</li>
                  <li>Create New Issue on GitHub with:</li>
                  <li>Title, Steps to reproduce, Expected vs Actual, Screenshots.</li>
                  <li>Label appropriately (bug, critical).</li>
                </ul>
              </div>
            }
          />

          {/* 6. Community Support */}
          <ContributionSection
            icon={MessageCircle}
            title="6. Community Support"
            headline="Help Others, Answer Questions, Build Community"
            whatToDo={[
              "Answer questions in GitHub Discussions",
              "Help troubleshoot issues in forums",
              "Create FAQ entries",
              "Welcome new contributors",
              "Share tips and best practices"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-4 font-semibold text-[#18181B] dark:text-[#FAFAFA]">Where to Help:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] transition-colors cursor-pointer">GitHub Discussions</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] transition-colors cursor-pointer">Reddit</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] transition-colors cursor-pointer">Discord</span>
                </div>
                <p className="mt-6 italic text-[#7C3AED] dark:text-[#8B5CF6] bg-[#7C3AED]/5 px-4 py-3 rounded-xl">Be patient and kind—everyone starts as a beginner.</p>
              </div>
            }
          />

          {/* 7. Spread the Word */}
          <ContributionSection
            icon={Megaphone}
            title="7. Spread the Word"
            headline="Share TimeMark, Help Others Discover It"
            whatToDo={[
              "Share TimeMark on social media",
              "Write blog posts about your experience",
              "Create video reviews or tutorials",
              "Rate and review on the Microsoft Store"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-3 font-semibold text-[#18181B] dark:text-[#FAFAFA]">Content Ideas:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    "How I Doubled My Productive Time"
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    "Privacy-Friendly Screen Time Tracking Review"
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                    "5 Focus Mode Tips"
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F59E0B]/10 to-[#7C3AED]/10 blur-[150px] rounded-full z-0" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/5 text-[#F59E0B] mb-8 shadow-lg shadow-[#F59E0B]/20 animate-pulse-glow">
            <Star size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#18181B] via-[#F59E0B] to-[#18181B] dark:from-[#FAFAFA] dark:via-[#F59E0B] dark:to-[#FAFAFA] bg-clip-text text-transparent mb-8 bg-[length:200%_auto] animate-gradient">We Appreciate Every Contribution</h2>
          <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
            All contributors are recognized in our <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg text-[#7C3AED]">CONTRIBUTORS.md</code> file on GitHub. Your contributions—no matter how small—make TimeMark better for everyone.
          </p>
          
          <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8 flex items-center justify-center gap-3">
              <Sparkles size={20} className="text-[#F59E0B]" />
              Hall of Fame
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 mb-4 ring-4 ring-white dark:ring-zinc-900 shadow-lg group-hover:scale-110 transition-transform" />
                  <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2" />
                  <div className="h-3 w-16 bg-zinc-100 dark:bg-zinc-800/50 rounded-full" />
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent">
              Want to be featured? Start contributing today!
            </p>
          </div>
        </div>
      </section>

      {/* CODE OF CONDUCT */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#18181B] to-zinc-700 dark:from-[#FAFAFA] dark:to-zinc-300 shadow-lg">
              <ShieldCheck size={32} className="text-white dark:text-zinc-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA]">Code of Conduct</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none text-[#52525B] dark:text-[#A1A1AA]">
            <p className="mb-8 text-lg leading-relaxed">
              TimeMark is committed to providing a welcoming and inclusive environment for everyone, regardless of experience level, gender identity, sexual orientation, disability, physical appearance, race, age, religion, or nationality.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/10 p-8 rounded-2xl border border-green-200/80 dark:border-green-900/30 shadow-lg shadow-green-100/50 dark:shadow-green-900/20">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-5 flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  Expected Behavior
                </h4>
                <ul className="space-y-3 text-sm text-green-800 dark:text-green-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Be respectful and considerate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Use welcoming language
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Accept constructive criticism
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Show empathy toward others
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50/50 dark:from-red-900/20 dark:to-rose-900/10 p-8 rounded-2xl border border-red-200/80 dark:border-red-900/30 shadow-lg shadow-red-100/50 dark:shadow-red-900/20">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-5 flex items-center gap-2">
                  <ShieldCheck size={20} />
                  Unacceptable Behavior
                </h4>
                <ul className="space-y-3 text-sm text-red-800 dark:text-red-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Harassment or discrimination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Trolling or insulting comments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Personal or political attacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Unwelcome sexual attention
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic bg-zinc-100 dark:bg-zinc-800/50 px-6 py-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
              Violations can be reported to support@timemark.app. We take all reports seriously.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING STARTED GUIDE & RESOURCES */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#09090B] dark:to-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Quick Start Guide */}
          <div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white">
                <ArrowRight size={24} />
              </div>
              Your First Contribution
            </h2>
            <div className="space-y-1">
              {[
                { step: 1, title: "Create GitHub Account", desc: "It's free and essential for open source.", active: true },
                { step: 2, title: "Find an Issue", desc: "Look for good first issue or documentation labels." },
                { step: 3, title: "Make Changes", desc: "Fork repo, create branch, edit code/docs." },
                { step: 4, title: "Pull Request", desc: "Submit your work and celebrate when merged!" },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-10 pb-8 last:pb-0">
                  <div className={`absolute left-0 top-0 bottom-0 w-px ${idx === 3 ? '' : 'bg-gradient-to-b from-[#7C3AED] to-zinc-200 dark:to-zinc-800'}`} />
                  <div className={`absolute -left-[10px] top-0 w-5 h-5 rounded-full ring-4 ring-[#FAFAFA] dark:ring-[#09090B] ${item.active ? 'bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] shadow-lg shadow-[#7C3AED]/30' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
                  <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Step {item.step}: {item.title}</h4>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] text-white">
                <Book size={24} />
              </div>
              Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Contributing Guide", external: false },
                { title: "Code Style Guide", external: false },
                { title: "Flutter Docs", external: true },
                { title: "Dart Language Tour", external: true },
              ].map((item, idx) => (
                <a key={idx} href="#" className="group p-5 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] hover:shadow-lg hover:shadow-[#7C3AED]/10 transition-all duration-300 flex items-center justify-between">
                  <span className="text-[#18181B] dark:text-[#FAFAFA] font-medium group-hover:text-[#7C3AED] transition-colors">{item.title}</span>
                  {item.external ? (
                    <ExternalLink size={18} className="text-zinc-400 group-hover:text-[#7C3AED] group-hover:scale-110 transition-all" />
                  ) : (
                    <ArrowRight size={18} className="text-zinc-400 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/20 dark:bg-[#7C3AED]/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#14B8A6]/15 dark:bg-[#14B8A6]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-white/10 backdrop-blur-sm mb-8">
            <Heart size={16} className="text-[#7C3AED]" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Every contribution matters</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zinc-900 via-[#8B5CF6] to-zinc-900 dark:from-white dark:via-[#8B5CF6] dark:to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Ready to Make an Impact?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you contribute code, fix a typo, or report a bug—every contribution matters. Start small, learn as you go, and become part of the TimeMark community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#" className="group relative px-10 py-5 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] rounded-2xl font-bold text-white transition-all duration-300 shadow-2xl shadow-violet-500/20 dark:shadow-violet-900/40 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Browse Open Issues
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
            <a href="#" className="group px-10 py-5 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 rounded-2xl font-bold text-zinc-900 dark:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              Join the Discussion
            </a>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}