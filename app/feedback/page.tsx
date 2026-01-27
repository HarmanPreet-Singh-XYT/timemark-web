'use client';

import React from 'react';
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
  ClipboardList
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
    <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const FeedbackTypeCard = ({ icon: Icon, title, description, examples }: { icon: any, title: string, description: string, examples: string[] }) => (
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#8B5CF6]">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h3>
    </div>
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4 min-h-[40px]">{description}</p>
    <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
      <span className="text-xs font-bold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-wide block mb-2">Examples:</span>
      <ul className="space-y-1">
        {examples.map((ex, idx) => (
          <li key={idx} className="text-xs text-[#52525B] dark:text-[#A1A1AA] flex items-start gap-1.5">
            <span className="mt-1 w-1 h-1 rounded-full bg-[#7C3AED] shrink-0"></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExampleFeedback = ({ type, title, content }: { type: 'good' | 'bad', title: string, content: React.ReactNode }) => (
  <div className={`p-6 rounded-2xl border ${type === 'good' ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/20' : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/20'}`}>
    <div className="flex items-center gap-2 mb-3">
      {type === 'good' ? <CheckCircle2 className="text-green-600 dark:text-green-400" /> : <XCircle className="text-red-600 dark:text-red-400" />}
      <h3 className={`font-bold ${type === 'good' ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>{title}</h3>
    </div>
    <div className={`text-sm ${type === 'good' ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'} whitespace-pre-line leading-relaxed`}>
      {content}
    </div>
  </div>
);

const RoadmapItem = ({ title, status, desc, date }: { title: string, status: 'done' | 'wip' | 'planned', desc: string, date: string }) => {
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

  return (
    <div className="flex items-start gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${statusColors[status]} shrink-0 mt-0.5`}>
        {statusLabels[status]}
      </div>
      <div>
        <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-sm">{title}</h4>
        <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1">{desc}</p>
        <p className="text-[10px] text-zinc-400 mt-2 font-medium">{date}</p>
      </div>
    </div>
  );
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <MessageSquarePlus size={16} /> Shape the Future
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Submit <span className="text-[#7C3AED] dark:text-[#8B5CF6]">Feedback</span>
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8">
            Your voice shapes TimeMark's future. Share your ideas, suggestions, and experiences to help us build a better productivity tool.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#14B8A6]" /> 127 Features Requested</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#14B8A6]" /> 43 Implemented</span>
            <span className="flex items-center gap-1.5"><Heart size={16} className="text-[#F43F5E]" /> 89% User Satisfaction</span>
          </div>
        </div>
      </div>

      {/* FEEDBACK TYPES */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What Can You Share?" subtitle="We welcome all types of feedback, from feature requests to UX improvements." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeedbackTypeCard 
              icon={Lightbulb}
              title="Feature Requests"
              description="Ideas for new functionality you'd like to see."
              examples={["Weekend vs Weekday limits", "Browser extension", "Mobile companion app"]}
            />
            <FeedbackTypeCard 
              icon={Palette}
              title="UI/UX Improvements"
              description="Suggestions for better design or user experience."
              examples={["Simplify settings page", "Add keyboard shortcuts", "Better onboarding"]}
            />
            <FeedbackTypeCard 
              icon={FileText}
              title="Content Suggestions"
              description="Improvements to text, help content, or docs."
              examples={["Clarify Productive Score", "Fix translation errors", "Add more tooltips"]}
            />
            <FeedbackTypeCard 
              icon={Zap}
              title="Performance"
              description="Reports about speed, responsiveness, or resource usage."
              examples={["App feels slow with many apps", "Startup time optimization"]}
            />
            <FeedbackTypeCard 
              icon={Heart}
              title="General Praise"
              description="Positive feedback about what you love."
              examples={["Focus Mode changed my habits!", "Love the privacy-first approach"]}
            />
            <FeedbackTypeCard 
              icon={MessageCircle}
              title="General Suggestions"
              description="Any other thoughts, ideas, or observations."
              examples={["Video tutorial ideas", "Community suggestions", "Partnership ideas"]}
            />
          </div>
          
          <div className="mt-12 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center">
            <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Wait! Is this actually a bug?</h4>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">If something is broken, crashing, or showing errors, please use the Bug Report page instead.</p>
            <a href="/report-bug" className="text-sm font-bold text-[#7C3AED] hover:underline">Go to Report Bug Page →</a>
          </div>
        </div>
      </section>

      {/* HOW TO WRITE FEEDBACK */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Writing Effective Feedback" subtitle="The more detail you provide, the better we can understand and act on your feedback." center />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-xl">Great Feedback Examples</h3>
              <ExampleFeedback 
                type="good"
                title="Feature Request: Weekend Limits"
                content={`Why I Need This:
I'm a freelancer. Weekdays need strict 8h limits, but weekends should be free for personal projects.

Current Workaround:
Manually disabling limits every Friday.

Suggestion:
Add a toggle in Limits settings for "Separate Weekend Schedule".`}
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
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-xl">Poor Feedback Examples</h3>
              <ExampleFeedback 
                type="bad"
                title="Too Vague"
                content={`Add more features.`}
              />
              <ExampleFeedback 
                type="bad"
                title="Not Constructive"
                content={`The UI sucks. Make it better.`}
              />
              <ExampleFeedback 
                type="bad"
                title="Unprioritized List"
                content={`Please add: dark mode scheduling, browser extension, mobile app, AI insights, team features, PDF export, Notion integration...`}
              />
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] italic mt-2">
                * Please submit one idea per request so we can track them properly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION OPTIONS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Submit Your Feedback" subtitle="Choose the method that works best for you." center />
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* GitHub */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-[#18181B] dark:border-zinc-700 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 bg-[#18181B] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Recommended</div>
              <Github size={48} className="text-[#18181B] dark:text-[#FAFAFA] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">GitHub Discussions</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                Community voting, public discussion, and transparent tracking.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] hover:underline">
                Submit on GitHub <ArrowRight size={16} />
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-all group">
              <Mail size={48} className="text-[#7C3AED] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Email Feedback</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                For private feedback or detailed suggestions without GitHub.
              </p>
              <a href="mailto:feedback@timemark.app" className="inline-flex items-center gap-2 font-bold text-[#7C3AED] hover:underline">
                Email Feedback <ArrowRight size={16} />
              </a>
            </div>

            {/* Survey */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#14B8A6] transition-all group">
              <ClipboardList size={48} className="text-[#14B8A6] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Quick Survey</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                Take 3 minutes to rate features and share quick thoughts anonymously.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#14B8A6] hover:underline">
                Take Survey <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="How We Handle Feedback" subtitle="Your suggestion's journey from idea to implementation." />
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent dark:before:via-zinc-700">
            {[
              { title: "1. Read & Tag", desc: "We read every submission and tag it (Feature, UX, High-Impact)." },
              { title: "2. Community Discussion", desc: "Ideas are discussed on GitHub. High-voted ideas rise to the top." },
              { title: "3. Prioritization", desc: "We assess impact vs. effort and add to the roadmap if feasible." },
              { title: "4. Implementation", desc: "The feature is built, tested, and released in a future update." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-[#18181B] dark:text-[#FAFAFA] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP HIGHLIGHTS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Community Feedback in Action" subtitle="Real examples of user feedback that became features." />
          
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <RoadmapItem 
              title="Backup & Restore Functionality"
              status="done"
              desc="Allow users to export/import data when switching computers."
              date="Released Dec 2023 (v1.2.0)"
            />
            <RoadmapItem 
              title="Multi-Language Support"
              status="done"
              desc="Support for Spanish, French, German, and 10+ others."
              date="Released Dec 2023 (v1.2.0)"
            />
            <RoadmapItem 
              title="Distraction Blocking"
              status="wip"
              desc="Block distracting apps during Focus Mode sessions."
              date="Expected Feb 2024 (v1.3.0)"
            />
            <RoadmapItem 
              title="Weekend vs. Weekday Limits"
              status="planned"
              desc="Set different screen time schedules for weekends."
              date="Roadmap Q2 2024"
            />
          </div>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-sm font-bold text-[#7C3AED] hover:underline flex items-center justify-center gap-1">
              View Full Roadmap on GitHub <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto">
          <ThumbsUp className="mx-auto mb-6 text-[#7C3AED]" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank you for helping us improve.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Every suggestion helps us build a better tool for everyone. We read every piece of feedback we receive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl font-bold transition-all shadow-lg shadow-violet-900/20">
              Submit on GitHub
            </a>
            <a href="mailto:feedback@timemark.app" className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 rounded-xl font-bold transition-all">
              Email Feedback
            </a>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}