# Replit.md

## Overview

This is a Roblox developer portfolio website for "Zixx" built with a full-stack architecture. The application showcases a developer's projects, skills, and contact information through a modern, dark-themed interface with glassmorphism design elements. The frontend is built with React and TypeScript, while the backend uses Express.js with plans for database integration using Drizzle ORM and PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library providing accessible, customizable components
- **Styling**: Tailwind CSS with custom design system featuring dark theme, glassmorphism effects, and CSS custom properties for consistent theming
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **API Structure**: RESTful API design with structured error handling and logging middleware
- **Development Tools**: Hot module replacement and development middleware integration

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Fallback Storage**: In-memory storage implementation for development/testing

### Authentication & Session Management
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Validation**: Zod schemas for runtime type validation and API request validation

### Design System & UI
- **Theme**: Dark mode with glassmorphism aesthetic using CSS custom properties
- **Typography**: Inter and Poppins font families for modern, readable text
- **Animations**: Custom CSS animations for particle effects, floating elements, and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Component Architecture**: Modular component structure with reusable UI primitives

### Development Environment
- **Dev Server**: Vite development server with HMR and error overlay
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Code Quality**: ESLint and TypeScript compiler for code quality assurance
- **Asset Management**: Static asset serving and optimization through Vite

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Routing & Navigation**: Wouter for lightweight routing
- **UI Component Library**: Radix UI primitives (40+ component packages) for accessibility-first components
- **Styling Framework**: Tailwind CSS with PostCSS for utility-first styling

### Backend & Database
- **Server Framework**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Session Management**: express-session with connect-pg-simple PostgreSQL session store

### Utility Libraries
- **Validation**: Zod for runtime schema validation and type inference
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and tailwind-merge for conditional CSS class composition
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for interactive content sliders

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Replit Integration**: Vite plugins for Replit-specific development features (cartographer, dev banner, error modal)
- **Code Quality**: TypeScript compiler with strict mode enabled
- **Asset Optimization**: PostCSS with Autoprefixer for CSS processing

### Design & Animation
- **Typography**: Google Fonts (Inter, Poppins) for modern font stacks
- **Icons**: Font Awesome and Lucide React for comprehensive icon coverage
- **Animations**: Custom CSS animations with particle systems and glassmorphism effects
- **Component Variants**: Class Variance Authority for systematic component styling