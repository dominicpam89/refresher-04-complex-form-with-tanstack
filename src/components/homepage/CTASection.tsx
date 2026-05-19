// components/home/CTASection.tsx
import {
  Code,
  Smartphone,
  ArrowRight,
  Mail,
  Brain,
  Layers,
  Shield,
  GitCommitIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20, delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring' as const, stiffness: 200 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' as const }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <Brain className="h-8 w-8 text-primary" />
              </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
              Expert Frontend Developer Available for Hire
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-2xl mx-auto mb-6"
            >
              I bring advanced TypeScript and JavaScript fundamentals with deep Object-Oriented
              Programming (OOP) knowledge, building scalable, maintainable, and performant web and
              mobile applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {[
                { icon: Layers, text: 'Advanced TypeScript' },
                { icon: Brain, text: 'JavaScript Mastery' },
                { icon: Shield, text: 'OOP Principles' },
                { icon: Code, text: 'React & React Native' },
                { icon: Layers, text: 'Clean Architecture' },
              ].map((badge, idx) => (
                <motion.span
                  key={badge.text}
                  variants={badgeVariants}
                  custom={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-sm"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2 group" asChild>
                  <a
                    href="https://github.com/dominicpam89"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitCommitIcon className="h-4 w-4" />
                    View My GitHub Portfolio
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="mailto:dominicpam89@gmail.com">
                    <Mail className="h-4 w-4" />
                    Hire Me
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
