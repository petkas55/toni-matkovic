import React from 'react';
import { cn } from '@/utils/cn';

interface MobileFrameProps {
  image: string;
  className?: string;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ image, className }) => {
  return (
    <div className={cn("relative w-[300px]", className)}>
      <div className="relative rounded-[3rem] overflow-hidden border-[14px] border-black bg-black shadow-2xl">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-white">
          {/* Status Bar */}
          <div className="h-12 bg-primary px-6 flex items-center justify-between">
            <span className="text-white text-sm">9:41</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-white" />
              <div className="w-4 h-4 rounded-full border-2 border-white" />
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Toni Matković</h3>
                <p className="text-sm text-gray-600">Osobni Trener</p>
              </div>
            </div>

            {/* Progress Cards */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl"
              >
                <div className="h-24 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                  <img
                    src={image}
                    alt="Workout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-2 bg-primary/20 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${(index + 1) * 40}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};