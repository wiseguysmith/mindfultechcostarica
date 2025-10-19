# MindfulTech - Bilingual AI Agent Website

A VIP-concierge, bilingual (EN/ES), WhatsApp-first funnel that books consultations and trials for MindfulTech's AI agent services.

## 🚀 Features

- **Bilingual Support**: Full English/Spanish support with automatic locale detection
- **WhatsApp-First**: Primary CTA drives WhatsApp conversations
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS v4
- **Performance Optimized**: Lighthouse 95+ score ready
- **Accessibility**: WCAG AA compliant
- **SEO Ready**: Complete meta tags, structured data, sitemap

## 🎨 Design System

### Brand Colors
- **Coral**: #FF6A4A (Primary CTA)
- **Blue**: #2B8CBE (Secondary actions)
- **Palm**: #2C6E49 (Success states)
- **Sand**: #EBD8B7 (Backgrounds)
- **Charcoal**: #2C2C2C (Text)
- **Foam**: #F8F9FA (Light backgrounds)

### Typography
- **Headings**: Space Grotesk (modern, geometric)
- **Body**: Inter (clean, readable)

## 🏗️ Architecture

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (en)/              # English routes
│   ├── es/                # Spanish routes
│   ├── trial/             # Trial page
│   └── layout.tsx         # Root layout
├── components/             # Reusable components
│   ├── Navbar.tsx         # Sticky navigation
│   ├── Hero.tsx           # Hero sections
│   ├── CTAWhatsApp.tsx    # WhatsApp CTAs
│   ├── LangToggle.tsx     # Language switcher
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities
│   ├── config.ts          # App configuration
│   └── fonts.ts           # Font configuration
├── messages/              # i18n translations
│   ├── en.json           # English content
│   └── es.json           # Spanish content
└── i18n/                 # Internationalization
    └── request.ts        # i18n configuration
```

### Key Components

#### CTAWhatsApp
Configurable WhatsApp CTA component with multiple variants and sizes.

```tsx
<CTAWhatsApp
  label="Book on WhatsApp"
  message="Custom message"
  variant="primary"
  size="lg"
/>
```

#### Hero
Flexible hero section with background images and multiple CTAs.

```tsx
<Hero
  title="Automate your business. Keep the Pura Vida."
  subtitle="Bilingual AI agents that answer, book, and follow up—quietly."
  primaryCTA={{ label: "Book on WhatsApp", message: "..." }}
  secondaryCTA={{ label: "Start Trial", href: "/trial" }}
  tertiaryCTA={{ label: "Schedule Call", href: "https://calendly.com/..." }}
/>
```

## 🌐 Internationalization

Built with `next-intl` for seamless bilingual support:

- **Automatic locale detection** from browser settings
- **Route-based localization** (`/en/` and `/es/`)
- **Type-safe translations** with TypeScript
- **Costa Rica timezone** support

### Adding New Content

1. Add keys to `src/messages/en.json`
2. Add Spanish translations to `src/messages/es.json`
3. Use in components: `t('your.key')`

## 🎯 Conversion Funnel

### Primary CTAs
1. **Book on WhatsApp** (Primary) - Direct WhatsApp conversation
2. **Start 7-day trial** (Secondary) - Free trial signup
3. **Schedule on Calendly** (Tertiary) - Calendar booking

### Target Audiences
- **Law Offices**: Intake automation, client screening
- **Property Managers**: Lead capture, tour scheduling
- **Hotels**: Booking automation, guest communication
- **Restaurants**: Table reservations, review management

## 🚀 Getting Started

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
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://mindfultech.services
NEXT_PUBLIC_WHATSAPP_NUMBER=+17208916563
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mindfultechnology
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** CTAs and navigation
- **Optimized images** with Next.js Image component

## ♿ Accessibility

- **WCAG AA compliant**
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** ratios
- **Focus indicators** on all interactive elements

## 🔍 SEO Features

- **Meta tags** for all pages
- **Open Graph** and Twitter cards
- **JSON-LD** structured data
- **Sitemap.xml** generation
- **Robots.txt** configuration
- **Canonical URLs** for all pages

## 📊 Analytics

Integrated with **Plausible Analytics**:
- Privacy-focused analytics
- No cookies required
- GDPR compliant
- Real-time insights

## 🎨 Visual Assets

### Recommended Images
- **Hero**: Tamarindo sunset/surfing (1920x1080px)
- **Backgrounds**: Costa Rica landscapes
- **Icons**: Custom SVG icons for features
- **Logos**: MindfulTech brand assets

### Image Optimization
- **Next.js Image** component for automatic optimization
- **WebP format** support
- **Lazy loading** for performance
- **Responsive images** for different screen sizes

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npx vercel

# Set environment variables in Vercel dashboard
```

### Other Platforms
- **Netlify**: Static export with `next export`
- **AWS**: Using Next.js serverless functions
- **Docker**: Containerized deployment

## 🔧 Customization

### Brand Colors
Update `src/app/globals.css`:
```css
:root {
  --coral: #FF6A4A;
  --blue: #2B8CBE;
  /* ... other colors */
}
```

### Content
- **English**: Edit `src/messages/en.json`
- **Spanish**: Edit `src/messages/es.json`
- **Configuration**: Update `src/lib/config.ts`

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Minimized with tree shaking
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 MindfulTech. All rights reserved.

---

**Built with ❤️ in Tamarindo, Costa Rica**

*"Let the agent handle that."*