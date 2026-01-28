'use client';

import React, { useState, useEffect } from 'react';
import { 
  Book, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Shield, 
  Clock, 
  Zap, 
  Layers, 
  Bell, 
  Terminal, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Using specific Hex codes from the "Deep Focus & Flow" theme
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text Main: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const SectionHeading = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <h2 
    id={id} 
    className="scroll-mt-24 text-2xl md:text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mt-12 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2 relative group"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] group-hover:w-full transition-all duration-500 ease-out"></span>
    </span>
  </h2>
);

const SubHeading = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h3 
    id={id} 
    className="scroll-mt-24 text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mt-8 mb-4 flex items-center gap-2 group hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors duration-300"
  >
    <span className="w-1 h-6 bg-gradient-to-b from-[#7C3AED] to-[#8B5CF6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    {children}
  </h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-7 text-[#52525B] dark:text-[#A1A1AA] mb-4">
    {children}
  </p>
);

const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-2 mb-6">
    {items.map((item, idx) => (
      <li 
        key={idx} 
        className="flex items-start gap-2 text-[#52525B] dark:text-[#A1A1AA] text-sm md:text-base leading-relaxed group hover:translate-x-1 transition-transform duration-200"
      >
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#8B5CF6] shrink-0 group-hover:scale-150 transition-transform duration-200" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Callout = ({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'tip' | 'success', title?: string, children: React.ReactNode }) => {
  const styles = {
    info: "bg-gradient-to-br from-[#7C3AED]/5 to-[#7C3AED]/10 border-[#7C3AED]/30 text-[#7C3AED] dark:text-[#8B5CF6] shadow-lg shadow-[#7C3AED]/5",
    warning: "bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 border-[#F59E0B]/30 text-[#F59E0B] dark:text-[#FBBF24] shadow-lg shadow-[#F59E0B]/5",
    tip: "bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 border-[#14B8A6]/30 text-[#14B8A6] dark:text-[#2DD4BF] shadow-lg shadow-[#14B8A6]/5",
    success: "bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 border-[#14B8A6]/30 text-[#14B8A6] dark:text-[#2DD4BF] shadow-lg shadow-[#14B8A6]/5"
  };

  const icons = {
    info: <Info size={18} />,
    warning: <AlertTriangle size={18} />,
    tip: <Zap size={18} />,
    success: <CheckCircle2 size={18} />
  };

  return (
    <div className={`p-4 rounded-xl border ${styles[type]} mb-6 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 animate-pulse">{icons[type]}</div>
        <div className="text-sm md:text-base text-[#18181B] dark:text-[#FAFAFA]">
          {title && <strong className="block mb-1">{title}</strong>}
          <div className="opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};

const CodeSnippet = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono text-sm text-[#E11D48] dark:text-[#F43F5E] hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 cursor-default">
    {children}
  </code>
);

export default function DocumentationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section for navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    document.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, label, depth = 0 }: { id: string, label: string, depth?: number }) => {
    const isActive = activeSection === id;
    
    return (
      <button
        onClick={() => scrollToSection(id)}
        className={`
          block w-full text-left py-1.5 px-3 rounded-md text-sm transition-all duration-300 relative overflow-hidden group
          ${depth === 0 ? 'font-medium text-[#18181B] dark:text-[#FAFAFA]' : 'text-[#52525B] dark:text-[#A1A1AA] pl-6'}
          ${isActive ? 'bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#8B5CF6] font-semibold' : 'hover:bg-[#7C3AED]/5 hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]'}
        `}
      >
        {isActive && (
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7C3AED] to-[#8B5CF6] rounded-r-full animate-pulse"></span>
        )}
        <span className="relative z-10">{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      
      {/* Decorative background gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#7C3AED]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#FAFAFA]/80 dark:bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between shadow-sm">
        <span className="font-bold text-[#18181B] dark:text-[#FAFAFA]">TimeMark Docs</span>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="p-2 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors duration-200 hover:bg-[#7C3AED]/5 rounded-lg"
        >
          {mobileMenuOpen ? <X className="transition-transform duration-200" /> : <Menu className="transition-transform duration-200" />}
        </button>
      </div>

      <div className="max-w-7xl pt-16 mx-auto flex relative z-10">
        
        {/* --- SIDEBAR NAVIGATION --- */}
        <aside className={`
          fixed inset-0 z-40 bg-[#FAFAFA]/95 dark:bg-[#09090B]/95 backdrop-blur-xl lg:static lg:block lg:w-64 lg:shrink-0 lg:border-r border-zinc-200 dark:border-zinc-800 lg:h-screen lg:sticky lg:top-0 overflow-y-auto p-6 transition-all duration-300 shadow-2xl lg:shadow-none
          ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'}
        `}>
          <div className="mb-8 hidden lg:block">
            <h1 className="text-xl font-bold text-[#7C3AED] dark:text-[#8B5CF6] flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Book size={20} className="animate-pulse" style={{ animationDuration: '3s' }} /> Docs
            </h1>
          </div>

          <nav className="space-y-1">
            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-gradient-to-r from-[#7C3AED] to-transparent"></span>
                Table of Contents
              </h4>
              <NavLink id="getting-started" label="1. Getting Started" />
              <NavLink id="installation" label="Installation" depth={1} />
              <NavLink id="first-launch" label="First Launch" depth={1} />
              <NavLink id="interface" label="Interface" depth={1} />
              <NavLink id="tracking" label="Tracking & Privacy" depth={1} />
            </div>

            <div className="mb-4">
              <NavLink id="core-features" label="2. Core Features" />
              <NavLink id="feature-screentime" label="Screen Time" depth={1} />
              <NavLink id="feature-productivity" label="Productivity" depth={1} />
              <NavLink id="feature-categories" label="Categories" depth={1} />
              <NavLink id="feature-focus" label="Focus Mode" depth={1} />
              <NavLink id="feature-alerts" label="Alerts & Limits" depth={1} />
              <NavLink id="feature-apps" label="App Management" depth={1} />
            </div>

            <div className="mb-4">
              <NavLink id="advanced" label="3. Advanced Usage" />
              <NavLink id="custom-dates" label="Custom Dates" depth={1} />
              <NavLink id="insights" label="Insights" depth={1} />
              <NavLink id="exporting" label="Exporting Data" depth={1} />
            </div>

            <div className="mb-4">
              <NavLink id="tips" label="4. Tips & Best Practices" />
            </div>

            <div className="mb-4">
              <NavLink id="troubleshooting" label="5. Troubleshooting" />
            </div>

            <div>
              <NavLink id="faq" label="6. FAQ" />
            </div>
          </nav>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
          
          {/* HERO */}
          <div className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-10 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 bg-gradient-to-r from-[#18181B] to-[#52525B] dark:from-[#FAFAFA] dark:to-[#A1A1AA] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              TimeMark Documentation
            </h1>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-3xl">
              Everything you need to know about using TimeMark to master your screen time and boost productivity.
            </p>
          </div>

          {/* SECTION 1: GETTING STARTED */}
          <SectionHeading id="getting-started">1. Getting Started</SectionHeading>
          
          <SubHeading id="installation">1.1 Installation</SubHeading>
          <Paragraph>
            Download TimeMark from the Microsoft Store with one click. See our Download Page for detailed installation instructions and system requirements.
          </Paragraph>

          <SubHeading id="first-launch">1.2 First Launch</SubHeading>
          <Paragraph>
            When you first open TimeMark, you'll see the Overview dashboard. Don't worry if it's mostly empty—TimeMark needs a few hours of usage to generate meaningful insights.
          </Paragraph>
          <Callout type="tip" title="Initial Steps">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Grant Permissions:</strong> TimeMark may request permissions to monitor foreground applications. This is necessary for tracking to work.</li>
              <li><strong>Review Settings:</strong> Visit Settings to configure your preferences (theme, notifications, startup behavior).</li>
              <li><strong>Explore the Interface:</strong> Click through each navigation item to familiarize yourself with the layout.</li>
            </ul>
          </Callout>

          <SubHeading id="interface">1.3 Understanding the Interface</SubHeading>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#7C3AED]/30">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] animate-pulse"></span>
                Navigation Bar (Left Side)
              </h4>
              <List items={[
                <span><strong>Overview:</strong> Your daily dashboard</span>,
                <span><strong>Applications:</strong> Manage app tracking and categories</span>,
                <span><strong>Alerts & Limits:</strong> Set time limits and configure notifications</span>,
                <span><strong>Reports:</strong> Detailed analytics and insights</span>,
                <span><strong>Focus Mode:</strong> Pomodoro timer and focus session tracking</span>,
                <span><strong>Settings:</strong> Customize TimeMark</span>,
                <span><strong>Help:</strong> Access documentation and support</span>
              ]} />
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 h-fit hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#7C3AED]/30">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] animate-pulse"></span>
                Status Bar (Top)
              </h4>
              <List items={[
                "Current date and time",
                "Theme toggle (sun/moon icon)",
                "Real-time screen time counter (visible when tracking)"
              ]} />
            </div>
          </div>

          <SubHeading id="tracking">1.4 Letting TimeMark Track</SubHeading>
          <Paragraph>
            TimeMark works automatically. Once installed, it tracks which application is in the foreground (active) at all times. You don't need to start or stop tracking manually—it's always running in the background.
          </Paragraph>
          <Callout type="info" title="Privacy Note">
            <div className="flex items-start gap-2">
              <Shield className="shrink-0 mt-1" size={16} />
              <p>TimeMark only tracks which application is active and for how long. It does <strong>NOT</strong> record:</p>
            </div>
            <ul className="list-disc pl-11 mt-2 space-y-1 text-sm">
              <li>Keystrokes</li>
              <li>Screenshots</li>
              <li>Specific files or documents</li>
              <li>Web URLs (only that you're using a browser)</li>
              <li>Window titles or content within applications</li>
            </ul>
          </Callout>

          {/* SECTION 2: CORE FEATURES */}
          <SectionHeading id="core-features">2. Core Features</SectionHeading>

          <SubHeading id="feature-screentime">2.1 Screen Time Tracking</SubHeading>
          <Paragraph>
            TimeMark uses Windows APIs to detect the foreground window at regular intervals (every few seconds). It logs the application name and timestamp, building a complete record of your computer usage.
          </Paragraph>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Viewing Your Data</h4>
          <List items={[
            "Overview Page: High-level summary (total time, productive time, most used app)",
            "Reports Page: Detailed analytics with graphs and charts",
            "Applications Page: Per-app usage statistics"
          ]} />
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Time Periods</h4>
          <Paragraph>Analyze your screen time over different periods: Today, Last 7 Days, Last Month, Last 3 Months, Lifetime, or Custom date ranges.</Paragraph>

          <SubHeading id="feature-productivity">2.2 Productivity Tracking</SubHeading>
          <Paragraph><strong>Marking Apps as Productive:</strong> Navigate to Applications → Click any app → Toggle 'Is Productive'.</Paragraph>
          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-4 hover:shadow-xl transition-all duration-500 hover:border-[#7C3AED]/30">
            <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Your Productive Score</h4>
            <p className="text-sm font-mono text-[#52525B] dark:text-[#A1A1AA] mb-4 bg-zinc-100 dark:bg-zinc-950 p-2 rounded w-fit border border-zinc-200 dark:border-zinc-800">
              (Productive Time ÷ Total Screen Time) × 100
            </p>
            <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]"><strong>Example:</strong> Spent 8 hours on computer. 6 hours in productive apps (VS Code, Figma), 2 hours in non-productive (YouTube). <strong>Score: 75%</strong>.</p>
          </div>
          <Callout type="tip" title="Strategy Tip">
            Don't aim for 100%. A healthy Productive Score is 60-80%, leaving room for breaks, communication, and mental rest. Scoring too high might indicate you're not taking enough breaks!
          </Callout>

          <SubHeading id="feature-categories">2.3 Categories</SubHeading>
          <Paragraph>
            TimeMark provides 10 pre-built categories like Productivity, Development, Social Media, and Entertainment.
          </Paragraph>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Custom Categories</h4>
          <List items={[
            "Go to Applications",
            "Click any app",
            "Select 'Custom' from the Category dropdown",
            "Type your category name and Save"
          ]} />

          <SubHeading id="feature-focus">2.4 Focus Mode</SubHeading>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Starting a Session</h4>
              <List items={[
                "Navigate to Focus Mode",
                "Choose a preset mode (Deep Work, Quick Tasks, Reading) or use Custom",
                "Click the Play button",
                "Work until the timer alerts you",
                "Take your break, then repeat!"
              ]} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Customizing Durations</h4>
              <Paragraph>Click the Settings icon in Focus Mode to adjust:</Paragraph>
              <List items={[
                "Work duration (1-90 minutes)",
                "Short break length (1-20 minutes)",
                "Long break length (5-60 minutes)",
                "Number of sessions before long break (2-8)"
              ]} />
            </div>
          </div>

          <SubHeading id="feature-alerts">2.5 Alerts & Limits</SubHeading>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Setting Overall Limit</h4>
          <List items={[
            "Go to Alerts & Limits",
            "Under 'Overall Screen Time Limit', enter hours and minutes",
            "Enable the limit and Save"
          ]} />
          <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] italic mb-4">You'll receive notifications at 75%, 90%, and 100% of your limit.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Setting App Limits</h4>
          <Paragraph>Click 'Add Limit', select an app, enter duration, and save. Use the toggle switch to temporarily disable a limit without deleting it.</Paragraph>

          <SubHeading id="feature-apps">2.6 Application Management</SubHeading>
          <Paragraph><strong>Hiding Apps:</strong> Go to Applications → Find app → Toggle 'Visible in Reports' off. The app is tracked but won't clutter charts.</Paragraph>
          <Paragraph><strong>Disabling Tracking:</strong> Toggle 'Track Usage' off. TimeMark will no longer record time spent in this application.</Paragraph>

          {/* SECTION 3: ADVANCED USAGE */}
          <SectionHeading id="advanced">3. Advanced Usage</SectionHeading>

          <SubHeading id="custom-dates">3.1 Custom Date Range Analysis</SubHeading>
          <Paragraph>Want to analyze a specific time period? Use Custom date range:</Paragraph>
          <List items={[
            "Go to Reports",
            "Select 'Custom' from the time period dropdown",
            "Choose 'Date Range' or 'Specific Date'",
            "Select your dates and Click Apply"
          ]} />
          <Paragraph>Use this to compare usage across months or analyze specific project periods.</Paragraph>

          <SubHeading id="insights">3.2 Interpreting Insights</SubHeading>
          <Paragraph>TimeMark generates automatic insights in the Application Details modal.</Paragraph>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-900 dark:to-transparent rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-lg">
              <p className="font-bold text-[#18181B] dark:text-[#FAFAFA]">"You primarily use [App] during [Time Period]"</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1">Tells you when you naturally reach for this app. Use this to schedule tasks appropriately.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-900 dark:to-transparent rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-lg">
              <p className="font-bold text-[#18181B] dark:text-[#FAFAFA]">"Usage trending upward/downward"</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1">Watch these trends over weeks to see if changes you make (like setting limits) are having the desired effect.</p>
            </div>
          </div>

          <SubHeading id="exporting">3.3 Exporting and Analyzing Data</SubHeading>
          <Paragraph>
            Go to <strong>Settings → Backup & Restore</strong> and Click Export. Find the backup in <CodeSnippet>Documents/TimeMark-Backups/</CodeSnippet>.
          </Paragraph>
          <Paragraph>
            The JSON backup format is easy to parse. Advanced users can use Python or Excel to build predictive models or correlate screen time with external data.
          </Paragraph>
          <Callout type="info" title="Multi-Device Usage">
            TimeMark doesn't automatically sync, but you can manually export from Device A and Import on Device B using "Merge" mode to see total screen time across devices.
          </Callout>

          {/* SECTION 4: TIPS */}
          <SectionHeading id="tips">4. Tips & Best Practices</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-[#14B8A6]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#14B8A6]/30 group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-3">
                <CheckCircle2 className="text-[#14B8A6] group-hover:scale-110 transition-transform duration-300" size={20} /> Accurate Scores
              </h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-2"><strong>Be Honest:</strong> Don't mark everything as productive. If your score is always 95%, it's meaningless.</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]"><strong>Context Matters:</strong> YouTube can be educational or a time sink. Classify based on your actual habits.</p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#7C3AED]/30 group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-3">
                <Clock className="text-[#7C3AED] group-hover:scale-110 transition-transform duration-300" size={20} /> Effective Focus
              </h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-2"><strong>Start Small:</strong> Begin with 25-minute sessions. Build the habit before attempting 60-minute blocks.</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]"><strong>Honor Breaks:</strong> Skipping breaks defeats the purpose. Breaks allow your brain to consolidate learning.</p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-[#F59E0B]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#F59E0B]/30 group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-3">
                <Bell className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-300" size={20} /> Realistic Limits
              </h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-2"><strong>Start High:</strong> Set limits higher than current usage, then lower incrementally.</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]"><strong>Weekend Flexibility:</strong> Don't feel bad if you exceed limits on weekends—just track and observe the pattern.</p>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-[#F43F5E]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#F43F5E]/30 group">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-3">
                <Zap className="text-[#F43F5E] group-hover:scale-110 transition-transform duration-300" size={20} /> Avoid Burnout
              </h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-2"><strong>High Score ≠ Better:</strong> 85% with healthy breaks is better than 98% with no downtime.</p>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]"><strong>Digital Detox:</strong> One evening per week, aim for zero screen time. Use TimeMark to verify.</p>
            </div>
          </div>

          {/* SECTION 5: TROUBLESHOOTING */}
          <SectionHeading id="troubleshooting">5. Troubleshooting</SectionHeading>

          <div className="space-y-6">
            <div className="border-l-4 border-[#F43F5E] pl-4 hover:pl-6 transition-all duration-300 hover:border-l-[6px]">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">"Data not showing / Hive not opening" Error</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-2">Causes: Database corruption, permission issues, or file lock conflicts.</p>
              <div className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <p className="font-semibold mb-1">Solutions:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Try <strong>Settings → Data → Clear Data</strong></li>
                  <li>Manual File Deletion: Go to Documents, delete <CodeSnippet>harman_screentime_app_usage_box.hive</CodeSnippet> and <CodeSnippet>.lock</CodeSnippet> file.</li>
                  <li>Restart TimeMark.</li>
                </ol>
              </div>
            </div>

            <div className="border-l-4 border-[#F59E0B] pl-4 hover:pl-6 transition-all duration-300 hover:border-l-[6px]">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">"App opens on every startup" (Windows 10)</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1">
                <strong>Workaround:</strong> Enable "Launch as Minimized" in Settings → General. This makes TimeMark launch to the system tray instead of opening a window.
              </p>
            </div>

            <div className="border-l-4 border-[#7C3AED] pl-4 hover:pl-6 transition-all duration-300 hover:border-l-[6px]">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Tracking Isn't Working</h4>
              <div className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Check Permissions:</strong> Ensure Windows hasn't revoked monitoring permissions.</li>
                  <li><strong>Restart App:</strong> Sometimes resolves hook issues.</li>
                  <li><strong>Check Settings:</strong> Ensure specific app has "Track Usage" enabled.</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-[#14B8A6] pl-4 hover:pl-6 transition-all duration-300 hover:border-l-[6px]">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Notifications Not Appearing</h4>
              <div className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check <strong>Master Toggle</strong> in Settings.</li>
                  <li>Check <strong>Windows System Settings</strong> for notifications.</li>
                  <li><strong>Focus Mode Conflict:</strong> If Focus Mode is active, screen time alerts are suppressed by design.</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-[#A1A1AA] pl-4 hover:pl-6 transition-all duration-300 hover:border-l-[6px]">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Microsoft Store Installation Failing</h4>
              <div className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Run Windows Update.</li>
                  <li>Clear Store Cache: Run <CodeSnippet>wsreset.exe</CodeSnippet>.</li>
                  <li>Disable VPN temporarily.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 6: FAQ */}
          <SectionHeading id="faq">6. FAQ</SectionHeading>
          <div className="space-y-4">
            <details className="group p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                <span>Does TimeMark work when I'm not actively using it?</span>
                <span className="transition-transform group-open:rotate-90 duration-300"><ChevronRight size={16} /></span>
              </summary>
              <div className="text-[#52525B] dark:text-[#A1A1AA] mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 animate-fadeIn">
                No. TimeMark tracks only when an application is in the foreground (active). If your computer is idle or locked, tracking pauses.
              </div>
            </details>

            <details className="group p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                <span>Can I see screen time for a specific app on a specific day?</span>
                <span className="transition-transform group-open:rotate-90 duration-300"><ChevronRight size={16} /></span>
              </summary>
              <div className="text-[#52525B] dark:text-[#A1A1AA] mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 animate-fadeIn">
                Yes! Go to Reports, set the date to that specific day, then find the app in the Detailed Application Usage table.
              </div>
            </details>

            <details className="group p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                <span>What happens if I close TimeMark?</span>
                <span className="transition-transform group-open:rotate-90 duration-300"><ChevronRight size={16} /></span>
              </summary>
              <div className="text-[#52525B] dark:text-[#A1A1AA] mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 animate-fadeIn">
                Tracking stops. For continuous tracking, leave TimeMark running in the background (it minimizes to system tray).
              </div>
            </details>

            <details className="group p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#7C3AED]/30 transition-all duration-300">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                <span>Does TimeMark drain battery on laptops?</span>
                <span className="transition-transform group-open:rotate-90 duration-300"><ChevronRight size={16} /></span>
              </summary>
              <div className="text-[#52525B] dark:text-[#A1A1AA] mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 animate-fadeIn">
                No. TimeMark is optimized for minimal battery impact, using less than 1% CPU on average.
              </div>
            </details>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center shadow-xl hover:shadow-2xl hover:shadow-[#7C3AED]/10 transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4 flex items-center justify-center gap-2">
              <HelpCircle size={20} className="animate-pulse" style={{ animationDuration: '3s' }} /> Need More Help?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#7C3AED] dark:text-[#8B5CF6]">
              <a href="/contact" className="hover:underline hover:scale-110 transition-transform duration-200">Contact Support</a>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a href="/report-bug" className="hover:underline hover:scale-110 transition-transform duration-200">Report a Bug</a>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a href="https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues" className="hover:underline hover:scale-110 transition-transform duration-200">GitHub Issues</a>
              {/* <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a href="#" className="hover:underline hover:scale-110 transition-transform duration-200">Community Discussions</a> */}
            </div>
          </div>

        </main>
      </div>
      <Footer/>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}