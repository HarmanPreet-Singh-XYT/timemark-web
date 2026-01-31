'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  BarChart3,
  Sparkles,
  Bell,
  Target,
  Settings
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const FAQItem = ({ question, children, defaultOpen = false, index, isVisible = true }: { question: string, children: React.ReactNode, defaultOpen?: boolean, index: number, isVisible?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  if (!isVisible) return null;

  return (
    <div 
      className={`mb-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/80 overflow-hidden transition-all duration-500 ease-out backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10 hover:border-violet-300/50 dark:hover:border-violet-700/50 group`}
      style={{ 
        animationDelay: `${index * 50}ms`,
        animation: 'fadeInUp 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-transparent hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-transparent dark:hover:from-violet-950/30 dark:hover:to-transparent transition-all duration-300"
      >
        <span className="text-lg font-semibold text-[#18181B] dark:text-[#FAFAFA] pr-8 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">
          {question}
        </span>
        <span className={`p-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[#7C3AED] dark:text-[#8B5CF6] transition-all duration-300 ${isOpen ? 'rotate-180 bg-violet-200 dark:bg-violet-800/50' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-6 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-base">
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
            <div className="pt-4 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryHeader = ({ title, icon: Icon, isVisible = true }: { title: string, icon: any, isVisible?: boolean }) => {
  if (!isVisible) return null;
  
  return (
    <div className="flex items-center gap-4 mb-8 mt-16 relative">
      <div className="absolute inset-0 -left-4 -right-4 h-full bg-gradient-to-r from-violet-100/50 via-transparent to-transparent dark:from-violet-900/20 dark:via-transparent rounded-2xl -z-10" />
      <div className="p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-lg shadow-violet-500/30 transform hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] tracking-tight">
          {title}
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] rounded-full mt-2" />
      </div>
    </div>
  );
};

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-30 dark:opacity-20 animate-pulse ${className}`} />
);

// Define FAQ data structure
interface FAQData {
  question: string;
  content: React.ReactNode;
  category: string;
}

export default function FAQPage() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  // Define all FAQ items with their categories
  const faqData: FAQData[] = useMemo(() => [
    // General Questions
    {
      category: 'general',
      question: 'Q1: How does TimeMark track screen time?',
      content: (
        <>
          <p>TimeMark monitors your device's usage in real-time by detecting which application window is currently in the foreground (active). It records timestamps and application names to build a complete picture of your computer usage.</p>
          <p>The tracking is system-level using Windows APIs, capturing foreground time with minimal battery impact. TimeMark checks which app is active every few seconds and logs that information to a local database.</p>
          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800/50 p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 my-4 shadow-inner">
            <strong className="block text-[#18181B] dark:text-[#FAFAFA] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Importantly, TimeMark does NOT record:
            </strong>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keystrokes or what you type</li>
              <li>Screenshots or screen recordings</li>
              <li>URLs or specific web pages (only that you're using a browser)</li>
              <li>Window titles or document names</li>
              <li>Any content within applications</li>
              <li>File names or folders you access</li>
            </ul>
          </div>
          <p>We only track <strong className="text-violet-600 dark:text-violet-400">which application</strong> is active and <strong className="text-violet-600 dark:text-violet-400">for how long</strong>. This gives you complete usage insights while protecting your privacy.</p>
        </>
      )
    },
    {
      category: 'general',
      question: 'Q2: What makes an app \'Productive\'?',
      content: (
        <>
          <p>You decide! There's no universal definition of productivity—it depends entirely on your goals and work.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs">✓</span>
            How to mark apps as productive:
          </h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="pl-2">Navigate to the Applications section</li>
            <li className="pl-2">Find any app in the list</li>
            <li className="pl-2">Toggle the 'Is Productive' switch</li>
            <li className="pl-2">Your Productive Score updates automatically</li>
          </ol>
          <p className="mt-4"><strong className="text-violet-600 dark:text-violet-400">Productive apps contribute to your Productive Score</strong>, which calculates the percentage of screen time spent on work-related or goal-aligned activities.</p>
          <p className="italic text-sm mt-2 text-zinc-500">Examples: VS Code for developers, Figma for designers, Scrivener for writers, Notion for students.</p>
          <div className="mt-4 p-4 bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-950/50 dark:to-transparent border-l-4 border-[#7C3AED] rounded-r-xl text-sm">
            <strong className="text-violet-700 dark:text-violet-300">💡 Pro tip:</strong> Review your productive classifications quarterly. Your work changes, and what was productive last month might not be productive now.
          </div>
        </>
      )
    },
    {
      category: 'general',
      question: 'Q3: How accurate is the screen time tracking?',
      content: (
        <>
          <p>Extremely accurate—typically within 5-10 seconds per hour.</p>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">✓</span>
              <span>Accurate when TimeMark is running in the background</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">✓</span>
              <span>Accurate when You're actively using your computer</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">✗</span>
              <span>Not tracking when TimeMark is closed/not running</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">✗</span>
              <span>Not tracking when Computer is locked or in sleep mode</span>
            </div>
          </div>
          <p className="mt-4">The margin of error is minimal (less than 1% of total usage). One important note: TimeMark tracks <strong className="text-violet-600 dark:text-violet-400">active</strong> application time, not just time with the app open.</p>
        </>
      )
    },
    {
      category: 'general',
      question: 'Q4: Can I customize my app categorization?',
      content: (
        <>
          <p>Absolutely! TimeMark gives you complete control over categories.</p>
          <p className="mt-2">You can use the <strong className="text-violet-600 dark:text-violet-400">10 pre-built categories</strong> (Productivity, Development, Social Media, etc.) or create your own.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs">⚙</span>
            Creating Custom Categories:
          </h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="pl-2">Go to Applications</li>
            <li className="pl-2">Click any app to edit it</li>
            <li className="pl-2">In the Category dropdown, select 'Custom'</li>
            <li className="pl-2">Type your new category name (e.g., 'Client Work')</li>
            <li className="pl-2">Save</li>
          </ol>
          <p className="mt-4">Any app can be reassigned at any time. Changes are instant and retroactive (historical data updates). This ensures your data is always relevant to YOUR work.</p>
        </>
      )
    },
    {
      category: 'general',
      question: 'Q5: What insights can I gain from this app?',
      content: (
        <>
          <p>TimeMark provides comprehensive insights that help you understand and improve your digital habits:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="group bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800/50 p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1">
              <strong className="block mb-3 text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">📊</span>
                Dashboard (Overview)
              </strong>
              <ul className="text-sm list-disc pl-4 space-y-2">
                <li>Total Screen Time</li>
                <li>Productive Score</li>
                <li>Most Used App</li>
                <li>Focus Sessions count</li>
              </ul>
            </div>
            <div className="group bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800/50 p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1">
              <strong className="block mb-3 text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">📈</span>
                Analytics (Reports)
              </strong>
              <ul className="text-sm list-disc pl-4 space-y-2">
                <li>Daily Usage Graphs</li>
                <li>Category Pie Charts</li>
                <li>Usage Trends (Week/Month)</li>
                <li>Time-of-Day Analysis</li>
              </ul>
            </div>
          </div>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-6 mb-2">Strategic Value</h4>
          <p>These insights help you identify time sinks ("3 hours on Slack?!"), optimize your schedule based on peak hours, and track improvement in your habits over time.</p>
        </>
      )
    },
    // Applications Management
    {
      category: 'applications',
      question: 'Q1: How do I hide specific apps from tracking?',
      content: (
        <>
          <p>In the 'Applications' section, you can toggle the visibility of apps. This allows you to keep certain apps out of your reports while still tracking overall usage patterns.</p>
          <div className="mt-4 p-4 bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-950/50 dark:to-transparent border-l-4 border-[#7C3AED] rounded-r-xl text-sm">
            <strong className="text-violet-700 dark:text-violet-300">💡 Pro tip:</strong> This is useful for hiding system apps or personal apps you don't want visible in reports but still want to count toward your total screen time.
          </div>
        </>
      )
    },
    {
      category: 'applications',
      question: 'Q2: Can I search and filter my applications?',
      content: (
        <>
          <p>Yes! The Applications section includes powerful search and filtering capabilities:</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">🔍</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Search Bar:</strong>
                <p className="text-sm">Instant filtering, partial matches work (e.g., 'chrom' finds 'Chrome').</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">📁</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Filter by Category:</strong>
                <p className="text-sm">View only Social Media, Development, etc.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">⚡</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Filter by Productivity:</strong>
                <p className="text-sm">Quickly review productive vs. non-productive apps.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">📊</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Filter by Tracking Status:</strong>
                <p className="text-sm">See which apps are being tracked or ignored.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">👁</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Filter by Visibility:</strong>
                <p className="text-sm">Find apps hidden from reports.</p>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      category: 'applications',
      question: 'Q3: What editing options are available for applications?',
      content: (
        <>
          <p>For each application, you can edit multiple properties to customize your tracking experience:</p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">1. Category Assignment:</strong>
              <p className="text-sm mt-1">Choose from default or custom categories.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">2. Productivity Status:</strong>
              <p className="text-sm mt-1">Toggle "Is Productive" (affects Score immediately).</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">3. Track Usage:</strong>
              <p className="text-sm mt-1">Enable/Disable monitoring for this app.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">4. Visible in Reports:</strong>
              <p className="text-sm mt-1">Show/Hide from charts and analytics.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">5. Daily Time Limit:</strong>
              <p className="text-sm mt-1">Set maximum hours and minutes per day.</p>
            </div>
          </div>
        </>
      )
    },
    {
      category: 'applications',
      question: 'Q4: How are application categories determined?',
      content: (
        <>
          <p>Initial categories are system-suggested based on common application types. TimeMark uses intelligent defaults to automatically categorize apps when they're first detected:</p>
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <strong className="text-green-700 dark:text-green-300">✓ Common apps are categorized automatically</strong>
              <p className="text-sm mt-1">Examples: Chrome → Browsers, VS Code → Development, Slack → Communication</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong className="text-amber-700 dark:text-amber-300">⚠ Uncommon apps may be "Uncategorized"</strong>
              <p className="text-sm mt-1">You have full control to create, modify, and assign custom categories.</p>
            </div>
          </div>
        </>
      )
    },
    // Analytics
    {
      category: 'analytics',
      question: 'Q1: What types of reports are available?',
      content: (
        <>
          <p>Reports include comprehensive analytics to help you understand your digital habits:</p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Total screen time</li>
            <li>Productive time percentage</li>
            <li>Most used apps</li>
            <li>Focus sessions tracking</li>
            <li>Daily screen time graph</li>
            <li>Category breakdown pie chart</li>
            <li>Detailed application usage</li>
            <li>Weekly usage trends</li>
            <li>Usage pattern analysis by time of day</li>
          </ul>
        </>
      )
    },
    {
      category: 'analytics',
      question: 'Q2: How detailed are the application usage reports?',
      content: (
        <>
          <p>Detailed application usage reports show extensive information for each app:</p>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">App Information:</strong>
              <p className="text-sm">Name, category, and productivity status</p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Time Metrics:</strong>
              <p className="text-sm">Total time spent, daily averages, and longest sessions</p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Actions Section:</strong>
              <p className="text-sm">Access to usage summary, daily limits, usage trends, and productivity metrics</p>
            </div>
          </div>
        </>
      )
    },
    {
      category: 'analytics',
      question: 'Q3: Can I analyze my usage trends over time?',
      content: (
        <>
          <p>Yes! TimeMark provides powerful trend analysis:</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">📈</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Week-over-Week Comparisons:</strong>
                <p className="text-sm">See graphs of usage over past weeks with trend indicators</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">📊</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Average Daily Usage:</strong>
                <p className="text-sm">Calculate your typical daily patterns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">⏱️</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Longest Sessions:</strong>
                <p className="text-sm">Identify your peak usage periods</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">📅</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Weekly Totals:</strong>
                <p className="text-sm">Track your overall digital habits week by week</p>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      category: 'analytics',
      question: 'Q4: What is the \'Usage Pattern\' analysis?',
      content: (
        <>
          <p>Usage Pattern breaks down your screen time into different time segments throughout the day:</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-zinc-900 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">🌅</span> Morning
              </strong>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Early day usage patterns</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-zinc-900 rounded-xl border border-orange-200 dark:border-orange-800">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">☀️</span> Afternoon
              </strong>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Mid-day activity</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-zinc-900 rounded-xl border border-purple-200 dark:border-purple-800">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">🌆</span> Evening
              </strong>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">After-work usage</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-zinc-900 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">🌙</span> Night
              </strong>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Late-night screen time</p>
            </div>
          </div>
          <p className="mt-4">This helps you understand when you're most active on your device and identify potential areas for improvement in your digital wellness.</p>
        </>
      )
    },
    // Alerts
    {
      category: 'alerts',
      question: 'Q1: How granular are the screen time limits?',
      content: (
        <>
          <p>TimeMark provides flexible limit settings for comprehensive time management:</p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent border-l-4 border-blue-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Overall Daily Limits:</strong>
              <p className="text-sm mt-1">Set total screen time goals for the entire day</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/30 dark:to-transparent border-l-4 border-purple-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Individual App Limits:</strong>
              <p className="text-sm mt-1">Configure specific limits for each application</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/30 dark:to-transparent border-l-4 border-green-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Flexible Time Units:</strong>
              <p className="text-sm mt-1">Set limits in hours and minutes for precise control</p>
            </div>
          </div>
          <p className="mt-4">All limits can be reset or adjusted as needed to match your changing goals.</p>
        </>
      )
    },
    {
      category: 'alerts',
      question: 'Q2: What notification options are available?',
      content: (
        <>
          <p>TimeMark offers comprehensive notification settings to keep you informed:</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 flex-shrink-0">🔔</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">System Alerts:</strong>
                <p className="text-sm">Get notified when you exceed your screen time limits</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0">⏰</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Frequent Alerts:</strong>
                <p className="text-sm">Customizable intervals: 1, 5, 15, 30, or 60 minutes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🎯</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Focus Mode Notifications:</strong>
                <p className="text-sm">Alerts for focus session start, break, and completion</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">📱</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Screen Time Reminders:</strong>
                <p className="text-sm">Regular updates on your usage throughout the day</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">📲</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Application-Specific Alerts:</strong>
                <p className="text-sm">Individual notifications for specific apps when limits are approached</p>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      category: 'alerts',
      question: 'Q3: Can I customize limit alerts?',
      content: (
        <>
          <p>Yes! TimeMark provides extensive customization for all alert types:</p>
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Alert Frequency Control:</strong>
              <p className="text-sm">Choose how often you want to be reminded</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Selective Notifications:</strong>
              <p className="text-sm">Enable/disable specific types of alerts independently</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Different Limits:</strong>
              <p className="text-sm">Set varying limits for overall screen time and individual applications</p>
            </div>
          </div>
        </>
      )
    },
    // Focus Mode
    {
      category: 'focus',
      question: 'Q1: What types of Focus Modes are available?',
      content: (
        <>
          <p>TimeMark offers multiple focus modes to match different work styles:</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-white dark:from-red-950/30 dark:to-zinc-900 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="text-2xl">🎯</span>
                Deep Work
              </strong>
              <p className="text-sm">Extended focus sessions for complex tasks requiring sustained concentration</p>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-zinc-900 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="text-2xl">⚡</span>
                Quick Tasks
              </strong>
              <p className="text-sm">Short bursts of focused work for rapid task completion</p>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-zinc-900 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="text-2xl">📚</span>
                Reading Mode
              </strong>
              <p className="text-sm">Optimized for reading, research, and learning activities</p>
            </div>
          </div>
          <p className="mt-4">Each mode helps you structure your work and break times effectively for maximum productivity.</p>
        </>
      )
    },
    {
      category: 'focus',
      question: 'Q2: How flexible is the Pomodoro Timer?',
      content: (
        <>
          <p>The Pomodoro Timer is highly customizable to fit your personal productivity style:</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">⏱️</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Adjustable Work Duration:</strong>
                <p className="text-sm">Set custom work session lengths to match your concentration span</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">☕</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Short Break Length:</strong>
                <p className="text-sm">Configure the duration of short breaks between work sessions</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🌴</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Long Break Duration:</strong>
                <p className="text-sm">Set extended break periods after multiple work sessions</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🔄</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Auto-Start Option:</strong>
                <p className="text-sm">Automatically begin the next session without manual intervention</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🔔</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Notification Settings:</strong>
                <p className="text-sm">Control alerts for session transitions</p>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      category: 'focus',
      question: 'Q3: What does the Focus Mode history show?',
      content: (
        <>
          <p>Focus Mode history provides detailed tracking of your focused work sessions:</p>
          <div className="space-y-3 mt-4">
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Daily Focus Sessions:</strong>
              <p className="text-sm mt-1">Number of completed sessions per day</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Trends Graph:</strong>
              <p className="text-sm mt-1">Visual representation of your focus patterns over time</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Average Session Duration:</strong>
              <p className="text-sm mt-1">Calculate your typical focus session length</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Total Focus Time:</strong>
              <p className="text-sm mt-1">Cumulative focused work time</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">Time Distribution Pie Chart:</strong>
              <p className="text-sm mt-1">Breakdown of work sessions, short breaks, and long breaks</p>
            </div>
          </div>
        </>
      )
    },
    {
      category: 'focus',
      question: 'Q4: Can I track my focus session progress?',
      content: (
        <>
          <p>Yes! TimeMark features an intuitive interface for managing and tracking focus sessions:</p>
          <div className="mt-4 p-5 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl">
            <strong className="text-[#18181B] dark:text-[#FAFAFA] block mb-3">Circular Timer UI Features:</strong>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">▶</span>
                Play button to start sessions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">⏸</span>
                Pause button for temporary breaks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">↻</span>
                Reload button to restart current session
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">⚙</span>
                Settings button for quick adjustments
              </li>
            </ul>
          </div>
          <p className="mt-4">You can easily track and manage your focus sessions with these intuitive controls, ensuring smooth workflow management.</p>
        </>
      )
    },
    // Settings
    {
      category: 'settings',
      question: 'Q1: What customization options are available?',
      content: (
        <>
          <p>TimeMark provides extensive customization to personalize your experience:</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🎨</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Theme Selection:</strong>
                <p className="text-sm">Choose between System, Light, or Dark themes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🌐</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Language Settings:</strong>
                <p className="text-sm">Multiple language options available</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🚀</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Startup Behavior:</strong>
                <p className="text-sm">Configure how TimeMark launches on system start</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🔔</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Notification Controls:</strong>
                <p className="text-sm">Comprehensive settings for all alert types</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">💾</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Data Management:</strong>
                <p className="text-sm">Options for clearing data or resetting settings</p>
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      category: 'settings',
      question: 'Q2: How do I provide feedback or report issues?',
      content: (
        <>
          <p>TimeMark makes it easy to get in touch with support or provide feedback:</p>
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">🐛</span> Report a Bug
              </strong>
              <p className="text-sm mt-1">Found a technical issue? Click this button to report bugs directly</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">💭</span> Submit Feedback
              </strong>
              <p className="text-sm mt-1">Share your thoughts, suggestions, or feature requests</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2">
                <span className="text-xl">📧</span> Contact Support
              </strong>
              <p className="text-sm mt-1">Need help? Reach out to our support team</p>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-zinc-600 dark:text-zinc-400">All buttons are located at the bottom of the Settings section and will redirect you to the appropriate support channels.</p>
        </>
      )
    },
    {
      category: 'settings',
      question: 'Q3: What happens when I clear my data?',
      content: (
        <>
          <p>Clearing data is a significant action that affects all your TimeMark information:</p>
          <div className="mt-4 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-xl">
            <strong className="text-amber-800 dark:text-amber-200 flex items-center gap-2 mb-3">
              <span className="text-2xl">⚠️</span> What Gets Cleared:
            </strong>
            <ul className="space-y-2 text-sm text-amber-900 dark:text-amber-100">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>All usage statistics and historical data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Focus session history and records</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Custom settings and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>App categorizations and productivity labels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Daily limits and alert configurations</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <strong className="text-green-700 dark:text-green-300 flex items-center gap-2 mb-2">
              <span className="text-xl">✓</span> When to Clear Data:
            </strong>
            <ul className="text-sm space-y-1 text-green-800 dark:text-green-200">
              <li>• Starting fresh with new goals</li>
              <li>• Troubleshooting persistent issues</li>
              <li>• Preparing to hand over device</li>
              <li>• Resetting after experimental configurations</li>
            </ul>
          </div>
          <p className="mt-4 text-sm"><strong className="text-violet-600 dark:text-violet-400">Important:</strong> This action cannot be undone. Consider exporting your data first if you want to keep a backup.</p>
        </>
      )
    },
    {
      category: 'settings',
      question: 'Q4: How can I restore or export my data?',
      content: (
        <>
          <p>TimeMark provides robust backup and restore functionality to protect your data:</p>
          <div className="mt-4 space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent border-l-4 border-blue-500 rounded-r-xl">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="text-xl">💾</span> Export Data
              </strong>
              <p className="text-sm mb-2">Navigate to Settings → Backup & Restore section to export your complete TimeMark data.</p>
              <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
                <strong>Export Location:</strong>
                <code className="block mt-1 text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded">Documents/TimeMark-Backups/</code>
              </div>
            </div>
            
            <div className="p-5 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/30 dark:to-transparent border-l-4 border-green-500 rounded-r-xl">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="text-xl">📥</span> Import/Restore Data
              </strong>
              <p className="text-sm mb-2">Use the same Backup & Restore section to import previously exported data.</p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
                <strong className="text-amber-700 dark:text-amber-300">⚠️ Important:</strong>
                <p className="mt-1">Only files exported from TimeMark can be used for restoration. Custom or modified files will not work.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl">
            <strong className="text-violet-700 dark:text-violet-300 flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span> Pro Tips:
            </strong>
            <ul className="text-sm space-y-1">
              <li>• Create regular backups (weekly or monthly)</li>
              <li>• Store backups in cloud storage for safety</li>
              <li>• Test restore functionality occasionally</li>
              <li>• Keep multiple backup versions</li>
            </ul>
          </div>
        </>
      )
    },
    // Troubleshooting
    {
      category: 'troubleshooting',
      question: 'Q1: Data is not showing, \'hive is not opening\' error',
      content: (
        <>
          <div className="p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl mb-4">
            <strong className="text-red-800 dark:text-red-200 flex items-center gap-2 mb-2">
              <span className="text-xl">🐛</span> Known Issue
            </strong>
            <p className="text-sm">This is a recognized bug that we're working to resolve in future updates.</p>
          </div>
          
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3">Solution 1: Clear Data Through Settings</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="pl-2">Open TimeMark Settings</li>
            <li className="pl-2">Navigate to Data Management</li>
            <li className="pl-2">Click "Clear Data"</li>
            <li className="pl-2">Restart the application</li>
          </ol>

          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-6 mb-3">Solution 2: Manual File Deletion</h4>
          <p className="mb-2">If clearing data through settings doesn't work:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li className="pl-2">Navigate to your Documents folder</li>
              <li className="pl-2">Delete the following files if they exist:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><code className="text-xs bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">harman_screentime_app_usage_box.hive</code></li>
                  <li><code className="text-xs bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">harman_screentime_app_usage.lock</code></li>
                </ul>
              </li>
              <li className="pl-2">Restart TimeMark</li>
            </ol>
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <strong className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="text-xl">🔄</span> Additional Recommendation:
            </strong>
            <p className="text-sm mt-1">Update TimeMark to the latest version, as this issue may be resolved in newer releases.</p>
          </div>
        </>
      )
    },
    {
      category: 'troubleshooting',
      question: 'Q2: App opens on every startup, what to do?',
      content: (
        <>
          <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl mb-4">
            <strong className="text-amber-800 dark:text-amber-200 flex items-center gap-2 mb-2">
              <span className="text-xl">⚠️</span> Windows 10 Known Issue
            </strong>
            <p className="text-sm">This is a known behavior that specifically occurs on Windows 10 systems.</p>
          </div>

          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3">Temporary Fix:</h4>
          <div className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/30 dark:to-transparent border-l-4 border-green-500 rounded-r-xl p-5">
            <strong className="text-[#18181B] dark:text-[#FAFAFA] block mb-3">Enable "Launch as Minimized"</strong>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li className="pl-2">Open TimeMark Settings</li>
              <li className="pl-2">Go to General or Startup section</li>
              <li className="pl-2">Find the "Launch as Minimized" option</li>
              <li className="pl-2">Enable this setting</li>
              <li className="pl-2">Restart your computer to test</li>
            </ol>
          </div>

          <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl">
            <strong className="text-violet-700 dark:text-violet-300">ℹ️ What This Does:</strong>
            <p className="text-sm mt-1">When enabled, TimeMark will launch minimized to the system tray on startup instead of opening a full window. The app continues tracking in the background, but won't interrupt your workflow.</p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <strong className="text-blue-700 dark:text-blue-300">💡 Alternative Solution:</strong>
            <p className="text-sm mt-1">If you don't want TimeMark to start automatically at all, you can disable it from Windows Startup settings (Task Manager → Startup tab → Disable TimeMark).</p>
          </div>
        </>
      )
    },
  ], []);

  // Category configuration
  const categories = [
    { id: 'general', title: 'General Questions', icon: Zap },
    { id: 'applications', title: 'Applications Management', icon: LayoutGrid },
    { id: 'analytics', title: 'Usage Analytics & Reports', icon: BarChart3 },
    { id: 'alerts', title: 'Alerts & Limits', icon: Bell },
    { id: 'focus', title: 'Focus Mode & Pomodoro Timer', icon: Target },
    { id: 'settings', title: 'Settings & Customization', icon: Settings },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: HelpCircle },
  ];

  // Helper function to extract text from React elements
  const extractTextFromElement = (element: any): string => {
    if (typeof element === 'string') {
      return element;
    }
    if (typeof element === 'number') {
      return String(element);
    }
    if (!element) {
      return '';
    }
    if (Array.isArray(element)) {
      return element.map(extractTextFromElement).join(' ');
    }
    if (typeof element === 'object' && element.props) {
      return extractTextFromElement(element.props.children);
    }
    return '';
  };

  // Filter FAQs based on search
  const filteredFAQs = useMemo(() => {
    if (!searchValue.trim()) {
      return faqData;
    }
    
    const searchLower = searchValue.toLowerCase();
    return faqData.filter(faq => {
      // Search in question
      if (faq.question.toLowerCase().includes(searchLower)) {
        return true;
      }
      
      // Search in content by extracting text from React elements
      const contentString = extractTextFromElement(faq.content).toLowerCase();
      return contentString.includes(searchLower);
    });
  }, [searchValue, faqData]);

  // Group filtered FAQs by category
  const groupedFAQs = useMemo(() => {
    const grouped: Record<string, FAQData[]> = {};
    filteredFAQs.forEach(faq => {
      if (!grouped[faq.category]) {
        grouped[faq.category] = [];
      }
      grouped[faq.category].push(faq);
    });
    return grouped;
  }, [filteredFAQs]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
            transform: translateY(-20px) rotate(5deg);
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
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.5);
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
      `}</style>
      
      <Navbar/>
      
      {/* HERO SECTION */}
      <div className="relative bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <FloatingOrb className="w-96 h-96 bg-violet-400 -top-48 -right-48" />
        <FloatingOrb className="w-64 h-64 bg-indigo-400 -bottom-32 -left-32" />
        <FloatingOrb className="w-48 h-48 bg-purple-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
          >
            <Sparkles size={16} className="animate-pulse" />
            Find answers quickly
          </div>
          
          <h1 
            className="text-4xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] sm:text-5xl lg:text-6xl mb-6"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.1s forwards', opacity: 0 }}
          >
            Frequently Asked{' '}
            <span className="shimmer-text">Questions</span>
          </h1>
          
          <p 
            className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-12 max-w-2xl mx-auto"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}
          >
            Find answers to common questions about TimeMark's features, usage, and troubleshooting.
          </p>
          
          {/* Search Bar */}
          <div 
            className="relative max-w-lg mx-auto"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.3s forwards', opacity: 0 }}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg transition-opacity duration-500 ${searchFocused ? 'opacity-50' : 'opacity-0'}`} />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors duration-300 ${searchFocused ? 'text-violet-500' : 'text-zinc-400'}`} />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="block w-full pl-12 pr-5 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl text-[#18181B] dark:text-[#FAFAFA] placeholder-zinc-400 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 transition-all duration-300 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50"
                placeholder="Search for answers..."
              />
              {searchValue && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <kbd className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-500 border border-zinc-200 dark:border-zinc-700">
                    {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
                  </kbd>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24 relative">
        {/* Decorative side line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-300 dark:via-violet-700 to-transparent opacity-50 hidden lg:block" style={{ left: '-40px' }} />
        
        {/* Show message when no results */}
        {searchValue && filteredFAQs.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 mb-6">
              <Search size={48} className="text-zinc-400" />
            </div>
            <h3 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-3">
              No results found
            </h3>
            <p className="text-[#52525B] dark:text-[#A1A1AA] mb-6">
              We couldn't find any FAQs matching "<span className="font-semibold text-violet-600 dark:text-violet-400">{searchValue}</span>"
            </p>
            <button
              onClick={() => setSearchValue('')}
              className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
            >
              Clear search
            </button>
          </div>
        )}
        
        {/* Render categories and FAQs */}
        {categories.map(category => {
          const categoryFAQs = groupedFAQs[category.id] || [];
          const isVisible = categoryFAQs.length > 0;
          
          return (
            <div key={category.id}>
              <CategoryHeader 
                title={category.title} 
                icon={category.icon}
                isVisible={isVisible}
              />
              {categoryFAQs.map((faq, index) => (
                <FAQItem
                  key={`${category.id}-${index}`}
                  question={faq.question}
                  index={index}
                  isVisible={isVisible}
                >
                  {faq.content}
                </FAQItem>
              ))}
            </div>
          );
        })}
      </div>

      {/* FOOTER / HELP CTA */}
      <div className="relative bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-20 px-6 text-center overflow-hidden">
        {/* Background Effects */}
        <FloatingOrb className="w-72 h-72 bg-violet-400 -top-36 left-1/4" />
        <FloatingOrb className="w-56 h-56 bg-indigo-400 -bottom-28 right-1/4" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div 
            className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 text-[#7C3AED] dark:text-[#8B5CF6] mb-8 shadow-lg shadow-violet-500/20"
            style={{ animation: 'glow 3s ease-in-out infinite' }}
          >
            <HelpCircle size={36} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
            Still need help?
          </h2>
          <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-10 max-w-lg mx-auto">
            Can't find the answer you're looking for? We're here to help you get the most out of TimeMark.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={()=>router.push("/community")} className="group flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 font-medium text-[#18181B] dark:text-[#FAFAFA] shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <span className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-colors duration-300">
                <MessageSquare size={20} className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" />
              </span>
              Community Discussions
            </button>
            <button onClick={()=>router.push("https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues")} className="group flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 font-medium text-[#18181B] dark:text-[#FAFAFA] shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <span className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-colors duration-300">
                <Github size={20} className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" />
              </span>
              GitHub Issues
            </button>
            <button onClick={()=>router.push("/contact")} className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white rounded-2xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 font-medium hover:-translate-y-1">
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Mail size={20} />
              </span>
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}