/**
 * HeroSection Component
 * 
 * As your CTO mentor: This component demonstrates the "composition over configuration" principle.
 * Instead of hardcoding content, we accept props for all text, making it locale-agnostic.
 * This is how you build truly reusable components that work across different markets.
 * 
 * Key patterns here:
 * 1. Props interface clearly defines what content can be customized
 * 2. Semantic HTML with accessibility (aria-labelledby)
 * 3. Responsive design using Tailwind's responsive prefixes
 * 4. Consistent spacing using our design tokens (hero-spacing, gap-4)
 */

'use client';

import React from 'react';
import { ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';

interface HeroFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroSectionProps {
  badge?: {
    icon: React.ReactNode;
    text: string;
  };
  title: string;
  subtitle: string;
  primaryCTA: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  tertiaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  features: HeroFeature[];
  proofPoints?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  className?: string;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  features,
  proofPoints,
  className = '',
}: HeroSectionProps) {
  return (
    <section 
      aria-labelledby="hero-title"
      className={`max-w-7xl mx-auto px-6 hero-spacing ${className}`}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DB6A3]/15 text-[#0F2A3F] text-xs font-medium mb-4">
              {badge.icon}
              {badge.text}
            </span>
          )}
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F2A3F] mb-4"
          >
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 body-text">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={primaryCTA.href}
              target={primaryCTA.external ? "_blank" : undefined}
              rel={primaryCTA.external ? "noopener noreferrer" : undefined}
              className="btn-primary flex items-center gap-2"
            >
              {primaryCTA.label}
              <ArrowRight className="w-4 h-4" />
            </a>
            {secondaryCTA && (
              <a 
                href={secondaryCTA.href}
                target={secondaryCTA.external ? "_blank" : undefined}
                rel={secondaryCTA.external ? "noopener noreferrer" : undefined}
                className="btn-secondary"
              >
                {secondaryCTA.label}
              </a>
            )}
            {tertiaryCTA && (
              <a 
                href={tertiaryCTA.href}
                target={tertiaryCTA.external ? "_blank" : undefined}
                rel={tertiaryCTA.external ? "noopener noreferrer" : undefined}
                className="btn-secondary"
              >
                {tertiaryCTA.label}
              </a>
            )}
          </div>
          {proofPoints && proofPoints.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  {point.icon}
                  {point.text}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-white/70 backdrop-blur border rounded-3xl shadow-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-md p-4 border border-gray-100"
                >
                  <h3 className="flex items-center gap-2 text-base font-semibold text-[#0F2A3F] mb-2">
                    {feature.icon}
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 body-text">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

