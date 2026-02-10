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
        {/* Enhanced gradient orbs with improved animation */}
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#7C3AED]/30 via-fuchsia-500/20 to-cyan-500/20 dark:from-[#8B5CF6]/15 dark:via-fuchsia-500/10 dark:to-cyan-500/10 blur-[140px] rounded-full z-10 pointer-events-none animate-[orbPulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-500/20 to-purple-600/15 dark:from-fuchsia-500/10 dark:to-purple-600/5 blur-[120px] rounded-full z-10 pointer-events-none animate-[orbFloat_10s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/20 to-blue-500/15 dark:from-cyan-500/10 dark:to-blue-500/5 blur-[100px] rounded-full z-10 pointer-events-none animate-[orbRotate_12s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        
        {/* Additional sparkle effects */}
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[var(--primary)] rounded-full z-10 animate-[twinkle_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-fuchsia-400 rounded-full z-10 animate-[twinkle_4s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] left-[15%] w-1 h-1 bg-cyan-400 rounded-full z-10 animate-[twinkle_5s_ease-in-out_infinite]" style={{ animationDelay: '2.5s' }} />
        
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-main)] animate-[fadeInUp_0.6s_ease-out] drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-fuchsia-500 to-cyan-500 bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite] drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">Scolect</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            Free, open-source screen time tracking for desktop. Available on Windows and macOS.
          </p>

          {/* Platform Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            {/* Windows Download */}
            <button 
              onClick={() => router.push("https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA")}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] via-fuchsia-600 to-[var(--primary)] bg-[length:200%_auto] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-[0_10px_40px_rgba(124,58,237,0.4)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.6)] hover:-translate-y-2 hover:scale-[1.05] overflow-hidden animate-[gradientShift_3s_ease-in-out_infinite]"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[var(--primary)]/50 via-fuchsia-500/50 to-cyan-500/50 blur-xl -z-10" />
              
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" aria-hidden="true">
                <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
              </svg>
              <span className="relative z-10">Download for Windows</span>
            </button>

            {/* macOS Download */}
            <button 
              onClick={() => router.push("https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases")}
              className="group relative flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--text-main)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-lg hover:shadow-[0_20px_60px_rgba(124,58,237,0.3)] hover:-translate-y-2 hover:scale-[1.05] overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <Apple className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              <span className="relative z-10">Download for macOS</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-[var(--text-muted)] font-medium animate-[fadeIn_1s_ease-out_0.8s_both]">
            <Shield className="w-4 h-4 text-[var(--success)] animate-[pulse_3s_ease-in-out_infinite]" />
            <span>Verified & Safe</span>
            <span className="mx-1 opacity-50">•</span>
            <span>Version {versionNumber}</span>
            <span className="mx-1 opacity-50">•</span>
            <span>Free & Open Source</span>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="px-6 py-12 max-w-5xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
        <div className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.2)] hover:border-[var(--primary)]/50 transition-all duration-500 group overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-2xl font-bold mb-6 group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">System Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* Windows Requirements */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[var(--primary)]" aria-hidden="true">
                  <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
                </svg>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Windows</h3>
              </div>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm">
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:translate-x-1 animate-[slideInLeft_0.6s_ease-out_0.1s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">OS</span> 
                  <span className="font-medium text-[var(--text-main)]">Windows 10 (v1809+) or 11</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:translate-x-1 animate-[slideInLeft_0.6s_ease-out_0.2s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">RAM</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">4 GB minimum</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:translate-x-1 animate-[slideInLeft_0.6s_ease-out_0.3s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Storage</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">200 MB</span>
                </li>
                <li className="flex justify-between hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:translate-x-1 animate-[slideInLeft_0.6s_ease-out_0.4s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Architecture</span> 
                  <span className="font-medium text-[var(--text-main)]">x64, ARM64</span>
                </li>
              </ul>
            </div>
            
            {/* macOS Requirements */}
            <div className="space-y-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/10 via-fuchsia-500/10 to-cyan-500/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="flex items-center gap-2 mb-4">
                <Apple className="w-5 h-5 text-[var(--primary)]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">macOS</h3>
              </div>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm relative z-10">
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:-translate-x-1 animate-[slideInRight_0.6s_ease-out_0.1s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">OS</span> 
                  <span className="font-medium text-[var(--text-main)]">macOS 10.15 or later</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:-translate-x-1 animate-[slideInRight_0.6s_ease-out_0.2s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">RAM</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">4 GB minimum</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2 hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:-translate-x-1 animate-[slideInRight_0.6s_ease-out_0.3s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Storage</span> 
                  <span className="font-medium text-[var(--text-main)] tabular-nums">200 MB</span>
                </li>
                <li className="flex justify-between hover:border-[var(--primary)]/50 transition-all duration-300 group/item hover:-translate-x-1 animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                  <span className="group-hover/item:text-[var(--text-main)] transition-colors">Architecture</span> 
                  <span className="font-medium text-[var(--text-main)]">Intel, Apple Silicon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recommended specs */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">Recommended for Best Experience</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--primary)]" />
                <span>6 GB+ RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[var(--primary)]" />
                <span>500 MB for data</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[var(--primary)]" />
                <span>1920×1080 display</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Distribution */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-3xl font-bold mb-4">Why Download From Official Sources</h2>
          <p className="text-[var(--text-muted)]">We ensure the best experience through trusted distribution channels.</p>
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
            desc="Apps are verified and signed. You can trust Scolect is safe, verified, and malware-free."
            delay="0.1s"
          />
          <BenefitCard 
            icon={<Zap className="w-6 h-6 text-[var(--warning)]" />}
            title="Easy Installation"
            desc="One-click install. No complex installer wizards, permission errors, or bundled software."
            delay="0.2s"
          />
          <BenefitCard 
            icon={<Cloud className="w-6 h-6 text-sky-500" />}
            title="Privacy First"
            desc="All usage data remains local on your device. Your privacy is our top priority."
            delay="0.3s"
          />
        </div>
      </section>

      {/* Installation Steps */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-fuchsia-500/5 pointer-events-none" />
        
        {/* Animated particles */}
        <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-[var(--primary)]/40 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[10%] w-1.5 h-1.5 bg-fuchsia-400/40 rounded-full animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-1 h-1 bg-cyan-400/40 rounded-full animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center animate-[fadeInUp_0.6s_ease-out]">How to Install</h2>
          
          {/* Platform Tabs */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Windows Installation */}
            <div className="bg-[var(--bg-page)] rounded-xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[var(--primary)]" aria-hidden="true">
                  <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
                </svg>
                <h3 className="font-bold text-lg">Windows</h3>
              </div>
              <div className="space-y-4">
                <Step number={1} title="Click Download" desc="Click the 'Download for Windows' button above." delay="0s" />
                <Step number={2} title="Open Store" desc="You'll be redirected to Microsoft Store." delay="0.1s" />
                <Step number={3} title="Install" desc="Click 'Get' or 'Install' to download." delay="0.2s" />
                <Step number={4} title="Launch" desc="Open Scolect from your Start menu." delay="0.3s" />
              </div>
            </div>

            {/* macOS Installation */}
            <div className="bg-[var(--bg-page)] rounded-xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-6">
                <Apple className="w-5 h-5 text-[var(--primary)]" />
                <h3 className="font-bold text-lg">macOS</h3>
              </div>
              <div className="space-y-4">
                <Step number={1} title="Download DMG" desc="Click 'Download for macOS' to get the installer." delay="0s" />
                <Step number={2} title="Open DMG" desc="Open the downloaded .dmg file." delay="0.1s" />
                <Step number={3} title="Drag to Applications" desc="Drag Scolect to your Applications folder." delay="0.2s" />
                <Step number={4} title="Launch" desc="Open Scolect from Applications or Spotlight." delay="0.3s" />
              </div>
            </div>
          </div>

          {/* Common steps */}
          <div className="mt-8 p-6 bg-[var(--bg-page)] rounded-xl border border-[var(--border)]">
            <h3 className="font-bold mb-4">After Installation (All Platforms)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Step number={5} title="Grant Permissions" desc="Allow necessary permissions for application tracking when prompted." delay="0.4s" />
              <Step number={6} title="Start Tracking" desc="Scolect works immediately with zero configuration required." delay="0.5s" />
            </div>
          </div>
        </div>
      </section>

      {/* First Launch & Troubleshooting Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* First Launch */}
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="text-2xl font-bold mb-6">First Launch Setup</h2>
          <div className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-lg hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)] hover:border-[var(--primary)]/50 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
            
            <p className="text-[var(--text-muted)] mb-6">
              When you first launch Scolect, tracking starts automatically. However, we recommend:
            </p>
            <ul className="space-y-4">
              <CheckItem title="Review Applications" desc="Open Applications page and verify automatic categorization." delay="0s" />
              <CheckItem title="Mark Productive Apps" desc="Identify which apps count as productive for your workflow." delay="0.1s" />
              <CheckItem title="Set Your First Limit" desc="Try setting a daily screen time limit to build awareness." delay="0.2s" />
              <CheckItem title="Try Focus Mode" desc="Complete one Pomodoro session to familiarize yourself." delay="0.3s" />
            </ul>
            <div className="mt-6 p-4 bg-[var(--bg-page)] rounded-lg border border-[var(--border)] text-sm text-[var(--text-muted)] hover:border-[var(--primary)]/30 hover:shadow-inner transition-all duration-300">
              Within a day, you'll have enough data to see meaningful insights.
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            <TroubleCard 
              issue="Installation fails or stuck" 
              solution="Check internet connection, ensure sufficient storage, and disable VPN if active."
              delay="0s"
            />
            <TroubleCard 
              issue="App won't launch" 
              solution="Restart your computer and try again. Check if you have the required OS version."
              delay="0.1s"
            />
            <TroubleCard 
              issue="Permission denied (macOS)" 
              solution="Go to System Preferences → Security & Privacy → Privacy, and grant accessibility permissions."
              delay="0.2s"
            />
            <TroubleCard 
              issue="App not tracking correctly" 
              solution="Ensure all required permissions are granted. Restart the app after granting permissions."
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Version & GitHub */}
      <section className="px-6 py-12 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
        <div className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-[0_20px_60px_rgba(124,58,237,0.2)] transition-all duration-500 group">
          
          {/* Connecting line animation */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />
          
          <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-[var(--border)] hover:bg-[var(--bg-page)]/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="font-bold text-lg mb-4 group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">Version Information</h3>
            <div className="space-y-2 text-sm text-[var(--text-muted)] relative z-10">
              <div className="flex justify-between hover:text-[var(--text-main)] transition-colors duration-300 p-2 rounded hover:bg-[var(--bg-card)] group/item">
                <span className="group-hover/item:translate-x-1 transition-transform duration-300">Current Version</span> 
                <span className="font-mono text-[var(--text-main)] group-hover/item:-translate-x-1 transition-transform duration-300">{latestRelease.version}</span>
              </div>
              <div className="flex justify-between hover:text-[var(--text-main)] transition-colors duration-300 p-2 rounded hover:bg-[var(--bg-card)] group/item">
                <span className="group-hover/item:translate-x-1 transition-transform duration-300">Release Date</span> 
                <span className="font-mono text-[var(--text-main)] group-hover/item:-translate-x-1 transition-transform duration-300">{releaseDate}</span>
              </div>
              {latestRelease.size ? (
                <div className="flex justify-between hover:text-[var(--text-main)] transition-colors duration-300 p-2 rounded hover:bg-[var(--bg-card)] group/item">
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">File Size</span> 
                  <span className="font-mono text-[var(--text-main)] group-hover/item:-translate-x-1 transition-transform duration-300">~{latestRelease.size} MB</span>
                </div>
              ):(
                <div className="flex justify-between hover:text-[var(--text-main)] transition-colors duration-300 p-2 rounded hover:bg-[var(--bg-card)] group/item">
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">File Size</span> 
                  <span className="font-mono text-[var(--text-main)] group-hover/item:-translate-x-1 transition-transform duration-300">~30 MB</span>
                </div>
              )}
            </div>
            <div className="mt-6 relative z-10">
              <p className="font-medium text-sm mb-2">What's New:</p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {latestChanges.length > 0 ? (
                  latestChanges.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-2 hover:text-[var(--text-main)] transition-all duration-300 group/change hover:translate-x-1">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0 group-hover/change:scale-150 transition-transform duration-300" />
                      <span className="flex-1">{change}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start gap-2 hover:text-[var(--text-main)] transition-all duration-300 group/change hover:translate-x-1">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0 group-hover/change:scale-150 transition-transform duration-300" />
                    <span className="flex-1">See full changelog for details</span>
                  </li>
                )}
              </ul>
              <a href="/changelog" className="inline-block mt-4 text-sm font-medium text-[var(--primary)] hover:underline hover:scale-105 inline-flex items-center gap-1 transition-all group/link">
                Read full changelog
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="p-8 md:w-1/2 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900/70 transition-all duration-500 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="font-bold text-lg mb-2 relative z-10">Advanced Users</h3>
            <p className="text-sm text-[var(--text-muted)] mb-6 relative z-10">
              Prefer manual installation? You can download release builds directly from GitHub. This requires manual updates.
            </p>
            <button onClick={() => router.push('https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases')} className="relative flex items-center justify-center gap-2 w-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-page)] hover:border-[var(--primary)] text-[var(--text-main)] py-3 rounded-lg font-medium transition-all duration-500 group/btn hover:scale-[1.02] hover:shadow-lg overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-500 relative z-10" />
              <span className="relative z-10">View GitHub Releases</span>
            </button>
            <p className="text-xs text-[var(--warning)] mt-4 animate-[pulse_3s_ease-in-out_infinite] relative z-10">
              Note: May include beta versions. Use at your own discretion.
            </p>
          </div>

        </div>
      </section>

      {/* Coming Soon / Future Platforms */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-t border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none animate-[orbPulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none animate-[orbPulse_12s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold mb-8 animate-[fadeInUp_0.6s_ease-out]">Platform Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PlatformCard 
              icon={<Terminal className="w-6 h-6" />}
              title="Linux"
              desc="Coming soon! We're working on Linux support. The challenge is supporting various desktop environments. Community contributions welcome!"
              status="planned"
              delay="0s"
            />
            <PlatformCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Mobile"
              desc="Focused on desktop first. Mobile tracking has strict OS limitations but is considered for the future."
              status="considering"
              delay="0.1s"
            />
            <PlatformCard 
              icon={<Cloud className="w-6 h-6" />}
              title="Cross-Platform Sync"
              desc="Sync your data across all your devices. Coming after we've established solid support on all desktop platforms."
              status="future"
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Footer / Community */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[var(--primary)]/10 via-fuchsia-500/5 to-cyan-500/10 blur-3xl rounded-full pointer-events-none animate-[orbRotate_15s_ease-in-out_infinite]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Help Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FooterLink link='/docs' icon={<Monitor className="w-4 h-4" />} label="Documentation" />
            <FooterLink link='/faq' icon={<HelpCircle className="w-4 h-4" />} label="FAQ" />
            <FooterLink link='/report-bug' icon={<Github className="w-4 h-4" />} label="Report Issue" />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] via-fuchsia-500 to-cyan-500 mb-6 shadow-[0_0_30px_rgba(124,58,237,0.4)] animate-[pulse_3s_ease-in-out_infinite]">
              <CheckCircle2 className="w-6 h-6 text-white animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-main)] animate-[fadeInUp_0.6s_ease-out]">
              Ready to Take Control?
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Start managing your time more effectively with Scolect
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              <button 
                onClick={() => router.push("https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA")} 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary)] via-fuchsia-600 to-cyan-600 hover:from-[var(--primary-hover)] hover:via-fuchsia-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.4)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current relative z-10" aria-hidden="true">
                  <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z"/>
                </svg>
                <span className="relative z-10">Windows</span>
              </button>
              
              <button 
                onClick={() => router.push("https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases")} 
                className="group inline-flex items-center justify-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--text-main)] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Apple className="w-5 h-5 relative z-10" />
                <span className="relative z-10">macOS</span>
              </button>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)] mt-8 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
              <span className="inline-flex items-center gap-1.5 hover:text-[var(--success)] transition-colors duration-300 group/feature">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] group-hover/feature:scale-125 transition-transform duration-300" />
                100% Free
              </span>
              <span className="inline-flex items-center gap-1.5 hover:text-[var(--success)] transition-colors duration-300 group/feature">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] group-hover/feature:scale-125 transition-transform duration-300" />
                No Account Required
              </span>
              <span className="inline-flex items-center gap-1.5 hover:text-[var(--success)] transition-colors duration-300 group/feature">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] group-hover/feature:scale-125 transition-transform duration-300" />
                Privacy First
              </span>
              <span className="inline-flex items-center gap-1.5 hover:text-[var(--success)] transition-colors duration-300 group/feature">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] group-hover/feature:scale-125 transition-transform duration-300" />
                Open Source
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
            transform: translateY(-20px);
          }
        }

        @keyframes orbPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes orbRotate {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

/* --- Sub Components --- */

const BenefitCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) => (
  <div 
    className="relative bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)] hover:-translate-y-3 animate-[fadeInUp_0.8s_ease-out_both] overflow-hidden"
    style={{ animationDelay: delay }}
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/0 group-hover:from-[var(--primary)]/10 group-hover:to-fuchsia-500/10 transition-all duration-700 rounded-2xl" />
    
    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="mb-4 bg-[var(--bg-page)] w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] group-hover:border-[var(--primary)] relative z-10">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] leading-relaxed relative z-10">{desc}</p>
  </div>
);

const Step = ({ number, title, desc, delay }: { number: number, title: string, desc: string, delay: string }) => (
  <div 
    className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-[var(--bg-page)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--primary)] text-sm group-hover:scale-125 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] group-hover:border-[var(--primary)]">
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700" />
      <span className="relative z-10">{number}</span>
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors duration-300">{title}</h4>
      <p className="text-[var(--text-muted)] text-sm mt-1">{desc}</p>
    </div>
  </div>
);

const CheckItem = ({ title, desc, delay }: { title: string, desc: string, delay: string }) => (
  <div 
    className="flex gap-3 group hover:translate-x-2 transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
    <div>
      <h4 className="font-semibold text-[var(--text-main)] text-sm group-hover:text-[var(--primary)] transition-colors duration-300">{title}</h4>
      <p className="text-[var(--text-muted)] text-xs mt-0.5">{desc}</p>
    </div>
  </div>
);

const TroubleCard = ({ issue, solution, delay }: { issue: string, solution: string, delay: string }) => (
  <div 
    className="relative bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl hover:border-[var(--danger)]/50 hover:shadow-[0_10px_40px_rgba(239,68,68,0.1)] transition-all duration-500 animate-[fadeInUp_0.6s_ease-out_both] group overflow-hidden"
    style={{ animationDelay: delay }}
  >
    {/* Alert glow */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--danger)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="flex items-center gap-2 mb-2 text-[var(--danger)]">
      <AlertTriangle className="w-4 h-4 group-hover:animate-[pulse_2s_ease-in-out_infinite] group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
      <h4 className="font-semibold text-sm">Issue: {issue}</h4>
    </div>
    <p className="text-sm text-[var(--text-muted)] ml-6 pl-2 border-l-2 border-[var(--border)] group-hover:border-[var(--primary)] transition-all duration-300 group-hover:translate-x-1">
      {solution}
    </p>
  </div>
);

const PlatformCard = ({ icon, title, desc, status, delay }: { icon: React.ReactNode, title: string, desc: string, status?: string, delay: string }) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'planned':
        return <span className="text-xs px-2 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] font-medium">Planned</span>;
      case 'considering':
        return <span className="text-xs px-2 py-1 rounded-full bg-[var(--warning)]/20 text-[var(--warning)] font-medium">Considering</span>;
      case 'future':
        return <span className="text-xs px-2 py-1 rounded-full bg-sky-500/20 text-sky-500 font-medium">Future</span>;
      default:
        return null;
    }
  };

  return (
    <div 
      className="relative p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-page)] opacity-80 hover:opacity-100 transition-all duration-500 hover:border-[var(--primary)]/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_both] group overflow-hidden"
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 via-transparent to-fuchsia-500/0 group-hover:from-[var(--primary)]/5 group-hover:to-fuchsia-500/5 transition-all duration-700 rounded-xl" />
      
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-3 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors duration-300">
          <div className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{icon}</div>
          <h3 className="font-bold">{title}</h3>
        </div>
        {getStatusBadge()}
      </div>
      <p className="text-sm text-[var(--text-muted)] relative z-10">{desc}</p>
    </div>
  );
};

const FooterLink = ({ icon, label, link }: { icon: React.ReactNode, label: string, link: string }) => (
  <a href={link} className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)] text-sm font-medium transition-all duration-500 hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)] hover:scale-105 hover:-translate-y-1 group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/0 to-[var(--primary)]/0 group-hover:from-[var(--primary)]/10 group-hover:to-fuchsia-500/10 transition-all duration-500 rounded-full" />
    <span className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">{icon}</span>
    <span className="relative z-10">{label}</span>
  </a>
);

export default DownloadPage;