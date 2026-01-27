'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown it this session
    const sessionShown = sessionStorage.getItem('timemark_exit_intent_shown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves the top of the window (intent to close tab/browser)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('timemark_exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-[#18181B] dark:hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="inline-flex p-3 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] mb-6">
            <Download size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-3">
            Wait! Get TimeMark Free Before You Go
          </h3>
          
          <p className="text-[#52525B] dark:text-[#A1A1AA] mb-8">
            Start understanding your digital habits today. No account required, completely private, and free forever.
          </p>

          <Link 
            href="/download"
            onClick={() => setIsVisible(false)}
            className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02] mb-4"
          >
            Download Now
          </Link>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 underline"
          >
            No thanks, I'll stick to guessing my screen time
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-center gap-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <ShieldCheck size={14} className="text-[#14B8A6]" /> No Credit Card
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <ShieldCheck size={14} className="text-[#14B8A6]" /> 100% Private
          </div>
        </div>
      </div>
    </div>
  );
}