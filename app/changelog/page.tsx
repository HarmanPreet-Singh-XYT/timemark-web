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
import { releases, upcomingFeatures, releasePhilosophy, Release } from '../changelog-data';
import { useRouter } from 'next/navigation';

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

interface ReleaseSectionProps extends Release {
  size?: number;
}

const ReleaseSection = ({ 
  version, 
  date, 
  isLatest = false, 
  features = [], 
  improvements = [], 
  fixes = [], 
  tech = [],
  note = "",
  size
}: ReleaseSectionProps) => (
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
            <a href="/download" className="flex items-center justify-center md:justify-end gap-2 text-sm font-medium text-[#7C3AED] hover:underline">
              <Download size={16} /> Download Page
            </a>
            <a href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases" className="flex items-center justify-center md:justify-end gap-2 text-sm font-medium text-[#18181B] dark:text-[#FAFAFA] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
              <Package size={16} /> GitHub Release
            </a>
          </div>
        )}
        {size && (
          <div className="mt-3 text-xs text-[#52525B] dark:text-[#A1A1AA]">
            Size: {size} MB
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

      {note && (
        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/30">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Note:</strong> {note}
          </p>
        </div>
      )}
    </div>
  </div>
);

export default function ChangelogPage() {
  const developmentFeatures = upcomingFeatures.filter(f => f.status === "development");
  const considerationFeatures = upcomingFeatures.filter(f => f.status === "consideration");
  const router = useRouter();
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
            Scolect Release History
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Track every feature, improvement, and bug fix across all versions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {releases.map((release, index) => (
          <ReleaseSection key={release.version} {...release} />
        ))}
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
                {developmentFeatures.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <ArrowUpRight size={16} /> {feature.title}
                  </li>
                ))}
              </ul>
              
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#F59E0B] mb-4">Under Consideration</h4>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                {considerationFeatures.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <Info size={16} /> {feature.title}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <a href="https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/issues" className="text-[#7C3AED] font-bold text-sm hover:underline">Vote on Features in GitHub Discussions →</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6 flex items-center gap-2">
              <Info size={20} className="text-[#7C3AED]" /> Release Philosophy
            </h3>
            <div className="prose dark:prose-invert text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <p className="mb-4">{releasePhilosophy.description}</p>
              <ul className="space-y-2 list-disc pl-5 mb-6">
                {releasePhilosophy.versioningRules.map((rule, idx) => (
                  <li key={idx}>
                    <strong>{rule.type}:</strong> {rule.description}
                  </li>
                ))}
              </ul>
              <p>{releasePhilosophy.additionalInfo}</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Found a bug?</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4">Your reports help us improve Scolect for everyone.</p>
              <button onClick={()=>router.push("https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/issues")} className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-bold text-[#18181B] dark:text-[#FAFAFA] hover:border-[#F43F5E] hover:text-[#F43F5E] transition-colors">
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