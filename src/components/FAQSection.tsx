/**
 * FAQSection Component
 * 
 * As your CTO mentor: FAQ sections are crucial for reducing support burden.
 * Notice how we:
 * 1. Use a simple Q&A data structure - easy to maintain and update
 * 2. Grid layout (md:grid-cols-2) for optimal readability
 * 3. Keep it simple - no accordions needed unless you have 10+ FAQs
 * 4. Consistent card styling with the rest of the design system
 */

'use client';

import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
  className?: string;
}

export default function FAQSection({
  title,
  faqs,
  className = '',
}: FAQSectionProps) {
  return (
    <section 
      aria-labelledby="faq-title"
      className={`max-w-7xl mx-auto px-6 section-spacing ${className}`}
    >
      <h2 
        id="faq-title"
        className="text-3xl md:text-4xl font-semibold text-[#0F2A3F] mb-4"
      >
        {title}
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6"
          >
            <h3 className="text-base font-semibold text-[#0F2A3F] mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-sm body-text">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

