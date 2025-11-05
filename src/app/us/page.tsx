'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  Car, 
  Utensils, 
  Stethoscope, 
  BriefcaseBusiness, 
  MessageSquare, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

/**
 * MindfulTech.services — USA Version Landing Page (v3)
 * 
 * As your CTO mentor, I'm showing you how to create a fully functional landing page
 * using only Tailwind CSS (no external UI component libraries). Notice how we:
 * 1. Use CSS variables for theming (scoped to this page)
 * 2. Convert component libraries to plain HTML + Tailwind classes
 * 3. Implement responsive design with Tailwind's grid system
 * 4. Use framer-motion for smooth animations
 * 5. Maintain accessibility with semantic HTML and ARIA labels
 */

// Brand palette as CSS variables
const BrandStyle = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      :root {
        --mt-navy: #0F2A3F;
        --mt-cream: #F4EDE2;
        --mt-teal: #2DB6A3;
        --mt-coral: #E4572E;
        --mt-graphite: #2B2B2B;
      }
      .mt-gradient {
        background: linear-gradient(180deg, #ffffff 0%, #F4EDE2 100%);
      }
      .mt-primary {
        color: var(--mt-navy);
      }
      .mt-accent {
        color: var(--mt-teal);
      }
      .mt-btn {
        background: var(--mt-teal);
        color: #062a22;
      }
      .mt-btn:hover {
        filter: brightness(0.95);
      }
      .mt-outline {
        border-color: var(--mt-teal);
      }
      .selection\\:bg-amber-200\\/60 ::selection {
        background-color: rgba(251, 191, 36, 0.6);
      }
    `
  }} />
);

const features = [
  { 
    icon: <MessageSquare className="w-6 h-6"/>, 
    title: "Digital Workers (AI Agents)", 
    desc: "Inbox triage, lead capture, booking, follow‑ups across email, SMS, and chat.", 
  },
  { 
    icon: <Shield className="w-6 h-6"/>, 
    title: "Security‑First Defaults", 
    desc: "Role‑based access, audit trails, least‑privilege credentials. TCPA/HIPAA aware where relevant.", 
  },
  { 
    icon: <Clock className="w-6 h-6"/>, 
    title: "Automation That Prints Time™", 
    desc: "HubSpot/Google + n8n/Zapier to remove 10+ hours/week from busywork.", 
  },
  { 
    icon: <Sparkles className="w-6 h-6"/>, 
    title: "Speed‑to‑Lead < 60s", 
    desc: "Website chat + SMS handoff + CRM routing so hot leads never cool.", 
  },
];

// Primary US verticals
const industries = [
  { icon: <Utensils className="w-5 h-5"/>, label: "Restaurants" },
  { icon: <Stethoscope className="w-5 h-5"/>, label: "MedSpas & Clinics" },
  { icon: <Car className="w-5 h-5"/>, label: "Auto Dealerships" },
  { icon: <BriefcaseBusiness className="w-5 h-5"/>, label: "Professional Services (Law/CPA)" },
];

const plans = [
  { 
    name: "Starter", 
    price: "$1,250 setup + $350/mo", 
    blurb: "Solo founders & small teams getting their first digital worker online.", 
    highlights: [
      "1 digital worker (email + web chat)",
      "HubSpot or Pipedrive pipeline + basic dashboard",
      "Lead capture widget + auto‑responders",
      "2 automations (n8n/Zapier) — e.g., lead‑to‑CRM, proposals",
      "Email/SMS templates + playbooks",
    ], 
    cta: "Book a 20‑min Fit Call", 
  },
  { 
    name: "Pro", 
    price: "$3,500 setup + $900/mo", 
    blurb: "SMBs that want inbound + outbound working together.", 
    highlights: [
      "2–3 digital workers (site chat, inbox concierge, SDR agent)",
      "CRM pipelines, SLAs, and reporting",
      "5 automations (n8n/Zapier) + webhook actions",
      "Outbound sequences + lead enrichment",
      "Bi‑weekly optimization sprints",
    ], 
    cta: "Start Your Build Sprint", 
    featured: true, 
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    blurb: "Multi‑location or regulated ops needing SSO, SOWs, and guardrails.", 
    highlights: [
      "Custom agent behaviors + retrieval",
      "SSO (Google/Microsoft), roles & permissions",
      "Audit logs + optional US data residency",
      "HIPAA/TCPA guidance where applicable",
      "Dedicated success manager",
    ], 
    cta: "Talk to Solutions Architect", 
  },
];

// Dealer add‑ons block
const dealerPlans = [
  { 
    name: "Dealer Add‑On", 
    price: "+$500/mo per rooftop", 
    blurb: "Inventory concierge, instant text‑back, trade‑in & pre‑qual flows", 
    bullets: [
      "Inventory search chatbot (NLQ)",
      "Missed‑call auto text‑back",
      "Trade‑in VIN capture + appraisal handoff",
      "Finance pre‑qual + doc collection",
    ], 
  },
  { 
    name: "Dealer Pro", 
    price: "+$1,200/mo per rooftop", 
    blurb: "Aged‑inventory booster, service lane flows, review engine", 
    bullets: [
      "30/60/90‑day aged‑unit campaigns",
      "Service reminders + no‑show reschedules",
      "Review velocity automations",
      "Monthly conversion tuning",
    ], 
  },
];

const faqs = [
  { 
    q: "What does implementation look like?", 
    a: "Week 1: discovery + stack mapping. Week 2: agent setup + CRM wiring. Week 3: go‑live with guardrails and iterate.", 
  },
  { 
    q: "Will this replace my team?", 
    a: "No — it gives your team a jetpack. Admin chores drop; humans handle nuance and relationships.", 
  },
  { 
    q: "What tools do you support?", 
    a: "HubSpot, Google Workspace, Slack, Notion, Aircall, Twilio, WhatsApp Business, Meta, LinkedIn, Stripe, Shopify, Calendly, Supabase, and more.", 
  },
  { 
    q: "Dealership CRMs?", 
    a: "We can integrate with VinSolutions/DriveCentric/DealerSocket via API, email parser, or webhook bridges.", 
  },
];

const Social = () => (
  <div className="flex items-center gap-3">
    <a href="https://twitter.com/yourhandle" aria-label="X/Twitter" className="hover:opacity-80 transition-opacity">
      <Twitter className="w-5 h-5"/>
    </a>
    <a href="https://instagram.com/yourhandle" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
      <Instagram className="w-5 h-5"/>
    </a>
    <a href="https://www.linkedin.com/company/mindful-tech" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
      <Linkedin className="w-5 h-5"/>
    </a>
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((x, i) => (
      <li key={i} className="flex items-start gap-2">
        <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--mt-teal)]"/> 
        <span>{x}</span>
      </li>
    ))}
  </ul>
);

function LeadFormTwoStep() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll reply same day with next steps.');
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-[var(--mt-navy)] mb-4">Quick Start — 2‑Step Lead Form</h3>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-3">
            <input 
              name="email"
              type="email" 
              placeholder="Work email" 
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent"
            />
            <input 
              name="name"
              type="text" 
              placeholder="Full name" 
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent"
            />
            <input 
              name="company"
              type="text" 
              placeholder="Company" 
              required
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent"
            />
            <button 
              type="button"
              onClick={() => setStep(2)} 
              className="w-full mt-4 px-6 py-3 rounded-2xl mt-btn text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4"/>
            </button>
            <div className="text-xs text-slate-500 mt-4">
              By continuing you agree to our <a className="underline hover:text-[var(--mt-teal)]" href="#">Privacy</a> & <a className="underline hover:text-[var(--mt-teal)]" href="#">Terms</a>.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <input 
              name="phone"
              type="tel" 
              placeholder="Phone (optional)" 
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent"
            />
            <input 
              name="website"
              type="url" 
              placeholder="Website (optional)" 
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent"
            />
            <textarea 
              name="message"
              placeholder="What do you want your digital worker to do? (60s brief)" 
              required
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--mt-teal)] focus:border-transparent resize-none"
            />
            <button 
              type="submit"
              className="w-full mt-4 px-6 py-3 rounded-2xl mt-btn text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Submit
            </button>
            <div className="text-xs text-slate-500 mt-4">
              We'll reply same day with next steps.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default function USA_LandingPage() {
  return (
    <>
      <BrandStyle />
      
      {/* SEO JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mindful Tech",
            url: "https://mindfultech.services",
            logo: "https://mindfultech.services/logo-us.png",
            sameAs: ["https://www.linkedin.com/company/mindful-tech"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "5830 E 2nd St, Ste 7000 #26566",
              addressLocality: "Casper",
              addressRegion: "WY",
              postalCode: "82609",
              addressCountry: "US"
            },
            contactPoint: [{
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "info@mindfultech.services"
            }]
          })
        }} 
      />

      <div className="min-h-screen mt-gradient text-slate-900 selection:bg-amber-200/60">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--mt-teal)]/15 text-[var(--mt-navy)] text-xs font-medium">
                <Sparkles className="w-4 h-4"/> 
                USA Edition
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-4 mt-primary">
                Build the Minds That Work for You.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Book more calls, close more deals, and let digital workers handle the busywork.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a 
                  href="https://calendly.com/mindfultechnology" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl mt-btn text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Book a 20‑min Fit Call <ArrowRight className="w-4 h-4"/>
                </a>
                <a 
                  href="#lead"
                  className="px-6 py-3 rounded-2xl border-2 mt-outline text-[var(--mt-teal)] hover:bg-[var(--mt-teal)]/10 font-semibold transition-all duration-300"
                >
                  Quick Lead Form
                </a>
                <a 
                  href="tel:+17208916563"
                  className="px-6 py-3 rounded-2xl border-2 mt-outline text-[var(--mt-teal)] hover:bg-[var(--mt-teal)]/10 font-semibold transition-all duration-300"
                >
                  Call +1 (720) 891‑6563
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4"/> 
                  Guardrails on by default
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4"/> 
                  Live in ~3 weeks
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white/70 backdrop-blur border rounded-3xl shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
                      <h3 className="flex items-center gap-2 text-base font-semibold text-[var(--mt-navy)] mb-2">
                        {f.icon}
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-600">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verticals */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--mt-navy)]">Where We Shine</h2>
          <p className="mt-2 text-slate-600">Primary US focus: Restaurants, MedSpas/Clinics, Auto Dealerships.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((x, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex items-center gap-2 hover:shadow-lg transition-shadow duration-300">
                <span className="text-[var(--mt-teal)]">{x.icon}</span>
                <span className="font-medium text-[var(--mt-navy)]">{x.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Offer Sections */}
        <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[var(--mt-navy)] mb-4">What You Get</h3>
            <List items={[
              "Audit + architecture of your stack",
              "On‑brand agent prompts, tone, and guardrails",
              "CRM wiring: pipelines, SLAs, dashboards",
              "Automations for intake, scheduling, follow‑up, and docs",
              "Team training + playbooks + security checklist",
            ]}/>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[var(--mt-navy)] mb-4">Outcomes We Target</h3>
            <List items={[
              "Speed‑to‑lead under 60 seconds",
              "+15–30% booking rate from inbound",
              "10+ hours/week saved per rep",
              "Fewer no‑shows with smart reminders",
              "Clean CRM data that actually helps decisions",
            ]}/>
          </div>
        </section>

        {/* Dealerships Section */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--mt-navy)]">Auto Dealerships — Book More Test Drives, Move Aged Units</h3>
            <p className="mt-2 text-slate-700">Inventory concierge, instant text‑back, trade‑in & pre‑qual flows. Works with VinSolutions/DriveCentric/DealerSocket.*</p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {dealerPlans.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                  <h4 className="text-base font-semibold flex items-center justify-between text-[var(--mt-navy)] mb-2">
                    <span>{p.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--mt-teal)]/15 text-[var(--mt-navy)]">{p.price}</span>
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">{p.blurb}</p>
                  <List items={p.bullets}/>
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500 mt-3">
              *Via API, email‑parser, or webhook bridges. TCPA consent and opt‑outs baked in.
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--mt-navy)]">US Pricing</h2>
          <p className="mt-2 text-slate-600">Pay by card or ACH. Month‑to‑month after setup. Cancel anytime.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-3xl shadow-lg border p-6 md:p-8 ${p.featured ? 'ring-2 ring-[var(--mt-teal)]' : 'border-gray-200'}`}
              >
                <h3 className="text-xl font-semibold flex items-center justify-between text-[var(--mt-navy)] mb-4">
                  <span>{p.name}</span>
                  {p.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--mt-teal)]/15 text-[var(--mt-navy)]">
                      Most Popular
                    </span>
                  )}
                </h3>
                <div className="text-2xl font-semibold text-[var(--mt-navy)] mb-2">{p.price}</div>
                <p className="text-slate-600 text-sm mb-4">{p.blurb}</p>
                <div className="mb-6">
                  <List items={p.highlights}/>
                </div>
                <a 
                  href="https://calendly.com/mindfultechnology" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full mt-6 px-6 py-3 rounded-2xl mt-btn text-white font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Two‑Step Lead Form */}
        <section id="lead" className="max-w-7xl mx-auto px-6 py-10">
          <LeadFormTwoStep />
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--mt-navy)]">FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[var(--mt-navy)] mb-2">{f.q}</h3>
                <p className="text-slate-700 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--mt-navy)]">Talk to a Solutions Architect</h3>
            <p className="mt-2 text-slate-700">Bring a workflow you hate. We'll design a digital worker to eliminate it.</p>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--mt-teal)]"/> 
                <a href="tel:+17208916563" className="underline hover:text-[var(--mt-teal)]">+1 (720) 891‑6563</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--mt-teal)]"/> 
                <a href="mailto:info@mindfultech.services" className="underline hover:text-[var(--mt-teal)]">info@mindfultech.services</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--mt-teal)]"/> 
                <span className="text-slate-600">Atlanta • South Florida • Kentucky • Nationwide Remote</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--mt-navy)] text-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-lg font-semibold">Mindful Tech</div>
              <div className="mt-2 text-slate-300">
                Liberation through tech. We build ethical, practical automations that save time and drive revenue.
              </div>
              <div className="mt-3">
                <Social/>
              </div>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#pricing">Pricing</a></li>
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#lead">Get Started</a></li>
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#">Privacy Policy (CCPA/CPRA)</a></li>
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#">Terms of Service</a></li>
                <li><a className="hover:underline hover:text-[var(--mt-teal)]" href="#">DPA & Subprocessors</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">HQ (Mailing)</div>
              <div className="mt-2 text-slate-300">
                5830 E 2nd St, Ste 7000 #26566<br/>
                Casper, WY 82609 • USA
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800"></div>
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Mindful Tech LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

