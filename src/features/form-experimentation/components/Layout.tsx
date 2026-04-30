import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      aria-label="page-form-experimentation-layout"
      className="min-h-screen w-full max-w-lg mx-auto pt-12"
    >
      {children}
    </div>
  );
}
