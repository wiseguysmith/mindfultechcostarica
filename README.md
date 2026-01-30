# MindfulTech Services - Marketing Website

A clean, minimal-luxury marketing website for mindfultech.services built with Next.js (App Router) + Tailwind CSS.

## Features

- **Two Pillars Under One Brand:**
  - Digital Workers (AI Agents + automation) - USA Edition
  - Capital Rails (tokenization + deal structuring) - Capital Rails Edition

- **Edition Toggle:** Switch between USA Edition and Capital Rails without navigating away
- **Responsive Design:** Mobile-first, accessible, fast
- **Minimal Luxury Aesthetic:** Black + warm cream + subtle gold accents
- **Form Integration:** Formspree integration for contact forms
- **Calendly Integration:** Book calls directly from the site

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mindfultechnology
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (with edition toggle)
│   ├── services/          # Services page
│   ├── how-it-works/      # Process page
│   ├── case-studies/      # Case studies page
│   ├── about/             # About page
│   ├── contact/           # Contact form page
│   ├── faq/               # FAQ page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EditionToggle.tsx
│   └── QuickLeadForm.tsx
├── lib/                   # Utilities and data
│   ├── site-data.ts      # All site content (easily editable)
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Key Components

### Design System Components

- **Button:** Primary, secondary, and outline variants
- **Badge:** Default, gold, and outline variants
- **Card:** Container with hover effects
- **Container:** Max-width wrapper with responsive padding
- **Section:** Page sections with background and padding options

### Feature Components

- **Navbar:** Sticky navigation with mobile menu
- **Footer:** Contact info, links, and disclaimer
- **EditionToggle:** Switch between USA Edition and Capital Rails
- **QuickLeadForm:** Modal form for quick lead capture

## Content Management

All site content is centralized in `/lib/site-data.ts`. This makes it easy to update copy without touching component code:

- Hero content for each edition
- Services descriptions
- FAQs
- Navigation links
- Footer content

## Styling

The site uses a minimal luxury palette:
- **Charcoal:** Primary text and backgrounds (#000000 - #333333)
- **Cream:** Backgrounds (#FEFCF9 - #D4C4A8)
- **Gold:** Accents (#FFFEF7 - #D4AF37)

Typography:
- **Headings:** Space Grotesk (display font)
- **Body:** Inter (readable sans-serif)

## Pages

### Home (`/`)
- Edition toggle (persists to localStorage)
- Hero sections (different for each edition)
- What We Do (2-column)
- Capital Rails diagram (when Capital Rails edition selected)
- Revenue Tokenization steps (when Capital Rails edition selected)
- Services overview
- Who We Serve
- Credibility/Proof
- Book Call section with Calendly placeholder

### Services (`/services`)
- Digital Workers services
- Capital Rails services
- Engagement models

### How It Works (`/how-it-works`)
- 5-step process timeline
- What we need from you checklist

### Case Studies (`/case-studies`)
- Template case studies (placeholders for outcomes)
- Disclaimer

### About (`/about`)
- Mission
- Approach
- Founder tone
- Credibility

### Contact (`/contact`)
- Contact form (Formspree integration)
- Success/error states
- Additional contact options

### FAQ (`/faq`)
- Digital Workers FAQs
- Capital Rails FAQs
- Expandable accordion interface
- Disclaimer

## Forms

### Contact Form (`/contact`)
- Fields: name, email, company, role, message, checkbox
- Formspree integration
- Success/error handling

### Quick Lead Form (Modal)
- Accessible from navbar CTA
- Fields: name, email, phone, country, "What are you looking to unlock?"
- Same Formspree endpoint

## SEO

Each page includes:
- Title and description metadata
- OpenGraph tags
- Semantic HTML structure
- Accessible markup

## Accessibility

- ARIA labels on interactive elements
- Focus states on all interactive elements
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly

## Performance

- No heavy animations (as per requirements)
- Optimized images (when added)
- Fast page loads
- Minimal JavaScript

## Next Steps

1. **Set Environment Variables:** Add your Calendly URL and Formspree endpoint
2. **Update Content:** Edit `/lib/site-data.ts` to customize copy
3. **Add Images:** Replace placeholder gradients with actual images if needed
4. **Calendly Embed:** Replace placeholder with actual Calendly embed code
5. **Test Forms:** Verify Formspree integration works
6. **Deploy:** Deploy to Vercel, Netlify, or your preferred hosting

## Notes

- **Copy Safety:** All legal disclaimers are included. No legal, tax, or investment advice language.
- **Placeholders:** Case study outcomes are placeholders—do not fabricate results.
- **Calendly:** Currently shows placeholder. Replace with actual embed when URL is available.
- **Formspree:** Uses placeholder endpoint. Update with your actual Formspree form ID.

## License

Private - MindfulTech Services

