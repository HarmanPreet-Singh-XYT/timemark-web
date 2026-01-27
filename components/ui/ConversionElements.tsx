import React from 'react';
import Link from 'next/link';
import { Download, Github, Star, ArrowRight } from 'lucide-react';

// --- BUTTONS ---

export const PrimaryCTA = ({ children = "Get it from Microsoft Store" }: { children?: React.ReactNode }) => (
  <Link 
    href="/download"
    className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-0.5"
  >
    <Download size={20} /> {children}
  </Link>
);

export const SecondaryCTA = ({ children = "View on GitHub", href = "https://github.com" }: { children?: React.ReactNode, href?: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-[#7C3AED] dark:hover:border-[#8B5CF6] text-[#18181B] dark:text-[#FAFAFA] font-bold py-4 px-8 rounded-xl transition-all"
  >
    <Github size={20} /> {children}
  </a>
);

export const TertiaryCTA = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <Link href={href} className="inline-flex items-center gap-1 text-[#7C3AED] hover:text-[#6D28D9] font-medium hover:underline">
    {children} <ArrowRight size={16} />
  </Link>
);

// --- SOCIAL PROOF ---

export const StatCounter = ({ label, value, sub }: { label: string, value: string, sub?: string }) => (
  <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
    <div className="text-3xl md:text-4xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-2">{value}</div>
    <div className="font-medium text-[#7C3AED] mb-1">{label}</div>
    {sub && <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">{sub}</div>}
  </div>
);

export const SocialProofBar = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
    <StatCounter label="Active Users" value="5k+" />
    <StatCounter label="GitHub Stars" value="500+" />
    <StatCounter label="Store Rating" value="4.8/5" sub="Microsoft Store" />
    <StatCounter label="Contributors" value="50+" sub="Open Source" />
  </div>
);

export const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 relative">
    <div className="absolute top-6 left-6 text-[#7C3AED]/20 text-6xl font-serif leading-none">"</div>
    <p className="relative z-10 text-[#52525B] dark:text-[#A1A1AA] italic mb-6 pt-4">
      {quote}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold">
        {author[0]}
      </div>
      <div>
        <div className="font-bold text-[#18181B] dark:text-[#FAFAFA] text-sm">{author}</div>
        <div className="text-xs text-[#52525B] dark:text-[#A1A1AA]">{role}</div>
      </div>
    </div>
  </div>
);