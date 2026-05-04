import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

interface Props {
  twClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export default function Layout({ children, twClasses = '' }: Props & PropsWithChildren) {
  return (
    <div
      aria-label="page-form-experimentation-layout"
      className={cn(
        'min-h-screen max-w-lg min-w-sm mx-auto pt-12 flex flex-col gap-6 p-8 lg:p-0',
        twClasses
      )}
    >
      {children}
    </div>
  );
}
