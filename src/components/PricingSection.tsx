/**
 * PricingSection Component
 * 
 * As your CTO mentor: Pricing components are critical revenue drivers. Notice:
 * 1. We use a "featured" flag to highlight the recommended plan (visual hierarchy)
 * 2. Each plan has its own CTA - this allows A/B testing and conversion optimization
 * 3. The component accepts all text as props for easy localization
 * 4. We use semantic HTML (section, aria-labelledby) for accessibility
 * 
 * The grid layout (md:grid-cols-3) ensures pricing cards display side-by-side on desktop
 * but stack on mobile - critical for mobile-first design.
 */

'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  blurb: string;
  highlights: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
}

interface PricingSectionProps {
  title: string;
  description?: string;
  plans: Plan[];
  className?: string;
}

export default function PricingSection({
  title,
  description,
  plans,
  className = '',
}: PricingSectionProps) {
  return (
    <section 
      id="pricing"
      aria-labelledby="pricing-title"
      className={`max-w-7xl mx-auto px-6 section-spacing ${className}`}
    >
      <h2 
        id="pricing-title"
        className="text-3xl md:text-4xl font-semibold text-[#0F2A3F] mb-2"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-base md:text-lg leading-relaxed text-gray-600 body-text">
          {description}
        </p>
      )}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-3xl shadow-lg border p-6 md:p-8 ${
              plan.featured 
                ? 'ring-2 ring-[#2DB6A3]' 
                : 'border-gray-200'
            }`}
          >
            <h3 className="text-xl font-semibold flex items-center justify-between text-[#0F2A3F] mb-4">
              <span>{plan.name}</span>
              {plan.featured && (
                <span className="text-xs px-2 py-1 rounded-full bg-[#2DB6A3]/15 text-[#0F2A3F]">
                  Most Popular
                </span>
              )}
            </h3>
            <div className="text-2xl font-semibold text-[#0F2A3F] mb-2">
              {plan.price}
            </div>
            <p className="text-gray-600 text-sm mb-4 body-text">
              {plan.blurb}
            </p>
            <div className="mb-6">
              <ul className="space-y-2">
                {plan.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2DB6A3]" />
                    <span className="text-sm text-gray-700 body-text">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href={plan.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-6 px-6 py-3 rounded-2xl bg-[#2DB6A3] text-white font-semibold hover:opacity-90 transition-all duration-200 text-center"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

