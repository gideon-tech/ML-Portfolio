# Maku Gideon Portfolio

## Overview

This is a personal portfolio website for Maku Gideon, an AI/ML Engineer and Techpreneur. The application is a single-page portfolio showcasing services, testimonials, skills, and contact information. Built with a modern tech stack featuring React on the frontend and Express on the backend, it uses a clean, minimalist design inspired by contemporary SaaS aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single route to Home page)
- **React Query (@tanstack/react-query)** for server state management

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Design system configured via `components.json` with "new-york" style preset
- Custom CSS variables for theming (light mode default with dark mode support)

**Form Handling**
- **React Hook Form** for form state management
- **Zod** for schema validation with `@hookform/resolvers` integration
- Form validation occurs client-side before submission

**Design Philosophy**
- Reference-based design inspired by nils.buysellflows.com with bold red and black color scheme
- Typography: Inter (primary) and Space Grotesk (display/accent fonts)
- Red accent color (HSL: 0 84% 50%) works in both light and dark modes
- Dark mode: Red against deep black backgrounds for striking, professional look
- Light mode: Red accents on clean white background for accessibility
- Theme toggle button in navbar allows seamless switching between modes
- Gradient text effects on key headings using red tones
- Glassmorphism effects on navigation
- Animation-driven UX with scroll animations and transitions

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the HTTP server
- RESTful API design pattern
- Single API endpoint: `POST /api/contact` for contact form submissions

**Request Processing**
- JSON body parsing with raw body preservation for potential webhook integrations
- Request/response logging middleware for API routes
- Duration tracking for performance monitoring

**Development vs Production**
- Development: Vite middleware integration for HMR
- Production: Static file serving from compiled `dist/public` directory
- Environment-aware configuration via `NODE_ENV`

**Database Strategy**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema definitions in `shared/schema.ts` for type sharing between client and server
- Currently using **in-memory storage** (`MemStorage` class) for user management
- Database is provisioned but not actively used (contact form logs to console only)
- Migration support via `drizzle-kit` with migrations output to `./migrations`

**Code Organization**
- Monorepo structure with shared types between client and server
- Path aliases: `@/` (client), `@shared/` (shared types), `@assets/` (assets)
- Shared schema definitions ensure type safety across the full stack

### Data Model

**Shared Types** (defined in `shared/schema.ts`):
- `ContactFormData`: Contact form with name, email, subject, message
- `Service`: AI/ML service offerings with icon, title, description, stats
- `Testimonial`: Client testimonials with name, role, company, quote, tags
- `Stat`: Statistics display (value, label, optional suffix)
- `Skill`: Technology skills categorized by type (language, framework, tool, cloud)
- `ContactInfo`: Contact information items with type, label, value, href

**In-Memory Storage**:
- `User` interface with id, username (not actively used in portfolio)
- `MemStorage` class implements `IStorage` interface for potential future user features

### Contact Form Flow

1. User fills out contact form on frontend
2. Client-side validation via Zod schema (`contactFormSchema`)
3. Form data submitted to `POST /api/contact` endpoint
4. Server validates data again using same Zod schema
5. Email sent via **Resend** to paintingislife592@gmail.com with form details
6. Reply-To header set to sender's email for easy responses
7. Returns success/error response to client
8. Client shows toast notification via shadcn toast component

**Email Integration**:
- Service: **Resend** (resend.com)
- From: `Portfolio Contact <onboarding@resend.dev>`
- To: `paintingislife592@gmail.com`
- Reply-To: Sender's email address from form
- Format: HTML email with structured contact information
- API Key: Stored in `RESEND_API_KEY` environment secret
- Free tier: 3,000 emails/month

## External Dependencies

### Core Runtime
- **Node.js**: Runtime environment
- **TypeScript**: Type system for both client and server

### Frontend Libraries
- **React**: UI framework
- **React DOM**: React rendering
- **Vite**: Build tool and dev server
- **Wouter**: Lightweight routing
- **@tanstack/react-query**: Server state management

### UI Components & Styling
- **Radix UI**: Headless component primitives (20+ component packages)
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS** with **Autoprefixer**: CSS processing
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Utility for merging CSS classes
- **Lucide React**: Icon library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel component for testimonials

### Form Management
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolver adapters
- **Zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod

### Backend & Database
- **Express**: Web server framework
- **Drizzle ORM**: TypeScript ORM
- **@neondatabase/serverless**: PostgreSQL driver for Neon
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- **Resend**: Transactional email service for contact form submissions

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production server build
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for Replit
- **@replit/vite-plugin-cartographer**: Replit integration (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)

### Utility Libraries
- **date-fns**: Date manipulation
- **nanoid**: Unique ID generation

### Font Dependencies
- **Google Fonts CDN**: Inter and Space Grotesk fonts loaded via CDN

### Hosting Considerations
- Designed to run on Replit with special Replit plugins
- Database connection via environment variable `DATABASE_URL`
- Supports PostgreSQL databases (currently Neon configured)