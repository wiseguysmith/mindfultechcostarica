import Link from 'next/link'
import { footerContent } from '@/lib/site-data'
import Container from './Container'

/**
 * Footer Component
 * 
 * As your CTO mentor: Footers typically contain links, contact info, and
 * legal disclaimers. Keep it simple and accessible. Notice how we use
 * semantic HTML (address tag for contact info) for better SEO and accessibility.
 */
export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-100 border-t border-charcoal-700">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${footerContent.phone}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {footerContent.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footerContent.email}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {footerContent.email}
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerContent.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <p className="text-sm text-charcoal-400">
              {footerContent.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-700 text-center text-sm text-charcoal-400">
          <p>&copy; {new Date().getFullYear()} MindfulTech Services. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

