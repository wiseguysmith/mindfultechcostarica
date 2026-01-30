'use client'

import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { services, CALENDLY_URL } from '@/lib/site-data'
import { CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-charcoal-600">
              Two pillars, one mission: unlock capital and automate operations with structure-first approaches.
            </p>
          </div>
        </Container>
      </Section>

      {/* Digital Workers Section */}
      <Section>
        <Container>
          <div className="mb-12">
            <Badge className="mb-4">USA Edition</Badge>
            <h2 className="text-3xl font-bold mb-4">Digital Workers</h2>
            <p className="text-lg text-charcoal-600 mb-8 max-w-3xl">
              AI agents + automation for inbox triage, lead capture, and speed-to-lead &lt; 60s. 
              Security-first defaults, guardrails by default. Implementation timeline: ~3 weeks.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Outcomes Targets</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>+20–40% inquiry capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>10+ hours/month back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>Speed-to-lead &lt; 60s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>Fewer no-shows with smart follow-ups</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>Inbox triage & lead capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>HubSpot/Google + n8n/Zapier integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>Role-based access & audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>TCPA/HIPAA aware where relevant</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.digitalWorkers.map((service, idx) => (
              <Card key={idx} hover>
                <Badge className="mb-3">USA Edition</Badge>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-charcoal-600 mb-4">
                  <strong>Ideal for:</strong> {service.idealFor}
                </p>
                <p className="text-sm text-charcoal-500 mb-4">
                  <strong>Timeframe:</strong> {service.timeframe}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Deliverables:</p>
                  <ul className="space-y-1 text-sm">
                    {service.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-gold-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-charcoal-500 mb-4">{service.pricing}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(CALENDLY_URL, '_blank')}
                >
                  Book a Call
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capital Rails Section */}
      <Section background="cream">
        <Container>
          <div className="mb-12">
            <Badge variant="gold" className="mb-4">Capital Rails</Badge>
            <h2 className="text-3xl font-bold mb-4">Capital Rails</h2>
            <p className="text-lg text-charcoal-600 mb-8 max-w-3xl">
              Revenue tokenization, structuring, and investor visibility for cash-flowing assets. 
              Structure-first, tokens-second approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.capitalRails.map((service, idx) => (
              <Card key={idx} hover>
                {service.optional && (
                  <Badge variant="outline" className="mb-3">Optional</Badge>
                )}
                {!service.optional && (
                  <Badge variant="gold" className="mb-3">Capital Rails</Badge>
                )}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-charcoal-600 mb-4">
                  <strong>Ideal for:</strong> {service.idealFor}
                </p>
                <p className="text-sm text-charcoal-500 mb-4">
                  <strong>Timeframe:</strong> {service.timeframe}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Deliverables:</p>
                  <ul className="space-y-1 text-sm">
                    {service.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-gold-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-charcoal-500 mb-4">{service.pricing}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(CALENDLY_URL, '_blank')}
                >
                  Request Audit
                </Button>
              </Card>
            ))}
          </div>

          {/* Engagement Models */}
          <Card className="bg-white">
            <h3 className="text-2xl font-bold mb-6">Engagement Models</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Flat Audit Fee</h4>
                <p className="text-sm text-charcoal-600">
                  One-time payment for feasibility assessment and structure recommendations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Retainer</h4>
                <p className="text-sm text-charcoal-600">
                  Ongoing monthly retainer for structuring, deal architecture, and implementation support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Success Fee</h4>
                <p className="text-sm text-charcoal-600">
                  Percentage-based fee upon successful capital raise or deal completion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Revenue Participation</h4>
                <p className="text-sm text-charcoal-600">
                  Small percentage of tokenized revenue share as compensation (aligned incentives).
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-charcoal-600 mb-6">
              Book a call to discuss which service fits your needs.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, '_blank')}
            >
              Book a 20-min Fit Call
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  )
}

