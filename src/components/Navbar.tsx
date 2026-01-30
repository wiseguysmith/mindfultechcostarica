/**
 * Navbar Component
 * 
 * As your CTO mentor, I'm showing you how to build a sticky, minimal navigation
 * that maintains the luxury aesthetic while being highly functional. Notice the
 * backdrop-blur effect and semi-transparent background for that premium feel.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/lib/config';
import CTAWhatsApp from './CTAWhatsApp';
import LangToggle from './LangToggle';

interface NavbarProps {
  currentLocale: string;
}

export default function Navbar({ currentLocale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: config.routes.lawOffices, label: 'Law Offices' },
    { href: config.routes.propertyManagers, label: 'Property Managers' },
    { href: config.routes.hotels, label: 'Hotels' },
    { href: config.routes.restaurants, label: 'Restaurants' },
    { href: config.routes.plansAndGuarantees, label: 'Plans' },
  ];
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-soft border-b border-border/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={currentLocale === 'en' ? '/' : '/es'}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded-lg"
            aria-label="MindfulTech Home"
          >
            <Image
              src={config.assets.logo.mark}
              alt="MindfulTech Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-heading font-semibold text-charcoal">
              MindfulTech
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={currentLocale === 'en' ? item.href : `/${currentLocale}${item.href}`}
                className="text-charcoal hover:text-coral font-medium transition-colors duration-240 ease-in-out focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <LangToggle currentLocale={currentLocale} />
            <CTAWhatsApp
              label="Book WhatsApp"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile menu - we'll add this later */}
    </nav>
  );
}
