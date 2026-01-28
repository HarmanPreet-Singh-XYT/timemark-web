'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const FAQItem = ({ question, children, defaultOpen = false, index }: { question: string, children: React.ReactNode, defaultOpen?: boolean, index: number }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

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

const CategoryHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
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

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-30 dark:opacity-20 animate-pulse ${className}`} />
);

export default function FAQPage() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

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
                    Enter
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
        
        {/* CATEGORY 1: GENERAL QUESTIONS */}
        <CategoryHeader title="General Questions" icon={Zap} />

        <FAQItem question="Q1: How does TimeMark track screen time?" index={0}>
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
        </FAQItem>

        <FAQItem question="Q2: What makes an app 'Productive'?" index={1}>
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
        </FAQItem>

        <FAQItem question="Q3: How accurate is the screen time tracking?" index={2}>
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
        </FAQItem>

        <FAQItem question="Q4: Can I customize my app categorization?" index={3}>
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
        </FAQItem>

        <FAQItem question="Q5: What insights can I gain from this app?" index={4}>
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
        </FAQItem>

        <FAQItem question="Q6: How can I change language and which languages are available?" index={5}>
          <p>TimeMark supports multiple languages to make productivity accessible worldwide.</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs">🌐</span>
            Changing Language:
          </h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="pl-2">Open Settings</li>
            <li className="pl-2">Go to General section</li>
            <li className="pl-2">Find 'Language' dropdown</li>
            <li className="pl-2">Select your preferred language (changes immediately)</li>
          </ol>
          <p className="mt-4 text-sm p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl"><strong className="text-amber-700 dark:text-amber-300">⚠️ Note on Translations:</strong> All translations are AI-generated from English. They are generally accurate but may have awkward phrasing. You can request new languages via Settings → Contact.</p>
        </FAQItem>

        <FAQItem question="Q7: What if I find that a translation is wrong?" index={6}>
          <p>Translation errors are expected since content is AI-generated. We appreciate reports!</p>
          <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mt-4 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs">📝</span>
            How to Report:
          </h4>
          <ul className="space-y-3">
            <li className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-violet-600 dark:text-violet-400">Through the App (Recommended):</strong>
              <p className="text-sm mt-1">Settings → Report Bug. Include current text, correct text, and location.</p>
            </li>
            <li className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-violet-600 dark:text-violet-400">Direct Contact:</strong>
              <p className="text-sm mt-1">Settings → Contact to email us directly.</p>
            </li>
            <li className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <strong className="text-violet-600 dark:text-violet-400">GitHub:</strong>
              <p className="text-sm mt-1">Create an issue on our repository if you are a developer.</p>
            </li>
          </ul>
          <p className="mt-4">We review all reports and apply fixes in the next release. If you are fluent and want to contribute to the project, check our GitHub repository!</p>
        </FAQItem>


        {/* CATEGORY 2: APPLICATIONS MANAGEMENT */}
        <CategoryHeader title="Applications Management" icon={LayoutGrid} />

        <FAQItem question="Q1: How do I hide specific apps from tracking?" index={7}>
          <p>You have two options depending on what you want:</p>
          <div className="space-y-4 mt-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-zinc-900 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <strong className="block text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">👁</span>
                Option 1: Hide from Reports
              </strong>
              <p className="text-sm mb-3">Hides app from charts but still counts toward total time.</p>
              <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-3 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 block">Apps → Edit App → Toggle "Visible in Reports" OFF</code>
            </div>
            <div className="p-5 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-zinc-900 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <strong className="block text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">🚫</span>
                Option 2: Stop Tracking Completely
              </strong>
              <p className="text-sm mb-3">TimeMark completely ignores the app.</p>
              <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-3 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 block">Apps → Edit App → Toggle "Track Usage" OFF</code>
            </div>
          </div>
          <p className="mt-4">Both can be reversed anytime—just toggle back on. Historical data is preserved.</p>
        </FAQItem>

        <FAQItem question="Q2: Can I search and filter my applications?" index={8}>
          <p>Yes! The Applications page has powerful search and filtering to manage hundreds of apps easily.</p>
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
                <p className="text-sm">Quickly review productive vs. non-productive.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">📊</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Filter by Tracking Status:</strong>
                <p className="text-sm">See which apps are ignored.</p>
              </div>
            </li>
          </ul>
          <p className="mt-4">You can combine search with filters. Even with 500+ apps, search is instant.</p>
        </FAQItem>

        <FAQItem question="Q3: What editing options are available for applications?" index={9}>
          <p>For each application, you can edit multiple properties:</p>
          <div className="space-y-3 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">1. Category Assignment:</strong>
              <p className="text-sm mt-1">Choose default or custom categories.</p>
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
              <p className="text-sm mt-1">Show/Hide from charts.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-800/50 dark:to-transparent border-l-4 border-violet-500 hover:pl-6 transition-all duration-300">
              <strong className="text-[#18181B] dark:text-[#FAFAFA]">5. Daily Time Limit:</strong>
              <p className="text-sm mt-1">Set max hours/minutes.</p>
            </div>
          </div>
          <p className="mt-4 text-sm italic bg-violet-50 dark:bg-violet-900/20 p-3 rounded-xl border border-violet-200 dark:border-violet-800">✨ All changes save immediately and apply retroactively to historical data.</p>
        </FAQItem>

        <FAQItem question="Q4: How are application categories determined?" index={10}>
          <p>TimeMark automatically categorizes apps on first launch using intelligent defaults (e.g., VS Code → Development, Netflix → Entertainment).</p>
          <div className="mt-4 p-4 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-zinc-900 rounded-xl border border-green-200 dark:border-green-800">
            <strong className="text-green-700 dark:text-green-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
              Accuracy: 80-90% of common apps are correct automatically.
            </strong>
          </div>
          <p className="mt-4">Niche apps might default to 'Uncategorized'.</p>
          <p className="mt-2"><strong className="text-violet-600 dark:text-violet-400">You Have Control:</strong> The auto-categorization is just a starting point. You can override any category. We recommend spending 10 minutes in your first week to correct any miscategorizations to ensure accurate analytics.</p>
        </FAQItem>


        {/* CATEGORY 3: USAGE ANALYTICS & REPORTS */}
        <CategoryHeader title="Usage Analytics & Reports" icon={BarChart3} />

        <FAQItem question="Q1: What types of reports are available?" index={11}>
          <p>TimeMark provides comprehensive reports across multiple pages:</p>
          
          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-zinc-900 border border-indigo-200 dark:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 text-lg">
                <span className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">🏠</span>
                Overview Dashboard
              </strong>
              <p className="text-sm mt-2">Summary cards (Total Time, Productive Score), Top Apps widget, and quick stats comparison.</p>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-white dark:from-violet-950/30 dark:to-zinc-900 border border-violet-200 dark:border-violet-800 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 text-lg">
                <span className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">📊</span>
                Reports Page (Detailed)
              </strong>
              <ul className="text-sm list-disc pl-5 mt-3 space-y-2">
                <li><strong>Daily Screen Time Graph:</strong> Bar chart by day.</li>
                <li><strong>Category Breakdown:</strong> Pie chart distribution.</li>
                <li><strong>Usage Pattern by Time of Day:</strong> Morning/Afternoon/Evening/Night breakdown.</li>
                <li><strong>Detailed Table:</strong> Sortable list of all apps.</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-zinc-900 border border-purple-200 dark:border-purple-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 text-lg">
                <span className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">🔎</span>
                Application Details
              </strong>
              <p className="text-sm mt-2">Click any app for usage summary, weekly line graphs, time-of-day breakdown, and auto-generated pattern insights.</p>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-white dark:from-fuchsia-950/30 dark:to-zinc-900 border border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-300 hover:-translate-y-1">
              <strong className="text-[#18181B] dark:text-[#FAFAFA] flex items-center gap-2 text-lg">
                <span className="w-10 h-10 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center">📤</span>
                Export Options
              </strong>
              <p className="text-sm mt-2">Export full backups or specific date ranges to JSON for external analysis.</p>
            </div>
          </div>
        </FAQItem>

        <FAQItem question="Q2: How detailed are the application usage reports?" index={12}>
          <p>Extremely detailed—down to the minute for every app, every day.</p>
          <p className="mt-2">When you click 'View Details' on any app, you see:</p>
          
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">📋</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Usage Summary:</strong>
                <p className="text-sm">Exact time today, daily limit progress, and trend indicators (e.g., ↗️ +18%).</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">📈</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Weekly Graph:</strong>
                <p className="text-sm">Line chart of the past 7 days to spot unusual usage patterns.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🕐</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Time-of-Day Breakdown:</strong>
                <p className="text-sm">Visual bar chart showing if you use the app mostly in Morning, Afternoon, Evening, or Night.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🤖</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Pattern Analysis (AI):</strong>
                <p className="text-sm">Auto-generated text like <em>"You primarily use Chrome during Evening. Usage increased 25% this week."</em></p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">🎯</span>
              <div>
                <strong className="text-[#18181B] dark:text-[#FAFAFA]">Limit Status:</strong>
                <p className="text-sm">Visual progress bar showing percentage of limit used.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-6 p-5 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-inner">
            <h5 className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-sm mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-violet-500 text-white flex items-center justify-center text-xs">💡</span>
              Real-World Example (Chrome)
            </h5>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <span className="text-zinc-500">Today:</span>
                <span className="block text-[#18181B] dark:text-[#FAFAFA] font-bold">4h 23m</span>
              </div>
              <div className="p-2 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <span className="text-zinc-500">Trend:</span>
                <span className="block text-green-600 dark:text-green-400 font-bold">↗️ +18%</span>
              </div>
              <div className="p-2 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <span className="text-zinc-500">Peak Usage:</span>
                <span className="block text-[#18181B] dark:text-[#FAFAFA] font-bold">Tue (5h 12m)</span>
              </div>
              <div className="p-2 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <span className="text-zinc-500">Top Time:</span>
                <span className="block text-[#18181B] dark:text-[#FAFAFA] font-bold">Afternoon (40%)</span>
              </div>
            </div>
          </div>
        </FAQItem>

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