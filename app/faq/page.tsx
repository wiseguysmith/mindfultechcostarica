'use client'

import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { faqs, CALENDLY_URL } from '@/lib/site-data'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">{question}</h3>
            {isOpen && <p className="text-charcoal-600 text-sm">{answer}</p>}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            className="flex-shrink-0"
            aria-label={isOpen ? 'Close' : 'Open'}
          >
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-charcoal-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-charcoal-600" />
            )}
          </button>
        </div>
      </Card>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-charcoal-600">
              Common questions about Digital Workers and Capital Rails.
            </p>
          </div>
        </Container>
      </Section>

      {/* Digital Workers FAQs */}
      <Section>
        <Container>
          <div className="mb-12">
            <Badge className="mb-6">USA Edition</Badge>
            <h2 className="text-3xl font-bold mb-8">Digital Workers</h2>
            <div className="space-y-4 max-w-3xl">
              {faqs.digitalWorkers.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Capital Rails FAQs */}
      <Section background="cream">
        <Container>
          <div>
            <Badge variant="gold" className="mb-6">Capital Rails</Badge>
            <h2 className="text-3xl font-bold mb-8">Capital Rails</h2>
            <div className="space-y-4 max-w-3xl">
              {faqs.capitalRails.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Disclaimer */}
      <Section>
        <Container size="md">
          <Card className="bg-cream-100">
            <p className="text-sm text-charcoal-600 text-center">
              <strong>Disclaimer:</strong> Not legal, tax, or investment advice. 
              Structures vary by asset, jurisdiction, and regulatory environment. 
              Consult with legal and tax professionals before making decisions.
            </p>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-charcoal-600 mb-6">
              Book a call to discuss your specific situation.
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

