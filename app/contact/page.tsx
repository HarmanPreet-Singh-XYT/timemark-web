"use client"
import React, { useState, useEffect } from 'react';
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
  X,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCheck
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { sendContactEmail } from '@/app/actions/sendEmail';

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[var(--primary)]/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formFocused, setFormFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Question',
    subject: '',
    message: '',
    newsletter: false
  });
  
  const router = useRouter();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We\'ll respond within 1-3 business days.' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          category: 'General Question',
          subject: '',
          message: '',
          newsletter: false
        });
        
        // Scroll to top to show success message
        setTimeout(() => {
          window.scrollTo({ top: document.querySelector('form')?.offsetTop || 0, behavior: 'smooth' });
        }, 100);
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try emailing us directly at support.timemark@harmanita.com' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans antialiased text-[var(--text-main)] bg-[var(--bg-page)] min-h-screen selection:bg-[var(--primary)] selection:text-white">
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.3); }
          50% { box-shadow: 0 0 40px rgba(124, 58, 237, 0.5); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 text-center max-w-4xl mx-auto overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <FloatingParticles />
        
        <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6 border border-[var(--primary)]/20 backdrop-blur-sm hover:bg-[var(--primary)]/20 transition-all duration-300 cursor-default group">
            <Mail size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            We'd Love to Hear From You
            <Sparkles size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-fuchsia-500 animate-gradient relative">
              Touch
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="url(#gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-xl font-medium text-[var(--text-main)] mb-4">
            Have a question, need support, or want to connect? We're here to help.
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            We're a friendly, responsive team committed to helping you get the most out of TimeMark. Whether you need technical support, have a question, or just want to say hello—we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-2xl font-bold animate-fade-in">Choose Your Contact Method</h2>
          <p className="text-[var(--text-muted)] mt-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>Select the option that best fits your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <ContactOption 
            icon={<Bug className="w-6 h-6 text-[var(--danger)]" />}
            title="Report a Bug"
            desc="Something's broken or not working correctly."
            examples={['App crashes', 'Data errors', 'Features broken']}
            time="Critical bugs < 24 hrs"
            btnText="Report a Bug"
            btnLink="report-bug"
            index={0}
          />
          <ContactOption 
            icon={<Lightbulb className="w-6 h-6 text-[var(--success)]" />}
            title="Submit Feedback"
            desc="Feature requests, suggestions, and ideas."
            examples={['"Add X feature"', 'Improvement ideas', 'General suggestions']}
            time="2-5 business days"
            btnText="Submit Feedback"
            btnLink="/feedback"
            index={1}
          />
          <ContactOption 
            icon={<HelpCircle className="w-6 h-6 text-[var(--warning)]" />}
            title="General Questions"
            desc="How-to questions, clarifications, inquiries."
            examples={['"How do I export?"', '"What does X do?"']}
            time="1-3 business days"
            btnText="View FAQ"
            btnLink="/faq"
            subText="Check FAQ first!"
            index={2}
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-[var(--border)] rounded-full opacity-50 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-[var(--border)] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-fuchsia-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-fuchsia-500 mb-6 shadow-lg shadow-[var(--primary)]/30 animate-bounce-subtle">
              <Send className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3 animate-fade-in">Send Us a Message</h2>
            <p className="text-[var(--text-muted)] animate-fade-in" style={{ animationDelay: '0.1s' }}>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-xl border ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
            } flex items-start gap-3 animate-slide-up`}>
              {submitStatus.type === 'success' ? (
                <CheckCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <label className="text-sm font-semibold text-[var(--text-main)]">Name <span className="text-[var(--danger)]">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5" 
                  onFocus={() => setFormFocused('name')}
                  onBlur={() => setFormFocused(null)}
                />
              </div>
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.15s' }}>
                <label className="text-sm font-semibold text-[var(--text-main)]">Email Address <span className="text-[var(--danger)]">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="We'll respond to this email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <label className="text-sm font-semibold text-[var(--text-main)]">Subject Category <span className="text-[var(--danger)]">*</span></label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-[var(--text-main)] transition-all duration-300 hover:border-[var(--primary)]/50 cursor-pointer"
                >
                  <option>General Question</option>
                  <option>Technical Support</option>
                  <option>Account Issue</option>
                  <option>Feature Suggestion</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.25s' }}>
                <label className="text-sm font-semibold text-[var(--text-main)]">Subject Line <span className="text-[var(--danger)]">*</span></label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your inquiry" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5" 
                />
              </div>
            </div>

            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="text-sm font-semibold text-[var(--text-main)]">Message <span className="text-[var(--danger)]">*</span></label>
              <textarea 
                rows={6} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please provide as much detail as possible..." 
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-page)] border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-300 font-mono text-sm hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/5 resize-none" 
              />
              <p className="text-xs text-[var(--text-muted)]">
                For technical support, please include: TimeMark version, Windows version, and steps to reproduce.
              </p>
            </div>

            <div className="flex items-start gap-3 pt-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <input 
                type="checkbox" 
                id="newsletter" 
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mt-1 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
              />
              <label htmlFor="newsletter" className="text-sm text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-main)] transition-colors">Keep me updated with TimeMark news and releases</label>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.45s' }}>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-fuchsia-600 hover:from-[var(--primary-hover)] hover:to-fuchsia-700 text-white rounded-xl font-semibold shadow-lg shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/40 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </>
                )}
              </button>
            </div>
            <p className="text-center text-xs text-[var(--text-muted)] mt-4">
              We typically respond within 1-3 business days.
            </p>
          </form>
        </div>
      </section>

      {/* Email Contact & Guidelines */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-[var(--primary)]" />
            Prefer Email?
          </h2>
          <p className="text-[var(--text-muted)] mb-8">You can reach us directly at these addresses:</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">Primary Contacts</h3>
              <div className="space-y-3">
                <EmailRow
                email="support.timemark@harmanita.com"
                label="General Inquiries"
                desc="Questions, help, general support"
                index={0}
                />

                <EmailRow
                email="bugs.timemark@harmanita.com"
                label="Bug Reports"
                desc="Report issues, crashes, errors"
                icon={<Bug className="w-4 h-4" />}
                index={1}
                />

                <EmailRow
                email="feedback.timemark@harmanita.com"
                label="Feature Feedback"
                desc="Suggestions, ideas, requests"
                icon={<Lightbulb className="w-4 h-4" />}
                index={2}
                />

                <EmailRow
                email="security.timemark@harmanita.com"
                label="Security Issues"
                desc="Vulnerabilities, privacy (Private)"
                icon={<Shield className="w-4 h-4" />}
                index={3}
                />

              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 mt-8">Special Contacts</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <EmailRow email="press.timemark@harmanita.com" label="Press & Media" simple index={4} />
                <EmailRow email="partners.timemark@harmanita.com" label="Partnerships" simple index={5} />
                <EmailRow email="conduct.timemark@harmanita.com" label="Code of Conduct" simple index={6} />
                <EmailRow email="contribute.timemark@harmanita.com" label="Contributions" simple index={7} />
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-500 group">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--primary)] group-hover:animate-pulse" />
              Email Tips for Faster Response
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[var(--success)]/5 border border-[var(--success)]/20">
                <h4 className="text-sm font-bold text-[var(--success)] mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Do</h4>
                <ul className="text-xs text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
                  <li>Use descriptive subjects</li>
                  <li>Include version number</li>
                  <li>Attach screenshots</li>
                  <li>Be specific & clear</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-[var(--danger)]/5 border border-[var(--danger)]/20">
                <h4 className="text-sm font-bold text-[var(--danger)] mb-2 flex items-center gap-1"><XCircle className="w-4 h-4"/> Don't</h4>
                <ul className="text-xs text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
                  <li>Email multiple addresses</li>
                  <li>Use vague subjects ("Help")</li>
                  <li>Forget error messages</li>
                  <li>Send huge attachments</li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--bg-page)] rounded-lg p-4 border border-[var(--border)] font-mono text-xs text-[var(--text-muted)] leading-relaxed relative overflow-hidden group-hover:border-[var(--primary)]/30 transition-colors">
              {/* Code window styling */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-100 dark:bg-zinc-800 border-b border-[var(--border)] flex items-center px-2 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] text-[var(--text-muted)]">example_email.txt</span>
              </div>
              <div className="pt-6">
                <span className="text-[var(--text-main)] font-bold block mb-2">Example Good Email:</span>
                <span className="block mb-1">To: support.timemark@harmanita.com</span>
                <span className="block mb-3">Subject: Question: How to Export Data to CSV</span>
                
                <p className="mb-2">Hi TimeMark Team,</p>
                <p className="mb-2">I'm using TimeMark v1.2.0 on Windows 11 and I love the app!</p>
                <p className="mb-2">I'd like to export my usage data to CSV format for analysis. I see the Export function in Settings, but it exports JSON.</p>
                <p className="mb-2">Is there a way to export to CSV?</p>
                <p>Thanks,<br/>[Name]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
              <MessageSquare size={14} /> Join Our Community
            </div>
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Join the Community</h2>
            <p className="text-[var(--text-muted)] animate-fade-in" style={{ animationDelay: '0.1s' }}>Connect with other TimeMark users and the development team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommunityCard 
              icon={<MessageSquare className="w-8 h-8 text-[var(--text-main)]" />}
              title="GitHub Discussions"
              desc="Ask questions, share tips, and discuss feature ideas."
              linkText="Join Discussion"
              meta="Very Active"
              btnLink='https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues'
              index={0}
            />
            <CommunityCard 
              icon={<Github className="w-8 h-8 text-[var(--text-main)]" />}
              title="GitHub Issues"
              desc="Report confirmed bugs and track feature requests."
              linkText="View Issues"
              meta="Bug Reports Only"
              btnLink='https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues'
              index={1}
            />
            <CommunityCard 
              icon={<Twitter className="w-8 h-8 text-[#1DA1F2]" />}
              title="Twitter / X"
              desc="Official updates, product announcements, and tips."
              linkText="Follow Us"
              meta="@harmanpreet277"
              btnLink='https://x.com/harmanpreet277'
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <Clock className="w-6 h-6 text-[var(--primary)]" />
          When Can You Expect a Response?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-xl p-6 hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-300 animate-slide-up">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-[var(--primary)]"/> Typical Response Times</h3>
            <div className="space-y-4">
              <ResponseRow label="Critical Bugs" time="Within 24 hrs" priority="Highest" color="text-[var(--danger)]" index={0} />
              <ResponseRow label="General Support" time="1-3 business days" priority="High" color="text-[var(--primary)]" index={1} />
              <ResponseRow label="Feature Requests" time="2-5 business days" priority="Medium" color="text-[var(--text-muted)]" index={2} />
              <ResponseRow label="Partnerships" time="3-5 business days" priority="Medium" color="text-[var(--text-muted)]" index={3} />
            </div>
          </div>
          
          <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-xl p-6 hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--success)]" />
              Our Commitment
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2 group cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5 group-hover:scale-110 transition-transform"/> <span>We read <strong>every</strong> message we receive.</span></li>
              <li className="flex items-start gap-2 group cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5 group-hover:scale-110 transition-transform"/> <span>We aim to respond to all inquiries, even just to acknowledge.</span></li>
              <li className="flex items-start gap-2 group cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)] mt-0.5 group-hover:scale-110 transition-transform"/> <span>We treat everyone with respect and professionalism.</span></li>
              <li className="mt-4 pt-4 border-t border-[var(--border)] italic text-[var(--text-main)]">
                "We ask that you be patient (we're a small team), provide necessary details, and follow up if you don't hear back in 5 days."
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Before You Contact */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[var(--primary)]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--warning)]/10 text-[var(--warning)] text-sm font-medium mb-4">
              <AlertTriangle size={14} /> Before You Reach Out
            </div>
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Save Time - Check These First</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <CheckFirstCard 
              icon={<HelpCircle className="w-6 h-6 text-[var(--primary)]"/>} 
              title="1. Check the FAQ" 
              desc="Setup, configuration, and troubleshooting guides."
              index={0}
              link="/faq"
            />
            <CheckFirstCard 
              icon={<FileText className="w-6 h-6 text-sky-500"/>} 
              title="2. Read Docs" 
              desc="Comprehensive feature deep-dives and best practices."
              index={1}
              link="/docs"
            />
            <CheckFirstCard 
              icon={<Search className="w-6 h-6 text-fuchsia-500"/>} 
              title="3. Search GitHub" 
              desc="See if your issue is already being discussed."
              index={2}
            />
            <CheckFirstCard 
              icon={<Bug className="w-6 h-6 text-[var(--danger)]"/>} 
              title="4. Known Issues" 
              desc="Check active bug reports and upcoming fixes."
              index={3}
            />
            <CheckFirstCard 
              icon={<Download className="w-6 h-6 text-[var(--success)]"/>} 
              title="5. Update App" 
              desc="Many issues are fixed in the latest version."
              index={4}
              link='https://apps.microsoft.com/detail/9phbzxnpvhsq?hl=en-US&gl=CA'
            />
            <CheckFirstCard 
              icon={<Newspaper className="w-6 h-6 text-[var(--warning)]"/>} 
              title="6. Release Notes" 
              desc="See what's new and what's recently fixed."
              index={5}
              link='changelog'
            />
          </div>
        </div>
      </section>

      {/* Technical Support Guidelines */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-fade-in">
          <div className="p-2 rounded-lg bg-[var(--warning)]/10">
            <AlertTriangle className="w-6 h-6 text-[var(--warning)]"/>
          </div>
          Technical Support Guidelines
        </h2>
        <p className="text-[var(--text-muted)] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          To get the fastest help with technical problems, please include the following Essential Information:
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="p-6 border-b border-[var(--border)] bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
            {/* Code window header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--text-muted)] ml-2">Example Perfect Support Request</h3>
            </div>
            <div className="font-mono text-sm leading-relaxed text-[var(--text-main)] bg-[var(--bg-page)] p-4 rounded-lg border border-[var(--border)]">
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
            <h4 className="font-bold text-sm mb-3">Why this works:</h4>
            <div className="flex flex-wrap gap-3 text-xs">
              {['Clear Subject', 'System Info', 'Reproduction Steps', 'Screenshots'].map((item, idx) => (
                <span key={idx} className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--success)]/10 text-[var(--success)] font-medium hover:bg-[var(--success)]/20 transition-colors cursor-default">
                  <CheckCircle2 className="w-3 h-3"/> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Data */}
      <section className="px-6 py-12 max-w-4xl mx-auto border-t border-[var(--border)]">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[var(--primary)]" />
          Your Privacy Matters
        </h2>
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 grid md:grid-cols-2 gap-8 hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 rounded-lg bg-[var(--success)]/5 border border-[var(--success)]/20">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-[var(--success)]">
              <CheckCircle2 className="w-4 h-4" />
              We Collect
            </h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Name & Email (to respond)</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Message content</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 className="w-4 h-4 text-[var(--success)]"/> Attachments (logs/images)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-[var(--danger)]/5 border border-[var(--danger)]/20">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-[var(--danger)]">
              <XCircle className="w-4 h-4" />
              We NEVER Collect
            </h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Usage Data (stays local)</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Personal info beyond contact</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><XCircle className="w-4 h-4 text-[var(--danger)]"/> Marketing data for ads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="px-6 py-16 bg-[var(--bg-card)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FaqItem q="Do I need an account to contact you?" a="No! You can email us directly. GitHub discussions do require a free GitHub account." index={0} />
            <FaqItem q="I haven't heard back in 3 days." a="Check spam. If 5 days pass, please resend. We try to respond to everything within 3 business days." index={1} />
            <FaqItem q="Can I call you?" a="We don't offer phone support. Email or Discord is best for us to help you efficiently." index={2} />
            <FaqItem q="Can you help with other Windows issues?" a="We only support TimeMark. For general Windows issues, please contact Microsoft support." index={3} />
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent" />
        
        <div className="max-w-2xl text-center mx-auto relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-fuchsia-500 mb-6 shadow-lg">
            <Mail className="w-6 h-6 text-white" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-main)]">
            Need Help?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
            We're here to assist you. Choose the option that works best for you.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
                onClick={() => router.push("/report-bug")} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] hover:border-[var(--danger)] hover:text-[var(--danger)] transition-all duration-200 group"
            >
                <Bug className="w-4 h-4 transition-transform group-hover:scale-110" />
                Report a Bug
            </button>
            
            <button 
                onClick={() => router.push("mailto:support.timemark@harmanita.com")} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-gradient-to-r from-[var(--primary)] to-fuchsia-600 text-white hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-200 group"
            >
                <Mail className="w-4 h-4" />
                Email Support
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
                onClick={() => router.push("/faq")} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 group"
            >
                <HelpCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                Visit FAQ
            </button>
            </div>
        </div>
        </section>
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
  index: number;
}

const ContactOption: React.FC<ContactOptionProps> = ({ icon, title, desc, examples, time, btnText, btnLink, subText, index }) => (
  <div 
    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-all duration-500 flex flex-col h-full group hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:-translate-y-2 animate-slide-up relative overflow-hidden"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="bg-[var(--bg-page)] w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--border)] mb-4 group-hover:scale-110 group-hover:border-[var(--primary)]/30 transition-all duration-300 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors relative z-10">{title}</h3>
    <p className="text-[var(--text-muted)] text-sm mb-4 min-h-[40px] relative z-10">{desc}</p>
    
    <div className="flex-grow mb-6 relative z-10">
      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase mb-2">Examples:</p>
      <ul className="text-sm text-[var(--text-muted)] space-y-1">
        {examples.map((ex, i) => (
          <li key={i} className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
            <span className="block w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 mt-2 group-hover:bg-[var(--primary)] transition-colors"></span>
            {ex}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto relative z-10">
      <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] mb-4">
        <Clock className="w-3 h-3 group-hover:text-[var(--primary)] transition-colors" />
        {time}
      </div>
      {subText && <p className="text-xs text-[var(--warning)] mb-2 font-medium flex items-center gap-1"><Sparkles className="w-3 h-3"/>{subText}</p>}
      <a href={btnLink} className="flex items-center justify-center w-full py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent transition-all duration-300 font-medium text-sm gap-2 group/btn">
        {btnText} <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"/>
      </a>
    </div>
  </div>
);

const EmailRow: React.FC<{ email: string, label: string, desc?: string, icon?: React.ReactNode, simple?: boolean, index: number }> = ({ email, label, desc, icon, simple, index }) => (
  <div 
    className={`flex ${simple ? 'flex-col' : 'flex-col sm:flex-row sm:items-center'} justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:border-[var(--primary)] transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--primary)]/5 animate-slide-up cursor-default`}
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="flex items-center gap-3">
      {icon && <div className="text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:scale-110 transition-all duration-300">{icon}</div>}
      <div>
        <div className="font-semibold text-sm text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">{label}</div>
        {!simple && <div className="text-xs text-[var(--text-muted)]">{desc}</div>}
      </div>
    </div>
    <a href={`mailto:${email}`} className={`text-sm font-mono text-[var(--primary)] hover:underline ${simple ? 'mt-1' : 'mt-2 sm:mt-0'} group-hover:translate-x-1 transition-transform`}>
      {email}
    </a>
  </div>
);

const CommunityCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, linkText: string, meta: string, index: number,btnLink:string }> = ({ icon, title, desc, linkText, meta, index,btnLink }) => (
  <div 
    className="bg-[var(--bg-page)] p-6 rounded-2xl border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--primary)]/30 transition-all duration-500 text-center group hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:-translate-y-2 animate-slide-up relative overflow-hidden"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="flex justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="font-bold text-lg mb-2 relative z-10 group-hover:text-[var(--primary)] transition-colors">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] mb-4 relative z-10">{desc}</p>
    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-[var(--text-muted)] mb-4 relative z-10 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-all duration-300">
      {meta}
    </span>
    <a href={btnLink} className="block w-full py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm font-medium hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 relative z-10 group/link flex items-center justify-center gap-1">
      {linkText}
      <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
    </a>
  </div>
);

const ResponseRow: React.FC<{ label: string, time: string, priority: string, color: string, index: number }> = ({ label, time, priority, color, index }) => (
  <div 
    className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2 last:border-0 hover:bg-[var(--bg-card)] -mx-2 px-2 py-2 rounded-lg transition-all duration-300 cursor-default group animate-slide-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <span className="font-medium text-[var(--text-main)] group-hover:translate-x-1 transition-transform">{label}</span>
    <div className="text-right">
      <span className={`block font-bold ${color} group-hover:scale-105 transition-transform origin-right`}>{time}</span>
      <span className="text-xs text-[var(--text-muted)]">Priority: {priority}</span>
    </div>
  </div>
);

const CheckFirstCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, index: number, link?:string }> = ({ icon, title, desc, index,link="https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues" }) => (
  <a 
    href={link} 
    className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] hover:bg-[var(--bg-page)] hover:border-[var(--primary)] transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:-translate-y-1 animate-slide-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <div>
      <h3 className="font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      </h3>
      <p className="text-sm text-[var(--text-muted)] leading-snug">{desc}</p>
    </div>
  </a>
);

const FaqItem: React.FC<{ q: string, a: string, index: number }> = ({ q, a, index }) => (
  <div 
    className="p-4 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300 group cursor-default animate-slide-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <h4 className="font-bold text-[var(--text-main)] mb-2 flex items-start gap-2 group-hover:text-[var(--primary)] transition-colors">
      <HelpCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
      {q}
    </h4>
    <p className="text-sm text-[var(--text-muted)] pl-7 group-hover:text-[var(--text-main)] transition-colors">{a}</p>
  </div>
);

export default ContactPage;