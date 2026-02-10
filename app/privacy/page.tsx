'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  ServerOff, 
  Settings, 
  RefreshCw, 
  Mail, 
  Lock
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const PolicySection = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: any }) => (
  <section className="mb-12 scroll-mt-24">
    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
      {Icon && <Icon className="text-[#7C3AED]" size={24} />}
      <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h2>
    </div>
    <div className="text-lg leading-relaxed text-[#52525B] dark:text-[#A1A1AA] space-y-4">
      {children}
    </div>
  </section>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-16 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <ShieldCheck size={16} /> Effective Date: March 25, 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Welcome to Scolect. Your privacy is our top priority.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* 1. Data Collection */}
        <PolicySection title="1. Data Collection" icon={Database}>
          <p>
            Scolect does not collect, store, or transmit any personal data to external servers. All data is stored locally on your device.
          </p>
        </PolicySection>

        {/* 2. Data Storage */}
        <PolicySection title="2. Data Storage" icon={Lock}>
          <p>
            All screen time tracking data, settings, and preferences are stored locally on your device. Scolect does not have access to your personal data.
          </p>
        </PolicySection>

        {/* 3. Third-Party Services */}
        <PolicySection title="3. Third-Party Services" icon={ServerOff}>
          <p>
            Scolect does not use any third-party analytics, tracking, or data-sharing services. Your data remains private and secure on your device.
          </p>
        </PolicySection>

        {/* 4. User Control */}
        <PolicySection title="4. User Control" icon={Settings}>
          <p>
            You have full control over your data. You can reset or delete your usage data at any time from the application settings.
          </p>
        </PolicySection>

        {/* 5. Changes to This Policy */}
        <PolicySection title="5. Changes to This Policy" icon={RefreshCw}>
          <p>
            We may update this policy from time to time. Any changes will be reflected here, with an updated effective date.
          </p>
        </PolicySection>

        {/* 6. Contact Us */}
        <PolicySection title="6. Contact Us" icon={Mail}>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <a 
            href="mailto:privacy@scolect.com" 
            className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#6D28D9] font-bold text-lg hover:underline transition-colors"
          >
            privacy@scolect.com
          </a>
        </PolicySection>

      </div>
      
      {/* FOOTER STATEMENT */}
      <div className="bg-zinc-50 dark:bg-zinc-950 py-12 px-6 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p className="max-w-2xl mx-auto italic text-[#52525B] dark:text-[#A1A1AA]">
          Thank you for using Scolect!
        </p>
      </div>
      <Footer/>

    </div>
  );
}