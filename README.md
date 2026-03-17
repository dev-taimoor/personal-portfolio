# Personal Portfolio - Taimoor Ahmad

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing UI/UX design work with a clean, professional aesthetic.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with orange/red accent colors
- **Smooth Animations**: Framer Motion animations and CSS transitions
- **Performance Optimized**: Built with Next.js for fast loading times
- **SEO Friendly**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the application
- **Component Based**: Modular, reusable React components

## 🛠️ Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
personal-portfolio/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with intro
│   ├── Services.tsx    # Services offered
│   ├── About.tsx       # About me section
│   ├── Portfolio.tsx   # Portfolio/projects grid
│   ├── Contact.tsx     # Contact form and info
│   ├── Footer.tsx      # Site footer
│   └── ThemeToggle.tsx # Dark/light theme toggle
├── data/               # Static data and content
│   └── index.ts        # Site data (nav, services, etc.)
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document structure
│   └── index.tsx       # Home page
├── public/             # Static assets
│   ├── images/         # Portfolio images
│   ├── files/          # Downloadable files (CV, documents)
│   └── favicon.ico     # Site favicon
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom CSS
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit the data in `data/index.ts` to customize:
- Personal details (name, bio, contact info)
- Navigation links
- Services offered
- Skills and experience
- Portfolio projects
- Social media links

### Styling
- Colors: Modify the Tailwind config in `tailwind.config.js`
- Fonts: Update font families in `styles/globals.css`
- Animations: Adjust animation timings and effects

### Content
- Replace placeholder images in `public/images/`
- Place your CV/resume in `public/files/` (e.g., `taimoor-cv.pdf`)
- Update text content throughout the components
- Add your own projects to the portfolio section

## 📱 Sections

1. **Header**: Fixed navigation with mobile menu
2. **Hero**: Introduction with photo and key stats
3. **Services**: Overview of design services offered
4. **About**: Personal background, skills, and experience
5. **Portfolio**: Filterable grid of design projects
6. **Contact**: Contact form and information
7. **Footer**: Links and additional contact details

## 🎨 Design System

- **Primary Colors**: Orange (#f97316) to Red (#dc2626) gradient
- **Background**: Dark gray (#111827)
- **Text**: White with gray variations
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system

## 📦 Build & Deployment

### Build for production
```bash
npm run build
```

### Export static files
```bash
npm run export
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from various UI/UX portfolios
- Icons from Lucide React
- Built with Next.js and Tailwind CSS

---

**Built with ❤️ by Taimoor Ahmad**