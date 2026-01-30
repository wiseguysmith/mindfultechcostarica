'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import SuccessIcon from '@/components/SuccessIcon'
import { FORMSPREE_ENDPOINT } from '@/lib/site-data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    hasAsset: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: '',
          hasAsset: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-charcoal-600">
              Ready to unlock capital or automate operations? Let's talk.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section>
        <Container size="md">
          <Card>
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <SuccessIcon className="mx-auto mb-4" />
                <p className="text-gold-500 font-medium text-lg mb-2">
                  Thank you for your message!
                </p>
                <p className="text-charcoal-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  >
                    <option value="">Select a role</option>
                    <option value="asset-owner">Asset Owner</option>
                    <option value="operator">Operator</option>
                    <option value="investor">Investor</option>
                    <option value="gov-institution">Government / Institution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="hasAsset"
                    checked={formData.hasAsset}
                    onChange={(e) => setFormData({ ...formData, hasAsset: e.target.checked })}
                    className="mt-1"
                  />
                  <label htmlFor="hasAsset" className="text-sm text-charcoal-600">
                    I have a cash-flowing asset / mandate
                  </label>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </Card>
        </Container>
      </Section>

      {/* Additional Contact Info */}
      <Section background="cream">
        <Container>
          <div className="text-center">
            <p className="text-charcoal-600 mb-4">
              Prefer to talk directly? Book a call or reach out via email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                onClick={() => window.open('https://calendly.com/mindfultechnology', '_blank')}
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = 'mailto:info@mindfultech.services'}
              >
                Email Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

