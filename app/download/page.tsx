import React from 'react';
import { 
  Download, 
  Shield, 
  Zap, 
  RefreshCw, 
  Cloud, 
  Monitor, 
  Cpu, 
  HardDrive, 
  AlertTriangle, 
  Github, 
  Terminal, 
  Smartphone, 
  HelpCircle,
  Apple,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const DownloadPage: React.FC = () => {
  return (
    // Theme Wrapper - In a real app, these variables would be in global.css
    <div className="font-sans antialiased text-[var(--text-main)] bg-[var(--bg-page)] min-h-screen selection:bg-[var(--primary)] selection:text-white">
        <Navbar/>

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
          Download TimeMark for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-fuchsia-500">Windows</span>
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Free, open-source screen time tracking for Windows. Available exclusively on the Microsoft Store.
        </p>

        {/* Primary Download Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="group flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[var(--shadow-glow)] hover:-translate-y-1">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
            </svg>
            Get it from Microsoft Store
          </button>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-medium">
            <Shield className="w-4 h-4 text-[var(--success)]" />
            <span>Verified & Safe</span>
            <span className="mx-1 opacity-50">•</span>
            <span>Version 1.0.2</span>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Minimum Requirements</h3>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm">
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>OS</span> <span className="font-medium text-[var(--text-main)]">Windows 10 (v1809+) or 11</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>RAM</span> <span className="font-medium text-[var(--text-main)] tabular-nums">4 GB</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>Storage</span> <span className="font-medium text-[var(--text-main)] tabular-nums">200 MB</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>Processor</span> <span className="font-medium text-[var(--text-main)] tabular-nums">1 GHz or faster</span>
                </li>
                <li className="flex justify-between">
                  <span>Arch</span> <span className="font-medium text-[var(--text-main)]">x64, ARM64</span>
                </li>
              </ul>
            </div>
            
            {/* Recommended */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Recommended</h3>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm">
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>OS</span> <span className="font-medium text-[var(--text-main)]">Windows 11</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>RAM</span> <span className="font-medium text-[var(--text-main)] tabular-nums">8 GB+</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span>Storage</span> <span className="font-medium text-[var(--text-main)] tabular-nums">500 MB (Data)</span>
                </li>
                <li className="flex justify-between">
                  <span>Display</span> <span className="font-medium text-[var(--text-main)] tabular-nums">1920×1080+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Microsoft Store */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Benefits of Microsoft Store Distribution</h2>
          <p className="text-[var(--text-muted)]">We chose the Store to ensure the best experience for our users.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={<RefreshCw className="w-6 h-6 text-[var(--primary)]" />}
            title="Automatic Updates"
            desc="Never manually download updates again. New features and bug fixes install automatically in the background."
          />
          <BenefitCard 
            icon={<Shield className="w-6 h-6 text-[var(--success)]" />}
            title="Security & Trust"
            desc="Apps undergo security review and are sandboxed. You can trust TimeMark is safe, verified, and malware-free."
          />
          <BenefitCard 
            icon={<Zap className="w-6 h-6 text-[var(--warning)]" />}
            title="Easy Installation"
            desc="One-click install. No installer wizards, system permission errors, or bundled software garbage."
          />
          <BenefitCard 
            icon={<Cloud className="w-6 h-6 text-sky-500" />}
            title="Automatic Backup"
            desc="Settings sync to new devices via your Microsoft account (usage data remains local for privacy)."
          />
        </div>
      </section>

      {/* Installation Steps */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">How to Install</h2>
          <div className="space-y-6">
            <Step number={1} title="Click the button" desc="Click the 'Get it from Microsoft Store' button at the top of this page." />
            <Step number={2} title="Redirect" desc="You'll be redirected to the official Microsoft Store page." />
            <Step number={3} title="Install" desc="Click 'Get' or 'Install' (you may need to sign in with your Microsoft account)." />
            <Step number={4} title="Launch" desc="Wait for the download, then launch TimeMark from your Start menu." />
            <Step number={5} title="Permissions" desc="Grant necessary permissions for application tracking when prompted." />
            <Step number={6} title="Track" desc="Start tracking! TimeMark works immediately with zero configuration." />
          </div>
        </div>
      </section>

      {/* First Launch & Troubleshooting Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* First Launch */}
        <div>
          <h2 className="text-2xl font-bold mb-6">First Launch Setup</h2>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <p className="text-[var(--text-muted)] mb-6">
              When you first launch TimeMark, you don't need to configure anything—tracking starts automatically. However, we recommend:
            </p>
            <ul className="space-y-4">
              <CheckItem title="Review Applications" desc="Open Applications page and verify automatic categorization." />
              <CheckItem title="Mark Productive Apps" desc="Identify which apps count as productive for your workflow." />
              <CheckItem title="Set Your First Limit" desc="Try setting a daily screen time limit to build awareness." />
              <CheckItem title="Try Focus Mode" desc="Complete one Pomodoro session to familiarize yourself." />
            </ul>
            <div className="mt-6 p-4 bg-[var(--bg-page)] rounded-lg border border-[var(--border)] text-sm text-[var(--text-muted)]">
              Within a day, you'll have enough data to see meaningful insights.
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            <TroubleCard 
              issue="Microsoft Store won't open" 
              solution="Restart Windows, sign out/in to Microsoft account, or run Windows Update."
            />
            <TroubleCard 
              issue="Installation fails or stuck at 0%" 
              solution="Check internet connection, ensure sufficient storage, and disable VPN if active."
            />
            <TroubleCard 
              issue="App not in Start Menu" 
              solution="Wait a few minutes, restart computer, or check Microsoft Store → Library."
            />
          </div>
        </div>
      </section>

      {/* Version & GitHub */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-[var(--border)]">
            <h3 className="font-bold text-lg mb-4">Version Information</h3>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <div className="flex justify-between"><span>Current Version</span> <span className="font-mono text-[var(--text-main)]">v1.0.2</span></div>
              <div className="flex justify-between"><span>Release Date</span> <span className="font-mono text-[var(--text-main)]">Oct 24, 2023</span></div>
              <div className="flex justify-between"><span>File Size</span> <span className="font-mono text-[var(--text-main)]">~50 MB</span></div>
            </div>
            <div className="mt-6">
              <p className="font-medium text-sm mb-2">What's New:</p>
              <ul className="list-disc list-inside text-sm text-[var(--text-muted)] space-y-1">
                <li>Dark mode contrast improvements</li>
                <li>Fixed crash on system wake</li>
                <li>Performance optimization for large datasets</li>
              </ul>
              <a href="#" className="inline-block mt-4 text-sm font-medium text-[var(--primary)] hover:underline">Read full changelog</a>
            </div>
          </div>

          <div className="p-8 md:w-1/2 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50">
            <h3 className="font-bold text-lg mb-2">Advanced Users</h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Prefer manual installation? You can download release builds directly from GitHub. This requires manual updates.
            </p>
            <button className="flex items-center justify-center gap-2 w-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-page)] text-[var(--text-main)] py-3 rounded-lg font-medium transition-colors">
              <Github className="w-5 h-5" />
              View GitHub Releases
            </button>
            <p className="text-xs text-[var(--warning)] mt-4">
              Note: May include beta versions. Use at your own discretion.
            </p>
          </div>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Coming Soon: Other Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PlatformCard 
              icon={<Apple className="w-6 h-6" />}
              title="macOS"
              desc="Built with Flutter, but requires native integration with macOS screen time APIs. Developers welcome!"
            />
            <PlatformCard 
              icon={<Terminal className="w-6 h-6" />}
              title="Linux"
              desc="Technically feasible. The challenge is the variety of desktop environments. Community contributions welcome!"
            />
            <PlatformCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile"
              desc="Focused on desktop first. Mobile tracking has strict OS limitations but is considered for the future."
            />
          </div>
        </div>
      </section>

      {/* Footer / Community */}
      <footer className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <FooterLink icon={<Monitor className="w-4 h-4" />} label="Documentation" />
            <FooterLink icon={<HelpCircle className="w-4 h-4" />} label="FAQ" />
            <FooterLink icon={<Github className="w-4 h-4" />} label="Report Issue" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-page)] border border-[var(--border)] rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[var(--shadow-glow)] hover:-translate-y-1 mb-4">
            Get it from Microsoft Store
          </button>
          <p className="text-sm font-medium text-[var(--text-muted)] flex items-center justify-center gap-2">
            <span>100% Free</span> • <span>No Account Required</span> • <span>Privacy First</span>
          </p>
        </div>
      </footer>
      <Footer/>
    </div>
  );
};

/* --- Sub Components --- */

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group">
    <div className="mb-4 bg-[var(--bg-page)] w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-[var(--text-main)]">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
  </div>
);

const Step = ({ number, title, desc }: { number: number, title: string, desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--primary)] text-sm">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-[var(--text-main)]">{title}</h4>
      <p className="text-[var(--text-muted)] text-sm mt-1">{desc}</p>
    </div>
  </div>
);

const CheckItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-3">
    <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-[var(--text-main)] text-sm">{title}</h4>
      <p className="text-[var(--text-muted)] text-xs mt-0.5">{desc}</p>
    </div>
  </div>
);

const TroubleCard = ({ issue, solution }: { issue: string, solution: string }) => (
  <div className="bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl">
    <div className="flex items-center gap-2 mb-2 text-[var(--danger)]">
      <AlertTriangle className="w-4 h-4" />
      <h4 className="font-semibold text-sm">Issue: {issue}</h4>
    </div>
    <p className="text-sm text-[var(--text-muted)] ml-6 pl-2 border-l-2 border-[var(--border)]">
      {solution}
    </p>
  </div>
);

const PlatformCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-page)] opacity-80 hover:opacity-100 transition-opacity">
    <div className="flex items-center gap-3 mb-3 text-[var(--text-muted)]">
      {icon}
      <h3 className="font-bold">{title}</h3>
    </div>
    <p className="text-sm text-[var(--text-muted)]">{desc}</p>
  </div>
);

const FooterLink = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)] text-sm font-medium transition-colors">
    {icon}
    {label}
  </a>
);

export default DownloadPage;