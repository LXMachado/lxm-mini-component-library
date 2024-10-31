import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Smartphone,
  Layout,
  Palette,
  Box,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized for speed and performance, ensuring your applications run smoothly.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description:
      'Built with security best practices, protecting your users and data.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Fully responsive components that work seamlessly across all devices.',
  },
  {
    icon: Layout,
    title: 'Modern Layout',
    description:
      'Contemporary design patterns that enhance user experience and engagement.',
  },
  {
    icon: Palette,
    title: 'Customizable',
    description:
      'Easily customize components to match your brand and design requirements.',
  },
  {
    icon: Box,
    title: 'Production Ready',
    description:
      'Battle-tested components ready for your next production application.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to build modern UIs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of high-quality components, designed and built
            with attention to detail.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg border bg-card"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}