/**
 * MindfulTech.services — Spanish Version Landing Page (Refactored)
 * 
 * As your CTO mentor: Notice how this page now uses the EXACT same component structure
 * as the US page, but with Spanish content. This is the power of component-based architecture:
 * 
 * 1. Same components = consistent design
 * 2. Different content = localized experience
 * 3. Single source of truth for design patterns
 * 4. Easy to maintain - fix a bug once, it's fixed everywhere
 */

'use client';

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Shield, 
  Clock, 
  MessageSquare,
  Car, 
  Utensils, 
  Stethoscope, 
  BriefcaseBusiness, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import ContentGrid from '@/components/ContentGrid';
import IndustryHighlightSection from '@/components/IndustryHighlightSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
// import DonationSection from '@/components/DonationSection';

// Brand palette as CSS variables - keeping for backward compatibility
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
      .selection\\:bg-amber-200\\/60 ::selection {
        background-color: rgba(251, 191, 36, 0.6);
      }
    `
  }} />
);

// Hero section features - Spanish
const heroFeatures = [
  { 
    icon: <MessageSquare className="w-6 h-6"/>, 
    title: "Trabajadores Digitales (Agentes IA)", 
    description: "Clasificación de bandeja de entrada, captura de leads, reservas, seguimientos en email, SMS y chat.", 
  },
  { 
    icon: <Shield className="w-6 h-6"/>, 
    title: "Seguridad Primero por Defecto", 
    description: "Acceso basado en roles, auditoría, credenciales de menor privilegio. Conocimiento de TCPA/HIPAA donde corresponda.", 
  },
  { 
    icon: <Clock className="w-6 h-6"/>, 
    title: "Automatización que Ahorra Tiempo™", 
    description: "HubSpot/Google + n8n/Zapier para eliminar 10+ horas/semana de trabajo rutinario.", 
  },
  { 
    icon: <Sparkles className="w-6 h-6"/>, 
    title: "Velocidad de Respuesta < 60s", 
    description: "Chat del sitio + SMS + enrutamiento CRM para que los leads calientes nunca se enfríen.", 
  },
];

// Industry verticals - Spanish
const industries = [
  { icon: <Utensils className="w-5 h-5"/>, label: "Restaurantes" },
  { icon: <Stethoscope className="w-5 h-5"/>, label: "MedSpas y Clínicas" },
  { icon: <Car className="w-5 h-5"/>, label: "Concesionarios de Autos" },
  { icon: <BriefcaseBusiness className="w-5 h-5"/>, label: "Servicios Profesionales (Abogados/CPA)" },
];

// Pricing plans - Spanish
const plans = [
  { 
    name: "Starter", 
    price: "$1,250 configuración + $350/mes", 
    blurb: "Fundadores solos y equipos pequeños obteniendo su primer trabajador digital en línea.", 
    highlights: [
      "1 trabajador digital (email + chat web)",
      "Pipeline de HubSpot o Pipedrive + dashboard básico",
      "Widget de captura de leads + auto‑respondedores",
      "2 automatizaciones (n8n/Zapier) — ej., lead‑to‑CRM, propuestas",
      "Plantillas de Email/SMS + guías",
    ], 
    cta: "Reservar una Llamada de 20 min",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
    },
  { 
    name: "Pro", 
    price: "$3,500 configuración + $900/mes", 
    blurb: "PYMES que quieren que inbound y outbound trabajen juntos.", 
    highlights: [
      "2–3 trabajadores digitales (chat del sitio, conserje de bandeja, agente SDR)",
      "Pipelines CRM, SLAs y reportes",
      "5 automatizaciones (n8n/Zapier) + acciones webhook",
      "Secuencias outbound + enriquecimiento de leads",
      "Sprints de optimización quincenales",
    ], 
    cta: "Iniciar tu Sprint de Construcción",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: true, 
    },
  { 
    name: "Enterprise", 
    price: "Personalizado", 
    blurb: "Operaciones multi‑ubicación o reguladas que necesitan SSO, SOWs y salvaguardas.", 
    highlights: [
      "Comportamientos de agentes personalizados + recuperación",
      "SSO (Google/Microsoft), roles y permisos",
      "Registros de auditoría + residencia de datos US opcional",
      "Orientación HIPAA/TCPA donde corresponda",
      "Gerente de éxito dedicado",
    ], 
    cta: "Hablar con Arquitecto de Soluciones",
    ctaHref: "https://calendly.com/mindfultechnology",
    featured: false,
    },
];

// Dealer add‑ons - Spanish
const dealerPlans = [
  { 
    name: "Complemento para Concesionarios", 
    price: "+$500/mes por concesionario", 
    blurb: "Conserje de inventario, respuesta de texto instantánea, flujos de intercambio y pre‑calificación", 
    bullets: [
      "Chatbot de búsqueda de inventario (NLQ)",
      "Respuesta de texto automática a llamadas perdidas",
      "Captura de VIN de intercambio + transferencia de evaluación",
      "Pre‑calificación financiera + recopilación de documentos",
    ], 
  },
  { 
    name: "Concesionario Pro", 
    price: "+$1,200/mes por concesionario", 
    blurb: "Impulsor de inventario envejecido, flujos de servicio, motor de reseñas", 
    bullets: [
      "Campañas de unidades envejecidas de 30/60/90 días",
      "Recordatorios de servicio + reprogramación de no‑shows",
      "Automatizaciones de velocidad de reseñas",
      "Ajuste de conversión mensual",
    ], 
  },
];

// FAQ data - Spanish
const faqs = [
  { 
    question: "¿Cómo se ve la implementación?", 
    answer: "Semana 1: descubrimiento + mapeo de stack. Semana 2: configuración de agente + conexión CRM. Semana 3: puesta en marcha con salvaguardas e iterar.", 
  },
  { 
    question: "¿Esto reemplazará a mi equipo?", 
    answer: "No — le da a tu equipo un jetpack. Las tareas administrativas caen; los humanos manejan los matices y las relaciones.", 
  },
  { 
    question: "¿Qué herramientas soportan?", 
    answer: "HubSpot, Google Workspace, Slack, Notion, Aircall, Twilio, WhatsApp Business, Meta, LinkedIn, Stripe, Shopify, Calendly, Supabase y más.", 
  },
  { 
    question: "¿CRMs de concesionarios?", 
    answer: "Podemos integrarnos con VinSolutions/DriveCentric/DealerSocket vía API, analizador de email o puentes webhook.", 
  },
];

// Two-step lead form component (Spanish)
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
    console.log('Form submitted:', formData);
    alert('¡Gracias! Responderemos el mismo día con los siguientes pasos.');
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-[#0F2A3F] mb-4">Inicio Rápido — Formulario de 2 Pasos</h3>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-3">
            <input 
              name="email"
              type="email" 
              placeholder="Email de trabajo" 
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input 
              name="name"
              type="text" 
              placeholder="Nombre completo" 
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input 
              name="company"
              type="text" 
              placeholder="Empresa" 
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
              Siguiente <ArrowRight className="w-4 h-4"/>
            </button>
            <div className="text-xs text-slate-500 mt-4">
              Al continuar aceptas nuestra <a className="underline hover:text-[#2DB6A3]" href="#">Privacidad</a> y <a className="underline hover:text-[#2DB6A3]" href="#">Términos</a>.
            </div>
                </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <input 
              name="phone"
              type="tel" 
              placeholder="Teléfono (opcional)" 
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <input 
              name="website"
              type="url" 
              placeholder="Sitio web (opcional)" 
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2DB6A3] focus:border-transparent"
            />
            <textarea 
              name="message"
              placeholder="¿Qué quieres que haga tu trabajador digital? (breve de 60s)" 
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
              Enviar
            </button>
            <div className="text-xs text-slate-500 mt-4">
              Responderemos el mismo día con los siguientes pasos.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

// Social links component
const Social = () => (
  <div className="flex items-center gap-3">
    <a 
      href="https://twitter.com/yourhandle" 
      aria-label="X/Twitter" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Twitter className="w-5 h-5"/>
    </a>
    <a 
      href="https://instagram.com/yourhandle" 
      aria-label="Instagram" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Instagram className="w-5 h-5"/>
    </a>
    <a 
      href="https://www.linkedin.com/company/mindful-tech" 
      aria-label="LinkedIn" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Linkedin className="w-5 h-5"/>
    </a>
            </div>
);

export default function ES_LandingPage() {
  // Inject JSON-LD structured data (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'es-json-ld';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mindful Tech",
      url: "https://mindfultech.services",
      logo: "https://mindfultech.services/logo-es.png",
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
    });
    document.head.appendChild(script);
    return () => {
      const existingScript = document.getElementById('es-json-ld');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <BrandStyle />

      <div className="min-h-screen mt-gradient text-slate-900 selection:bg-amber-200/60">
        {/* Hero Section */}
        <HeroSection
          badge={{
            icon: <Sparkles className="w-4 h-4"/>,
            text: "Edición Español"
          }}
          title="Construye las Mentes que Trabajan para Ti."
          subtitle="Reserva más llamadas, cierra más tratos y deja que los trabajadores digitales manejen el trabajo rutinario."
          primaryCTA={{
            label: "Reservar una Llamada de 20 min",
            href: "https://calendly.com/mindfultechnology",
            external: true
          }}
          secondaryCTA={{
            label: "Formulario Rápido",
            href: "#lead",
            external: false
          }}
          tertiaryCTA={{
            label: "Llamar +1 (720) 891‑6563",
            href: "tel:+17208916563",
            external: false
          }}
          features={heroFeatures}
          proofPoints={[
            { icon: <Shield className="w-4 h-4"/>, text: "Salvaguardas activadas por defecto" },
            { icon: <Clock className="w-4 h-4"/>, text: "En vivo en ~3 semanas" }
          ]}
        />

        {/* Where We Shine - Industries */}
        <FeatureGrid
          title="Donde Destacamos"
          description="Enfoque principal: Restaurantes, MedSpas/Clínicas, Concesionarios de Autos."
          features={industries}
        />

        {/* What You Get / Outcomes */}
        <ContentGrid
          cards={[
            {
              title: "Lo que Obtienes",
              items: [
                "Auditoría + arquitectura de tu stack",
                "Prompts de agente con marca, tono y salvaguardas",
                "Conexión CRM: pipelines, SLAs, dashboards",
                "Automatizaciones para intake, programación, seguimiento y documentos",
                "Capacitación del equipo + guías + lista de verificación de seguridad",
              ]
            },
            {
              title: "Resultados que Buscamos",
              items: [
                "Velocidad de respuesta a leads en menos de 60 segundos",
                "+15–30% tasa de reserva de inbound",
                "10+ horas/semana ahorradas por representante",
                "Menos no‑shows con recordatorios inteligentes",
                "Datos CRM limpios que realmente ayudan a tomar decisiones",
              ]
            }
          ]}
        />

        {/* Auto Dealerships Section */}
        <IndustryHighlightSection
          title="Concesionarios de Autos — Reserva Más Pruebas de Manejo, Mueve Unidades Envejecidas"
          description="Conserje de inventario, respuesta de texto instantánea, flujos de intercambio y pre‑calificación. Funciona con VinSolutions/DriveCentric/DealerSocket.*"
          plans={dealerPlans}
          disclaimer="*Vía API, analizador de email o puentes webhook. Consentimiento TCPA y opt‑outs incluidos."
        />

        {/* Pricing Section */}
        <PricingSection
          title="Precios"
          description="Paga con tarjeta o ACH. Mes a mes después de la configuración. Cancela en cualquier momento."
          plans={plans}
        />

        {/* Two‑Step Lead Form */}
        <section id="lead" className="max-w-7xl mx-auto px-6 section-spacing">
          <LeadFormTwoStep />
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Preguntas Frecuentes"
          faqs={faqs}
        />

        {/* Contact Section */}
        <ContactSection
          title="Habla con un Arquitecto de Soluciones"
          description="Trae un flujo de trabajo que odias. Diseñaremos un trabajador digital para eliminarlo."
          contact={{
            phone: {
              label: "+1 (720) 891‑6563",
              href: "tel:+17208916563"
            },
            email: {
              label: "info@mindfultech.services",
              href: "mailto:info@mindfultech.services"
            },
            location: "Atlanta • Sur de Florida • Kentucky • Remoto Nacional"
          }}
        />

        {/* Donation Section - Temporarily commented out to debug */}
        {/* <DonationSection
          region="cr"
          title="Apoya los Esfuerzos de Ayuda del Caribe"
          description="Asóciate con organizaciones verificadas en todo el Caribe que trabajan en ayuda en desastres, resiliencia climática y desarrollo comunitario. Tus donaciones tienen un impacto directo."
          wallet="0x1234567890123456789012345678901234567890"
        /> */}

        {/* Footer */}
        <footer className="bg-[#0F2A3F] text-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-lg font-semibold">Mindful Tech</div>
              <div className="mt-2 text-slate-300 body-text">
                Liberación a través de la tecnología. Construimos automatizaciones éticas y prácticas que ahorran tiempo y generan ingresos.
                  </div>
              <div className="mt-3">
                <Social/>
                </div>
            </div>
            <div>
              <div className="font-semibold">Empresa</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#pricing">Precios</a></li>
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#lead">Comenzar</a></li>
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">Carreras</a></li>
              </ul>
          </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">Política de Privacidad (CCPA/CPRA)</a></li>
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
                <li><a className="hover:underline hover:text-[#2DB6A3]" href="#" target="_blank" rel="noopener noreferrer">DPA y Subprocesadores</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Sede (Correo)</div>
              <div className="mt-2 text-slate-300">
                5830 E 2nd St, Ste 7000 #26566<br/>
                Casper, WY 82609 • USA
                </div>
            </div>
          </div>
          <div className="border-t border-slate-800"></div>
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Mindful Tech LLC. Todos los derechos reservados.
          </div>
        </footer>
            </div>
    </>
  );
}
