/**
 * Trial Page
 * 
 * As your CTO mentor, I'm showing you how to create a conversion-focused page
 * that builds trust and drives action. Notice the clear value proposition
 * and multiple conversion paths.
 */

import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Image from 'next/image';

export default async function TrialPage() {
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen">
      <Navbar currentLocale="en" />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-coral to-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('trial.promise')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              No limits, no credit card required. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAWhatsApp
                label="Start Free Trial"
                message="Pura Vida—I'd like to start my 7-day free trial for MindfulTech."
                variant="primary"
                size="lg"
                className="bg-white text-coral hover:bg-foam"
              />
              <a
                href="https://calendly.com/mindfultechnology"
                className="btn-secondary border-white text-white hover:bg-white hover:text-coral"
              >
                Schedule Setup Call
              </a>
            </div>
          </div>
        </section>
        
        {/* What You Get */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {t('trial.whatYouGet.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🤖', title: 'Auto-reply', desc: 'Instant responses in EN/ES' },
                { icon: '📊', title: 'Data capture', desc: 'Lead information collection' },
                { icon: '📅', title: 'Booking flow', desc: 'Seamless appointment scheduling' },
                { icon: '⭐', title: 'Review nudge', desc: 'Automated review requests' },
                { icon: '📈', title: 'Basic analytics', desc: 'Performance insights' },
                { icon: '🔄', title: '24/7 operation', desc: 'Never miss a lead again' },
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
        
        {/* What We Need */}
        <section className="py-20 bg-foam">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                {t('trial.whatWeNeed.title')}
              </h2>
              <p className="text-lg text-muted">
                We'll need these from you to get started
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'FAQs - Common questions and answers',
                'Prices - Your service pricing',
                'Hand-off rules - When to transfer to humans',
                'Calendar link - Your booking calendar',
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-soft">
                  <div className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </div>
                  <span className="text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* QR Code Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
              {t('trial.qrCaption')}
            </h2>
            
            <div className="bg-foam rounded-2xl p-8 inline-block">
              <div className="w-48 h-48 bg-charcoal rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-sm">QR Code Placeholder</span>
              </div>
              <p className="text-muted text-sm">
                Scan to connect with our team
              </p>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to automate your business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses already using MindfulTech
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAWhatsApp
                label="Start Free Trial"
                message="Pura Vida—I'd like to start my 7-day free trial for MindfulTech."
                variant="primary"
                size="lg"
                className="bg-white text-coral hover:bg-foam"
              />
              <a
                href="https://calendly.com/mindfultechnology"
                className="btn-secondary border-white text-white hover:bg-white hover:text-coral"
              >
                Schedule Setup Call
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer locale="en" />
    </div>
  );
}


