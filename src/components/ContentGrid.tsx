/**
 * ContentGrid Component
 * 
 * As your CTO mentor: This is a flexible two-column content grid for displaying
 * complementary information side-by-side (like "What You Get" and "Outcomes").
 * 
 * Design principles:
 * 1. Two-column layout on desktop, stacked on mobile
 * 2. Each card is self-contained and can have different content
 * 3. Uses Check icons for list items (consistent with pricing sections)
 * 4. Responsive gap spacing (gap-8)
 */

'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface ContentCard {
  title: string;
  items: string[];
}

interface ContentGridProps {
  cards: ContentCard[];
  className?: string;
}

export default function ContentGrid({
  cards,
  className = '',
}: ContentGridProps) {
  return (
    <section 
      aria-labelledby="content-grid"
      className={`max-w-7xl mx-auto px-6 section-spacing ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-[#0F2A3F] mb-4">
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2DB6A3]" />
                  <span className="text-base md:text-lg leading-relaxed text-gray-600 body-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

