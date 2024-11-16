import { motion } from 'framer-motion';
import { Github, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialLinks = [
  { icon: Github, href: '#https://github.com/LXMachado', label: 'GitHub' },
  { icon: X, href: '#https://x.com/ASMWebDev', label: 'X' },
  { icon: Linkedin, href: '#https://www.linkedin.com/in/alexandre-machado-664884249/', label: 'LinkedIn' },
];

const footerLinks = {
  Product: ['Features', 'Pricing', 'Updates'],
  Company: ['About', 'Blog', 'Careers'],
  Resources: ['Documentation', 'Help Center', 'Guides'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and news delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[240px]"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 LXM UI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}