import type { SwitchSize } from './types';

export const switchSizes: Record<SwitchSize, string> = {
  sm: 'h-8 text-sm px-4 min-w-[5rem]',
  md: 'h-10 text-base px-6 min-w-[6rem]',
  lg: 'h-12 text-lg px-8 min-w-[7rem]'
};