import type { Metadata } from 'next'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { credibility } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About',
  description: 'Mission: unlock capital ethically, build investor-grade rails, empower LATAM + U.S.',
}

export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MindfulTech
            </h1>
            <p className="text-xl text-charcoal-600">
              Unlocking capital ethically. Building investor-grade rails. Empowering LATAM + U.S.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <h2 className="text-2xl font-bold mb-4">Mission</h2>
              <p className="text-charcoal-600 mb-4">
                We design capital rails for cash-flowing assets with a structure-first, tokens-second approach. 
                Our mission is to unlock capital ethically—without requiring asset owners to sell control—while 
                providing investors with visibility, predictable distributions, and structured downside protection.
              </p>
              <p className="text-charcoal-600">
                We believe in building investor-grade infrastructure that works for both asset owners and investors, 
                with guardrails by default and transparency at every step.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Approach</h2>
              <p className="text-charcoal-600 mb-4">
                <strong>Structure-first, tokens-second:</strong> We don't start with tokens. We start with understanding 
                your asset, cash flow, constraints, and capital needs. Then we design the right structure—whether that's 
                revenue participation, SPV, hybrid, or something else entirely.
              </p>
              <p className="text-charcoal-600 mb-4">
                <strong>Guardrails by default:</strong> Every structure includes built-in protections for both asset owners 
                and investors. We design for transparency, compliance, and risk management from day one.
              </p>
              <p className="text-charcoal-600">
                <strong>LATAM + U.S. execution:</strong> We work across jurisdictions, understanding regulatory landscapes 
                and designing structures that work within legal frameworks while maximizing flexibility.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Founder Tone</h2>
              <p className="text-charcoal-600 mb-4">
                Built by operators, for operators. We've built tokenization and automation projects, run events, 
                and led teams of 50+. We understand the challenges of scaling operations and unlocking capital 
                because we've done it ourselves.
              </p>
              <p className="text-charcoal-600">
                We're visionaries who execute. We combine technical expertise with operational experience, 
                community building with structured finance. MindfulTech is the umbrella brand that brings 
                together Digital Workers (automation) and Capital Rails (tokenization) under one mission.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Credibility */}
      <Section background="cream">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Built by Operators</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {credibility.achievements.map((achievement, idx) => (
                <Card key={idx} className="inline-block">
                  <p className="text-sm font-medium">{achievement}</p>
                </Card>
              ))}
            </div>
            <div>
              <p className="text-sm text-charcoal-600 mb-12 font-medium uppercase tracking-wider text-center">
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
                            <Card className="inline-block bg-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 cursor-default">
                              <p className="text-sm font-medium flex items-center gap-2.5 py-1">
                                <span className="text-lg leading-none">{partner.flag}</span>
                                <span>{partner.name}</span>
                              </p>
                            </Card>
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
                          <Card className="inline-block bg-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 cursor-default">
                            <p className="text-sm font-medium flex items-center gap-2.5 py-1">
                              <span className="text-lg leading-none">{partner.flag}</span>
                              <span>{partner.name}</span>
                            </p>
                          </Card>
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
          </div>
        </Container>
      </Section>
    </>
  )
}

