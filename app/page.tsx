'use client'

import { useState, useEffect } from 'react'
import { Edition, heroContent, whatWeDo, tokenizationSteps, whoWeServe, credibility, CALENDLY_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import EditionToggle from '@/components/EditionToggle'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import { MessageSquare, Zap, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

/**
 * Home Page
 * 
 * As your CTO mentor: This is a client component because it manages state
 * (the edition toggle). Notice how we separate concerns: data comes from
 * site-data.ts, presentation is in components, and this page orchestrates
 * everything. This makes it easy to test and maintain.
 */
export default function HomePage() {
  const [edition, setEdition] = useState<Edition>('capital-rails')

  // Persist edition preference to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mindfultech-edition') as Edition | null
    if (saved && (saved === 'usa' || saved === 'capital-rails')) {
      setEdition(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('mindfultech-edition', edition)
  }, [edition])

  const hero = heroContent[edition]

  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-gold-50/30 bg-texture-light" />
        <Container className="relative">
          {/* Edition Toggle */}
          <div className="flex justify-end mb-8">
            <EditionToggle edition={edition} onEditionChange={setEdition} />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-800 mb-6 text-balance">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-600 mb-8 text-balance">
              {hero.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(CALENDLY_URL, '_blank')}
              >
                {hero.primaryCTA}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const quickLeadBtn = document.querySelector('[aria-label="Quick Lead Form"]') as HTMLButtonElement
                  quickLeadBtn?.click()
                }}
              >
                {hero.secondaryCTA}
              </Button>
            </div>
            <p className="text-sm text-charcoal-500 mb-6">{hero.trustLine}</p>
            
            {/* Anchor links to jump to sections */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => {
                  setEdition('usa')
                  setTimeout(() => {
                    document.getElementById('digital-workers')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="text-charcoal-600 hover:text-charcoal-800 underline decoration-gold-400 hover:decoration-gold-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                Jump to Digital Workers →
              </button>
              <span className="text-charcoal-300">|</span>
              <button
                type="button"
                onClick={() => {
                  setEdition('capital-rails')
                  setTimeout(() => {
                    document.getElementById('capital-rails')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="text-charcoal-600 hover:text-charcoal-800 underline decoration-gold-400 hover:decoration-gold-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                Jump to Capital Rails →
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do - 2 Column */}
      <Section id="what-we-do">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Workers */}
            <Card id="digital-workers" hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-charcoal-100 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-charcoal-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{whatWeDo.digitalWorkers.title}</h3>
                  <p className="text-charcoal-600 mb-4">{whatWeDo.digitalWorkers.description}</p>
                  <ul className="space-y-2">
                    {whatWeDo.digitalWorkers.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Capital Rails */}
            <Card id="capital-rails" hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-charcoal-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-charcoal-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{whatWeDo.capitalRails.title}</h3>
                  <p className="text-charcoal-600 mb-4">{whatWeDo.capitalRails.description}</p>
                  <ul className="space-y-2">
                    {whatWeDo.capitalRails.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Capital Rails Explained - Diagram Section */}
      {edition === 'capital-rails' && (
        <Section background="cream">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Capital Rails — Explained
            </h2>
            
            {/* Simple SVG Diagram */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white">
                <svg viewBox="0 0 800 200" className="w-full h-auto">
                  {/* Capital (Investors) */}
                  <g>
                    <rect x="20" y="80" width="120" height="40" rx="4" fill="#1A1A1A" />
                    <text x="80" y="105" textAnchor="middle" fill="#F4EDE2" fontSize="14" fontWeight="600">
                      Capital
                    </text>
                    <text x="80" y="125" textAnchor="middle" fill="#F4EDE2" fontSize="11">
                      (Investors)
                    </text>
                  </g>

                  {/* Arrow */}
                  <path d="M 150 100 L 200 100" stroke="#D4AF37" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  
                  {/* Rail (Structure + Smart Contract) */}
                  <g>
                    <rect x="220" y="60" width="160" height="80" rx="4" fill="#F4EDE2" stroke="#1A1A1A" strokeWidth="2" />
                    <text x="300" y="85" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontWeight="600">
                      Rail
                    </text>
                    <text x="300" y="105" textAnchor="middle" fill="#1A1A1A" fontSize="11">
                      Structure +
                    </text>
                    <text x="300" y="120" textAnchor="middle" fill="#1A1A1A" fontSize="11">
                      Smart Contract Logic
                    </text>
                  </g>

                  {/* Arrow */}
                  <path d="M 390 100 L 440 100" stroke="#D4AF37" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  
                  {/* Asset (Operator) */}
                  <g>
                    <rect x="460" y="80" width="120" height="40" rx="4" fill="#1A1A1A" />
                    <text x="520" y="105" textAnchor="middle" fill="#F4EDE2" fontSize="14" fontWeight="600">
                      Asset
                    </text>
                    <text x="520" y="125" textAnchor="middle" fill="#F4EDE2" fontSize="11">
                      (Operator)
                    </text>
                  </g>

                  {/* Arrow down */}
                  <path d="M 520 130 L 520 150" stroke="#D4AF37" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  
                  {/* Revenue */}
                  <g>
                    <rect x="460" y="160" width="120" height="30" rx="4" fill="#D4AF37" />
                    <text x="520" y="180" textAnchor="middle" fill="#1A1A1A" fontSize="13" fontWeight="600">
                      Revenue
                    </text>
                  </g>

                  {/* Arrow back */}
                  <path d="M 460 175 L 300 175" stroke="#D4AF37" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  
                  {/* Distribution label */}
                  <text x="380" y="195" textAnchor="middle" fill="#666" fontSize="11" fontWeight="500">
                    Automated Distribution
                  </text>

                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#D4AF37" />
                    </marker>
                  </defs>
                </svg>
              </Card>
              <p className="text-center mt-6 text-sm text-charcoal-600">
                Transparent distribution • Automated payouts • Investor visibility
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* How Revenue Tokenization Works */}
      {edition === 'capital-rails' && (
        <Section>
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How Revenue Tokenization Works
            </h2>
            <p className="text-center text-charcoal-600 mb-12 max-w-2xl mx-auto">
              You keep the asset. Investors receive a time-bound share of revenue.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {tokenizationSteps.map((step, idx) => (
                <Card key={idx} hover className="text-center">
                  <div className="w-12 h-12 rounded-full bg-charcoal-800 text-cream-50 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Services Overview */}
      <Section background="cream">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Services Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edition === 'capital-rails' ? (
              // Capital Rails services
              <>
                <Card hover>
                  <Badge variant="gold" className="mb-3">Capital Rails</Badge>
                  <h3 className="text-xl font-bold mb-2">Tokenization Feasibility Audit</h3>
                  <p className="text-sm text-charcoal-600 mb-4">2-3 weeks</p>
                  <p className="text-sm mb-4">Ideal for: Asset owners exploring capital options</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Cash flow analysis</li>
                    <li>• Structure recommendations</li>
                    <li>• Regulatory assessment</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Flat audit fee</p>
                </Card>
                <Card hover>
                  <Badge variant="gold" className="mb-3">Capital Rails</Badge>
                  <h3 className="text-xl font-bold mb-2">Capital Structuring</h3>
                  <p className="text-sm text-charcoal-600 mb-4">Retainer-based</p>
                  <p className="text-sm mb-4">Ideal for: Ready to structure a deal</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Legal structure design</li>
                    <li>• Revenue slice definition</li>
                    <li>• Payout rules & settlement</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Retainer</p>
                </Card>
                <Card hover>
                  <Badge variant="gold" className="mb-3">Capital Rails</Badge>
                  <h3 className="text-xl font-bold mb-2">Revenue Tokenization Pilot</h3>
                  <p className="text-sm text-charcoal-600 mb-4">4-6 weeks</p>
                  <p className="text-sm mb-4">Ideal for: Testing with a small tranche</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Small revenue slice</li>
                    <li>• Automated distribution</li>
                    <li>• Reporting dashboard</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Low-risk pilot fee</p>
                </Card>
                <Card hover>
                  <Badge variant="gold" className="mb-3">Capital Rails</Badge>
                  <h3 className="text-xl font-bold mb-2">SPV + Token Hybrid</h3>
                  <p className="text-sm text-charcoal-600 mb-4">6-8 weeks</p>
                  <p className="text-sm mb-4">Ideal for: Complex structures</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• SPV formation</li>
                    <li>• Smart contract deployment</li>
                    <li>• Compliance support</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Success fee + retainer</p>
                </Card>
                <Card hover>
                  <Badge variant="outline" className="mb-3">Optional</Badge>
                  <h3 className="text-xl font-bold mb-2">Investor Syndication</h3>
                  <p className="text-sm text-charcoal-600 mb-4">Ongoing</p>
                  <p className="text-sm mb-4">Ideal for: Need capital connections</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Investor matching</li>
                    <li>• Deal presentation</li>
                    <li>• Due diligence coordination</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Success fee</p>
                </Card>
              </>
            ) : (
              // Digital Workers services
              <>
                <Card hover>
                  <Badge className="mb-3">USA Edition</Badge>
                  <h3 className="text-xl font-bold mb-2">Digital Worker Setup</h3>
                  <p className="text-sm text-charcoal-600 mb-4">~3 weeks</p>
                  <p className="text-sm mb-4">Ideal for: SMBs wanting automation</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• 1-3 digital workers</li>
                    <li>• CRM integration</li>
                    <li>• Lead capture & automation</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Starting at $1,250 setup + $350/mo</p>
                </Card>
                <Card hover>
                  <Badge className="mb-3">USA Edition</Badge>
                  <h3 className="text-xl font-bold mb-2">Enterprise Automation</h3>
                  <p className="text-sm text-charcoal-600 mb-4">Custom</p>
                  <p className="text-sm mb-4">Ideal for: Multi-location operations</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Custom agent behaviors</li>
                    <li>• SSO & permissions</li>
                    <li>• Audit logs & compliance</li>
                  </ul>
                  <p className="text-xs text-charcoal-500">Custom pricing</p>
                </Card>
              </>
            )}
          </div>
        </Container>
      </Section>

      {/* Who We Serve */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((segment, idx) => (
              <Card key={idx} hover>
                <h3 className="text-xl font-bold mb-2">{segment.category}</h3>
                <p className="text-sm text-charcoal-600 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust Badges / Security Indicators */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Built with Trust & Security</h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Every structure and system is designed with security, compliance, and investor protection in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card hover className="text-center">
              <div className="mb-4">
                <Shield className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Security-First by Default</h3>
              <p className="text-sm text-charcoal-600">
                Role-based access, audit trails, and least-privilege credentials built into every system.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="mb-4">
                <CheckCircle2 className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Compliance-Ready</h3>
              <p className="text-sm text-charcoal-600">
                Structures designed with regulatory frameworks in mind. TCPA/HIPAA aware where relevant.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="mb-4">
                <TrendingUp className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Investor-Grade Infrastructure</h3>
              <p className="text-sm text-charcoal-600">
                Transparent reporting, automated distributions, and structured downside protection.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Credibility / Proof */}
      <Section background="cream">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6">Built by Operators, for Operators</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {credibility.achievements.map((achievement, idx) => (
                <Badge key={idx} variant="outline" className="text-sm py-2 px-4">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-charcoal-600 mb-12 font-medium uppercase tracking-wider">
              Partners & Collaborators
            </p>
            
            {/* Grouped by Region - Elegant Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* LATAM Partners */}
              <div className="relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-charcoal-200 to-transparent hidden md:block"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-charcoal-300"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🌎</span>
                      <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                        LATAM
                      </span>
                    </div>
                    <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-charcoal-300"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {credibility.partners
                      .filter((p) => p.location === 'LATAM')
                      .map((partner, idx) => (
                        <div
                          key={idx}
                          className="group relative"
                          title={`${partner.country}`}
                        >
                          <Badge
                            variant="gold"
                            className="text-sm py-3 px-6 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 cursor-default"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="text-lg leading-none">{partner.flag}</span>
                              <span className="font-medium">{partner.name}</span>
                            </span>
                          </Badge>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-xs text-charcoal-400 whitespace-nowrap font-medium">
                              {partner.country}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* US Partners */}
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-charcoal-300"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                      United States
                    </span>
                  </div>
                  <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-charcoal-300"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {credibility.partners
                    .filter((p) => p.location === 'US')
                    .map((partner, idx) => (
                      <div
                        key={idx}
                        className="group relative"
                        title={`${partner.country}`}
                      >
                        <Badge
                          variant="gold"
                          className="text-sm py-3 px-6 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 cursor-default"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-lg leading-none">{partner.flag}</span>
                            <span className="font-medium">{partner.name}</span>
                          </span>
                        </Badge>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-xs text-charcoal-400 whitespace-nowrap font-medium">
                            {partner.country}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Book Call Section */}
      <Section>
        <Container size="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-charcoal-600 mb-8">
              Book a call to discuss your needs and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(CALENDLY_URL, '_blank')}
              >
                Book a 20-min Fit Call
              </Button>
            </div>
            {/* Calendly embed */}
            <div className="mt-8 p-8 bg-white rounded-lg border border-charcoal-200">
              <p className="text-sm text-charcoal-600 mb-4">
                Schedule your call below or{' '}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-800 underline hover:text-gold-500"
                >
                  open in a new window
                </a>
              </p>
              <CalendlyEmbed />
            </div>
          </Card>
        </Container>
      </Section>
    </>
  )
}

