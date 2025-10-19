/**
 * Home Page
 * 
 * As your CTO mentor, I'm showing you how to create a compelling landing page
 * that immediately communicates value and drives conversions. Notice how we
 * structure the page with clear sections and strong CTAs.
 */

import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Image from 'next/image';

export default async function HomePage() {
  const t = await getTranslations();
  
  // For now, we'll use a gradient background. Later we'll add real Tamarindo images
  const heroData = {
    title: t('home.hero.title'),
    subtitle: t('home.hero.subtitle'),
    primaryCTA: {
      label: t('home.hero.primaryCTA'),
      message: 'Pura Vida—I\'d like a 20-min setup for MindfulTech.',
    },
    secondaryCTA: {
      label: t('home.hero.secondaryCTA'),
      href: '/trial',
    },
    tertiaryCTA: {
      label: t('home.hero.tertiaryCTA'),
      href: 'https://calendly.com/mindfultechnology',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  };

  return (
    <div className="min-h-screen">
      <Navbar currentLocale="en" />
      
      <main>
        {/* Hero Section */}
        <Hero {...heroData} />
        
        {/* Outcomes Section */}
        <section className="py-20 bg-foam">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {t('home.outcomes.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '📈', title: '+20–40% inquiry capture', desc: 'Never miss another lead' },
                { icon: '⏰', title: '10+ hours/month back', desc: 'Focus on what matters' },
                { icon: '✍️', title: 'Faster signatures', desc: 'DocuSign integration' },
                { icon: '📅', title: 'Fewer no-shows', desc: 'Smart follow-ups' },
              ].map((item, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {t('home.howItWorks.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  title: 'Connect WhatsApp + IG + Calendar',
                  description: 'One-time setup takes minutes',
                },
                {
                  number: '2', 
                  title: 'Train your agente in one day (EN/ES)',
                  description: 'We handle the heavy lifting',
                },
                {
                  number: '3',
                  title: 'Watch hours return and leads convert',
                  description: 'Results start immediately',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-coral text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Use Cases Grid */}
        <section className="py-20 bg-foam">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {t('home.useCases.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Law Offices', 'Property Managers', 'Hotels', 'Restaurants'].map((useCase, index) => (
                <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-heading font-semibold text-charcoal">
                    {useCase}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-charcoal mb-6">
              "{t('home.testimonial.quote')}"
            </blockquote>
            <cite className="text-lg text-muted">
              — {t('home.testimonial.author')}
            </cite>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t('home.finalCTA.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('home.finalCTA.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAWhatsApp
                label={t('cta.bookWhatsApp')}
                message="Pura Vida—I'd like a 20-min setup for MindfulTech."
                variant="primary"
                size="lg"
                className="bg-white text-coral hover:bg-foam"
              />
              <a
                href="https://calendly.com/mindfultechnology"
                className="btn-secondary border-white text-white hover:bg-white hover:text-coral"
              >
                {t('cta.scheduleCalendly')}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale="en" />
    </div>
  );
}


