/**
 * IndustryHighlightSection Component
 * 
 * As your CTO mentor: Industry-specific sections allow you to tailor messaging
 * to different verticals. This component:
 * 1. Accepts a flexible array of plans/offerings
 * 2. Uses a two-column grid on desktop (md:grid-cols-2)
 * 3. Includes a disclaimer area for legal/compliance notes
 * 4. Maintains consistent card styling with the rest of the design system
 */

'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface IndustryPlan {
  name: string;
  price: string;
  blurb: string;
  bullets: string[];
}

interface IndustryHighlightSectionProps {
  title: string;
  description: string;
  plans: IndustryPlan[];
  disclaimer?: string;
  className?: string;
}

export default function IndustryHighlightSection({
  title,
  description,
  plans,
  disclaimer,
  className = '',
}: IndustryHighlightSectionProps) {
  return (
    <section 
      aria-labelledby="industry-title"
      className={`max-w-7xl mx-auto px-6 section-spacing ${className}`}
    >
      <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
        <h3 
          id="industry-title"
          className="text-xl md:text-2xl font-semibold text-[#0F2A3F] mb-2"
        >
          {title}
        </h3>
        <p className="mt-2 text-base md:text-lg leading-relaxed text-gray-700 body-text">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6"
            >
              <h4 className="text-base font-semibold flex items-center justify-between text-[#0F2A3F] mb-2">
                <span>{plan.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#2DB6A3]/15 text-[#0F2A3F]">
                  {plan.price}
                </span>
              </h4>
              <p className="text-gray-600 text-sm mb-3 body-text">
                {plan.blurb}
              </p>
              <ul className="space-y-2">
                {plan.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2DB6A3]" />
                    <span className="text-sm text-gray-700 body-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {disclaimer && (
          <div className="text-xs text-gray-500 mt-3 body-text">
            {disclaimer}
          </div>
        )}
      </div>
    </section>
  );
}

