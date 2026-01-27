'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Github, 
  Mail,
  Zap,
  LayoutGrid,
  BarChart3
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const FAQItem = ({ question, children, defaultOpen = false }: { question: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
      >
        <span className="text-lg font-semibold text-[#18181B] dark:text-[#FAFAFA] pr-8">
          {question}
        </span>
        <span className={`text-[#7C3AED] dark:text-[#8B5CF6] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 border-t border-zinc-100 dark:border-zinc-800/50 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-base animate-in slide-in-from-top-2 duration-200">
          <div className="pt-4 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const CategoryHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-6 mt-12 border-b border-zinc-200 dark:border-zinc-800 pb-4">
    <div className="p-2 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#8B5CF6]">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA]">
      {title}
    </h2>
  </div>
);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] sm:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-10">
            Find answers to common questions about TimeMark's features, usage, and troubleshooting.
          </p>
          
          {/* Search Bar (Visual only for this demo) */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-[#18181B] dark:text-[#FAFAFA] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all"
              placeholder="Search for answers..."
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        
        {/* CATEGORY 1: GENERAL QUESTIONS */}
        <CategoryHeader title="General Questions" icon={Zap} />

        <FAQItem question="Q1: How does TimeMark track screen time?">
          <p>TimeMark monitors your device's usage in real-time by detecting which application window is currently in the foreground (active). It records timestamps and application names to build a complete picture of your computer usage.</p>
          <p>The tracking is system-level using Windows APIs, capturing foreground time with minimal battery impact. TimeMark checks which app is active every few seconds and logs that information to a local database.</p>
          <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 my-2">
            <strong className="block text-[#18181B] dark:text-[#FAFAFA] mb-2">Importantly, TimeMark does NOT record:</strong>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Keystrokes or what you type</li>
              <li>Screenshots or screen recordings</li>
              <li>URLs or specific web pages (only that you're using a browser)</li>
              <li>Window titles or document names</li>
              <li>Any content within applications</li>
              <li>File names or folders you access</li>
            </ul>
          </div>
          <p>We only track <strong>which application</strong> is active and <strong>for how long</strong>. This gives you complete usage insights while protecting your privacy.</p>
        </FAQItem>

        <FAQItem question="Q2: What makes an app 'Productive'?">
          <p>You decide! There's no universal definition of productivity—it depends entirely on your goals and work.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-2">How to mark apps as productive:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Navigate to the Applications section</li>
            <li>Find any app in the list</li>
            <li>Toggle the 'Is Productive' switch</li>
            <li>Your Productive Score updates automatically</li>
          </ol>
          <p><strong>Productive apps contribute to your Productive Score</strong>, which calculates the percentage of screen time spent on work-related or goal-aligned activities.</p>
          <p className="italic text-sm">Examples: VS Code for developers, Figma for designers, Scrivener for writers, Notion for students.</p>
          <div className="mt-3 p-3 bg-[#7C3AED]/5 border-l-4 border-[#7C3AED] text-sm">
            <strong>Pro tip:</strong> Review your productive classifications quarterly. Your work changes, and what was productive last month might not be productive now.
          </div>
        </FAQItem>

        <FAQItem question="Q3: How accurate is the screen time tracking?">
          <p>Extremely accurate—typically within 5-10 seconds per hour.</p>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2"><span className="text-[#14B8A6]">✅</span> <span>Accurate when TimeMark is running in the background</span></div>
            <div className="flex items-center gap-2"><span className="text-[#14B8A6]">✅</span> <span>Accurate when You're actively using your computer</span></div>
            <div className="flex items-center gap-2"><span className="text-[#F43F5E]">❌</span> <span>Not tracking when TimeMark is closed/not running</span></div>
            <div className="flex items-center gap-2"><span className="text-[#F43F5E]">❌</span> <span>Not tracking when Computer is locked or in sleep mode</span></div>
          </div>
          <p className="mt-2">The margin of error is minimal (less than 1% of total usage). One important note: TimeMark tracks <strong>active</strong> application time, not just time with the app open.</p>
        </FAQItem>

        <FAQItem question="Q4: Can I customize my app categorization?">
          <p>Absolutely! TimeMark gives you complete control over categories.</p>
          <p>You can use the <strong>10 pre-built categories</strong> (Productivity, Development, Social Media, etc.) or create your own.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-2">Creating Custom Categories:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Go to Applications</li>
            <li>Click any app to edit it</li>
            <li>In the Category dropdown, select 'Custom'</li>
            <li>Type your new category name (e.g., 'Client Work')</li>
            <li>Save</li>
          </ol>
          <p>Any app can be reassigned at any time. Changes are instant and retroactive (historical data updates). This ensures your data is always relevant to YOUR work.</p>
        </FAQItem>

        <FAQItem question="Q5: What insights can I gain from this app?">
          <p>TimeMark provides comprehensive insights that help you understand and improve your digital habits:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded border border-zinc-200 dark:border-zinc-800">
              <strong className="block mb-1 text-[#18181B] dark:text-[#FAFAFA]">Dashboard (Overview)</strong>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Total Screen Time</li>
                <li>Productive Score</li>
                <li>Most Used App</li>
                <li>Focus Sessions count</li>
              </ul>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 p-3 rounded border border-zinc-200 dark:border-zinc-800">
              <strong className="block mb-1 text-[#18181B] dark:text-[#FAFAFA]">Analytics (Reports)</strong>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Daily Usage Graphs</li>
                <li>Category Pie Charts</li>
                <li>Usage Trends (Week/Month)</li>
                <li>Time-of-Day Analysis</li>
              </ul>
            </div>
          </div>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4">Strategic Value</h4>
          <p>These insights help you identify time sinks ("3 hours on Slack?!"), optimize your schedule based on peak hours, and track improvement in your habits over time.</p>
        </FAQItem>

        <FAQItem question="Q6: How can I change language and which languages are available?">
          <p>TimeMark supports multiple languages to make productivity accessible worldwide.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-2">Changing Language:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open Settings</li>
            <li>Go to General section</li>
            <li>Find 'Language' dropdown</li>
            <li>Select your preferred language (changes immediately)</li>
          </ol>
          <p className="mt-2 text-sm"><strong>Note on Translations:</strong> All translations are AI-generated from English. They are generally accurate but may have awkward phrasing. You can request new languages via Settings → Contact.</p>
        </FAQItem>

        <FAQItem question="Q7: What if I find that a translation is wrong?">
          <p>Translation errors are expected since content is AI-generated. We appreciate reports!</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-2">How to Report:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Through the App (Recommended):</strong> Settings → Report Bug. Include current text, correct text, and location.</li>
            <li><strong>Direct Contact:</strong> Settings → Contact to email us directly.</li>
            <li><strong>GitHub:</strong> Create an issue on our repository if you are a developer.</li>
          </ul>
          <p className="mt-2">We review all reports and apply fixes in the next release. If you are fluent and want to contribute to the project, check our GitHub repository!</p>
        </FAQItem>


        {/* CATEGORY 2: APPLICATIONS MANAGEMENT */}
        <CategoryHeader title="Applications Management" icon={LayoutGrid} />

        <FAQItem question="Q1: How do I hide specific apps from tracking?">
          <p>You have two options depending on what you want:</p>
          <div className="space-y-4 mt-2">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded border border-zinc-200 dark:border-zinc-800">
              <strong className="block text-[#18181B] dark:text-[#FAFAFA]">Option 1: Hide from Reports</strong>
              <p className="text-sm mb-2">Hides app from charts but still counts toward total time.</p>
              <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">Apps → Edit App → Toggle "Visible in Reports" OFF</code>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded border border-zinc-200 dark:border-zinc-800">
              <strong className="block text-[#18181B] dark:text-[#FAFAFA]">Option 2: Stop Tracking Completely</strong>
              <p className="text-sm mb-2">TimeMark completely ignores the app.</p>
              <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">Apps → Edit App → Toggle "Track Usage" OFF</code>
            </div>
          </div>
          <p className="mt-2">Both can be reversed anytime—just toggle back on. Historical data is preserved.</p>
        </FAQItem>

        <FAQItem question="Q2: Can I search and filter my applications?">
          <p>Yes! The Applications page has powerful search and filtering to manage hundreds of apps easily.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Search Bar:</strong> Instant filtering, partial matches work (e.g., 'chrom' finds 'Chrome').</li>
            <li><strong>Filter by Category:</strong> View only Social Media, Development, etc.</li>
            <li><strong>Filter by Productivity:</strong> Quickly review productive vs. non-productive.</li>
            <li><strong>Filter by Tracking Status:</strong> See which apps are ignored.</li>
          </ul>
          <p>You can combine search with filters. Even with 500+ apps, search is instant.</p>
        </FAQItem>

        <FAQItem question="Q3: What editing options are available for applications?">
          <p>For each application, you can edit multiple properties:</p>
          <ul className="space-y-3 mt-2">
            <li>
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">1. Category Assignment:</strong> Choose default or custom categories.
            </li>
            <li>
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">2. Productivity Status:</strong> Toggle "Is Productive" (affects Score immediately).
            </li>
            <li>
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">3. Track Usage:</strong> Enable/Disable monitoring for this app.
            </li>
            <li>
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">4. Visible in Reports:</strong> Show/Hide from charts.
            </li>
            <li>
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">5. Daily Time Limit:</strong> Set max hours/minutes.
            </li>
          </ul>
          <p className="mt-3 text-sm italic">All changes save immediately and apply retroactively to historical data.</p>
        </FAQItem>

        <FAQItem question="Q4: How are application categories determined?">
          <p>TimeMark automatically categorizes apps on first launch using intelligent defaults (e.g., VS Code → Development, Netflix → Entertainment).</p>
          <p><strong>Accuracy:</strong> 80-90% of common apps are correct automatically. Niche apps might default to 'Uncategorized'.</p>
          <p><strong>You Have Control:</strong> The auto-categorization is just a starting point. You can override any category. We recommend spending 10 minutes in your first week to correct any miscategorizations to ensure accurate analytics.</p>
        </FAQItem>


        {/* CATEGORY 3: USAGE ANALYTICS & REPORTS */}
        <CategoryHeader title="Usage Analytics & Reports" icon={BarChart3} />

        <FAQItem question="Q1: What types of reports are available?">
          <p>TimeMark provides comprehensive reports across multiple pages:</p>
          
          <div className="space-y-4 mt-2">
             <div>
               <strong className="text-[#18181B] dark:text-[#FAFAFA]">Overview Dashboard</strong>
               <p className="text-sm">Summary cards (Total Time, Productive Score), Top Apps widget, and quick stats comparison.</p>
             </div>
             <div>
               <strong className="text-[#18181B] dark:text-[#FAFAFA]">Reports Page (Detailed)</strong>
               <ul className="text-sm list-disc pl-5 mt-1">
                 <li><strong>Daily Screen Time Graph:</strong> Bar chart by day.</li>
                 <li><strong>Category Breakdown:</strong> Pie chart distribution.</li>
                 <li><strong>Usage Pattern by Time of Day:</strong> Morning/Afternoon/Evening/Night breakdown.</li>
                 <li><strong>Detailed Table:</strong> Sortable list of all apps.</li>
               </ul>
             </div>
             <div>
               <strong className="text-[#18181B] dark:text-[#FAFAFA]">Application Details</strong>
               <p className="text-sm">Click any app for usage summary, weekly line graphs, time-of-day breakdown, and auto-generated pattern insights.</p>
             </div>
             <div>
               <strong className="text-[#18181B] dark:text-[#FAFAFA]">Export Options</strong>
               <p className="text-sm">Export full backups or specific date ranges to JSON for external analysis.</p>
             </div>
          </div>
        </FAQItem>

        <FAQItem question="Q2: How detailed are the application usage reports?">
          <p>Extremely detailed—down to the minute for every app, every day.</p>
          <p>When you click 'View Details' on any app, you see:</p>
          
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Usage Summary:</strong> Exact time today, daily limit progress, and trend indicators (e.g., ↗️ +18%).</li>
            <li><strong>Weekly Graph:</strong> Line chart of the past 7 days to spot unusual usage patterns.</li>
            <li><strong>Time-of-Day Breakdown:</strong> Visual bar chart showing if you use the app mostly in Morning, Afternoon, Evening, or Night.</li>
            <li><strong>Pattern Analysis (AI):</strong> Auto-generated text like <em>"You primarily use Chrome during Evening. Usage increased 25% this week."</em></li>
            <li><strong>Limit Status:</strong> Visual progress bar showing percentage of limit used.</li>
          </ul>
          
          <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h5 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-sm mb-2">Real-World Example (Chrome)</h5>
            <ul className="text-xs space-y-1 font-mono text-[#52525B] dark:text-[#A1A1AA]">
              <li>Today: 4h 23m</li>
              <li>Trend: ↗️ +18% vs last week</li>
              <li>Peak Usage: Tuesday (5h 12m)</li>
              <li>Top Time: Afternoon (40%)</li>
            </ul>
          </div>
        </FAQItem>

      </div>

      {/* FOOTER / HELP CTA */}
      <div className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex p-3 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#8B5CF6] mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
            Still need help?
          </h2>
          <p className="text-[#52525B] dark:text-[#A1A1AA] mb-8">
            Can't find the answer you're looking for? We're here to help you get the most out of TimeMark.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-all font-medium text-[#18181B] dark:text-[#FAFAFA]">
              <MessageSquare size={18} /> Community Discussions
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-all font-medium text-[#18181B] dark:text-[#FAFAFA]">
              <Github size={18} /> GitHub Issues
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl shadow-lg shadow-violet-500/20 transition-all font-medium">
              <Mail size={18} /> Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}