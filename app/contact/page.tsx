"use client"
import React, { useState } from 'react';
import { 
  Mail, 
  Bug, 
  Lightbulb, 
  HelpCircle, 
  Shield, 
  Newspaper, 
  Briefcase, 
  Send, 
  Paperclip, 
  Github, 
  MessageSquare, 
  Twitter, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Search, 
  FileText, 
  AlertTriangle, 
  Download, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ContactPage: React.FC = () => {
  return (
    // Theme Wrapper
    <div className="font-sans antialiased text-[var(--text-main)] bg-[var(--bg-page)] min-h-screen selection:bg-[var(--primary)] selection:text-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-fuchsia-500">Touch</span>
        </h1>
        <p className="text-xl font-medium text-[var(--text-main)] mb-4">
          Have a question, need support, or want to connect? We're here to help.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
          We're a friendly, responsive team committed to helping you get the most out of TimeMark. Whether you need technical support, have a question, or just want to say hello—we'd love to hear from you.
        </p>
      </section>

      {/* Quick Contact Options */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Choose Your Contact Method</h2>
          <p className="text-[var(--text-muted)] mt-2">Select the option that best fits your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactOption 
            icon={<Bug className="w-6 h-6 text-[var(--danger)]" />}
            title="Report a Bug"
            desc="Something's broken or not working correctly."
            examples={['App crashes', 'Data errors', 'Features broken']}
            time="Critical bugs < 24 hrs"
            btnText="Report a Bug"
            btnLink="#"
          />
          <ContactOption 
            icon={<Lightbulb className="w-6 h-6 text-[var(--success)]" />}
            title="Submit Feedback"
            desc="Feature requests, suggestions, and ideas."
            examples={['"Add X feature"', 'Improvement ideas', 'General suggestions']}
            time="2-5 business days"
            btnText="Submit Feedback"
            btnLink="#"
          />
          <ContactOption 
            icon={<HelpCircle className="w-6 h-6 text-[var(--warning)]" />}
            title="General Questions"
            desc="How-to questions, clarifications, inquiries."
            examples={['"How do I export?"', '"What does X do?"']}
            time="1-3 business days"
            btnText="View FAQ"
            btnLink="#"
            subText="Check FAQ first!"
          />
          {/* <ContactOption 
            icon={<Shield className="w-6 h-6 text-indigo-500" />}
            title="Security Issues"
            desc="Security vulnerabilities ONLY (Private)."
            examples={['Security flaws', 'Privacy concerns', 'Vulnerabilities']}
            time="< 24 hrs (High Priority)"
            btnText="Email Security Team"
            btnLink="mailto:security@timemark.app"
          />
          <ContactOption 
            icon={<Newspaper className="w-6 h-6 text-pink-500" />}
            title="Press & Media"
            desc="Journalists, bloggers, content creators."
            examples={['Interviews', 'Media kits', 'Press releases']}
            time="1-2 business days"
            btnText="Media Inquiries"
            btnLink="mailto:press@timemark.app"
          />
          <ContactOption 
            icon={<Briefcase className="w-6 h-6 text-blue-500" />}
            title="Partnerships"
            desc="Business partnerships, integrations."
            examples={['Collaborations', 'Sponsorships', 'Integrations']}
            time="3-5 business days"
            btnText="Partnership Inquiries"
            btnLink="mailto:partners@timemark.app"
          /> */}
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
            <p className="text-[var(--text-muted)]">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--text-main)]">Name <span className="text-[var(--danger)]">*</span></label>
                <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--text-main)]">Email Address <span className="text-[var(--danger)]">*</span></label>
                <input type="email" placeholder="We'll respond to this email" className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--text-main)]">Subject Category <span className="text-[var(--danger)]">*</span></label>
                <select className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-[var(--text-main)]">
                  <option>General Question</option>
                  <option>Technical Support</option>
                  <option>Account Issue</option>
                  <option>Feature Suggestion</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--text-main)]">Subject Line <span className="text-[var(--danger)]">*</span></label>
                <input type="text" placeholder="Brief description of your inquiry" className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--text-main)]">Message <span className="text-[var(--danger)]">*</span></label>
              <textarea rows={6} placeholder="Please provide as much detail as possible..." className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all font-mono text-sm" />
              <p className="text-xs text-[var(--text-muted)]">
                For technical support, please include: TimeMark version, Windows version, and steps to reproduce.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--text-main)]">Attachment <span className="text-[var(--text-muted)] font-normal">(Optional)</span></label>
              <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-6 text-center hover:border-[var(--primary)] transition-colors cursor-pointer bg-[var(--bg-page)]">
                <Paperclip className="w-5 h-5 mx-auto mb-2 text-[var(--text-muted)]" />
                <span className="text-sm text-[var(--text-muted)]">Attach screenshots or logs (Max 5MB)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="newsletter" className="mt-1 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]" />
              <label htmlFor="newsletter" className="text-sm text-[var(--text-muted)]">Keep me updated with TimeMark news and releases</label>
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl font-semibold shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
            <p className="text-center text-xs text-[var(--text-muted)] mt-4">
              We typically respond within 1-3 business days.
            </p>
          </form>
        </div>
      </section>

      {/* Email Contact & Guidelines */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Prefer Email?</h2>
          <p className="text-[var(--text-muted)] mb-8">You can reach us directly at these addresses:</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">Primary Contacts</h3>
              <div className="space-y-3">
                <EmailRow email="support@timemark.app" label="General Inquiries" desc="Questions, help, general support" />
                <EmailRow email="bugs@timemark.app" label="Bug Reports" desc="Report issues, crashes, errors" icon={<Bug className="w-4 h-4" />} />
                <EmailRow email="feedback@timemark.app" label="Feature Feedback" desc="Suggestions, ideas, requests" icon={<Lightbulb className="w-4 h-4" />} />
                <EmailRow email="security@timemark.app" label="Security Issues" desc="Vulnerabilities, privacy (Private)" icon={<Shield className="w-4 h-4" />} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 mt-8">Special Contacts</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <EmailRow email="press@timemark.app" label="Press & Media" simple />
                <EmailRow email="partners@timemark.app" label="Partnerships" simple />
                <EmailRow email="conduct@timemark.app" label="Code of Conduct" simple />
                <EmailRow email="contribute@timemark.app" label="Contributions" simple />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Email Tips for Faster Response</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-sm font-bold text-[var(--success)] mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Do</h4>
                <ul className="text-xs text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
                  <li>Use descriptive subjects</li>
                  <li>Include version number</li>
                  <li>Attach screenshots</li>
                  <li>Be specific & clear</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--danger)] mb-2 flex items-center gap-1"><XCircle className="w-4 h-4"/> Don't</h4>
                <ul className="text-xs text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
                  <li>Email multiple addresses</li>
                  <li>Use vague subjects ("Help")</li>
                  <li>Forget error messages</li>
                  <li>Send huge attachments</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--bg-page)] rounded-lg p-4 border border-[var(--border)] font-mono text-xs text-[var(--text-muted)] leading-relaxed">
              <span className="text-[var(--text-main)] font-bold block mb-2">Example Good Email:</span>
              <span className="block mb-1">To: support@timemark.app</span>
              <span className="block mb-3">Subject: Question: How to Export Data to CSV</span>
              
              <p className="mb-2">Hi TimeMark Team,</p>
              <p className="mb-2">I'm using TimeMark v1.2.0 on Windows 11 and I love the app!</p>
              <p className="mb-2">I'd like to export my usage data to CSV format for analysis. I see the Export function in Settings, but it exports JSON.</p>
              <p className="mb-2">Is there a way to export to CSV?</p>
              <p>Thanks,<br/>[Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
            <p className="text-[var(--text-muted)]">Connect with other TimeMark users and the development team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CommunityCard 
              icon={<MessageSquare className="w-8 h-8 text-[var(--text-main)]" />}
              title="GitHub Discussions"
              desc="Ask questions, share tips, and discuss feature ideas."
              linkText="Join Discussion"
              meta="Very Active"
            />
            <CommunityCard 
              icon={<Github className="w-8 h-8 text-[var(--text-main)]" />}
              title="GitHub Issues"
              desc="Report confirmed bugs and track feature requests."
              linkText="View Issues"
              meta="Bug Reports Only"
            />
            <CommunityCard 
              icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#5865F2]"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419z"/></svg>}
              title="Discord Server"
              desc="Real-time chat, quick help, and community events."
              linkText="Join Server"
              meta="Active Daily"
            />
            <CommunityCard 
              icon={<Twitter className="w-8 h-8 text-[#1DA1F2]" />}
              title="Twitter / X"
              desc="Official updates, product announcements, and tips."
              linkText="Follow Us"
              meta="@TimeMark"
            />
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">When Can You Expect a Response?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5"/> Typical Response Times</h3>
            <div className="space-y-4">
              <ResponseRow label="Critical Bugs" time="Within 24 hrs" priority="Highest" color="text-[var(--danger)]" />
              <ResponseRow label="General Support" time="1-3 business days" priority="High" color="text-[var(--primary)]" />
              <ResponseRow label="Feature Requests" time="2-5 business days" priority="Medium" color="text-[var(--text-muted)]" />
              <ResponseRow label="Partnerships" time="3-5 business days" priority="Medium" color="text-[var(--text-muted)]" />
            </div>
          </div>
          
          <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-bold mb-4">Our Commitment</h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5"/> <span>We read <strong>every</strong> message we receive.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5"/> <span>We aim to respond to all inquiries, even just to acknowledge.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5"/> <span>We treat everyone with respect and professionalism.</span></li>
              <li className="mt-4 pt-4 border-t border-[var(--border)] italic">
                "We ask that you be patient (we're a small team), provide necessary details, and follow up if you don't hear back in 5 days."
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Before You Contact */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Save Time - Check These First</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <CheckFirstCard 
              icon={<HelpCircle className="w-6 h-6 text-[var(--primary)]"/>} 
              title="1. Check the FAQ" 
              desc="Setup, configuration, and troubleshooting guides." 
            />
            <CheckFirstCard 
              icon={<FileText className="w-6 h-6 text-sky-500"/>} 
              title="2. Read Docs" 
              desc="Comprehensive feature deep-dives and best practices." 
            />
            <CheckFirstCard 
              icon={<Search className="w-6 h-6 text-fuchsia-500"/>} 
              title="3. Search GitHub" 
              desc="See if your issue is already being discussed." 
            />
            <CheckFirstCard 
              icon={<Bug className="w-6 h-6 text-[var(--danger)]"/>} 
              title="4. Known Issues" 
              desc="Check active bug reports and upcoming fixes." 
            />
            <CheckFirstCard 
              icon={<Download className="w-6 h-6 text-[var(--success)]"/>} 
              title="5. Update App" 
              desc="Many issues are fixed in the latest version." 
            />
            <CheckFirstCard 
              icon={<Newspaper className="w-6 h-6 text-[var(--warning)]"/>} 
              title="6. Release Notes" 
              desc="See what's new and what's recently fixed." 
            />
          </div>
        </div>
      </section>

      {/* Technical Support Guidelines */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-[var(--warning)]"/> 
          Technical Support Guidelines
        </h2>
        <p className="text-[var(--text-muted)] mb-8">
          To get the fastest help with technical problems, please include the following Essential Information:
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-[var(--border)] bg-zinc-50 dark:bg-zinc-900/50">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] mb-4">Example Perfect Support Request</h3>
            <div className="font-mono text-sm leading-relaxed text-[var(--text-main)]">
              <span className="text-[var(--text-muted)]">Subject:</span> Focus Mode Timer Not Starting (v1.2.0)<br/><br/>
              Hi TimeMark Team,<br/><br/>
              I'm experiencing an issue with Focus Mode.<br/><br/>
              <span className="text-[var(--primary)] font-bold">PROBLEM:</span><br/>
              When I click the Play button... timer displays 00:00...<br/><br/>
              <span className="text-[var(--primary)] font-bold">MY SETUP:</span><br/>
              - TimeMark Version: 1.2.0 (Microsoft Store)<br/>
              - Windows: Windows 11 Pro 22H2<br/>
              - RAM: 16 GB<br/><br/>
              <span className="text-[var(--primary)] font-bold">STEPS TO REPRODUCE:</span><br/>
              1. Open TimeMark<br/>
              2. Click "Focus Mode"<br/>
              3. ...<br/><br/>
              <span className="text-[var(--primary)] font-bold">WHAT I'VE TRIED:</span><br/>
              ✓ Restarted app - didn't help<br/>
              ✓ Restarted computer - didn't help<br/><br/>
              [Attached: screenshot.png]
            </div>
          </div>
          <div className="p-6 bg-[var(--bg-card)]">
            <h4 className="font-bold text-sm mb-2">Why this works:</h4>
            <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[var(--success)]"/> Clear Subject</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[var(--success)]"/> System Info</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[var(--success)]"/> Reproduction Steps</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[var(--success)]"/> Screenshots</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Data */}
      <section className="px-6 py-12 max-w-4xl mx-auto border-t border-[var(--border)]">
        <h2 className="text-xl font-bold mb-4">Your Privacy Matters</h2>
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">We Collect</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Name & Email (to respond)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Message content</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Attachments (logs/images)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">We NEVER Collect</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2">
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Usage Data (stays local)</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Personal info beyond contact</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Marketing data for ads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FaqItem q="Do I need an account to contact you?" a="No! You can email us directly. GitHub discussions do require a free GitHub account." />
            <FaqItem q="I haven't heard back in 3 days." a="Check spam. If 5 days pass, please resend. We try to respond to everything within 3 business days." />
            <FaqItem q="Can I call you?" a="We don't offer phone support. Email or Discord is best for us to help you efficiently." />
            <FaqItem q="Can you help with other Windows issues?" a="We only support TimeMark. For general Windows issues, please contact Microsoft support." />
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-page)] border border-[var(--border)] rounded-3xl p-10 md:p-16 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get in Touch?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--danger)] hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2">
              <Bug className="w-4 h-4"/> Report a Bug
            </button>
            <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-xl font-semibold shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-1 flex items-center gap-2">
              <Mail className="w-4 h-4"/> Email Support
            </button>
            <button className="bg-[var(--bg-card)] border border-[var(--border)] hover:bg-[var(--bg-page)] text-[var(--text-main)] px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
              <HelpCircle className="w-4 h-4"/> Visit FAQ
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-muted)] gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--primary)]">Documentation</a>
            <a href="#" className="hover:text-[var(--primary)]">Privacy</a>
            <a href="#" className="hover:text-[var(--primary)]">Changelog</a>
            <a href="#" className="hover:text-[var(--primary)]">Contributing</a>
          </div>
          <div>
            Hours: Mon-Fri 9AM - 5PM EST • Response within 3 business days
          </div>
        </div>
      </footer>
      <Footer/>
    </div>
  );
};

/* --- Helper Components --- */

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  examples: string[];
  time: string;
  btnText: string;
  btnLink: string;
  subText?: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ icon, title, desc, examples, time, btnText, btnLink, subText }) => (
  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-colors flex flex-col h-full group">
    <div className="bg-[var(--bg-page)] w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-[var(--text-main)]">{title}</h3>
    <p className="text-[var(--text-muted)] text-sm mb-4 min-h-[40px]">{desc}</p>
    
    <div className="flex-grow mb-6">
      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Examples:</p>
      <ul className="text-sm text-[var(--text-muted)] space-y-1">
        {examples.map((ex, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="block w-1 h-1 rounded-full bg-[var(--text-muted)] mt-2"></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto">
      <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] mb-4">
        <Clock className="w-3 h-3" />
        {time}
      </div>
      {subText && <p className="text-xs text-[var(--warning)] mb-2 font-medium">{subText}</p>}
      <a href={btnLink} className="flex items-center justify-center w-full py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent transition-all font-medium text-sm gap-2">
        {btnText} <ChevronRight className="w-4 h-4"/>
      </a>
    </div>
  </div>
);

const EmailRow: React.FC<{ email: string, label: string, desc?: string, icon?: React.ReactNode, simple?: boolean }> = ({ email, label, desc, icon, simple }) => (
  <div className={`flex ${simple ? 'flex-col' : 'flex-col sm:flex-row sm:items-center'} justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:border-[var(--primary)] transition-colors group`}>
    <div className="flex items-center gap-3">
      {icon && <div className="text-[var(--text-muted)] group-hover:text-[var(--primary)]">{icon}</div>}
      <div>
        <div className="font-semibold text-sm text-[var(--text-main)]">{label}</div>
        {!simple && <div className="text-xs text-[var(--text-muted)]">{desc}</div>}
      </div>
    </div>
    <a href={`mailto:${email}`} className={`text-sm font-mono text-[var(--primary)] hover:underline ${simple ? 'mt-1' : 'mt-2 sm:mt-0'}`}>
      {email}
    </a>
  </div>
);

const CommunityCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, linkText: string, meta: string }> = ({ icon, title, desc, linkText, meta }) => (
  <div className="bg-[var(--bg-page)] p-6 rounded-2xl border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] mb-4">{desc}</p>
    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-[var(--text-muted)] mb-4">
      {meta}
    </span>
    <a href="#" className="block w-full py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm font-medium hover:text-[var(--primary)] transition-colors">
      {linkText}
    </a>
  </div>
);

const ResponseRow: React.FC<{ label: string, time: string, priority: string, color: string }> = ({ label, time, priority, color }) => (
  <div className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2 last:border-0">
    <span className="font-medium text-[var(--text-main)]">{label}</span>
    <div className="text-right">
      <span className={`block font-bold ${color}`}>{time}</span>
      <span className="text-xs text-[var(--text-muted)]">Priority: {priority}</span>
    </div>
  </div>
);

const CheckFirstCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <a href="#" className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-page)] hover:border-[var(--primary)] transition-all group">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">{title}</h3>
      <p className="text-sm text-[var(--text-muted)] leading-snug">{desc}</p>
    </div>
  </a>
);

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => (
  <div className="p-4 rounded-xl bg-[var(--bg-page)] border border-[var(--border)]">
    <h4 className="font-bold text-[var(--text-main)] mb-2 flex items-start gap-2">
      <HelpCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
      {q}
    </h4>
    <p className="text-sm text-[var(--text-muted)] pl-7">{a}</p>
  </div>
);

export default ContactPage;