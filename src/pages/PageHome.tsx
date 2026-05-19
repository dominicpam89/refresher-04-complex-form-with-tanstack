import { CheckCircle2, Zap, Sparkles, Database, Layers, Code2, Shield } from 'lucide-react';
import BackgroundDecorations from '@/components/homepage/BackgroundDecorations';
import Header from '@/components/homepage/Header';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/Features';
import TechStackSection from '@/components/homepage/TechStackSection';
import CTASection from '@/components/homepage/CTASection';
import ScrollToTopButton from '@/components/homepage/ScrollToTopButton';

export default function PageHome() {
  const features = [
    {
      level: '1',
      title: 'Foundation',
      description:
        'Basic form structure with TanStack Form. Learn the core concepts of form state management.',
      icon: <Code2 className="h-8 w-8" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      level: '2',
      title: 'Field Validation',
      description: 'Real-time field-level validation using Zod schemas with instant feedback.',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      level: '3',
      title: 'Async Validation',
      description:
        'Debounced async validation with username availability checking and loading states.',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      level: '4',
      title: 'Advanced Async',
      description:
        'Custom form hooks with debounced email uniqueness checks and phone number formatting.',
      icon: <Sparkles className="h-8 w-8" />,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      level: '5',
      title: 'Data Integration',
      description:
        'Pre-populated forms using TanStack Query with async data fetching and optimistic updates.',
      icon: <Database className="h-8 w-8" />,
      color: 'from-rose-500/20 to-red-500/20',
      borderColor: 'border-rose-500/30',
      gradient: 'from-rose-500 to-red-500',
    },
    {
      level: '6',
      title: 'Dynamic Arrays',
      description:
        'Dynamic form arrays for managing multiple skills with add/remove capabilities and validation.',
      icon: <Layers className="h-8 w-8" />,
      color: 'from-indigo-500/20 to-violet-500/20',
      borderColor: 'border-indigo-500/30',
      gradient: 'from-indigo-500 to-violet-500',
    },
  ];

  const stats = [
    { label: 'Form Levels', value: '6', icon: <Layers className="h-4 w-4" /> },
    { label: 'Validation Rules', value: '15+', icon: <CheckCircle2 className="h-4 w-4" /> },
    { label: 'Async Checks', value: '3', icon: <Zap className="h-4 w-4" /> },
    { label: 'Dynamic Fields', value: 'Array', icon: <Sparkles className="h-4 w-4" /> },
  ];

  const technologies = [
    { name: 'TanStack Form', icon: '⚛️', desc: 'Type-safe form management' },
    { name: 'Zod', icon: '✓', desc: 'Schema validation' },
    { name: 'TanStack Query', icon: '🔄', desc: 'Async state management' },
    { name: 'shadcn/ui', icon: '🎨', desc: 'Beautiful components' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      {/* Background decorative elements */}
      <BackgroundDecorations />

      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection stats={stats} />
        <FeaturesSection features={features} />
        <TechStackSection technologies={technologies} />
        <CTASection />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
