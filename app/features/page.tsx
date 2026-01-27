import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Target, 
  Bell, 
  Layers, 
  CheckCircle2, 
  Zap, 
  PieChart, 
  TrendingUp, 
  Pause, 
  Play, 
  RotateCcw, 
  Settings, 
  ShieldAlert, 
  Search, 
  Filter, 
  Download 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants (for reference/consistency) ---
// Primary: #7C3AED (Light) / #8B5CF6 (Dark)
// Bg: #FAFAFA (Light) / #09090B (Dark)
// Card: #FFFFFF (Light) / #18181B (Dark)
// Text: #18181B (Light) / #FAFAFA (Dark)

const FeatureSection = ({ 
  id, 
  title, 
  subtitle, 
  intro, 
  icon: Icon, 
  children, 
  reverse = false 
}: { 
  id: string; 
  title: string; 
  subtitle: string; 
  intro: string; 
  icon: React.ElementType; 
  children: React.ReactNode; 
  reverse?: boolean 
}) => (
  <section id={id} className="py-24 relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800 last:border-0">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/10 text-[#7C3AED] dark:text-[#8B5CF6]">
            <Icon size={24} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">
          {subtitle}
        </p>
        <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
          {intro}
        </p>
      </div>
      {children}
    </div>
  </section>
);

const Card = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`
    bg-[#FFFFFF] dark:bg-[#18181B] 
    rounded-2xl border border-zinc-200 dark:border-zinc-800 
    shadow-[0_10px_15px_-3px_rgba(124,58,237,0.05)] dark:shadow-none 
    p-6 ${className}
  `}>
    {title && <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">{title}</h3>}
    {children}
  </div>
);

const InsightBox = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
    <Zap className="w-5 h-5 text-[#7C3AED] dark:text-[#8B5CF6] mt-0.5 shrink-0" />
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] italic">"{text}"</p>
  </div>
);

const BulletList = ({ items, title }: { items: string[]; title?: string }) => (
  <div className="mt-4">
    {title && <h4 className="text-sm font-semibold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-wider mb-2">{title}</h4>}
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-[#52525B] dark:text-[#A1A1AA] text-sm md:text-base">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#8B5CF6] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
    <Navbar/>
      {/* --- HERO SECTION --- */}
      <div className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] sm:text-6xl mb-6">
            Every Feature You Need to <br/>
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent">
              Master Your Digital Life
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#52525B] dark:text-[#A1A1AA]">
            TimeMark isn't just feature-rich—it's thoughtfully designed. Every capability serves a purpose: 
            helping you understand your habits, optimize your time, and achieve your goals without feeling overwhelmed.
          </p>
        </div>
        
        {/* Abstract Background Glow */}
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/20 dark:bg-[#8B5CF6]/10 blur-[120px] rounded-full -z-10" />
      </div>

      {/* --- FEATURE 1: SCREEN TIME ANALYTICS --- */}
      <FeatureSection
        id="analytics"
        icon={BarChart3}
        title="Comprehensive Screen Time Analytics"
        subtitle="Automatic tracking with zero setup. Detailed insights that actually matter."
        intro="The foundation of any behavior change is awareness. You can't improve what you don't measure. TimeMark's analytics engine automatically tracks every second you spend on your computer, organizing the data into actionable insights that help you understand—and improve—your digital habits."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Core Tracking Capabilities" className="lg:col-span-3 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-2">Real-Time Monitoring</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">TimeMark monitors your device usage continuously, capturing which application window is currently in the foreground (active). Unlike screen recorders or keystroke loggers, TimeMark only tracks foreground application time—giving you accurate usage data without invading your privacy.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-2">Automatic Categorization</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Every application is automatically assigned to a category: Productivity, Development, Social Media, Entertainment, Gaming, Communication, Web Browsing, Creative, Education, or Utility. These categories help you understand not just which apps you use, but what types of activities dominate your day.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-2">Historical Data</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">TimeMark preserves your usage history indefinitely (until you choose to clear it). This means you can analyze trends over weeks, months, or years. See how your habits change over time, identify seasonal patterns, and track your long-term progress toward your goals.</p>
              </div>
            </div>
          </Card>

          <Card title="Daily Screen Time Graph">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              The daily screen time graph visualizes your usage hour-by-hour, showing peaks and valleys in your activity. This helps you identify your most active hours, spot irregular patterns, and understand your natural productivity rhythms.
            </p>
            <BulletList title="Key Insights" items={[
              "See exactly when you started and stopped working",
              "Identify lunch breaks and downtime",
              "Spot late-night usage that might be affecting sleep",
              "Compare weekdays vs. weekends",
              "Understand context-switching patterns"
            ]} />
          </Card>

          <Card title="Category Breakdown">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              The category pie chart gives you a bird's-eye view of how you split your time across different types of activities. This high-level view is incredibly valuable for identifying imbalances.
            </p>
            <BulletList title="Use Cases" items={[
              "Am I spending too much time on entertainment?",
              "What percentage of my day is actually productive work?",
              "Are communication tools eating into my deep work time?",
              "Is my work-life balance healthy?"
            ]} />
          </Card>

          <Card title="Usage Pattern by Time of Day">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              Ever wonder when you're most productive? The time-of-day breakdown divides your screen time into Morning (6-12), Afternoon (12-5), Evening (5-9), and Night (9-6), showing you when you're most active.
            </p>
            <div className="space-y-3 mt-4">
              <InsightBox text="Schedule deep work during your peak hours" />
              <InsightBox text="Identify problematic late-night usage" />
            </div>
          </Card>

          <Card title="Detailed App Table" className="md:col-span-2">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              For granular analysis, the application usage table lists every tracked app with precise time measurements. Sort by usage time to find your biggest time consumers, search for specific apps, or filter by category.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <BulletList items={[
                "Search functionality for quick lookups",
                "Sort by name, category, or usage time",
                "Click any app for deep-dive analytics"
              ]} />
              <BulletList items={[
                "Mark apps as productive/non-productive directly from the table",
                "Set limits without navigating to a different screen"
              ]} />
            </div>
          </Card>

          <Card title="Export & Custom Ranges">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              Your data is yours. Export your usage history at any time in standard formats for deeper analysis. Analyze any custom date range.
            </p>
            <button className="w-full mt-2 py-2 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 text-[#52525B] dark:text-[#A1A1AA] hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <Download size={16} /> Export Data
            </button>
          </Card>
        </div>
      </FeatureSection>

      {/* --- FEATURE 2: PRODUCTIVITY TRACKING --- */}
      <FeatureSection
        id="productivity"
        icon={TrendingUp}
        title="Smart Productivity Tracking"
        subtitle="Not all screen time is equal. TimeMark helps you distinguish between productive work and digital distractions."
        intro="Screen time statistics are meaningless without context. Spending 8 hours on your computer sounds bad—unless 7 of those hours were in your code editor shipping a major feature. TimeMark's productivity tracking adds crucial context to your usage data, helping you focus on what really matters: are you spending your time on things that align with your goals?"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: The Score */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#14B8A6]"></div>
              <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mt-2">The Productive Score</h3>
              <div className="my-6 flex justify-center">
                <div className="w-32 h-32 rounded-full border-8 border-[#14B8A6] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-3xl font-bold tabular-nums text-[#14B8A6]">75%</span>
                </div>
              </div>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
                (Productive Time / Total Screen Time) × 100
              </p>
              <div className="text-left text-sm text-[#52525B] dark:text-[#A1A1AA] bg-zinc-50 dark:bg-zinc-900 p-3 rounded-lg">
                <strong>Why It Matters:</strong> A 75% Productive Score doesn't mean 25% of your time was wasted—it means you achieved a healthy balance. The score isn't about perfection; it's about awareness.
              </div>
            </Card>

            <Card title="Productivity Trends">
               <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
                Tracking productivity once is interesting. Tracking it over time is transformative. TimeMark shows if you are improving, regressing, or staying consistent.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 rounded bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-[#14B8A6]">↗️ Increasing</span>
                  <span className="text-zinc-500">Growth</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-[#F43F5E]">↘️ Decreasing</span>
                  <span className="text-zinc-500">Check distractions</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-[#7C3AED]">→ Stable</span>
                  <span className="text-zinc-500">Consistent rhythm</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Definition & Categories */}
          <div className="lg:col-span-8 space-y-6">
            <Card title="Defining 'Productive'">
              <p className="text-[#52525B] dark:text-[#A1A1AA] mb-4">
                Productivity is personal. For a developer, VS Code is productive. For a designer, Photoshop is productive. For a writer, Google Docs is productive. TimeMark gives you complete control.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                   <h4 className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-2">Strategic Categorization</h4>
                   <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-3">Think carefully about your goals:</p>
                   <ul className="text-sm space-y-2 text-[#52525B] dark:text-[#A1A1AA]">
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#7C3AED]" /> Email: Productive 9-5, distraction after 6 PM?</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#7C3AED]" /> Slack: Collaboration or interruption?</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#7C3AED]" /> YouTube: Education or entertainment?</li>
                   </ul>
                </div>
                <div>
                   <h4 className="font-semibold text-[#18181B] dark:text-[#FAFAFA] mb-2">How to Mark Apps</h4>
                   <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Open Applications section → Find app → Toggle "Is Productive". Your score updates automatically.</p>
                </div>
              </div>
            </Card>

            <Card title="Custom Categories">
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                Beyond binary productive/non-productive classification, TimeMark supports unlimited custom categories. Create as many as you need. Assign apps to multiple categories if they serve different purposes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Pre-built</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Productivity', 'Development', 'Social Media', 'Entertainment', 'Gaming', 'Communication', 'Creative', 'Education'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs text-zinc-600 dark:text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                  <span className="text-xs font-bold text-[#C026D3] uppercase tracking-wider">Custom Ideas</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Client Work', 'Side Hustle', 'Internal Projects', 'Personal Finance', 'Learning'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white dark:bg-zinc-800 border-dashed border border-zinc-300 dark:border-zinc-600 rounded-md text-xs text-zinc-600 dark:text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <InsightBox text="You primarily use VS Code during Morning (6-12)" />
              <InsightBox text="Communication apps are consuming 40% of your screen time" />
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* --- FEATURE 3: FOCUS MODE --- */}
      <FeatureSection
        id="focus"
        icon={Clock}
        title="Focus Mode & Pomodoro Timer"
        subtitle="Built-in Pomodoro timer with session tracking, customizable intervals, and comprehensive analytics."
        intro="The Pomodoro Technique has been scientifically proven to improve focus, reduce mental fatigue, and boost productivity. But most timer apps are too basic. TimeMark's Focus Mode combines a beautiful, functional Pomodoro timer with powerful analytics that help you optimize your deep work sessions."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card title="How It Works">
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
                Focus Mode implements the classic Pomodoro Technique: work in focused intervals (traditionally 25 minutes), followed by short breaks (5 minutes). After completing 4 work sessions, take a longer break.
              </p>
              <div className="p-4 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/10 mb-4">
                <h4 className="text-sm font-bold text-[#7C3AED] mb-2">The Science</h4>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA]">The human brain can maintain peak concentration for only 20-30 minutes before attention starts to wane. By working in short bursts, you harness your highest-quality attention repeatedly throughout the day.</p>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors cursor-default">
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Deep Work</h4>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-2">60m Work • 10m Break</p>
                <p className="text-xs text-zinc-400">Complex projects, coding, writing.</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors cursor-default">
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Quick Tasks</h4>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-2">25m Work • 5m Break</p>
                <p className="text-xs text-zinc-400">Email, routine tasks.</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors cursor-default">
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Reading</h4>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-2">45m Work • 10m Break</p>
                <p className="text-xs text-zinc-400">Research, learning skills.</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 hover:border-[#7C3AED] transition-colors cursor-default">
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Custom</h4>
                <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-2">Any Duration</p>
                <p className="text-xs text-zinc-400">Fit your unique rhythm.</p>
              </div>
            </div>

            <Card title="Focus Analytics">
               <BulletList items={[
                 "Session Count Trends: Track daily sessions",
                 "Time Distribution: Work vs. Break balance",
                 "Daily Focus Goals: Set targets and streaks",
                 "Success Rate: Completed vs. interrupted"
               ]} />
            </Card>
          </div>

          <div className="space-y-6">
            {/* Visual Timer Mockup */}
            <Card className="flex flex-col items-center justify-center py-12 bg-zinc-50 dark:bg-zinc-950">
               <div className="relative w-64 h-64">
                 {/* Outer Ring */}
                 <div className="absolute inset-0 rounded-full border-[6px] border-zinc-200 dark:border-zinc-800"></div>
                 {/* Progress Ring (Partial) */}
                 <div className="absolute inset-0 rounded-full border-[6px] border-[#7C3AED] border-r-transparent border-b-transparent -rotate-45"></div>
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-5xl font-bold tabular-nums text-[#18181B] dark:text-[#FAFAFA]">25:00</span>
                   <span className="text-sm font-medium text-[#7C3AED] mt-2">FOCUS</span>
                 </div>
               </div>
               
               <div className="flex items-center gap-6 mt-8">
                 <button className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 text-[#52525B] dark:text-[#A1A1AA]"><RotateCcw size={20} /></button>
                 <button className="p-4 rounded-full bg-[#7C3AED] text-white shadow-lg shadow-violet-500/30"><Play size={24} fill="currentColor" /></button>
                 <button className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 text-[#52525B] dark:text-[#A1A1AA]"><Settings size={20} /></button>
               </div>
            </Card>

            <Card title="Advanced Features">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-[#18181B] dark:text-[#FAFAFA]">Audio Notifications</h4>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Gentle chimes to alert you it's break time. No jarring alarms.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#18181B] dark:text-[#FAFAFA]">Auto-Start Next Session</h4>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Maintain momentum by automatically starting breaks when work ends.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#18181B] dark:text-[#FAFAFA]">Distraction Blocking (Planned)</h4>
                  <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Block or pause notifications from distracting apps during focus sessions.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </FeatureSection>

      {/* --- FEATURE 4: ALERTS & LIMITS --- */}
      <FeatureSection
        id="alerts"
        icon={Bell}
        title="Intelligent Alerts & Limits"
        subtitle="Stay on track without feeling controlled. Set healthy boundaries with flexible time limits."
        intro="The difference between helpful and annoying notifications is context. TimeMark's alert system is designed to inform and guide—not to judge or restrict. You set the rules, and TimeMark helps you stick to them with gentle reminders and flexible limits that adapt to your needs."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Overall Screen Time Limits">
            <div className="mb-4">
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-[#18181B] dark:text-[#FAFAFA]">Daily Limit</span>
                <span className="text-[#F43F5E]">75% Used</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2.5">
                <div className="bg-[#F43F5E] h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              Set a daily limit (e.g., 8 hours). TimeMark tracks usage and alerts you as you approach it.
            </p>
            <div className="space-y-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <p><strong className="text-[#7C3AED]">75% used:</strong> Gentle notification ("2 hours remaining")</p>
              <p><strong className="text-[#F59E0B]">90% used:</strong> Warning notification ("48 mins remaining")</p>
              <p><strong className="text-[#F43F5E]">100% used:</strong> Limit reached</p>
            </div>
            <div className="mt-4 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800">
              <strong>Philosophy:</strong> These are limits, not locks. If you need to exceed a limit for a deadline, you can. The goal is intentionality.
            </div>
          </Card>

          <Card title="Application-Specific Limits">
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">
              Set individual daily limits for specific applications. Powerful for managing time-sink apps.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="text-xs text-zinc-500">Social Media</div>
                <div className="font-bold tabular-nums dark:text-white">1h 00m</div>
              </div>
              <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="text-xs text-zinc-500">YouTube</div>
                <div className="font-bold tabular-nums dark:text-white">30m</div>
              </div>
              <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="text-xs text-zinc-500">News</div>
                <div className="font-bold tabular-nums dark:text-white">45m</div>
              </div>
              <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="text-xs text-zinc-500">Games</div>
                <div className="font-bold tabular-nums dark:text-white">2h 00m</div>
              </div>
            </div>
            <h4 className="text-sm font-bold mb-2 dark:text-white">Real-Time Tracking</h4>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">The Alerts page shows live stats: Current usage, Time remaining, and Status indicators (Active, Near Limit, Exceeded).</p>
          </Card>

          <Card title="Notification Customization" className="md:col-span-2">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2"><Bell size={16} /> Types</h4>
                <ul className="text-sm space-y-2 text-[#52525B] dark:text-[#A1A1AA]">
                  <li><strong>Pop-up Alerts:</strong> Small, non-intrusive windows.</li>
                  <li><strong>Frequent Alerts:</strong> Periodic reminders (every 15/30 mins) to prevent time blindness.</li>
                  <li><strong>Sound Alerts:</strong> Audio cues for noisy environments.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2"><ShieldAlert size={16} /> Categories</h4>
                <ul className="text-sm space-y-2 text-[#52525B] dark:text-[#A1A1AA]">
                  <li><strong>Focus Mode:</strong> Session ends, streak milestones.</li>
                  <li><strong>Screen Time:</strong> Approaching/Exceeding limits.</li>
                  <li><strong>High Usage:</strong> Warnings for unproductive apps.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2 flex items-center gap-2"><Settings size={16} /> Smart Timing</h4>
                <ul className="text-sm space-y-2 text-[#52525B] dark:text-[#A1A1AA]">
                  <li><strong>Master Toggle:</strong> Silence all for presentations.</li>
                  <li><strong>Focus Integration:</strong> Suppress alerts during deep work.</li>
                  <li><strong>Do Not Disturb:</strong> Set quiet hours (e.g., 9 PM - 7 AM).</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </FeatureSection>

      {/* --- FEATURE 5: APPLICATION MANAGEMENT --- */}
      <FeatureSection
        id="apps"
        icon={Layers}
        title="Complete Application Control"
        subtitle="Your apps, your rules, your categories. Organize, filter, and customize."
        intro="TimeMark tracks every application on your computer, but not every app is relevant to your goals. The Application Management system gives you complete control over what gets tracked, how it's categorized, and how it appears in your reports. This level of customization ensures your data is always meaningful."
      >
        <Card>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Comprehensive Tracking & Smart Defaults</h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  TimeMark automatically discovers and tracks all applications on your system. On first launch, apps are categorized using intelligent defaults. You have complete control to override these defaults.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Search & Filter</h3>
                <div className="flex gap-2 mb-2">
                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 gap-1"><Search size={12}/> Instant Search</span>
                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 gap-1"><Filter size={12}/> By Category</span>
                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 gap-1"><Filter size={12}/> By Productivity</span>
                </div>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  With hundreds of applications potentially in your list, finding specific apps is easy. Filter by Category, Productivity Status, Tracking Status (tracked vs ignored), or Visibility (hidden from reports).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Detailed Application Editing</h3>
                <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  <li className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <strong className="block text-[#18181B] dark:text-[#FAFAFA]">1. Category Assignment</strong>
                    Select from pre-built categories or create Custom ones (e.g., "Client Work", "Health & Fitness").
                  </li>
                  <li className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <strong className="block text-[#18181B] dark:text-[#FAFAFA]">2. Productivity Status</strong>
                    Toggle "Is Productive". Directly impacts your Productive Score.
                  </li>
                  <li className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <strong className="block text-[#18181B] dark:text-[#FAFAFA]">3. Visibility & Tracking</strong>
                    Disable tracking for background processes. Hide apps from reports without stopping tracking.
                  </li>
                  <li className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <strong className="block text-[#18181B] dark:text-[#FAFAFA]">4. Time Limits</strong>
                    Enable daily time limits directly from the app properties.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">App Statistics Modal</h3>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                  <div>
                    <div className="text-xs text-zinc-500 uppercase">Usage Summary</div>
                    <div className="font-bold dark:text-white">Chrome</div>
                    <div className="text-sm text-[#14B8A6]">Marked Productive</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase">Pattern Analysis</div>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] italic mt-1">
                      "You primarily use Chrome during Evening (5-9)"
                    </p>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] italic mt-1">
                      "Usage increased 25% compared to last week"
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <button className="w-full py-2 bg-[#7C3AED] text-white text-xs font-bold rounded-lg">View Full Details</button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/20">
                  <h4 className="text-sm font-bold text-[#7C3AED] mb-1">Bulk Actions (Coming Soon)</h4>
                  <p className="text-xs text-[#52525B] dark:text-[#A1A1AA]">Select multiple apps to categorize, hide, or limit them all at once.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </FeatureSection>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950 text-center border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] sm:text-4xl mb-6">
            Experience the Full Power of TimeMark
          </h2>
          <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-10">
            Every feature works together to create a comprehensive productivity ecosystem. Download from the Microsoft Store and explore them all.
          </p>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 px-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-0.5 text-lg">
            Get it from Microsoft Store
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}