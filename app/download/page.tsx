"use client"
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
import { useRouter } from 'next/navigation';
import { releases } from '../changelog-data';

const DownloadPage: React.FC = () => {
  const router = useRouter();
  
  // Get the latest release data
  const latestRelease = releases.find(r => r.isLatest) || releases[0];
  
  // Extract version number from version string (e.g., "v1.2.1" -> "1.2.1")
  const versionNumber = latestRelease.version.replace('v', '');
  
  // Format date to a shorter format if needed
  const releaseDate = latestRelease.date;
  
  // Get the latest changes for display
  const latestChanges = [
    ...(latestRelease.features || []).slice(0, 2),
    ...(latestRelease.improvements || []).slice(0, 2),
    ...(latestRelease.fixes || []).slice(0, 2)
  ].slice(0, 3);

  return (
    // Theme Wrapper - In a real app, these variables would be in global.css
    <div className="font-sans antialiased text-[var(--text-main)] bg-[var(--bg-page)] min-h-screen selection:bg-[var(--primary)] selection:text-white overflow-x-hidden">
        <Navbar/>

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 text-center max-w-5xl mx-auto">
        {/* Enhanced gradient orbs with animation */}
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/20 dark:bg-[#8B5CF6]/10 blur-[120px] rounded-full z-10 pointer-events-none animate-pulse" />
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-fuchsia-500/10 dark:bg-fuchsia-500/5 blur-[100px] rounded-full z-10 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[15%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[80px] rounded-full z-10 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-main)] animate-[fadeInUp_0.6s_ease-out]">
            Download TimeMark for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-fuchsia-500 to-[var(--primary)] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Windows</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            Free, open-source screen time tracking for Windows. Available exclusively on the Microsoft Store.
          </p>

          {/* Primary Download Button */}
          <div className="flex flex-col items-center gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <button className="group relative flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[var(--shadow-glow)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10 group-hover:scale-110 transition-transform" aria-hidden="true">
                <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
              </svg>
              <span onClick={()=>router.push("https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA")} className="relative z-10">Get it from Microsoft Store</span>
            </button>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-medium">
              <Shield className="w-4 h-4 text-[var(--success)] animate-[pulse_2s_ease-in-out_infinite]" />
              <span>Verified & Safe</span>
              <span className="mx-1 opacity-50">•</span>
              <span>Version {versionNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="px-6 py-12 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-[var(--primary)]/30 transition-all duration-300 group">
          <h2 className="text-2xl font-bold mb-6 group-hover:text-[var(--primary)] transition-colors">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum */}
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">Minimum Requirements</h3>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm">
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">OS</span> 
                  <span className="font-medium text-[var(--text-main)]">Windows 10 (v1809+) or 11</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">RAM</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">4 GB</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Storage</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">200 MB</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Processor</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">1 GHz or faster</span>
                </li>
                <li className="flex justify-between hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Arch</span> 
                  <span className="font-medium text-[var(--text-main)]">x64, ARM64</span>
                </li>
              </ul>
            </div>
            
            {/* Recommended */}
            <div className="space-y-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/5 to-fuchsia-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4 relative z-10">Recommended</h3>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm relative z-10">
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">OS</span> 
                  <span className="font-medium text-[var(--text-main)]">Windows 11</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">RAM</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">6 GB+</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Storage</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">500 MB (Data)</span>
                </li>
                <li className="flex justify-between hover:border-[var(--primary)]/50 transition-colors group/item">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Display</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">1920×1080</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Microsoft Store */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-3xl font-bold mb-4">The Benefits of Microsoft Store Distribution</h2>
          <p className="text-[var(--text-muted)]">We chose the Store to ensure the best experience for our users.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={<RefreshCw className="w-6 h-6 text-[var(--primary)]" />}
            title="Automatic Updates"
            desc="Never manually download updates again. New features and bug fixes install automatically in the background."
            delay="0s"
          />
          <BenefitCard 
            icon={<Shield className="w-6 h-6 text-[var(--success)]" />}
            title="Security & Trust"
            desc="Apps undergo security review and are sandboxed. You can trust TimeMark is safe, verified, and malware-free."
            delay="0.1s"
          />
          <BenefitCard 
            icon={<Zap className="w-6 h-6 text-[var(--warning)]" />}
            title="Easy Installation"
            desc="One-click install. No installer wizards, system permission errors, or bundled software garbage."
            delay="0.2s"
          />
          <BenefitCard 
            icon={<Cloud className="w-6 h-6 text-sky-500" />}
            title="Automatic Backup"
            desc="Settings sync to new devices via your Microsoft account (usage data remains local for privacy)."
            delay="0.3s"
          />
        </div>
      </section>

      {/* Installation Steps */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-fuchsia-500/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center animate-[fadeInUp_0.6s_ease-out]">How to Install</h2>
          <div className="space-y-6">
            <Step number={1} title="Click the button" desc="Click the 'Get it from Microsoft Store' button at the top of this page." delay="0s" />
            <Step number={2} title="Redirect" desc="You'll be redirected to the official Microsoft Store page." delay="0.1s" />
            <Step number={3} title="Install" desc="Click 'Get' or 'Install' (you may need to sign in with your Microsoft account)." delay="0.2s" />
            <Step number={4} title="Launch" desc="Wait for the download, then launch TimeMark from your Start menu." delay="0.3s" />
            <Step number={5} title="Permissions" desc="Grant necessary permissions for application tracking when prompted." delay="0.4s" />
            <Step number={6} title="Track" desc="Start tracking! TimeMark works immediately with zero configuration." delay="0.5s" />
          </div>
        </div>
      </section>

      {/* First Launch & Troubleshooting Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* First Launch */}
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="text-2xl font-bold mb-6">First Launch Setup</h2>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[var(--primary)]/30 transition-all duration-300">
            <p className="text-[var(--text-muted)] mb-6">
              When you first launch TimeMark, you don't need to configure anything—tracking starts automatically. However, we recommend:
            </p>
            <ul className="space-y-4">
              <CheckItem title="Review Applications" desc="Open Applications page and verify automatic categorization." delay="0s" />
              <CheckItem title="Mark Productive Apps" desc="Identify which apps count as productive for your workflow." delay="0.1s" />
              <CheckItem title="Set Your First Limit" desc="Try setting a daily screen time limit to build awareness." delay="0.2s" />
              <CheckItem title="Try Focus Mode" desc="Complete one Pomodoro session to familiarize yourself." delay="0.3s" />
            </ul>
            <div className="mt-6 p-4 bg-[var(--bg-page)] rounded-lg border border-[var(--border)] text-sm text-[var(--text-muted)] hover:border-[var(--primary)]/30 transition-colors">
              Within a day, you'll have enough data to see meaningful insights.
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            <TroubleCard 
              issue="Microsoft Store won't open" 
              solution="Restart Windows, sign out/in to Microsoft account, or run Windows Update."
              delay="0s"
            />
            <TroubleCard 
              issue="Installation fails or stuck at 0%" 
              solution="Check internet connection, ensure sufficient storage, and disable VPN if active."
              delay="0.1s"
            />
            <TroubleCard 
              issue="App not in Start Menu" 
              solution="Wait a few minutes, restart computer, or check Microsoft Store → Library."
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Version & GitHub */}
      <section className="px-6 py-12 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-all duration-300 group">
          
          <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-[var(--border)] hover:bg-[var(--bg-page)]/50 transition-colors">
            <h3 className="font-bold text-lg mb-4 group-hover:text-[var(--primary)] transition-colors">Version Information</h3>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <div className="flex justify-between hover:text-[var(--text-main)] transition-colors">
                <span>Current Version</span> 
                <span className="font-mono text-[var(--text-main)]">{latestRelease.version}</span>
              </div>
              <div className="flex justify-between hover:text-[var(--text-main)] transition-colors">
                <span>Release Date</span> 
                <span className="font-mono text-[var(--text-main)]">{releaseDate}</span>
              </div>
              {latestRelease.size ? (
                <div className="flex justify-between hover:text-[var(--text-main)] transition-colors">
                  <span>File Size</span> 
                  <span className="font-mono text-[var(--text-main)]">~{latestRelease.size} MB</span>
                </div>
              ):(
                <div className="flex justify-between hover:text-[var(--text-main)] transition-colors">
                  <span>File Size</span> 
                  <span className="font-mono text-[var(--text-main)]">~30 MB</span>
                </div>
              )}
            </div>
            <div className="mt-6">
              <p className="font-medium text-sm mb-2">What's New:</p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {latestChanges.length > 0 ? (
                  latestChanges.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-2 hover:text-[var(--text-main)] transition-colors">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                      <span className="flex-1">{change}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start gap-2 hover:text-[var(--text-main)] transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                    <span className="flex-1">See full changelog for details</span>
                  </li>
                )}
              </ul>
              <a href="/changelog" className="inline-block mt-4 text-sm font-medium text-[var(--primary)] hover:underline hover:scale-105 inline-flex items-center gap-1 transition-all group/link">
                Read full changelog
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="p-8 md:w-1/2 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900/70 transition-colors">
            <h3 className="font-bold text-lg mb-2">Advanced Users</h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Prefer manual installation? You can download release builds directly from GitHub. This requires manual updates.
            </p>
            <button onClick={() => router.push('https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/releases')} className="flex items-center justify-center gap-2 w-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-page)] hover:border-[var(--primary)] text-[var(--text-main)] py-3 rounded-lg font-medium transition-all duration-300 group/btn hover:scale-[1.02]">
              <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              View GitHub Releases
            </button>
            <p className="text-xs text-[var(--warning)] mt-4 animate-pulse">
              Note: May include beta versions. Use at your own discretion.
            </p>
          </div>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-t border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold mb-8 animate-[fadeInUp_0.6s_ease-out]">Coming Soon: Other Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PlatformCard 
              icon={<Apple className="w-6 h-6" />}
              title="macOS"
              desc="Built with Flutter, but requires native integration with macOS screen time APIs. Developers welcome!"
              delay="0s"
            />
            <PlatformCard 
              icon={<Terminal className="w-6 h-6" />}
              title="Linux"
              desc="Technically feasible. The challenge is the variety of desktop environments. Community contributions welcome!"
              delay="0.1s"
            />
            <PlatformCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile"
              desc="Focused on desktop first. Mobile tracking has strict OS limitations but is considered for the future."
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Footer / Community */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Help Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FooterLink link='/docs' icon={<Monitor className="w-4 h-4" />} label="Documentation" />
            <FooterLink link='/faq' icon={<HelpCircle className="w-4 h-4" />} label="FAQ" />
            <FooterLink link='/report-bug' icon={<Github className="w-4 h-4" />} label="Report Issue" />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-fuchsia-500 mb-6">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-main)]">
              Ready to Take Control?
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Start managing your time more effectively with TimeMark
            </p>
            
            <button onClick={()=>router.push("https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA")} className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary)] to-fuchsia-600 hover:from-[var(--primary-hover)] hover:to-fuchsia-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[var(--primary)]/25 hover:-translate-y-0.5 mb-6">
              Get it from Microsoft Store
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
                100% Free
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
                No Account Required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
                Privacy First
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

/* --- Sub Components --- */

const BenefitCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) => (
  <div 
    className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <div className="mb-4 bg-[var(--bg-page)] w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
  </div>
);

const Step = ({ number, title, desc, delay }: { number: number, title: string, desc: string, delay: string }) => (
  <div 
    className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300 animate-[fadeInUp_0.6s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--primary)] text-sm group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">{title}</h4>
      <p className="text-[var(--text-muted)] text-sm mt-1">{desc}</p>
    </div>
  </div>
);

const CheckItem = ({ title, desc, delay }: { title: string, desc: string, delay: string }) => (
  <div 
    className="flex gap-3 group hover:translate-x-2 transition-transform duration-300 animate-[fadeInUp_0.6s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
    <div>
      <h4 className="font-semibold text-[var(--text-main)] text-sm group-hover:text-[var(--primary)] transition-colors">{title}</h4>
      <p className="text-[var(--text-muted)] text-xs mt-0.5">{desc}</p>
    </div>
  </div>
);

const TroubleCard = ({ issue, solution, delay }: { issue: string, solution: string, delay: string }) => (
  <div 
    className="bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl hover:border-[var(--danger)]/50 hover:shadow-lg transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_both] group"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-2 mb-2 text-[var(--danger)]">
      <AlertTriangle className="w-4 h-4 group-hover:animate-pulse" />
      <h4 className="font-semibold text-sm">Issue: {issue}</h4>
    </div>
    <p className="text-sm text-[var(--text-muted)] ml-6 pl-2 border-l-2 border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
      {solution}
    </p>
  </div>
);

const PlatformCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) => (
  <div 
    className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-page)] opacity-80 hover:opacity-100 transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-lg hover:-translate-y-1 animate-[fadeInUp_0.8s_ease-out_both] group"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-3 mb-3 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
      <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform">{icon}</div>
      <h3 className="font-bold">{title}</h3>
    </div>
    <p className="text-sm text-[var(--text-muted)]">{desc}</p>
  </div>
);

const FooterLink = ({ icon, label, link }: { icon: React.ReactNode, label: string, link: string }) => (
  <a href={link} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)] text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 group">
    <span className="group-hover:scale-110 transition-transform">{icon}</span>
    {label}
  </a>
);

export default DownloadPage;