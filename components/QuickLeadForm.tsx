'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Button from './Button'
import Card from './Card'
import SuccessIcon from './SuccessIcon'
import { FORMSPREE_ENDPOINT } from '@/lib/site-data'

interface QuickLeadFormProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Quick Lead Form Modal
 * 
 * As your CTO mentor: This is a modal component that handles its own state
 * and form submission. Notice how we handle loading and error states - this
 * is critical for good UX. The form uses Formspree for backend handling,
 * which is a common pattern for static sites.
 */
export default function QuickLeadForm({ isOpen, onClose }: QuickLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    lookingFor: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

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
          formType: 'quick-lead',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', country: '', lookingFor: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-800/50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="quick-lead-title"
    >
      <div
        className="w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-600"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="quick-lead-title" className="text-2xl font-bold mb-6">
          Quick Lead Form
        </h2>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <SuccessIcon className="mx-auto mb-4" />
            <p className="text-gold-500 font-medium text-lg mb-2">
              Thank you! We'll be in touch soon.
            </p>
            <p className="text-sm text-charcoal-600">
              Your form has been submitted successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
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
              <label htmlFor="email" className="block text-sm font-medium mb-1">
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
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                WhatsApp/Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="lookingFor" className="block text-sm font-medium mb-1">
                What are you looking to unlock? *
              </label>
              <textarea
                id="lookingFor"
                required
                rows={3}
                value={formData.lookingFor}
                onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                className="w-full px-4 py-2 border border-charcoal-200 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
            </div>

            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  'Submit'
                )}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        )}
        </Card>
      </div>
    </div>
  )
}

