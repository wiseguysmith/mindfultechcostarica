"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  Clock,
  Instagram,
  Linkedin,
  MessageSquare,
  Shield,
  Sparkles,
  Stethoscope,
  Twitter,
  Utensils,
} from "lucide-react";

import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import ContentGrid from "@/components/ContentGrid";
import IndustryHighlightSection from "@/components/IndustryHighlightSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";


// Removed module-level JSX functions - they cause hydration/server errors
// JSX is now created inside the component function

const US_PLANS = [
  {
    name: "Starter",
    price: "$1,250 setup + $350/mo",
    blurb: "Solo founders & small teams getting their first digital worker online.",
    highlights: [
      "1 digital worker (email + web chat)",
      "HubSpot or Pipedrive pipeline + basic dashboard",
      "Lead capture widget + auto-responders",
      "2 automations (n8n/Zapier) — e.g., lead-to-CRM, proposals",
      "Email/SMS templates + playbooks",
    ],
    cta: "Book a 20-min Fit Call",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
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
      "Bi-weekly optimization sprints",
    ],
    cta: "Start Your Build Sprint",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Multi-location or regulated ops needing SSO, SOWs, and guardrails.",
    highlights: [
      "Custom agent behaviors + retrieval",
      "SSO (Google/Microsoft), roles & permissions",
      "Audit logs + optional US data residency",
      "HIPAA/TCPA guidance where applicable",
      "Dedicated success manager",
    ],
    cta: "Talk to Solutions Architect",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
  },
];

const US_DEALER_PLANS = [
  {
    name: "Dealer Add-On",
    price: "+$500/mo per rooftop",
    blurb: "Inventory concierge, instant text-back, trade-in & pre-qual flows",
    bullets: [
      "Inventory search chatbot (NLQ)",
      "Missed-call auto text-back",
      "Trade-in VIN capture + appraisal handoff",
      "Finance pre-qual + doc collection",
    ],
  },
  {
    name: "Dealer Pro",
    price: "+$1,200/mo per rooftop",
    blurb: "Aged-inventory booster, service lane flows, review engine",
    bullets: [
      "30/60/90-day aged-unit campaigns",
      "Service reminders + no-show reschedules",
      "Review velocity automations",
      "Monthly conversion tuning",
    ],
  },
];

const US_FAQS = [
  {
    question: "What does implementation look like?",
    answer:
      "Week 1: discovery + stack mapping. Week 2: agent setup + CRM wiring. Week 3: go-live with guardrails and iterate.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No — it gives your team a jetpack. Admin chores drop; humans handle nuance and relationships.",
  },
  {
    question: "What tools do you support?",
    answer:
      "HubSpot, Google Workspace, Slack, Notion, Aircall, Twilio, WhatsApp Business, Meta, LinkedIn, Stripe, Shopify, Calendly, Supabase, and more.",
  },
  {
    question: "Dealership CRMs?",
    answer:
      "We can integrate with VinSolutions/DriveCentric/DealerSocket via API, email parser, or webhook bridges.",
  },
];

// Removed module-level JSX functions - they cause hydration/server errors
// JSX is now created inside the component function

const CR_PLANS = [
  {
    name: "Pura Vida",
    price: "$850 setup + $250/mes",
    blurb: "Automatiza WhatsApp, reservas y pagos para negocios boutique.",
    highlights: [
      "Agente bilingüe WhatsApp + email",
      "Flujos de reservas y recordatorios",
      "Conexión a calendarios y tours",
      "Panel simple con métricas clave",
    ],
    cta: "Agendar consulta",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
  },
  {
    name: "Reserva+",
    price: "$1,500 setup + $450/mes",
    blurb: "Hoteles/multi-sede que necesitan orquestar múltiples canales.",
    highlights: [
      "Agentes para WhatsApp, Instagram y web",
      "Sincronización con motores de reserva",
      "Upsell automatizado de tours y servicios",
      "Integración con facturación electrónica",
    ],
    cta: "Descubrir paquete",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: true,
  },
  {
    name: "Corporativo",
    price: "Custom",
    blurb: "Grupos hoteleros o franquicias que exigen SLAs y auditoría.",
    highlights: [
      "Soporte legal y compliance",
      "Respaldo 24/7",
      "Reportes avanzados",
      "Integraciones personalizadas",
    ],
    cta: "Hablar con un especialista",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
  },
];

const CR_FAQS = [
  {
    question: "¿Cuánto tarda la implementación?",
    answer: "De 1 a 2 semanas según el número de canales e integraciones.",
  },
  {
    question: "¿Soportan facturación electrónica?",
    answer: "Sí, contamos con aliados locales para automatizar la facturación.",
  },
  {
    question: "¿Pueden manejar leads de redes sociales?",
    answer: "Sí, conectamos Instagram, Facebook, WhatsApp y webforms.",
  },
  {
    question: "¿Qué pasa si necesito soporte humano?",
    answer: "Nuestros agentes entregan la conversación a tu equipo en un clic.",
  },
];

const Social = () => (
  <div className="flex items-center gap-3">
    <a
      href="https://twitter.com/yourhandle"
      aria-label="X/Twitter"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Twitter className="w-5 h-5" />
    </a>
    <a
      href="https://instagram.com/yourhandle"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Instagram className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/company/mindful-tech"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </div>
);


function LeadFormTwoStep({
  submitSuccessMessage,
}: {
  submitSuccessMessage: string;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(submitSuccessMessage);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-[#0F2A3F] mb-4">
        Quick Start — 2-Step Lead Form
      </h3>
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div className="space-y-3">
            <input
              name="email"
              type="email"
              placeholder="Work email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input
              name="name"
              type="text"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input
              name="company"
              type="text"
              placeholder="Company"
              required
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-4 px-6 py-3 rounded-2xl bg-[#2DB6A3] text-white font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-slate-500 mt-4">
              By continuing you agree to our <a className="underline hover:text-[#2DB6A3]" href="#">Privacy</a> & <a className="underline hover:text-[#2DB6A3]" href="#">Terms</a>.
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              name="phone"
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input
              name="website"
              type="url"
              placeholder="Website (optional)"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="What do you want your digital worker to do?"
              required
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent resize-none"
            />
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 rounded-2xl bg-[#2DB6A3] text-white font-semibold hover:opacity-90 transition-all duration-200"
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

export default function HomePage() {
  // Create JSX elements inside component to avoid hydration issues
  const usHeroFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Digital Workers (AI Agents)",
      description:
        "Inbox triage, lead capture, booking, follow-ups across email, SMS, and chat.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First Defaults",
      description:
        "Role-based access, audit trails, least-privilege credentials. TCPA/HIPAA aware where relevant.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Automation That Prints Time™",
      description:
        "HubSpot/Google + n8n/Zapier to remove 10+ hours/week from busywork.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Speed-to-Lead < 60s",
      description: "Website chat + SMS handoff + CRM routing so hot leads never cool.",
    },
  ];

  const usIndustries = [
    { icon: <Utensils className="w-5 h-5" />, label: "Restaurants" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "MedSpas & Clinics" },
    { icon: <Car className="w-5 h-5" />, label: "Auto Dealerships" },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      label: "Professional Services (Law/CPA)",
    },
  ];

  const crHeroFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Agentes Bilingües",
      description:
        "WhatsApp nativo para atender turistas y locales. Captura leads y agenda citas automáticamente.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cumplimiento Local",
      description:
        "Conocimiento de legislación costarricense, registros sanitarios y políticas de datos.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atención 24/7",
      description:
        "Respuestas instantáneas para hoteles, surf camps, tours y wellness centros.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Integraciones Costa Rica",
      description:
        "Compatible con facturación electrónica, booking engines y CRMs locales.",
    },
  ];

  const crIndustries = [
    { icon: <Utensils className="w-5 h-5" />, label: "Restaurantes y beach clubs" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Hoteles y surf camps" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Wellness & yoga" },
    { icon: <BriefcaseBusiness className="w-5 h-5" />, label: "Servicios legales & inmobiliarios" },
  ];
  
  return (
    <>
      <div className="min-h-screen mt-gradient text-slate-900">
        <HeroSection
          badge={{
            icon: <Sparkles className="w-4 h-4" />,
            text: "USA Edition",
          }}
          title="Build the Minds That Work for You."
          subtitle="Book more calls, close more deals, and let digital workers handle the busywork."
          primaryCTA={{
            label: "Book a 20-min Fit Call",
            href: "https://calendly.com/mindfultechnology",
            external: true,
          }}
          secondaryCTA={{
            label: "Quick Lead Form",
            href: "#lead",
          }}
          tertiaryCTA={{
            label: "Call +1 (720) 891-6563",
            href: "tel:+17208916563",
          }}
          features={usHeroFeatures}
          proofPoints={[
            { icon: <Shield className="w-4 h-4" />, text: "Guardrails on by default" },
            { icon: <Clock className="w-4 h-4" />, text: "Live in ~3 weeks" },
          ]}
        />

        <FeatureGrid
          title="Where We Shine"
          description="Primary US focus: Restaurants, MedSpas/Clinics, Auto Dealerships."
          features={usIndustries}
        />

        <ContentGrid
          cards={[
            {
              title: "What You Get",
              items: [
                "Audit + architecture of your stack",
                "On-brand agent prompts, tone, and guardrails",
                "CRM wiring: pipelines, SLAs, dashboards",
                "Automations for intake, scheduling, follow-up, and docs",
                "Team training + playbooks + security checklist",
              ],
            },
            {
              title: "Outcomes We Target",
              items: [
                "Speed-to-lead under 60 seconds",
                "+15–30% booking rate from inbound",
                "10+ hours/week saved per rep",
                "Fewer no-shows with smart reminders",
                "Clean CRM data that actually helps decisions",
              ],
            },
          ]}
        />

        <IndustryHighlightSection
          title="Auto Dealerships — Book More Test Drives, Move Aged Units"
          description="Inventory concierge, instant text-back, trade-in & pre-qual flows. Works with VinSolutions/DriveCentric/DealerSocket.*"
          plans={US_DEALER_PLANS}
          disclaimer="*Via API, email-parser, or webhook bridges. TCPA consent and opt-outs baked in."
        />

        <PricingSection
          title="U.S. Pricing"
          description="Pay by card or ACH. Month-to-month after setup. Cancel anytime."
          plans={US_PLANS}
        />

        <section id="lead" className="max-w-7xl mx-auto px-6 section-spacing">
          <LeadFormTwoStep submitSuccessMessage="Thank you! We'll reply same day." />
        </section>

        <FAQSection title="FAQ" faqs={US_FAQS} />

        <ContactSection
          title="Talk to a Solutions Architect"
          description="Bring a workflow you hate. We'll design a digital worker to eliminate it."
          contact={{
            phone: { label: "+1 (720) 891-6563", href: "tel:+17208916563" },
            email: { label: "info@mindfultech.services", href: "mailto:info@mindfultech.services" },
            location: "Atlanta • South Florida • Kentucky • Nationwide Remote",
          }}
        />

        <footer className="bg-[#0F2A3F] text-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-lg font-semibold">Mindful Tech</div>
              <p className="mt-2 text-slate-300 body-text">
                Liberation through tech. We build ethical, practical automations that save time and drive revenue.
              </p>
              <div className="mt-3">
                <Social />
              </div>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#lead">
                    Get Started
                  </a>
                </li>
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">
                    Privacy Policy (CCPA/CPRA)
                  </a>
                </li>
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">
                    DPA & Subprocessors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">HQ (Mailing)</div>
              <p className="mt-2 text-slate-300">
                5830 E 2nd St, Ste 7000 #26566
                <br />
                Casper, WY 82609 • USA
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800" />
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-slate-400">
            © 2025 Mindful Tech LLC. All rights reserved.
          </div>
        </footer>
      </div>

      <div className="bg-gradient-to-b from-[#F4EDE2] to-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-[#0F2A3F] mb-4">
              Costa Rica Edition — Pura Vida Automations
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Construimos trabajadores digitales que hablan tu idioma, conocen tus procesos y hacen que tus clientes digan ¡Pura Vida! Ideal para hoteles, surf camps, wellness, restaurantes y servicios profesionales en Guanacaste y todo Costa Rica.
            </p>
          </div>

          <HeroSection
            badge={{
              icon: <Sparkles className="w-4 h-4" />,
              text: "Costa Rica",
            }}
            title="Agentes que atienden turistas y locales sin estrés"
            subtitle="Responde leads en minutos, agenda reservas y cobra sin perseguir chats."
            primaryCTA={{
              label: "Agendar consulta",
              href: "https://calendly.com/mindfultechnology",
              external: true,
            }}
            secondaryCTA={{
              label: "WhatsApp directo",
              href: "https://wa.me/17208916563",
              external: true,
            }}
            features={crHeroFeatures}
          />

          <FeatureGrid
            title="Sectores donde brillamos en Costa Rica"
            description="Adaptamos los flujos a tu negocio, desde reservas hasta seguimiento de clientes."
            features={crIndustries}
          />

          <ContentGrid
            cards={[
              {
                title: "Lo que configuramos",
                items: [
                  "Conexión WhatsApp + correo + webforms",
                  "Flujos de reserva, upsell y recordatorios",
                  "Integraciones con booking engines y pasarelas",
                  "Dashboard con métricas clave y seguimiento",
                ],
              },
              {
                title: "Beneficios inmediatos",
                items: [
                  "Menos chats sin responder",
                  "Más reservas directas, menos comisiones",
                  "Clientes felices con respuestas bilingües",
                  "Tu equipo se enfoca en experiencias memorables",
                ],
              },
            ]}
          />

          <PricingSection
            title="Paquetes Costa Rica"
            description="Planes en dólares, facturación local disponible."
            plans={CR_PLANS}
          />

          <section className="max-w-5xl mx-auto section-spacing">
            <h3 className="text-3xl font-semibold text-[#0F2A3F] mb-6">
              Preguntas frecuentes
            </h3>
            <FAQSection title="" faqs={CR_FAQS} />
          </section>

          <section className="max-w-5xl mx-auto section-spacing">
            <h3 className="text-3xl font-semibold text-[#0F2A3F] mb-4">
              ¿Listo para probarlo una semana?
            </h3>
            <LeadFormTwoStep submitSuccessMessage="¡Gracias! Coordinaremos tu prueba esta semana." />
          </section>

          <ContactSection
            title="Hablemos"
            description="Atendemos en Tamarindo, Liberia y remoto para todo el país."
            contact={{
              phone: { label: "+506 6000 0000", href: "tel:+50660000000" },
              email: { label: "hola@mindfultech.cr", href: "mailto:hola@mindfultech.cr" },
              location: "Guanacaste, Tamarindo, Costa Rica",
            }}
          />
        </div>
      </div>
    </>
  );
}
