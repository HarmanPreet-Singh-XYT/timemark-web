'use client';

import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck, 
  Download, 
  Laptop, 
  Smartphone, 
  CloudOff, 
  Lock, 
  Zap,
  DollarSign
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

// Helper for Table Status Icons
const StatusIcon = ({ status }: { status: 'yes' | 'no' | 'partial' | 'dev' }) => {
  switch (status) {
    case 'yes':
      return <div className="flex items-center justify-center gap-1 text-[#14B8A6] font-medium"><CheckCircle2 size={18} /></div>;
    case 'no':
      return <div className="flex items-center justify-center gap-1 text-[#F43F5E] font-medium"><XCircle size={18} /></div>;
    case 'partial':
      return <div className="flex items-center justify-center gap-1 text-[#F59E0B] font-medium"><AlertTriangle size={18} /></div>;
    case 'dev':
      return <div className="flex items-center justify-center gap-1 text-[#7C3AED] font-medium"><RefreshCw size={18} /></div>;
    default:
      return null;
  }
};

const ComparisonRow = ({ feature, timemark, rescue, os, cold, focusme, isHeader = false }: { feature: string, timemark: any, rescue: any, os: any, cold: any, focusme: any, isHeader?: boolean }) => {
  if (isHeader) {
    return (
      <div className="grid grid-cols-6 gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 font-bold text-sm md:text-base text-[#18181B] dark:text-[#FAFAFA] items-center text-center sticky top-0 z-10">
        <div className="text-left pl-2">Feature</div>
        <div className="text-[#7C3AED] dark:text-[#8B5CF6]">TimeMark</div>
        <div>RescueTime</div>
        <div className="hidden md:block">OS Built-in</div>
        <div className="hidden lg:block">Cold Turkey</div>
        <div className="hidden lg:block">FocusMe</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 text-sm items-center text-center">
      <div className="text-left font-medium text-[#18181B] dark:text-[#FAFAFA] pl-2">{feature}</div>
      <div className="font-bold bg-[#7C3AED]/5 dark:bg-[#7C3AED]/10 py-2 rounded-lg text-[#18181B] dark:text-[#FAFAFA] border border-[#7C3AED]/10">
        {typeof timemark === 'string' ? timemark : <StatusIcon status={timemark} />}
      </div>
      <div className="text-[#52525B] dark:text-[#A1A1AA]">{typeof rescue === 'string' ? rescue : <StatusIcon status={rescue} />}</div>
      <div className="hidden md:block text-[#52525B] dark:text-[#A1A1AA]">{typeof os === 'string' ? os : <StatusIcon status={os} />}</div>
      <div className="hidden lg:block text-[#52525B] dark:text-[#A1A1AA]">{typeof cold === 'string' ? cold : <StatusIcon status={cold} />}</div>
      <div className="hidden lg:block text-[#52525B] dark:text-[#A1A1AA]">{typeof focusme === 'string' ? focusme : <StatusIcon status={focusme} />}</div>
    </div>
  );
};

const CompetitorCard = ({ title, advantages, disadvantages, summary, icon: Icon }: { title: string, advantages: string[], disadvantages: string[], summary: React.ReactNode, icon: any }) => (
  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[#52525B] dark:text-[#A1A1AA]">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA]">vs. {title}</h3>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-6">
      <div>
        <h4 className="font-bold text-[#14B8A6] mb-3 uppercase text-xs tracking-wider border-b border-[#14B8A6]/20 pb-2">TimeMark Advantages</h4>
        <ul className="space-y-2">
          {advantages.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <CheckCircle2 size={16} className="text-[#14B8A6] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-[#52525B] dark:text-[#A1A1AA] mb-3 uppercase text-xs tracking-wider border-b border-zinc-200 dark:border-zinc-700 pb-2">{title} Advantages</h4>
        <ul className="space-y-2">
          {disadvantages.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <div className="w-4 h-4 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center shrink-0 text-[10px] text-zinc-500">vs</div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-zinc-50 dark:bg-zinc-950 p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 text-sm leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
      {summary}
    </div>
  </div>
);

const FeatureHighlight = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/30 transition-colors">
    <div className="shrink-0">
      <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
        <Icon size={24} />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">{title}</h4>
      <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <ShieldCheck size={16} /> Honest Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            How TimeMark Compares
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            See how TimeMark stacks up against commercial screen time apps and built-in OS solutions.
          </p>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="min-w-[900px]">
              <ComparisonRow feature="" timemark="" rescue="" os="" cold="" focusme="" isHeader />
              
              <ComparisonRow feature="Price" timemark="Free" rescue="$12/mo" os="Free" cold="$39" focusme="$60" />
              <ComparisonRow feature="Privacy" timemark="100% Local" rescue="Cloud" os="Mixed" cold="Local" focusme="Local" />
              <ComparisonRow feature="Open Source" timemark="yes" rescue="no" os="no" cold="no" focusme="no" />
              <ComparisonRow feature="Auto Tracking" timemark="yes" rescue="yes" os="partial" cold="yes" focusme="yes" />
              <ComparisonRow feature="Productivity Score" timemark="yes" rescue="yes" os="no" cold="no" focusme="partial" />
              <ComparisonRow feature="Focus/Pomodoro" timemark="yes" rescue="partial" os="no" cold="yes" focusme="yes" />
              <ComparisonRow feature="Detailed Analytics" timemark="yes" rescue="yes" os="partial" cold="partial" focusme="partial" />
              <ComparisonRow feature="Distraction Blocking" timemark="dev" rescue="yes" os="partial" cold="yes" focusme="yes" />
              <ComparisonRow feature="Historical Data" timemark="Unlimited" rescue="Limited (Free)" os="30 Days" cold="Unlimited" focusme="Unlimited" />
              <ComparisonRow feature="No Account Req." timemark="yes" rescue="no" os="partial" cold="yes" focusme="yes" />
              <ComparisonRow feature="Multi-Platform" timemark="Windows" rescue="All" os="Built-in" cold="Win/Mac" focusme="Win/Mac" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center mt-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#14B8A6]"/> Full Support</span>
            <span className="flex items-center gap-1"><AlertTriangle size={16} className="text-[#F59E0B]"/> Partial/Limited</span>
            <span className="flex items-center gap-1"><XCircle size={16} className="text-[#F43F5E]"/> Not Available</span>
            <span className="flex items-center gap-1"><RefreshCw size={16} className="text-[#7C3AED]"/> In Development</span>
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISONS */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto space-y-16">
          
          <CompetitorCard
            title="RescueTime"
            icon={CloudOff}
            advantages={[
              "Completely Free (vs $78/year)",
              "Privacy-First: Local storage only",
              "No Account Required",
              "Built-in Pomodoro Timer",
              "Unlimited history for free users"
            ]}
            disadvantages={[
              "No mobile app (yet)",
              "No automatic AI classification",
              "Windows only (currently)"
            ]}
            summary={
              <p>
                <strong>The Verdict:</strong> Choose TimeMark if privacy and cost are your main concerns, or if you want Pomodoro integration without a subscription. Choose RescueTime if you need mobile tracking or cross-device syncing and are comfortable with cloud data storage.
              </p>
            }
          />

          <CompetitorCard
            title="Built-in Screen Time"
            icon={Laptop}
            advantages={[
              "Far more detailed analytics (Trends, Insights)",
              "Productivity Scoring (Productive vs. Distracting)",
              "Custom Categories",
              "Focus Mode Integration",
              "Unlimited History (OS usually limits to 7-30 days)"
            ]}
            disadvantages={[
              "Requires installation (Screen Time is built-in)",
              "No parental controls",
              "No cross-device sync (like iCloud)"
            ]}
            summary={
              <p>
                <strong>The Verdict:</strong> OS tools are great for basic awareness ("I used my laptop for 4 hours"). TimeMark is for <em>optimization</em> ("I was 75% productive and my peak hours were 9-11 AM").
              </p>
            }
          />

          <CompetitorCard
            title="Cold Turkey / FocusMe"
            icon={Lock}
            advantages={[
              "Completely Free (vs $39-60)",
              "Respectful Approach: Awareness over strict locks",
              "Better Analytics & Insights",
              "Open Source Transparency",
              "Focus Mode History"
            ]}
            disadvantages={[
              "Hardcore blocking (cannot create un-bypassable locks)",
              "Website-level blocking (browser extension coming soon)",
              "Scheduled blocks"
            ]}
            summary={
              <p>
                <strong>The Verdict:</strong> Cold Turkey is a blocking tool; TimeMark is an awareness tool. If you have zero self-control, use a blocker. If you want to understand your habits and build self-regulation, use TimeMark.
              </p>
            }
          />

        </div>
      </section>

      {/* WHY CHOOSE TIMEMARK */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">Why Choose TimeMark?</h2>
            <p className="text-[#52525B] dark:text-[#A1A1AA]">Six reasons we believe this is the best tool for digital autonomy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureHighlight 
              icon={DollarSign} 
              title="It's Free. Forever." 
              description="No trials. No premium tiers. No subscriptions. All features available to everyone, always."
            />
            <FeatureHighlight 
              icon={ShieldCheck} 
              title="Privacy Respected" 
              description="No cloud servers analyzing your habits. No data sold to advertisers. Just local tracking."
            />
            <FeatureHighlight 
              icon={RefreshCw} 
              title="Open Source" 
              description="Verify our privacy claims yourself. Contribute features. Fork the project if you need customization."
            />
            <FeatureHighlight 
              icon={Zap} 
              title="Comprehensive" 
              description="Not just a timer or a blocker. A complete ecosystem with tracking, analytics, and focus tools."
            />
            <FeatureHighlight 
              icon={Smartphone} 
              title="Flexible" 
              description="Set the rules that work for you. Adjust limits. Disable notifications. Make it yours."
            />
            <FeatureHighlight 
              icon={CheckCircle2} 
              title="Respectful" 
              description="We treat you like an autonomous adult, not a child who needs surveillance."
            />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8 text-center">Final Summary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#14B8A6]/5 rounded-2xl border border-[#14B8A6]/20">
              <h3 className="font-bold text-[#14B8A6] mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} /> Choose TimeMark if...
              </h3>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <li>• You want free, feature-rich tracking</li>
                <li>• You demand 100% local privacy</li>
                <li>• You want productivity insights, not just usage stats</li>
                <li>• You want an integrated Pomodoro timer</li>
                <li>• You value open-source transparency</li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-[#52525B] dark:text-[#A1A1AA] mb-4 flex items-center gap-2">
                <XCircle size={20} /> Choose Others if...
              </h3>
              <ul className="space-y-3 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <li>• You need mobile device tracking (RescueTime)</li>
                <li>• You need strict, unblockable locks (Cold Turkey)</li>
                <li>• You rely on AI auto-categorization</li>
                <li>• You need seamless cross-device cloud sync</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <p className="text-sm font-medium text-[#18181B] dark:text-[#FAFAFA]">
              <strong>Pro Tip:</strong> TimeMark plays well with others. Use it for Windows desktop tracking and combine it with RescueTime for mobile or Cold Turkey for blocking.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Ready to Try TimeMark?
          </h2>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] mb-10">
            Download for free from Microsoft Store and see the difference for yourself.
          </p>
          <button className="flex items-center justify-center gap-2 mx-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-0.5">
            <Download size={20} /> Get TimeMark Free
          </button>
        </div>
      </section>
        <Footer/>
    </div>
  );
}