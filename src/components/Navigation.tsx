import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MagneticButton } from './ui/MagneticButton';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          isScrolled ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="text-bone font-display text-xl font-bold tracking-tight">
            SAROJ VISUALS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.href}
                  className="text-sm font-medium text-bone/70 hover:text-bone transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link to="/book">
              <MagneticButton variant="primary" className="px-6 py-2.5">
                Book Strategy Call
              </MagneticButton>
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-bone p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-charcoal flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-bone font-display text-xl font-bold tracking-tight">SAROJ VISUALS</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-bone p-2 -mr-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-3xl font-display mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    to={link.href}
                    className="text-bone hover:text-accent transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pb-12"
            >
              <Link to="/book" className="block text-center bg-accent text-charcoal font-medium py-4 rounded-full w-full">
                Book Strategy Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
