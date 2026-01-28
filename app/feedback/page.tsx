'use client';

import React, { useState, useEffect } from 'react';
import { 
  MessageSquarePlus, 
  Lightbulb, 
  Palette, 
  FileText, 
  Zap, 
  Heart, 
  MessageCircle, 
  Github, 
  Mail, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Activity, 
  ThumbsUp,
  Map,
  ArrowRight,
  ClipboardList,
  Sparkles,
  Star
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

const FeedbackTypeCard = ({ icon: Icon, title, description, examples, index }: { icon: any, title: string, description: string, examples: string[], index: number }) => (
  <div 
    className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-2 group animate-slide-up relative overflow-hidden"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="p-2 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#8B5CF6] group-hover:scale-110 group-hover:bg-[#7C3AED]/20 transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED] transition-colors duration-300">{title}</h3>
    </div>
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4 min-h-[40px] relative z-10">{description}</p>
    <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 relative z-10 group-hover:border-violet-500/20 transition-colors duration-300">
      <span className="text-xs font-bold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-wide block mb-2">Examples:</span>
      <ul className="space-y-1">
        {examples.map((ex, idx) => (
          <li 
            key={idx} 
            className="text-xs text-[#52525B] dark:text-[#A1A1AA] flex items-start gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <span className="mt-1 w-1 h-1 rounded-full bg-[#7C3AED] shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExampleFeedback = ({ type, title, content, index }: { type: 'good' | 'bad', title: string, content: React.ReactNode, index?: number }) => (
  <div 
    className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg animate-slide-up ${
      type === 'good' 
        ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/20 hover:shadow-green-500/10' 
        : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/20 hover:shadow-red-500/10'
    }`}
    style={{ animationDelay: `${(index || 0) * 100}ms` }}
  >
    <div className="flex items-center gap-2 mb-3">
      {type === 'good' 
        ? <CheckCircle2 className="text-green-600 dark:text-green-400 animate-bounce-once" /> 
        : <XCircle className="text-red-600 dark:text-red-400 animate-shake" />
      }
      <h3 className={`font-bold ${type === 'good' ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>{title}</h3>
    </div>
    <div className={`text-sm ${type === 'good' ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'} whitespace-pre-line leading-relaxed`}>
      {content}
    </div>
  </div>
);

const RoadmapItem = ({ title, status, desc, date, index }: { title: string, status: 'done' | 'wip' | 'planned', desc: string, date: string, index: number }) => {
  const statusColors = {
    done: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    wip: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    planned: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
  };

  const statusLabels = {
    done: "Implemented",
    wip: "In Progress",
    planned: "Planned"
  };

  const statusIcons = {
    done: <CheckCircle2 size={12} />,
    wip: <Activity size={12} className="animate-pulse" />,
    planned: <Clock size={12} />
  };

  return (
    <div 
      className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300 group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${statusColors[status]} shrink-0 mt-0.5 flex items-center gap-1 group-hover:scale-105 transition-transform duration-300`}>
        {statusIcons[status]}
        {statusLabels[status]}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-sm group-hover:text-[#7C3AED] transition-colors duration-300">{title}</h4>
        <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1">{desc}</p>
        <p className="text-[10px] text-zinc-400 mt-2 font-medium">{date}</p>
      </div>
      <ArrowRight size={16} className="text-zinc-300 dark:text-zinc-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-1" />
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#7C3AED]/30 rounded-full animate-float"
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

// Animated counter component
const AnimatedStat = ({ icon: Icon, value, label, color }: { icon: any, value: string, label: string, color: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={`flex items-center gap-1.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Icon size={16} className={color} />
      <span className="font-semibold">{value}</span> {label}
    </span>
  );
};

export default function FeedbackPage() {
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
        
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        .animate-bounce-once {
          animation: bounce-once 0.4s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.4s ease-out;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <Navbar/>
      
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <FloatingParticles />
        
        <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6 border border-[#7C3AED]/20 backdrop-blur-sm hover:bg-[#7C3AED]/20 transition-all duration-300 cursor-default group">
            <MessageSquarePlus size={16} className="group-hover:rotate-12 transition-transform duration-300" /> 
            Shape the Future
            <Sparkles size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Submit <span className="text-[#7C3AED] dark:text-[#8B5CF6] relative inline-block">
              Feedback
              <svg className="absolute -bottom-5 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#7C3AED" strokeWidth="2" fill="none" className="animate-pulse" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8">
            Your voice shapes TimeMark's future. Share your ideas, suggestions, and experiences to help us build a better productivity tool.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <AnimatedStat icon={CheckCircle2} value="7" label="Features Requested" color="text-[#14B8A6]" />
            <AnimatedStat icon={CheckCircle2} value="6" label="Implemented" color="text-[#14B8A6]" />
            <AnimatedStat icon={Heart} value="89%" label="User Satisfaction" color="text-[#F43F5E]" />
          </div>
        </div>
      </div>

      {/* FEEDBACK TYPES */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="What Can You Share?" subtitle="We welcome all types of feedback, from feature requests to UX improvements." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeedbackTypeCard 
              icon={Lightbulb}
              title="Feature Requests"
              description="Ideas for new functionality you'd like to see."
              examples={["Weekend vs Weekday limits", "Browser extension", "Mobile companion app"]}
              index={0}
            />
            <FeedbackTypeCard 
              icon={Palette}
              title="UI/UX Improvements"
              description="Suggestions for better design or user experience."
              examples={["Simplify settings page", "Add keyboard shortcuts", "Better onboarding"]}
              index={1}
            />
            <FeedbackTypeCard 
              icon={FileText}
              title="Content Suggestions"
              description="Improvements to text, help content, or docs."
              examples={["Clarify Productive Score", "Fix translation errors", "Add more tooltips"]}
              index={2}
            />
            <FeedbackTypeCard 
              icon={Zap}
              title="Performance"
              description="Reports about speed, responsiveness, or resource usage."
              examples={["App feels slow with many apps", "Startup time optimization"]}
              index={3}
            />
            <FeedbackTypeCard 
              icon={Heart}
              title="General Praise"
              description="Positive feedback about what you love."
              examples={["Focus Mode changed my habits!", "Love the privacy-first approach"]}
              index={4}
            />
            <FeedbackTypeCard 
              icon={MessageCircle}
              title="General Suggestions"
              description="Any other thoughts, ideas, or observations."
              examples={["Video tutorial ideas", "Community suggestions", "Partnership ideas"]}
              index={5}
            />
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center hover:shadow-lg transition-all duration-300 group animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle size={24} />
            </div>
            <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Wait! Is this actually a bug?</h4>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">If something is broken, crashing, or showing errors, please use the Bug Report page instead.</p>
            <a href="/report-bug" className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:gap-3 transition-all duration-300 group/link">
              Go to Report Bug Page 
              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO WRITE FEEDBACK */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-50" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Writing Effective Feedback" subtitle="The more detail you provide, the better we can understand and act on your feedback." center />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-xl flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </span>
                Great Feedback Examples
              </h3>
              <ExampleFeedback 
                type="good"
                title="Feature Request: Weekend Limits"
                content={`Why I Need This:
I'm a freelancer. Weekdays need strict 8h limits, but weekends should be free for personal projects.

Current Workaround:
Manually disabling limits every Friday.

Suggestion:
Add a toggle in Limits settings for "Separate Weekend Schedule".`}
                index={0}
              />
              <ExampleFeedback 
                type="good"
                title="UX Suggestion: Productive Score"
                content={`Problem:
I used the app for 2 weeks before realizing I could customize the score.

Why It Matters:
New users might think the score is random/broken.

Suggestion:
Add a tooltip or quick tutorial on first launch explaining how to mark apps.`}
                index={1}
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-xl flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
                  <XCircle size={18} />
                </span>
                Poor Feedback Examples
              </h3>
              <ExampleFeedback 
                type="bad"
                title="Too Vague"
                content={`Add more features.`}
                index={2}
              />
              <ExampleFeedback 
                type="bad"
                title="Not Constructive"
                content={`The UI sucks. Make it better.`}
                index={3}
              />
              <ExampleFeedback 
                type="bad"
                title="Unprioritized List"
                content={`Please add: dark mode scheduling, browser extension, mobile app, AI insights, team features, PDF export, Notion integration...`}
                index={4}
              />
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] italic mt-2 flex items-center gap-2 animate-slide-up" style={{ animationDelay: '500ms' }}>
                <Star size={14} className="text-amber-500" />
                Please submit one idea per request so we can track them properly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION OPTIONS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader title="Submit Your Feedback" subtitle="Choose the method that works best for you." center />
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* GitHub */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-[#18181B] dark:border-zinc-700 relative overflow-hidden group hover:shadow-2xl hover:shadow-zinc-900/20 dark:hover:shadow-white/5 transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#18181B] to-zinc-800 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                <Sparkles size={12} /> Recommended
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-100/50 dark:to-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Github size={48} className="text-[#18181B] dark:text-[#FAFAFA] mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 relative z-10">GitHub Discussions</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6 relative z-10">
                Community voting, public discussion, and transparent tracking.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] hover:gap-4 transition-all duration-300 group/link relative z-10">
                Submit on GitHub <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-all duration-500 group hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 relative overflow-hidden animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Mail size={48} className="text-[#7C3AED] mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 relative z-10">Email Feedback</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6 relative z-10">
                For private feedback or detailed suggestions without GitHub.
              </p>
              <a href="mailto:feedback@timemark.app" className="inline-flex items-center gap-2 font-bold text-[#7C3AED] hover:gap-4 transition-all duration-300 group/link relative z-10">
                Email Feedback <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Survey */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#14B8A6] transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2 relative overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ClipboardList size={48} className="text-[#14B8A6] mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 relative z-10">Quick Survey</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6 relative z-10">
                Take 3 minutes to rate features and share quick thoughts anonymously.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#14B8A6] hover:gap-4 transition-all duration-300 group/link relative z-10">
                Take Survey <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="How We Handle Feedback" subtitle="Your suggestion's journey from idea to implementation." />
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-violet-300 before:to-transparent dark:before:via-violet-700">
            {[
              { title: "1. Read & Tag", desc: "We read every submission and tag it (Feature, UX, High-Impact).", icon: FileText },
              { title: "2. Community Discussion", desc: "Ideas are discussed on GitHub. High-voted ideas rise to the top.", icon: MessageCircle },
              { title: "3. Prioritization", desc: "We assess impact vs. effort and add to the roadmap if feasible.", icon: Activity },
              { title: "4. Implementation", desc: "The feature is built, tested, and released in a future update.", icon: CheckCircle2 }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-slide-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 text-[#7C3AED] shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-[#7C3AED]/30 transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] group-hover:animate-pulse" />
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP HIGHLIGHTS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader title="Community Feedback in Action" subtitle="Real examples of user feedback that became features." />
          
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <RoadmapItem 
              title="Backup & Restore Functionality"
              status="done"
              desc="Allow users to export/import data when switching computers."
              date="Released Dec 2023 (v1.2.0)"
              index={0}
            />
            <RoadmapItem 
              title="Multi-Language Support"
              status="done"
              desc="Support for Spanish, French, German, and 10+ others."
              date="Released Dec 2023 (v1.2.0)"
              index={1}
            />
            <RoadmapItem 
              title="Distraction Blocking"
              status="wip"
              desc="Block distracting apps during Focus Mode sessions."
              date="Expected Feb 2024 (v1.3.0)"
              index={2}
            />
            <RoadmapItem 
              title="Weekend vs. Weekday Limits"
              status="planned"
              desc="Set different screen time schedules for weekends."
              date="Roadmap Q2 2024"
              index={3}
            />
          </div>
          
          <div className="mt-8 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:gap-3 transition-all duration-300 group">
              <Map size={16} />
              View Full Roadmap on GitHub 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 mb-8 shadow-lg shadow-violet-500/30 group cursor-default hover:scale-110 transition-transform duration-300">
            <ThumbsUp className="text-white group-hover:rotate-12 transition-transform duration-300" size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
            Thank you for helping us improve.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Every suggestion helps us build a better tool for everyone. We read every piece of feedback we receive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] rounded-xl font-bold transition-all duration-300 shadow-lg shadow-violet-900/30 hover:shadow-xl hover:shadow-violet-900/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Github size={20} />
              Submit on GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:feedback@timemark.app" 
              className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <Mail size={20} />
              Email Feedback
            </a>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}

// Import for the AlertTriangle icon used in the "Is this a bug?" section
import { AlertTriangle } from 'lucide-react';