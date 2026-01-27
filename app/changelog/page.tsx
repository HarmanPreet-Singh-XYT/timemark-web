'use client';

import React from 'react';
import { 
  GitCommit, 
  Package, 
  Download, 
  Sparkles, 
  Wrench, 
  Bug, 
  Zap,
  Calendar,
  ArrowUpRight,
  History,
  Info
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const ReleaseBadge = ({ type }: { type: 'feature' | 'improvement' | 'fix' | 'tech' }) => {
  const styles = {
    feature: "bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20",
    improvement: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20",
    fix: "bg-[#F43F5E]/10 text-[#F43F5E] border-[#F43F5E]/20",
    tech: "bg-[#52525B]/10 text-[#52525B] dark:text-[#A1A1AA] border-[#52525B]/20"
  };
  
  const labels = {
    feature: "New Feature",
    improvement: "Improvement",
    fix: "Bug Fix",
    tech: "Technical"
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-bold border uppercase tracking-wide ${styles[type]}`}>
      {labels[type]}
    </span>
  );
};

const ReleaseSection = ({ 
  version, 
  date, 
  isLatest = false, 
  features = [], 
  improvements = [], 
  fixes = [], 
  tech = [] 
}: { 
  version: string, 
  date: string, 
  isLatest?: boolean, 
  features?: string[], 
  improvements?: string[], 
  fixes?: string[], 
  tech?: string[] 
}) => (
  <div className={`relative pl-8 md:pl-0 md:grid md:grid-cols-12 gap-8 pb-16 last:pb-0`}>
    {/* Timeline Line */}
    <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>
    <div className={`hidden md:block absolute left-[calc(25%-5px)] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-[#FAFAFA] dark:ring-[#09090B] ${isLatest ? 'bg-[#7C3AED]' : 'bg-zinc-300 dark:bg-zinc-700'}`}></div>

    {/* Metadata Column */}
    <div className="md:col-span-3 md:text-right mb-4 md:mb-0">
      <div className="sticky top-24">
        <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA]">{version}</h2>
        <div className="flex items-center md:justify-end gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1 mb-3">
          <Calendar size={14} /> {date}
        </div>
        {isLatest && (
          <span className="inline-block px-3 py-1 bg-[#7C3AED] text-white text-xs font-bold rounded-full shadow-lg shadow-violet-500/20">
            Latest Release
          </span>
        )}
        {isLatest && (
          <div className="mt-6 space-y-3">
            <a href="#" className="flex items-center justify-center md:justify-end gap-2 text-sm font-medium text-[#7C3AED] hover:underline">
              <Download size={16} /> Microsoft Store
            </a>
            <a href="#" className="flex items-center justify-center md:justify-end gap-2 text-sm font-medium text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
              <Package size={16} /> GitHub Release
            </a>
          </div>
        )}
      </div>
    </div>

    {/* Content Column */}
    <div className="md:col-span-9 space-y-8">
      {features.length > 0 && (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
            <Sparkles className="text-[#14B8A6]" size={20} /> New Features
          </h3>
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="text-[#52525B] dark:text-[#A1A1AA] text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {improvements.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] mb-3">
            <Zap className="text-[#7C3AED]" size={18} /> Improvements
          </h3>
          <ul className="space-y-2">
            {improvements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7C3AED] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {fixes.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] mb-3">
            <Bug className="text-[#F43F5E]" size={18} /> Bug Fixes
          </h3>
          <ul className="space-y-2">
            {fixes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#F43F5E] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tech.length > 0 && (
        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <h3 className="flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] mb-3 text-xs uppercase tracking-wider">
            <Wrench size={14} /> Technical Changes
          </h3>
          <ul className="space-y-1">
            {tech.map((item, idx) => (
              <li key={idx} className="text-xs text-[#52525B] dark:text-[#A1A1AA] font-mono">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
    <Navbar/>
      {/* HERO */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <History size={16} /> Version History
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            TimeMark Release History
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Track every feature, improvement, and bug fix across all versions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* LATEST RELEASE */}
        <ReleaseSection
          version="v1.3.0"
          date="February 28, 2024"
          isLatest={true}
          features={[
            "New Dashboard Design: Completely overhauled Overview page with customizable widgets.",
            "Advanced CSV Export: Select specific columns and data types for export.",
            "Dark Mode Scheduling: Auto-switch theme based on sunset/sunrise."
          ]}
          improvements={[
            "Reduced memory usage by 40% during background tracking",
            "Added tooltips to all chart elements for better clarity",
            "Updated app icon for Windows 11 design consistency"
          ]}
          fixes={[
            "Fixed issue where app would not minimize to tray on startup",
            "Resolved categorization error for 'Edge Beta' browser",
            "Fixed typo in German translation"
          ]}
          tech={[
            "Updated to Flutter 3.19",
            "Optimized database query performance"
          ]}
        />

        {/* PREVIOUS RELEASES */}
        <ReleaseSection
          version="v1.2.0"
          date="January 15, 2024"
          features={[
            "Backup & Restore System: Export your data to JSON files and import them on new devices.",
            "Multi-Language Support: TimeMark now supports 10+ languages.",
            "Enhanced App Details: Comprehensive analytics including weekly trends and pattern analysis.",
            "Custom Date Range: Improved picker with validation."
          ]}
          improvements={[
            "Redesigned Settings page with better visual hierarchy",
            "Improved performance when loading large datasets (10,000+ records)",
            "Better error messages with actionable solutions"
          ]}
          fixes={[
            "Fixed 'Hive not opening' error (Issue #45)",
            "Resolved crash when exporting special characters (Issue #52)",
            "Fixed Focus Mode timer not pausing correctly (Issue #38)"
          ]}
          tech={[
            "Updated Flutter to 3.16.0",
            "Migrated to Hive 2.2.3",
            "Added comprehensive unit tests"
          ]}
        />

        <ReleaseSection
          version="v1.1.0"
          date="December 1, 2023"
          features={[
            "Focus Mode: Built-in Pomodoro timer with customizable intervals",
            "Application Limits: Set daily time limits for apps",
            "Frequent Alerts: Configurable reminders at set intervals"
          ]}
          improvements={[
            "New circular timer UI for Focus Mode",
            "Better search functionality in Applications page",
            "Improved category breakdown visualization"
          ]}
          fixes={[
            "Fixed screen time not updating in real-time",
            "Resolved memory leak in tracking service",
            "Fixed incorrect pie chart calculations"
          ]}
        />

        <ReleaseSection
          version="v1.0.0"
          date="November 1, 2023"
          features={[
            "Initial Release: Real-time application tracking",
            "Daily screen time analytics & Productive Score",
            "Custom categories & Overall daily limits",
            "Light and dark theme support"
          ]}
        />

      </div>

      {/* UPCOMING & INFO */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-20 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
              <GitCommit size={20} className="text-[#7C3AED]" /> Upcoming Releases
            </h3>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#14B8A6] mb-4">In Development</h4>
              <ul className="space-y-3 mb-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <li className="flex gap-2"><ArrowUpRight size={16} /> Distraction blocking (Focus Mode)</li>
                <li className="flex gap-2"><ArrowUpRight size={16} /> Do Not Disturb scheduling</li>
                <li className="flex gap-2"><ArrowUpRight size={16} /> Weekly email reports (Local)</li>
              </ul>
              
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#F59E0B] mb-4">Under Consideration</h4>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <li className="flex gap-2"><Info size={16} /> Weekday vs. Weekend limits</li>
                <li className="flex gap-2"><Info size={16} /> Browser extension integration</li>
                <li className="flex gap-2"><Info size={16} /> macOS support (Alpha)</li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <a href="#" className="text-[#7C3AED] font-bold text-sm hover:underline">Vote on Features in GitHub Discussions →</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
              <Info size={20} className="text-[#7C3AED]" /> Release Philosophy
            </h3>
            <div className="prose dark:prose-invert text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <p className="mb-4">TimeMark follows semantic versioning (MAJOR.MINOR.PATCH).</p>
              <ul className="space-y-2 list-disc pl-5 mb-6">
                <li><strong>Patch:</strong> Critical bug fixes (as needed)</li>
                <li><strong>Minor:</strong> New features (every 4-6 weeks)</li>
                <li><strong>Major:</strong> Breaking changes (rare)</li>
              </ul>
              <p>
                All releases are tested internally. Critical bugs are hotfixed immediately. Microsoft Store handles updates automatically.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Found a bug?</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">Your reports help us improve TimeMark for everyone.</p>
              <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-bold text-[#18181B] dark:text-[#FAFAFA] hover:border-[#F43F5E] hover:text-[#F43F5E] transition-colors">
                Report Issue on GitHub
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  );
}