'use client';

import React from 'react';
import { 
  Shield, 
  Code2, 
  Globe2, 
  BrainCircuit, 
  Users2, 
  Cpu, 
  Database, 
  Monitor, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  Map, 
  Clock, 
  Heart, 
  Mail, 
  Github, 
  Twitter, 
  MessageSquare,
  Download,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const SectionWrapper = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, center = false }: { title: string, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const ValueCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[#7C3AED]/30 transition-all">
    <div className="p-3 bg-[#7C3AED]/10 w-fit rounded-xl text-[#7C3AED] dark:text-[#8B5CF6] mb-6">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">{title}</h3>
    <div className="text-[#52525B] dark:text-[#A1A1AA] leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const RoadmapColumn = ({ title, items, statusColor }: { title: string, items: string[], statusColor: string }) => (
  <div className="flex-1 min-w-[300px]">
    <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b-2 ${statusColor}`}>
      {title}
    </h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm text-[#52525B] dark:text-[#A1A1AA]">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
  <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 pb-12 last:pb-0 group">
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:left-[20%] group-last:bottom-auto group-last:h-2"></div>
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#7C3AED] md:left-[calc(20%-4px)] ring-4 ring-white dark:ring-[#09090B]"></div>
    
    <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
      <span className="text-sm font-bold text-[#7C3AED] dark:text-[#8B5CF6]">{year}</span>
    </div>
    <div className="md:col-span-4">
      <h4 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">{title}</h4>
      <p className="text-[#52525B] dark:text-[#A1A1AA]">{children}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="relative pt-32 pb-24 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            About <span className="text-[#7C3AED] dark:text-[#8B5CF6]">TimeMark</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            A free, open-source productivity tool built by the community, for the community.
          </p>
        </div>
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </div>

      {/* MISSION & WHY */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">Reclaiming Digital Autonomy</h2>
            <div className="space-y-4 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>We live in an age of engineered distraction. Every app is designed to capture and monetize your attention.</p>
              <p><strong className="text-[#18181B] dark:text-[#FAFAFA]">TimeMark exists as an alternative.</strong></p>
              <p>We believe that understanding your digital habits is a fundamental right, not a premium feature. That awareness should empower, not shame.</p>
              <p>Our mission is simple: <span className="text-[#7C3AED] dark:text-[#8B5CF6] font-medium">give everyone the tools to understand their digital life, make informed choices, and work with their brain's natural rhythms—not against them.</span></p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">Born from Frustration</h2>
            <div className="space-y-4 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>TimeMark began as a personal project. I tried commercial screen time apps, but they were either too expensive, privacy-invasive, or treated me like a child to be controlled.</p>
              <ul className="space-y-2 pl-4 border-l-2 border-zinc-200 dark:border-zinc-800">
                <li>✅ <strong>Free</strong>, so anyone could use it</li>
                <li>✅ <strong>Privacy-first</strong>, with local-only data</li>
                <li>✅ <strong>Insightful</strong>, providing real analytics</li>
                <li>✅ <strong>Respectful</strong> of user autonomy</li>
              </ul>
              <p>What started as a personal tool has grown into a full-featured productivity suite. TimeMark proves that powerful tools can be built without surveillance.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* OUR VALUES */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="Our Values" subtitle="The principles that guide every line of code we write." center />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard icon={Shield} title="Privacy is Non-Negotiable">
            <p>Your usage data reveals intimate details about your life. That's why TimeMark stores everything locally on your device.</p>
            <ul className="text-sm space-y-1">
              <li className="flex gap-2"><XCircle size={16} className="text-[#F43F5E]"/> No cloud servers</li>
              <li className="flex gap-2"><XCircle size={16} className="text-[#F43F5E]"/> No data collection</li>
              <li className="flex gap-2"><XCircle size={16} className="text-[#F43F5E]"/> No telemetry</li>
            </ul>
            <p className="font-medium">Your data never leaves your computer.</p>
          </ValueCard>

          <ValueCard icon={Code2} title="Open Source Builds Trust">
            <p>Closed-source productivity apps are black boxes. TimeMark is fully open-source.</p>
            <ul className="text-sm space-y-1">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#14B8A6]"/> Anyone can audit the code</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#14B8A6]"/> Community owned</li>
            </ul>
            <p>Open-source isn't just a development model—it's an ethical commitment to transparency.</p>
          </ValueCard>

          <ValueCard icon={Globe2} title="Accessibility for All">
            <p>Productivity tools shouldn't be gatekept behind paywalls. TimeMark will always be 100% free.</p>
            <ul className="text-sm space-y-1">
              <li className="flex gap-2"><XCircle size={16} className="text-[#F43F5E]"/> No premium tiers</li>
              <li className="flex gap-2"><XCircle size={16} className="text-[#F43F5E]"/> No feature restrictions</li>
            </ul>
            <p>Money will never be a barrier to digital wellness.</p>
          </ValueCard>

          <ValueCard icon={BrainCircuit} title="User Autonomy">
            <p>You're an adult. You don't need an app to parent you. TimeMark provides information and reminders—not restrictions.</p>
            <p className="italic text-sm">"You've reached your limit. You can continue if needed."</p>
            <p>The goal is awareness and intentionality, not control.</p>
          </ValueCard>

          <ValueCard icon={Users2} title="Community-Driven">
            <p>TimeMark isn't built by a corporation optimizing for profits. It's built by users, for users.</p>
            <p>The roadmap reflects what users actually need, not what investors want to see.</p>
          </ValueCard>
        </div>
      </SectionWrapper>

      {/* TECH STACK */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <SectionHeader title="Built with Modern Tech" subtitle="Carefully chosen technologies prioritizing performance and reliability." />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <Layers className="text-[#7C3AED] mb-4" size={28} />
            <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Flutter</h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Google's UI toolkit for beautiful, native interfaces with high performance.</p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <Code2 className="text-[#7C3AED] mb-4" size={28} />
            <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Dart</h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Modern, type-safe language optimized for UI development and stability.</p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <Database className="text-[#7C3AED] mb-4" size={28} />
            <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Hive DB</h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Lightning-fast, local NoSQL database. No servers, complete privacy.</p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <Monitor className="text-[#7C3AED] mb-4" size={28} />
            <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Windows API</h3>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Direct integration for accurate, low-impact foreground tracking.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ROADMAP */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="Development Roadmap" subtitle="TimeMark is actively developed. Here's where we're going." center />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <RoadmapColumn 
            title="Recently Completed" 
            statusColor="border-[#14B8A6]"
            items={["Backup & Restore", "Multi-language Support (10+)", "Enhanced App Details Modal", "Performance Optimizations"]}
          />
          <RoadmapColumn 
            title="In Progress (1-3 Months)" 
            statusColor="border-[#7C3AED]"
            items={["Distraction Blocking (Focus Mode)", "Do Not Disturb Scheduling", "Weekly Email Reports (Local)", "CSV Export"]}
          />
          <RoadmapColumn 
            title="Planned (3-6 Months)" 
            statusColor="border-[#F59E0B]"
            items={["Weekday vs. Weekend Limits", "Application Tags", "macOS Support (Alpha)", "Goal System"]}
          />
          <RoadmapColumn 
            title="Future Vision" 
            statusColor="border-[#52525B]"
            items={["Browser Extension Integration", "Mobile Companion App", "AI-Powered Insights", "Correlation Analysis"]}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#52525B] dark:text-[#A1A1AA] mb-4">Have an idea? We prioritize based on community demand.</p>
          <a href="#" className="inline-flex items-center text-[#7C3AED] hover:text-[#6D28D9] font-medium">
            Vote on Features in GitHub Discussions <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </SectionWrapper>

      {/* OUR STORY */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Our Story" subtitle="From personal project to global tool." />
          
          <div className="mt-12">
            <TimelineItem year="Jan 2023" title="The Problem">
              I realized I was spending 10+ hours daily on my computer but couldn't answer: 'How much was productive?' Existing tools were invasive or expensive.
            </TimelineItem>
            <TimelineItem year="Feb 2023" title="First Prototype">
              Built a basic Flutter app that tracked foreground applications. No analytics yet, but it worked.
            </TimelineItem>
            <TimelineItem year="Apr 2023" title="Open Source Release">
              Published on GitHub. Got first star from a stranger. Realized there was real interest in privacy-first tracking.
            </TimelineItem>
            <TimelineItem year="Aug 2023" title="Microsoft Store Launch">
              Released on Store for easier installation. First bug reports from real users began rolling in.
            </TimelineItem>
            <TimelineItem year="Jan 2024" title="Growing Community">
              10,000+ downloads. Contributors from 15 countries. TimeMark is now a community effort.
            </TimelineItem>
            <TimelineItem year="Today" title="Global Impact">
              Used by thousands worldwide. Still 100% free. Still committed to privacy. Still improving everyday.
            </TimelineItem>
          </div>
        </div>
      </SectionWrapper>

      {/* THE TEAM & CONTRIBUTORS */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="The Team" subtitle="Built by developers, designers, and digital citizens from around the world." center />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
              <Code2 className="text-[#7C3AED]" /> Core Contributors
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">LD</div>
                <div>
                  <div className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Lead Developer</div>
                  <div className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Architecture, Core Features</div>
                </div>
              </div>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                Supported by 50+ code contributors, 30+ translators, and hundreds of community testers.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
              <Heart className="text-[#F43F5E]" /> How You Can Help
            </h3>
            <ul className="space-y-3 text-[#52525B] dark:text-[#A1A1AA]">
              <li className="flex gap-2"><Code2 size={18} className="mt-1 text-[#7C3AED]"/> Developers: Fix bugs & add features</li>
              <li className="flex gap-2"><Globe2 size={18} className="mt-1 text-[#7C3AED]"/> Translators: Localize the app</li>
              <li className="flex gap-2"><MessageSquare size={18} className="mt-1 text-[#7C3AED]"/> Everyone: Report bugs & share ideas</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-sm font-bold text-[#7C3AED] hover:underline">Read Contributing Guide →</a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* PRIVACY & SUPPORT */}
      <SectionWrapper className="bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Shield size={32} className="text-[#7C3AED] mb-4" />
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Our Privacy Promise</h2>
            <p className="text-lg font-medium text-[#18181B] dark:text-[#FAFAFA] mb-4">We don't collect your data. Period.</p>
            <ul className="space-y-2 text-[#52525B] dark:text-[#A1A1AA] mb-6">
              <li className="flex gap-2"><XCircle size={18} className="text-[#F43F5E]"/> No accounts required</li>
              <li className="flex gap-2"><XCircle size={18} className="text-[#F43F5E]"/> No analytics tracking</li>
              <li className="flex gap-2"><XCircle size={18} className="text-[#F43F5E]"/> No cloud sync</li>
            </ul>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
              All data is stored locally in your <code>Documents/</code> folder. You can verify this by auditing our open-source code.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Heart size={32} className="text-[#F43F5E] mb-4" />
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Support the Project</h2>
            <p className="text-[#52525B] dark:text-[#A1A1AA] mb-6">
              TimeMark is free and always will be. We don't offer premium features because financial status shouldn't dictate digital wellness.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Ways to help:</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <li>💬 Spread the word</li>
                <li>⭐ Star on GitHub</li>
                <li>📝 Write a review</li>
                <li>💰 Optional Donation</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CONTACT */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <SectionHeader title="Get in Touch" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a href="#" className="p-6 text-center rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#7C3AED]/5 transition-colors group">
            <Github className="mx-auto mb-3 text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED]" />
            <div className="font-bold text-[#18181B] dark:text-[#FAFAFA]">GitHub</div>
            <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">Bug Reports & Code</div>
          </a>
          <a href="#" className="p-6 text-center rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#7C3AED]/5 transition-colors group">
            <MessageSquare className="mx-auto mb-3 text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED]" />
            <div className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Discussions</div>
            <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">Feature Requests</div>
          </a>
          <a href="#" className="p-6 text-center rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#7C3AED]/5 transition-colors group">
            <Mail className="mx-auto mb-3 text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED]" />
            <div className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Email</div>
            <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">General Inquiries</div>
          </a>
          <a href="#" className="p-6 text-center rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-[#7C3AED]/5 transition-colors group">
            <Twitter className="mx-auto mb-3 text-[#18181B] dark:text-[#FAFAFA] group-hover:text-[#7C3AED]" />
            <div className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Social</div>
            <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">Updates & News</div>
          </a>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8">
            Ready to Take Control of Your Digital Life?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-0.5">
              <Download size={20} /> Download TimeMark
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] text-[#18181B] dark:text-[#FAFAFA] font-bold py-4 px-8 rounded-xl transition-all">
              <Github size={20} /> View on GitHub
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#14B8A6]"/> 100% Free</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#14B8A6]"/> Privacy First</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#14B8A6]"/> Open Source</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#14B8A6]"/> No Account Required</span>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="py-12 text-center text-[#52525B] dark:text-[#A1A1AA] border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <p className="max-w-2xl mx-auto px-6 italic">
          "Let's build a better digital future—together." — The TimeMark Team
        </p>
      </footer>
    <Footer/>
    </div>
  );
}