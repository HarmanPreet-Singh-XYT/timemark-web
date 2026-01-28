'use client';

import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  Github, 
  Mail, 
  Lock, 
  Clock, 
  Activity, 
  Terminal,
  Bug,
  AlertOctagon,
  Info,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

// --- Helper Components ---

const SectionHeader = ({ title, subtitle, center = false }: { title: string, subtitle?: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 animate-fade-in">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
        {subtitle}
      </p>
    )}
  </div>
);

const SeverityCard = ({ 
  level, 
  color, 
  title, 
  description, 
  examples,
  index 
}: { 
  level: string, 
  color: string, 
  title: string, 
  description: string, 
  examples: string[],
  index: number
}) => (
  <div 
    className={`p-6 bg-white dark:bg-zinc-900 rounded-2xl border-l-4 border-y border-r border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-default animate-slide-up`}
    style={{ 
      borderLeftColor: color,
      animationDelay: `${index * 100}ms`
    }}
  >
    <div className="flex items-center gap-2 mb-3">
      <span 
        className="px-2 py-1 rounded text-xs font-bold uppercase text-white shadow-sm group-hover:shadow-md transition-shadow duration-300" 
        style={{ backgroundColor: color }}
      >
        {level}
      </span>
      <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h3>
    </div>
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4 h-10">
      {description}
    </p>
    <div>
      <span className="text-xs font-bold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-wide">Examples:</span>
      <ul className="mt-2 space-y-1">
        {examples.map((ex, idx) => (
          <li key={idx} className="text-xs text-[#52525B] dark:text-[#A1A1AA] flex items-start gap-1 group-hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: `${idx * 50}ms` }}>
            <span className="mt-1 w-1 h-1 rounded-full shrink-0 group-hover:scale-150 transition-transform duration-200" style={{ backgroundColor: color }}></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TemplateBlock = () => {
  const [copied, setCopied] = useState(false);
  
  const template = `### Bug Description
[Clear, one-sentence description of the problem]

### Severity
- [ ] 🔴 Critical (app unusable, data loss, security)
- [ ] 🟠 High (major feature broken)
- [ ] 🟡 Medium (feature partially broken)
- [ ] 🟢 Low (minor issue, cosmetic)

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [Bug occurs]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### System Information
- **Windows Version**: [e.g., Windows 11 Pro 22H2]
- **TimeMark Version**: [Settings → Version]
- **RAM**: [e.g., 16 GB]

### Screenshots
[Drag and drop screenshots here]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#18181B] shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2">bug_report_template.md</span>
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-700/50"
        >
          {copied ? <Check size={14} className="text-green-500 animate-bounce-once" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Template"}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {template}
      </pre>
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#F43F5E]/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default function ReportBugPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(244, 63, 94, 0.5); }
        }
        
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.3s ease-out;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 3px;
        }
      `}</style>

      <Navbar/>
      
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F43F5E]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <FloatingParticles />
        
        <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F43F5E]/10 text-[#F43F5E] text-sm font-medium mb-6 border border-[#F43F5E]/20 backdrop-blur-sm hover:bg-[#F43F5E]/20 transition-colors cursor-default">
            <Bug size={16} className="animate-pulse" /> Help Us Improve
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Report a <span className="text-[#F43F5E] relative">
              Bug
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#F43F5E" strokeWidth="2" fill="none" className="animate-pulse" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8">
            Found something that's not working right? Help us fix it! Your bug reports make TimeMark better for everyone.
          </p>

          {/* Quick Action Box */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-6 text-left flex items-start gap-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl text-[#F43F5E] animate-pulse">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-200 text-lg flex items-center gap-2">
                Found a critical issue?
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </h3>
              <div className="space-y-2 mt-2 text-sm text-red-800 dark:text-red-300">
                <p>🚨 <strong>Security Vulnerabilities:</strong> Email <a href="security.timemark@harmanita.com" className="underline font-bold hover:text-red-600 transition-colors">security.timemark@harmanita.com</a></p>
                <p>🔥 <strong>App Crashes:</strong> Use the template below immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKLIST */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader title="Quick Checklist Before Reporting" subtitle="Checking these items helps us fix the issue faster and avoids duplicate reports." />
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Is it actually a bug? (Not a feature request)",
              "Can you reproduce it consistently?",
              "Is your TimeMark version up to date?",
              "Have you tried restarting the app?",
              "Have you checked Existing Issues?",
              "Do you have error messages or screenshots?"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#14B8A6] hover:shadow-lg hover:shadow-[#14B8A6]/10 transition-all duration-300 group cursor-default animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CheckCircle2 className="text-[#14B8A6] shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                <span className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA] group-hover:translate-x-1 transition-transform duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEVERITY GUIDE */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-50" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-50" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Understanding Bug Severity" subtitle="Help us prioritize by indicating the impact of the issue." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SeverityCard 
              level="Critical"
              color="#F43F5E"
              title="Report Immediately"
              description="App unusable, data loss, or security risks."
              examples={["App won't open", "Data deleted unexpectedly", "Database corrupted"]}
              index={0}
            />
            <SeverityCard 
              level="High"
              color="#F97316"
              title="Priority Fix"
              description="Major feature broken, no easy workaround."
              examples={["Focus timer broken", "Can't export data", "Tracking stopped"]}
              index={1}
            />
            <SeverityCard 
              level="Medium"
              color="#EAB308"
              title="Standard Fix"
              description="Feature partially broken, workaround exists."
              examples={["UI glitch", "One app tracking wrong", "Slow performance"]}
              index={2}
            />
            <SeverityCard 
              level="Low"
              color="#22C55E"
              title="Minor Issue"
              description="Minor annoyance or cosmetic problem."
              examples={["Typo in text", "Icon misaligned", "Dark mode contrast"]}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* HOW TO REPORT */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Writing an Effective Report" subtitle="A good bug report is the fastest way to get a fix." />

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent dark:before:via-zinc-700">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 text-[#18181B] dark:text-[#FAFAFA] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 font-bold">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-[#7C3AED]/50 transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] group-hover:animate-pulse" />
                  Describe clearly
                </h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  Use the template: "When I [action], [unexpected thing] happens instead of [expected thing]."
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 text-[#18181B] dark:text-[#FAFAFA] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 font-bold">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-[#7C3AED]/50 transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] group-hover:animate-pulse" />
                  Steps to Reproduce
                </h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  List every click. We need to follow your steps to see the bug ourselves.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 text-[#18181B] dark:text-[#FAFAFA] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300 font-bold">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-[#7C3AED]/50 transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] group-hover:animate-pulse" />
                  Screenshots & Info
                </h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  Include screenshots of errors. Note your Windows version and TimeMark version.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEMPLATE SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#18181B] via-[#1f1f23] to-[#18181B] text-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F43F5E]/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <Sparkles size={14} /> Pro Tip
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use the Bug Report Template</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Copy this template and fill it out when submitting your report. It ensures you include all necessary information for us to help you.
            </p>
            <div className="space-y-4">
              {[
                "Faster resolution time",
                "Less back-and-forth questions",
                "Helps us categorize automatically"
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 group cursor-default animate-slide-up"
                  style={{ animationDelay: `${idx * 100 + 300}ms` }}
                >
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                    <Check size={20} />
                  </div>
                  <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <TemplateBlock />
        </div>
      </section>

      {/* SUBMISSION OPTIONS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Submit Your Report" subtitle="Choose the method that works best for you." center />
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* GitHub */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-[#18181B] dark:border-zinc-700 relative overflow-hidden group hover:shadow-2xl hover:shadow-zinc-900/20 dark:hover:shadow-white/5 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#18181B] to-zinc-800 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                <Sparkles size={12} /> Recommended
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-100/50 dark:to-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Github size={48} className="text-[#18181B] dark:text-[#FAFAFA] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">GitHub Issues</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                Public tracking, community support, and transparent resolution.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] hover:gap-4 transition-all duration-300 group/link">
                Report on GitHub <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-all duration-500 group hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 relative overflow-hidden animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Mail size={48} className="text-[#7C3AED] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Email Report</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                For bugs containing personal data or if you don't use GitHub.
              </p>
              <a href="mailto:bugs@timemark.app" className="inline-flex items-center gap-2 font-bold text-[#7C3AED] hover:gap-4 transition-all duration-300 group/link">
                Email Bug Report <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Security */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#F43F5E] transition-all duration-500 group hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 relative overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Lock size={48} className="text-[#F43F5E] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Security Issue</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                For vulnerabilities. Handled confidentially and with priority.
              </p>
              <a href="mailto:security.timemark@harmanita.com" className="inline-flex items-center gap-2 font-bold text-[#F43F5E] hover:gap-4 transition-all duration-300 group/link">
                Report Security Issue <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader title="What Happens Next?" subtitle="Our process for handling your report." center />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: "1. Review", desc: "We verify the bug and assess severity (24h).", delay: 0 },
              { icon: Terminal, title: "2. Fix", desc: "A developer works on the code and submits a fix.", delay: 100 },
              { icon: CheckCircle2, title: "3. Test", desc: "We verify the fix on different systems.", delay: 200 },
              { icon: Clock, title: "4. Release", desc: "Fix included in next update. You get credited!", delay: 300, highlight: true }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="text-center group cursor-default animate-slide-up"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                  step.highlight 
                    ? 'bg-[#7C3AED]/10 text-[#7C3AED] group-hover:shadow-violet-500/20' 
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 group-hover:shadow-zinc-500/10'
                }`}>
                  <step.icon size={32} className="group-hover:animate-pulse" />
                </div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">{step.title}</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWN ISSUES */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Known Issues" subtitle="Check if your bug is already known before reporting." />
          
          <div className="space-y-4">
            {[
              {
                status: "Working on fix",
                statusColor: "#F59E0B",
                title: "Data not showing / Hive error",
                workaround: "Workaround: Clear data via Settings.",
                issueNum: "#45"
              },
              {
                status: "Investigating",
                statusColor: "#71717A",
                title: "App opens on startup (Win 10)",
                workaround: "Workaround: Enable \"Launch as Minimized\".",
                issueNum: "#87"
              }
            ].map((issue, idx) => (
              <div 
                key={idx}
                className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#7C3AED]/50 hover:shadow-lg transition-all duration-300 group cursor-default animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{ 
                        backgroundColor: `${issue.statusColor}15`,
                        color: issue.statusColor 
                      }}
                    >
                      {issue.status}
                    </span>
                    <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED] transition-colors">{issue.title}</h4>
                  </div>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{issue.workaround}</p>
                </div>
                <a href="#" className="text-sm font-medium text-[#7C3AED] hover:underline whitespace-nowrap flex items-center gap-1 group/link">
                  View Issue {issue.issueNum} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 mb-8 shadow-lg shadow-violet-500/30 animate-bounce">
            <Check size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
            Thank you for helping us improve.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Your time spent documenting issues and testing fixes is invaluable. We couldn't build a stable app without you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] rounded-xl font-bold transition-all duration-300 shadow-lg shadow-violet-900/30 hover:shadow-xl hover:shadow-violet-900/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Github size={20} />
              Report on GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:bugs@timemark.app" 
              className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <Mail size={20} />
              Email Bug Report
            </a>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}