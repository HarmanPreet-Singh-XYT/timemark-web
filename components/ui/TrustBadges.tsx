import React from 'react';
import { CheckCircle2, ShieldCheck, Github, Users } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-6">
      <div className="flex items-center gap-2 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
        <CheckCircle2 size={18} className="text-[#14B8A6]" />
        <span>100% Free Forever</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
        <ShieldCheck size={18} className="text-[#14B8A6]" />
        <span>Privacy First - All Data Local</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
        <CheckCircle2 size={18} className="text-[#14B8A6]" />
        <span>No Account Required</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
        <Github size={18} className="text-[#18181B] dark:text-[#FAFAFA]" />
        <span>Open Source</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">
        <Users size={18} className="text-[#7C3AED]" />
        <span>5,000+ Users</span>
      </div>
    </div>
  );
}