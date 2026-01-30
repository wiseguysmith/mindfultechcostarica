/**
 * Mindful Tech - Tamarindo Brand Pack Homepage
 * 
 * AI agents + ownership rails for Tamarindo businesses.
 * Build the Minds That Work While You Surf.
 */

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-mark.svg" 
                alt="MindfulTech Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gray-800">MindfulTech</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="text-orange-500 font-semibold px-3 py-1 rounded-lg bg-orange-50">
                  EN
                </button>
                <button className="text-gray-600 hover:text-orange-500 font-medium px-3 py-1 rounded-lg transition-colors">
                  ES
                </button>
              </div>
              <a
                href="https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech."
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-teal-800"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* MindfulTech Brand */}
              <div className="mb-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full blur-lg opacity-60"></div>
                    <img 
                      src="/logo-mark.svg" 
                      alt="MindfulTech Logo" 
                      className="relative w-16 h-16 mr-4 drop-shadow-2xl"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-400 blur-2xl opacity-40"></div>
                    <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-wider">
                      <span className="bg-gradient-to-r from-orange-400 via-white to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                        Mindful
                      </span>
                      <span className="bg-gradient-to-r from-teal-400 via-white to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                        Tech
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-white to-teal-400 rounded-full shadow-lg"></div>
                </div>
                <div className="text-center">
                  <p className="text-base md:text-lg text-white/90 font-semibold tracking-wide">
                    AI-Powered Business Solutions
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-400 blur-3xl opacity-30"></div>
                  <span className="relative bg-gradient-to-r from-orange-400 via-white to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                    AI Agents That Work
                  </span>
                </div>
                <br />
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-orange-400 blur-2xl opacity-20"></div>
                  <span className="relative text-white drop-shadow-2xl font-bold">
                    While You Focus on Your Business
                  </span>
                </div>
              </h2>
              
              <p className="text-lg md:text-xl text-white mb-4 max-w-5xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
                Intelligent AI agents for Costa Rican businesses—answering inquiries, booking appointments, and capturing leads 24/7 on WhatsApp.
              </p>
              
              <p className="text-base md:text-lg text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Save an hour daily, increase inquiry capture by 20-40%, and convert tourists into repeat customers—without complexity.
              </p>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 text-white font-bold text-lg border border-white/30 shadow-2xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mr-4 animate-pulse shadow-lg"></div>
                  <span className="tracking-wide">Built in Costa Rica • Available 24/7</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a
                  href="https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech."
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-xl tracking-wide uppercase"
                >
                  Start Free Audit
                </a>
                
                <a
                  href="https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech."
                  className="bg-transparent border-3 border-white text-white hover:bg-white/20 hover:border-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 text-xl tracking-wide uppercase backdrop-blur-sm"
                >
                  Hablar por WhatsApp
                </a>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm font-bold">
                <span className="flex items-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                  <div className="w-4 h-4 mr-3 bg-green-400 rounded-full animate-pulse"></div>
                  WhatsApp Business
                </span>
                <span className="flex items-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                  <div className="w-4 h-4 mr-3 bg-blue-400 rounded-full animate-pulse"></div>
                  DocuSign
                </span>
                <span className="flex items-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                  <div className="w-4 h-4 mr-3 bg-purple-400 rounded-full animate-pulse"></div>
                  Stripe
                </span>
                <span className="flex items-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 border border-white/30">
                  <div className="w-4 h-4 mr-3 bg-orange-400 rounded-full animate-pulse"></div>
                  Plausible
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Messaging Pillars Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Costa Rican businesses choose us
              </h2>
              <div className="max-w-5xl mx-auto px-8">
                <p className="text-lg text-gray-700 leading-relaxed" style={{wordBreak: 'normal', whiteSpace: 'normal'}}>
                  WhatsApp-nativo flows, bilingual templates, Costa Rican compliance sensitivity, outcome pricing, and zero-fluff setup.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: '⏰', 
                  title: 'Time Back, Every Day', 
                  desc: 'Your AI agente answers, books, and follows up—24/7. +20–40% inquiry capture via WhatsApp auto-response & reminders.',
                  proof: '+20–40% inquiry capture'
                },
                { 
                  icon: '📈', 
                  title: 'Revenue That Survives Low Season', 
                  desc: 'Reactivate locals, birthdays, and past guests automatically. +10–25% uplift from "locals lists" + review + loyalty nudges.',
                  proof: '+10–25% uplift from locals'
                },
                { 
                  icon: '🔒', 
                  title: 'Ownership You Can Audit', 
                  desc: 'Tokenized assets with clear rules (who owns what, who gets paid when). On-chain receipts for investors; KYC-ready flows.',
                  proof: 'On-chain receipts for investors'
                },
                { 
                  icon: '🤝', 
                  title: 'Simple, Bilingual, Human', 
                  desc: 'Feels like your team, not a bot. English/Español, tono tranquilo. Hand-off to a human in one tap; WhatsApp first.',
                  proof: 'Hand-off to human in one tap'
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.desc}</p>
                  <div className="text-teal-600 font-medium text-sm">
                    {item.proof}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How it works
              </h2>
              <div className="max-w-5xl mx-auto px-8">
                <p className="text-lg text-gray-700 leading-relaxed" style={{wordBreak: 'normal', whiteSpace: 'normal'}}>
                  We plug into how Tamarindo actually communicates. Done in a day, compounding results.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  title: 'Connect WhatsApp + IG + Maps',
                  description: 'We plug into how Tamarindo actually communicates.',
                },
                {
                  number: '2', 
                  title: 'Train your agente',
                  description: 'Menu, rooms, prices, docs, FAQs—done in a day.',
                },
                {
                  number: '3',
                  title: 'Compounding results',
                  description: 'Reviews, reactivations, upsells, and transparent payouts.',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-24 bg-gradient-to-br from-teal-50 via-slate-50 to-white relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Built for Costa Rican Businesses
              </h2>
              <div className="max-w-5xl mx-auto px-8">
                <p className="text-lg text-gray-700 leading-relaxed" style={{wordBreak: 'normal', whiteSpace: 'normal'}}>
                  WhatsApp-nativo flows, bilingual templates, Costa Rican compliance sensitivity, outcome pricing, and zero-fluff setup.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Hotel/Lodge',
                  description: 'Turn "hola, ¿disponibilidad?" into paid bookings—IG/WA to deposit without staff.',
                  icon: '🏨'
                },
                {
                  title: 'Restaurant/Beach Club',
                  description: 'Auto-confirm tables, push today\'s specials, ask happy locals for 5-star reviews.',
                  icon: '🍽️'
                },
                {
                  title: 'Law/Immigration',
                  description: 'Smart intake packs docs, schedules consults, and chases signatures while you\'re in court.',
                  icon: '⚖️'
                },
                {
                  title: 'Real Estate/Broker',
                  description: 'Lead catch + tour scheduling + post-tour follow-ups so no buyer goes cold.',
                  icon: '🏠'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              "More tours, fewer tabs. Pura vida."
            </blockquote>
            <cite className="text-lg text-gray-600">
              — DreamUp Property Management
            </cite>
          </div>
        </section>
        
        {/* Community & Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Born in Tamarindo. Built for Costa Rica.
              </h2>
              <div className="max-w-5xl mx-auto px-8">
                <p className="text-lg text-gray-700 leading-relaxed" style={{wordBreak: 'normal', whiteSpace: 'normal'}}>
                  We understand Costa Rican business culture, WhatsApp-first communication, and the unique challenges of running a business from coast to capital.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🏄‍♂️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Promise</h3>
                <p className="text-gray-600">2 free optimization days during green season for active clients</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Partnerships</h3>
                <p className="text-gray-600">Co-promos with surf schools, tour ops, yoga studios; referral 10–15%</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🐢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Giveback</h3>
                <p className="text-gray-600">1% to beach cleanups and turtle conservation (Las Baulas vibe)</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Trust Block</h3>
              <p className="text-lg text-gray-600 mb-6">"Built in Costa Rica. Backed by real outcomes."</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span>Data is yours; we don't resell</span>
                <span>•</span>
                <span>AI suggests; humans approve when sensitive</span>
                <span>•</span>
                <span>Logs for every action; easy export if you leave</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-teal-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 20-min WhatsApp setup. Pruébalo esta semana.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech."
                className="bg-white text-slate-800 hover:bg-gray-100 font-semibold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                Book WhatsApp Setup
              </a>
              <a
                href="https://calendly.com/mindfultechnology"
                className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 hover:border-white font-medium px-10 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                Schedule on Calendly
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo-mark.svg" 
                  alt="MindfulTech Logo" 
                  className="w-8 h-8"
                />
                <h3 className="text-xl font-semibold">MindfulTech</h3>
              </div>
              <p className="text-gray-300 mb-4">Build the Minds That Work While You Surf.</p>
              <p className="text-gray-400 text-sm">Guanacaste, Tamarindo, Costa Rica</p>
              <p className="text-gray-400 text-sm mt-2">Pura Vida, but productive</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Hotel/Lodge</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Restaurant/Beach Club</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Law/Immigration</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Real Estate/Broker</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:Elijah@mindfultech.com"
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Elijah@mindfultech.com
                </a>
                <a
                  href="https://wa.me/17208916563?text=Pura%20Vida%E2%80%94I%27d%20like%20a%2020-min%20setup%20for%20MindfulTech."
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Hablar por WhatsApp
                </a>
                <a
                  href="https://calendly.com/mindfultechnology"
                  className="block text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Schedule on Calendly
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Answers</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-white mb-1">Do I need a new app?</p>
                  <p className="text-gray-300">No. WhatsApp-first.</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">How fast can we be live?</p>
                  <p className="text-gray-300">48 hours with your FAQs/prices.</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Will a human review sensitive stuff?</p>
                  <p className="text-gray-300">Always.</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Can I pause in low season?</p>
                  <p className="text-gray-300">Sí, de verdad.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 MindfulTech. Built in Costa Rica. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Terms</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Turtle Conservation</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}