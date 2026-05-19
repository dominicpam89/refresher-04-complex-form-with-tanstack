// components/home/FeaturesSection.tsx
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Feature {
  level: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  gradient: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const navigate = useNavigate();

  const handleCardClick = (level: string) => {
    navigate(`/forms?level=${level}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="features-section" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Progressive Form Challenges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each level introduces new concepts and techniques, building up to a complete form
            management solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.level}
              data-level={feature.level}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => handleCardClick(feature.level)}
              className="h-full"
            >
              <Card
                className={cn(
                  'group relative overflow-hidden transition-all duration-300 border cursor-pointer h-full flex flex-col',
                  feature.borderColor
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                    'bg-linear-to-br',
                    feature.color
                  )}
                />
                <CardHeader className="flex-1">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
                      'bg-linear-to-br',
                      feature.gradient,
                      'shadow-lg'
                    )}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <Badge variant="outline" className="font-mono">
                      Level {feature.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="gap-2 group/btn pl-0 hover:pl-2 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(feature.level);
                    }}
                  >
                    Explore Level {feature.level}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
