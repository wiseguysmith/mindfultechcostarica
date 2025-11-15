/**
 * ContactSection Component
 * 
 * As your CTO mentor: Contact sections need to be clear and accessible.
 * Key patterns:
 * 1. Use tel: and mailto: links for proper mobile behavior (tap to call/email)
 * 2. Add hover states for better UX (text-brand hover:underline)
 * 3. Icon + text pattern for visual hierarchy
 * 4. Responsive grid that stacks on mobile
 */

'use client';

import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

interface ContactInfo {
  phone?: {
    label: string;
    href: string;
  };
  email?: {
    label: string;
    href: string;
  };
  location?: string;
}

interface ContactSectionProps {
  title: string;
  description?: string;
  contact: ContactInfo;
  className?: string;
}

export default function ContactSection({
  title,
  description,
  contact,
  className = '',
}: ContactSectionProps) {
  return (
    <section 
      aria-labelledby="contact-title"
      className={`max-w-7xl mx-auto px-6 section-spacing contact-spacing ${className}`}
    >
      <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
        <h3 
          id="contact-title"
          className="text-xl md:text-2xl font-semibold text-[#0F2A3F] mb-2"
        >
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-base md:text-lg leading-relaxed text-gray-700 body-text">
            {description}
          </p>
        )}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {contact.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#2DB6A3] flex-shrink-0" />
              <a 
                href={contact.phone.href}
                className="text-[#2DB6A3] hover:underline"
              >
                {contact.phone.label}
              </a>
            </div>
          )}
          {contact.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2DB6A3] flex-shrink-0" />
              <a 
                href={contact.email.href}
                className="text-[#2DB6A3] hover:underline"
              >
                {contact.email.label}
              </a>
            </div>
          )}
          {contact.location && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#2DB6A3] flex-shrink-0" />
              <span className="text-gray-600">{contact.location}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

