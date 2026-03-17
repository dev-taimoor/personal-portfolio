// components/ui/DynamicIcon.tsx
'use client';

import dynamic from 'next/dynamic';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = LucideIcons[name as keyof typeof LucideIcons] as React.ElementType | undefined;

  if (!Icon) {
    // Fallback icon if name not found
    return <LucideIcons.CircleDashed {...props} />;
  }

  return <Icon {...props} />;
}