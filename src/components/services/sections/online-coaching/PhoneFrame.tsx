import React from 'react';
import { cn } from '@/utils/cn';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className }) => (
  <div className={cn("relative w-[280px]", className)}>
    <div className="relative rounded-[3rem] overflow-hidden border-[14px] border-black bg-black shadow-2xl">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-white">
        {/* Status Bar */}
        <div className="h-12 bg-gradient-to-r from-primary to-accent px-6 flex items-center justify-between">
          <span className="text-white text-sm">9:41</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-white" />
            <div className="w-4 h-4 rounded-full border-2 border-white" />
          </div>
        </div>
        {children}
      </div>
    </div>
    {/* Highlight effect */}
    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
  </div>
);