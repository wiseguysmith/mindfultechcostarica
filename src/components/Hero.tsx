/**
 * Hero Component
 * 
 * As your CTO mentor, I'm showing you how to create a compelling hero section
 * that immediately communicates value and drives action. Notice how we use
 * props for flexibility while maintaining consistent design patterns.
 */

import Image from 'next/image';
import CTAWhatsApp from './CTAWhatsApp';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    label: string;
    message?: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  tertiaryCTA: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  backgroundImage,
  className = '',
}: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background with Tamarindo imagery */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Tamarindo, Costa Rica"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="hero-gradient w-full h-full" />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAWhatsApp
              label={primaryCTA.label}
              message={primaryCTA.message}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            />
            
            <a
              href={secondaryCTA.href}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              {secondaryCTA.label}
            </a>
            
            <a
              href={tertiaryCTA.href}
              className="btn-ghost w-full sm:w-auto text-center text-white hover:text-coral"
            >
              {tertiaryCTA.label}
            </a>
          </div>
          
          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              WhatsApp Business
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              DocuSign
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Stripe
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Plausible
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
