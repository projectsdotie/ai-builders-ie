# AI Builders IE - Digital Transformation Implementation

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![Lovable](https://img.shields.io/badge/Lovable-Enabled-FF6B9D.svg)](https://lovable.dev/)

> **Leading AI digital transformation experts helping Irish and UK businesses achieve greater productivity, efficiency, and competitive advantage through intelligent solutions.**

## 🚀 Project Overview

AI Builders IE is a modern, responsive business website for a digital transformation implementation specialising in AI solutions for startups, SMEs, and social enterprises across Ireland and the UK. Built with cutting-edge technologies and optimised for performance, accessibility, and user experience.

### 🎯 Key Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first approach using Tailwind CSS and shadcn/ui components
- **Professional UI/UX**: Clean, modern design with smooth animations and interactions
- **SEO Optimised**: Structured for search engine visibility and social media sharing
- **Accessibility First**: WCAG guidelines compliance for inclusive user experience
- **No-Code Ready**: Integrated with Lovable for easy content updates and modifications

## 🛠️ Technology Stack

### Core Technologies
- **Frontend**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1 for fast development and optimised builds
- **Styling**: Tailwind CSS 3.4.11 with custom design system
- **UI Components**: shadcn/ui component library
- **State Management**: React Query for server state management
- **Routing**: React Router DOM for navigation

### Development Tools
- **Code Quality**: ESLint with TypeScript rules
- **Package Manager**: npm with lock file for consistent dependencies
- **Development Server**: Vite dev server with hot module replacement
- **No-Code Integration**: Lovable tagger for visual development

### Key Dependencies
```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.1",
  "tailwindcss": "^3.4.11",
  "@tanstack/react-query": "^5.56.2",
  "react-router-dom": "^6.26.2",
  "lucide-react": "^0.462.0"
}
```

## 🏗️ Project Structure

```
ai-builders-ie/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── About.tsx      # About section component
│   │   ├── Contact.tsx    # Contact form and info
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   └── Services.tsx   # Services showcase
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main landing page
│   │   └── NotFound.tsx   # 404 error page
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── package.json           # Project dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-builders-ie.git
   cd ai-builders-ie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development environment
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design System

### Colour Palette
- **Primary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Secondary**: Blue tones for accents and CTAs
- **Neutral**: Grey scale for text and backgrounds
- **Success**: Green for positive actions
- **Warning**: Orange for attention-grabbing elements

### Typography
- **Headings**: Bold, hierarchical sizing with proper contrast
- **Body Text**: Readable font sizes with optimal line height
- **Interactive Elements**: Clear visual feedback and hover states

### Components
All components follow the shadcn/ui design system with custom modifications for brand consistency.

## 📱 Features & Sections

### Header Navigation
- Responsive navigation with mobile menu
- Smooth scrolling to page sections
- Clear call-to-action button
- Professional branding with company logo

### Hero Section
- Compelling value proposition
- Key statistics and credibility indicators
- Multiple call-to-action options
- Gradient background with visual elements

### Services Showcase
- Six core service offerings
- Feature lists for each service
- Consistent card-based layout
- Action buttons for engagement

### About Section
- Company story and mission
- Core values and differentiators
- Statistics and achievements
- Support for various organisation types

### Contact Section
- Contact form with validation
- Multiple contact methods
- Business hours and location
- Professional meeting booking

### Footer
- Company information and branding
- Contact details with icons
- Social media links
- Legal information and compliance

## 🔧 Configuration

### Environment Setup
The project uses standard React/Vite configuration with TypeScript. Key configuration files:

- `vite.config.ts` - Build tool configuration
- `tailwind.config.ts` - Styling framework setup
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.js` - Code quality rules

### Customisation
- **Colours**: Modify `tailwind.config.ts` for brand colours
- **Components**: Update shadcn/ui components in `src/components/ui/`
- **Content**: Edit component files for text and messaging
- **Styling**: Adjust `src/index.css` for global styles

## 📈 Performance & SEO

### Performance Optimisations
- Vite for fast build times and hot module replacement
- Optimised bundle splitting and lazy loading ready
- Efficient CSS with Tailwind's purge functionality
- Modern JavaScript with tree shaking

### SEO Features
- Semantic HTML structure
- Meta tags ready for implementation
- Structured data preparation
- Mobile-responsive design
- Fast loading times

## 🤝 Contributing

We welcome contributions to improve the AI Builders IE website. Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain component documentation
- Ensure responsive design compatibility
- Test across different browsers and devices
- Follow the existing code style and conventions

## 📋 Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [ ] Performance optimisation and code splitting
- [ ] SEO enhancement and meta tags
- [ ] Accessibility improvements
- [ ] Error handling and user feedback

### Phase 2: Dynamic Features (Weeks 3-4)
- [ ] CMS integration for content management
- [ ] Functional contact forms with validation
- [ ] Lead generation and analytics
- [ ] Interactive features and animations

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] Analytics and conversion tracking
- [ ] Backend integration and automation
- [ ] Advanced UI/UX enhancements
- [ ] Progressive web app features

### Phase 4: Optimisation (Weeks 7-8)
- [ ] Comprehensive testing suite
- [ ] CI/CD pipeline setup
- [ ] Performance monitoring
- [ ] Documentation and maintenance

## 🐛 Known Issues

- Contact form requires backend integration for functionality
- Some images need optimisation for better performance
- Analytics tracking needs implementation
- Mobile menu could benefit from animation improvements

## 📞 Support & Contact

For technical support or business inquiries:

- **Email**: hello@aibuilders.ie
- **Phone**: +353 89 202 0801
- **Website**: [aibuilders.ie](https://aibuilders.ie)
- **Location**: Ireland (serving Ireland & UK markets)

## 📄 License

This project is proprietary software owned by AIBuilders.ie. All rights reserved.

**Company Information:**
- **Trading Name**: AIBuilders.ie
- **Legal Entity**: AIBuilders.ie
- **Company Number**: 16450664
- **Registered Office**: Fast Track House Pearson Way, Thornaby, Stockton-On-Tees, England, TS17 6PT

## 🙏 Acknowledgments

- **shadcn/ui** for the excellent component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for beautiful, consistent icons
- **Lovable** for enabling no-code development capabilities
- **React Community** for the robust ecosystem and tools

---

**Built with ❤️ for Irish and UK businesses seeking AI-driven digital transformation.**
