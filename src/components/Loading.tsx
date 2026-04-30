import { cn } from '@/lib/utils'; // optional, only if you have shadcn's utility

interface LoadingOverlayProps {
  message?: string;
}

export default function LoadingOverlay({ message = 'Loading...' }: LoadingOverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-black/50 backdrop-blur-sm',
        'transition-all duration-300'
      )}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner with custom animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 animate-spin" />
          {/* Inner ring with gradient and inverted spin */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-[spin_0.8s_ease-in-out_infinite]" />
        </div>
        {message && <p className="text-white text-sm font-medium animate-pulse">{message}</p>}
      </div>
    </div>
  );
}
