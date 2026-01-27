'use client';

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  Github, 
  Mail, 
  Lock, 
  Clock, 
  Activity, 
  Terminal,
  Bug,
  AlertOctagon,
  Info,
  ArrowRight
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

const SeverityCard = ({ 
  level, 
  color, 
  title, 
  description, 
  examples 
}: { 
  level: string, 
  color: string, 
  title: string, 
  description: string, 
  examples: string[] 
}) => (
  <div className={`p-6 bg-white dark:bg-zinc-900 rounded-2xl border-l-4 border-y border-r border-zinc-200 dark:border-zinc-800 shadow-sm`} style={{ borderLeftColor: color }}>
    <div className="flex items-center gap-2 mb-3">
      <span className="px-2 py-1 rounded text-xs font-bold uppercase text-white" style={{ backgroundColor: color }}>
        {level}
      </span>
      <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h3>
    </div>
    <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-4 h-10">
      {description}
    </p>
    <div>
      <span className="text-xs font-bold text-[#18181B] dark:text-[#FAFAFA] uppercase tracking-wide">Examples:</span>
      <ul className="mt-2 space-y-1">
        {examples.map((ex, idx) => (
          <li key={idx} className="text-xs text-[#52525B] dark:text-[#A1A1AA] flex items-start gap-1">
            <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }}></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TemplateBlock = () => {
  const [copied, setCopied] = useState(false);
  
  const template = `### Bug Description
[Clear, one-sentence description of the problem]

### Severity
- [ ] 🔴 Critical (app unusable, data loss, security)
- [ ] 🟠 High (major feature broken)
- [ ] 🟡 Medium (feature partially broken)
- [ ] 🟢 Low (minor issue, cosmetic)

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [Bug occurs]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### System Information
- **Windows Version**: [e.g., Windows 11 Pro 22H2]
- **TimeMark Version**: [Settings → Version]
- **RAM**: [e.g., 16 GB]

### Screenshots
[Drag and drop screenshots here]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#18181B] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="text-xs font-mono text-zinc-400">bug_report_template.md</span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Template"}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap">
        {template}
      </pre>
    </div>
  );
};

export default function ReportBugPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
    <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F43F5E]/10 text-[#F43F5E] text-sm font-medium mb-6">
            <Bug size={16} /> Help Us Improve
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Report a <span className="text-[#F43F5E]">Bug</span>
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-8">
            Found something that's not working right? Help us fix it! Your bug reports make TimeMark better for everyone.
          </p>

          {/* Quick Action Box */}
          <div className="max-w-2xl mx-auto bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-6 text-left flex items-start gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-[#F43F5E]">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-200 text-lg">Found a critical issue?</h3>
              <div className="space-y-2 mt-2 text-sm text-red-800 dark:text-red-300">
                <p>🚨 <strong>Security Vulnerabilities:</strong> Email <a href="mailto:security@timemark.app" className="underline font-bold hover:text-red-600">security@timemark.app</a></p>
                <p>🔥 <strong>App Crashes:</strong> Use the template below immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHECKLIST */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Quick Checklist Before Reporting" subtitle="Checking these items helps us fix the issue faster and avoids duplicate reports." />
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Is it actually a bug? (Not a feature request)",
              "Can you reproduce it consistently?",
              "Is your TimeMark version up to date?",
              "Have you tried restarting the app?",
              "Have you checked Existing Issues?",
              "Do you have error messages or screenshots?"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <CheckCircle2 className="text-[#14B8A6] shrink-0" size={20} />
                <span className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEVERITY GUIDE */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Understanding Bug Severity" subtitle="Help us prioritize by indicating the impact of the issue." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SeverityCard 
              level="Critical"
              color="#F43F5E"
              title="Report Immediately"
              description="App unusable, data loss, or security risks."
              examples={["App won't open", "Data deleted unexpectedly", "Database corrupted"]}
            />
            <SeverityCard 
              level="High"
              color="#F97316"
              title="Priority Fix"
              description="Major feature broken, no easy workaround."
              examples={["Focus timer broken", "Can't export data", "Tracking stopped"]}
            />
            <SeverityCard 
              level="Medium"
              color="#EAB308"
              title="Standard Fix"
              description="Feature partially broken, workaround exists."
              examples={["UI glitch", "One app tracking wrong", "Slow performance"]}
            />
            <SeverityCard 
              level="Low"
              color="#22C55E"
              title="Minor Issue"
              description="Minor annoyance or cosmetic problem."
              examples={["Typo in text", "Icon misaligned", "Dark mode contrast"]}
            />
          </div>
        </div>
      </section>

      {/* HOW TO REPORT */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Writing an Effective Report" subtitle="A good bug report is the fastest way to get a fix." />

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent dark:before:via-zinc-700">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-[#18181B] dark:text-[#FAFAFA] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Describe clearly</h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  Use the template: "When I [action], [unexpected thing] happens instead of [expected thing]."
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-[#18181B] dark:text-[#FAFAFA] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Steps to Reproduce</h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  List every click. We need to follow your steps to see the bug ourselves.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-[#18181B] dark:text-[#FAFAFA] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h3 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Screenshots & Info</h3>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  Include screenshots of errors. Note your Windows version and TimeMark version.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEMPLATE SECTION */}
      <section className="py-20 px-6 bg-[#18181B] text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Use the Bug Report Template</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Copy this template and fill it out when submitting your report. It ensures you include all necessary information for us to help you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Check size={20} /></div>
                <span className="text-sm text-zinc-300">Faster resolution time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Check size={20} /></div>
                <span className="text-sm text-zinc-300">Less back-and-forth questions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Check size={20} /></div>
                <span className="text-sm text-zinc-300">Helps us categorize automatically</span>
              </div>
            </div>
          </div>
          <TemplateBlock />
        </div>
      </section>

      {/* SUBMISSION OPTIONS */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Submit Your Report" subtitle="Choose the method that works best for you." center />
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* GitHub */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-[#18181B] dark:border-zinc-700 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 bg-[#18181B] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Recommended</div>
              <Github size={48} className="text-[#18181B] dark:text-[#FAFAFA] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">GitHub Issues</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                Public tracking, community support, and transparent resolution.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[#18181B] dark:text-[#FAFAFA] hover:underline">
                Report on GitHub <ArrowRight size={16} />
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-all group">
              <Mail size={48} className="text-[#7C3AED] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Email Report</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                For bugs containing personal data or if you don't use GitHub.
              </p>
              <a href="mailto:bugs@timemark.app" className="inline-flex items-center gap-2 font-bold text-[#7C3AED] hover:underline">
                Email Bug Report <ArrowRight size={16} />
              </a>
            </div>

            {/* Security */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#F43F5E] transition-all group">
              <Lock size={48} className="text-[#F43F5E] mb-6" />
              <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">Security Issue</h3>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6">
                For vulnerabilities. Handled confidentially and with priority.
              </p>
              <a href="mailto:security@timemark.app" className="inline-flex items-center gap-2 font-bold text-[#F43F5E] hover:underline">
                Report Security Issue <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="What Happens Next?" subtitle="Our process for handling your report." center />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
                <Activity size={32} />
              </div>
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">1. Review</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">We verify the bug and assess severity (24h).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
                <Terminal size={32} />
              </div>
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">2. Fix</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">A developer works on the code and submits a fix.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">3. Test</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">We verify the fix on different systems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] mb-4">
                <Clock size={32} />
              </div>
              <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">4. Release</h4>
              <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Fix included in next update. You get credited!</p>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWN ISSUES */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B] border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Known Issues" subtitle="Check if your bug is already known before reporting." />
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#F59E0B]/10 text-[#F59E0B]">Working on fix</span>
                  <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">Data not showing / Hive error</h4>
                </div>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Workaround: Clear data via Settings.</p>
              </div>
              <a href="#" className="text-sm font-medium text-[#7C3AED] hover:underline whitespace-nowrap">View Issue #45</a>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500">Investigating</span>
                  <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA]">App opens on startup (Win 10)</h4>
                </div>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Workaround: Enable "Launch as Minimized".</p>
              </div>
              <a href="#" className="text-sm font-medium text-[#7C3AED] hover:underline whitespace-nowrap">View Issue #87</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 text-center bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank you for helping us improve.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Your time spent documenting issues and testing fixes is invaluable. We couldn't build a stable app without you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl font-bold transition-all shadow-lg shadow-violet-900/20">
              Report on GitHub
            </a>
            <a href="mailto:bugs@timemark.app" className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 rounded-xl font-bold transition-all">
              Email Bug Report
            </a>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
}