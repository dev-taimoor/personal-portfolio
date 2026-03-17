// data/index.ts
import { NavLink, SocialLink, Stat, Service, Skill, Project, Experience } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/devtaimoor/', icon: 'Linkedin' },
  { name: 'Github', href: 'https://github.com/dev-taimoor', icon: 'Github' },
];

export const stats: Stat[] = [
  { number: '5+', label: 'Years of Experience' },
  { number: '10+', label: 'Projects Completed' },
//   { number: '30+', label: 'Happy Clients' },
//   { number: '5+', label: 'Awards Won' },
];

export const services: Service[] = [
  {
    id: 'fullstack-development',
    title: 'Full Stack Development',
    description:
      'Building scalable, production-ready web applications end-to-end using Ruby on Rails, Node.js, React.js, and PostgreSQL — from database architecture to polished UI.',
    icon: 'Layers',
  },
  {
    id: 'api-development',
    title: 'API Design & Integration',
    description:
      'Architecting robust RESTful and GraphQL APIs, versioning strategies, third-party integrations (Stripe, OAuth, and more), and comprehensive Swagger documentation.',
    icon: 'Plug',
  },
  {
    id: 'saas-development',
    title: 'SaaS Platform Development',
    description:
      'Designing and engineering multi-tenant SaaS platforms with secure authentication, subscription billing via Stripe, role-based access control, and scalable infrastructure.',
    icon: 'AppWindow',
  },
  {
    id: 'ai-integration',
    title: 'AI & LLM Integration',
    description:
      'Integrating large language models into products, building RAG pipelines for contextual knowledge search, AI chatbots, and automating developer workflows using Python.',
    icon: 'BrainCircuit',
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Deployment',
    description:
      'Managing cloud infrastructure on AWS (EC2, S3, Lightsail) and Render, setting up CI/CD pipelines, and automating deployments to cut release overhead significantly.',
    icon: 'Cloud',
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Crafting responsive, performant user interfaces with React.js, TypeScript, and modern CSS — optimized for cross-device compatibility and smooth user experience.',
    icon: 'Monitor',
  },
];

export const skills: Skill[] = [
  { name: 'Ruby on Rails', percentage: 90, icon: 'Gem' },
  { name: 'React.js', percentage: 90, icon: 'Atom' },
  { name: 'Node.js', percentage: 88, icon: 'Server' },
  { name: 'TypeScript', percentage: 85, icon: 'Code2' },
  { name: 'PostgreSQL', percentage: 82, icon: 'Database' },
  { name: 'Python & AI/LLM', percentage: 80, icon: 'BrainCircuit' },
  { name: 'AWS / DevOps', percentage: 78, icon: 'Cloud' },
  { name: 'GraphQL', percentage: 75, icon: 'GitMerge' },
  { name: 'Flask', percentage: 72, icon: 'Server' },
];

export const projects: Project[] = [
  {
    id: 'granite-auction',
    title: 'Granite Auction',
    category: 'SaaS Platform',
    image: '/images/projects/granite_auction/hero.png?w=600&h=400&fit=crop',
    description: 'A modern SaaS platform for car bidding and auctions.',
  },
  {
    id: 'settle_in',
    title: 'SettleIn',
    category: 'SaaS Platform',
    image: '/images/projects/settle_in/hero.png?w=600&h=400&fit=crop',
    description: 'An immigrant advisor AI chatbot for personalized investment guidance.',
  },
  {
    id: 'ergnation',
    title: 'Ergnation Fitness App',
    category: 'SaaS Platform',
    image: '/images/projects/ergnation/hero.png?w=600&h=400&fit=crop',
    description: 'A fitness app for tracking workouts and health metrics.',
    link: 'https://ergnation.webflow.io/',
  },
  {
    id: 'fleet-apps',
    title: 'Fleet Apps',
    category: 'SaaS Platform',
    image: '/images/projects/fleet_apps/hero.jpeg?w=600&h=400&fit=crop',
    description: 'A fleet management SaaS platform for car rental industry.',
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    category: 'Website',
    image: '/images/projects/portfolio/hero.png?w=600&h=400&fit=crop',
    description: 'A portfolio website showcasing creative work and projects.',
  },
  {
    id: 'apex-wave',
    title: 'Apex Wave',
    category: 'E-commerce',
    image: '/images/projects/apex_wave/hero.png?w=600&h=400&fit=crop',
    description: 'An e-commerce platform for selling office furniture online.',
  },
];

export const experiences: Experience[] = [
  {
    id: 'stackhub',
    title: 'Senior Full Stack Developer',
    company: 'StackHub',
    period: 'Feb 2023 - Present',
    accomplishments: [
      'Architected and led full-stack development of a scalable SaaS platform, applying clean code principles and agile best practices throughout the product lifecycle',
      'Integrated production-ready Stripe payment system with robust error handling and seamless checkout workflows',
      'Implemented role-based authentication using Devise, enhancing security, session management, and user access control',
      'Automated CI/CD pipelines on Render, reducing manual deployment overhead by 60% with zero-downtime releases',
      'Built and maintained RESTful APIs supporting mobile and third-party integrations with consistent uptime',
      'Launched API v3 with full backward compatibility and Swagger documentation, streamlining partner onboarding',
      'Engineered performance optimizations achieving 20% reduction in average user response time',
      'Built real-time data pipelines using WebSocket for seamless bi-directional communication with third-party APIs',
      'Maintained 99%+ uptime through proactive bug triage, monitoring, and rapid incident resolution',
      'Acted as technical lead — mentoring junior developers, conducting code reviews, and driving scalable architecture decisions',
      'Accelerated full SaaS product delivery from an estimated 6 months to under 3 weeks using AI-assisted development and LLM-powered workflows',
      'Engineered RAG pipelines connecting LLMs to internal knowledge bases, enabling context-aware search and reducing manual lookup time',
      'Built internal AI chatbot prototypes using Python and LLM APIs, automating repetitive queries and reducing team support overhead',
      'Designed and iterated LLM prompt templates for production use cases, improving AI output accuracy and consistency',
      'Wrote comprehensive RSpec test suites, maintaining high code coverage and reducing regression bugs reaching production',
      'Enforced application security best practices including input validation, role-based access control, and secure token handling across all REST API endpoints',
    ],
  },
  {
    id: 'fleetapps',
    title: 'Ruby on Rails Developer',
    company: 'FleetApps — Ireland',
    period: 'Jul 2022 - Feb 2023',
    accomplishments: [
      'Implemented DriverCheck, a comprehensive driver verification system, to enhance the reliability and security of driver information',
      'Contributed as a Full Stack Developer, offering consistent support and expertise throughout the project',
      'Planned and developed new modules from scratch following best practices',
      'Implemented user-friendly fine creation services, streamlining the management of financial penalties',
      'Ensured compliance with GDPR regulations, prioritizing the protection of user personal data and facilitating its secure removal',
      'Effectively handled deployments on AWS Lightsail, optimizing scalability and reliability for smooth application performance',
    ],
  },
  {
    id: 'codingcops',
    title: 'Software Engineer',
    company: 'Coding Cops — Pakistan',
    period: 'Sep 2020 - Jul 2022',
    accomplishments: [
      'Demonstrated expertise in Ruby on Rails throughout the project lifecycle, contributing to its development and maintenance',
      'Implemented security measures like Recaptcha and rack-attack to enhance application security',
      'Leveraged AngularJS for front-end feature implementation, improving overall functionality and usability',
      'Developed a trial SignUp module with feature flags, enabling controlled access to specific features',
      'Created a new user interface for Sapling using React and reusable custom components, enhancing user experience',
      'Integrated Intercom for improved customer communication and support',
      'Collaborated with Webflow to enhance website design and user experience',
      'Conducted debugging and troubleshooting to improve overall stability and performance',
      'Built responsive websites using HTML, CSS, and SCSS, ensuring optimal viewing experience across different devices',
      'Integrated Shopify widgets using JavaScript to enhance website features and functionalities',
      'Utilized Git for version control, code repository management, and collaboration with team members',
      'Collaborated with designers to transform design concepts into fully functional websites',
      'Implemented custom CSS styles and layouts, creating visually appealing and consistent webpages',
    ],
  },
];

export const personalInfo = {
  name: 'Taimoor Ahmad',
  title: 'Full Stack Web Developer',
  bio: 'Senior Full Stack Developer with 5+ years of experience building scalable SaaS platforms using Ruby on Rails, Node.js, React.js, and PostgreSQL. Strong background in API architecture, distributed systems, and cloud deployments. Recently focused on AI-powered applications including LLM integrations, RAG pipelines, AI chatbots, and developer workflow automation using Python. Passionate about building intelligent tools that enhance productivity and product capabilities for global teams.',
  email: 'taimoor220297@gmail.com',
  phone: '+92 301 4841580',
  location: 'Lahore, Pakistan',
  photo: '/images/taimoor.png',
  cv: '/files/taimoor-resume.pdf',
};

export const contactInfo = {
  title: 'Contact me',
  subtitle: 'Let\'s work together',
  description: 'I\'m always open to discussing new opportunities and interesting projects. Feel free to reach out!',
  email: 'taimoor220297@gmail.com',
  phone: '+92 301 4841580',
  address: 'Lahore, Pakistan',
};