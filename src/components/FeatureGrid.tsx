/**
 * FeatureGrid Component
 * 
 * As your CTO mentor: Notice how this component accepts an array of features.
 * This pattern (array-based props) is powerful because:
 * 1. The parent controls the data, making it easy to swap content for different locales
 * 2. The component focuses solely on presentation
 * 3. We can easily add/remove features without touching the component code
 * 
 * The responsive grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3) ensures it looks
 * good on all screen sizes - this is a critical responsive design pattern.
 */

'use client';

import React from 'react';

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface FeatureGridProps {
  title: string;
  description?: string;
  features: Feature[];
  className?: string;
}

export default function FeatureGrid({
  title,
  description,
  features,
  className = '',
}: FeatureGridProps) {

  return (
    <section 
      aria-labelledby="features-title"
      className={`max-w-7xl mx-auto px-6 section-spacing ${className}`}
    >
      <h2 
        id="features-title"
        className="text-3xl md:text-4xl font-semibold text-[#0F2A3F] mb-2"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-base md:text-lg leading-relaxed text-gray-600 body-text">
          {description}
        </p>
      )}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex items-center gap-2 hover:shadow-lg transition-shadow duration-300">
              <span className="text-[#2DB6A3] flex-shrink-0">{feature.icon}</span>
              <span className="font-medium text-[#0F2A3F]">{feature.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

