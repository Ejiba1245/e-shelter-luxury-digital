# E-Shelter Luxury Digital

A modern, premium digital platform for luxury shelter and real estate management, built with React, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## 🏢 Project Overview

E-Shelter Luxury Digital is a sophisticated web application designed to provide a premium user experience for luxury real estate and shelter management. The platform leverages modern web technologies to deliver a responsive, accessible, and performant interface for browsing, managing, and discovering luxury properties and accommodations.

## ✨ Features

- **Responsive Design**: Fully responsive interface that works seamlessly across all devices
- **Modern UI Components**: Built with shadcn/ui and Radix UI for accessible, reusable components
- **Form Validation**: Robust form handling with React Hook Form and Zod validation
- **Data Management**: Efficient data fetching and state management with TanStack React Query
- **Dark Mode Support**: Theme switching capabilities with next-themes
- **Interactive Charts**: Data visualization with Recharts
- **Toast Notifications**: User-friendly notifications with Sonner
- **Date Picker**: Advanced date selection with React Day Picker
- **Carousel Support**: Image carousel functionality with Embla Carousel
- **Testing**: Comprehensive testing setup with Playwright and Vitest
- **Type Safety**: Full TypeScript support for robust development

## 🛠 Tech Stack

### Frontend Framework
- **React** 18.3.1 - UI library
- **React Router DOM** 6.30.1 - Client-side routing
- **TypeScript** 5.8.3 - Type safety

### Styling & UI
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Form & Validation
- **React Hook Form** 7.61.1 - Performant form library
- **@hookform/resolvers** 3.10.0 - Validation resolvers
- **Zod** 3.25.76 - TypeScript-first schema validation

### Data & State
- **TanStack React Query** 5.83.0 - Server state management
- **Recharts** 2.15.4 - Charting library

### Utilities
- **date-fns** 3.6.0 - Date manipulation
- **class-variance-authority** 0.7.1 - Component variants
- **clsx** 2.1.1 - Conditional CSS classes
- **cmdk** 1.1.1 - Command menu
- **Sonner** 1.7.4 - Toast notifications
- **Embla Carousel** 8.6.0 - Carousel component
- **input-otp** 1.4.2 - OTP input
- **react-resizable-panels** 2.1.9 - Resizable panels

### Development Tools
- **Vite** 5.4.19 - Build tool
- **ESLint** 9.32.0 - Code linting
- **Vitest** 3.2.4 - Unit testing framework
- **Playwright** 1.57.0 - End-to-end testing
- **PostCSS** 8.5.6 - CSS processing
- **Autoprefixer** 10.4.21 - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun runtime
- npm, yarn, or bun package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-shelter-luxury-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure environment variables** (if needed)
   Create a `.env.local` file in the root directory with required variables.

## 🚀 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

Build in development mode:

```bash
npm run build:dev
```

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
e-shelter-luxury-digital/
├── src/
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and helpers
│   ├── pages/               # Page components
│   ├── test/                # Test files and utilities
│   ├── App.tsx              # Root component
│   ├── App.css              # Application styles
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite environment types
├── public/                  # Public static files
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── playwright.config.ts     # Playwright configuration
├── vitest.config.ts         # Vitest configuration
├── components.json          # Component registry
├── package.json             # Project dependencies
└── README.md                # This file
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run test` | Run tests once with Vitest |
| `npm run test:watch` | Run tests in watch mode |

## 🧪 Testing

### Unit Tests

Run unit tests with Vitest:

```bash
npm run test
```

Run tests in watch mode for development:

```bash
npm run test:watch
```

### End-to-End Tests

Run E2E tests with Playwright:

```bash
npx playwright test
```

## 🔍 Code Quality

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

The project includes:
- ESLint for code linting
- React refresh plugin for HMR
- React hooks rules enforcement
- TypeScript ESLint support

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- **Custom fonts**: Inter and Urbanist from @fontsource
- **Dark mode**: Configured for light/dark theme switching
- **CSS animations**: Powered by tailwindcss-animate
- **Typography**: Enhanced with @tailwindcss/typography

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

Please ensure:
- Code passes linting (`npm run lint`)
- Tests pass (`npm run test`)
- TypeScript has no errors
- Components follow the project structure

## 📄 License

This project is private and maintained by the development team.

## 📞 Support

For questions or issues, please reach out to the development team or open an issue in the repository.

---

**Last Updated**: 2026-04-21 12:41:19
**Project Status**: Active Development