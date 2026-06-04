export const personalInfo = {
  name: 'Emmanuel Dorcas Temitope',
  shortName: 'Dorcas',
  initials: 'ED',
  location: 'Kaduna, Nigeria',
  email: 'emmanueldorcas15@gmail.com',
  phone: '+234 9078562988',
  bio: "I'm a Full-Stack Developer and UI/UX Designer with 4+ years of experience building digital products from end to end. My journey started in design and frontend development, then grew into full-stack expertise — I now build and maintain APIs, design systems, and complete digital experiences. I'm passionate about clean, scalable code and interfaces people actually enjoy using.",
  shortBio: 'Full-stack developer & UI/UX designer. I build APIs, craft design systems, and ship complete digital products — from backend logic to pixel-perfect interfaces.',
  roles: [
    'Full-Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'Open Source Contributor',
  ],
  cvUrl: '/Emmanuel-Dorcas-Resume.pdf',
  photo: '/images/profile.jpg',
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/portableDD' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dorcas-emmanuel-65862b193/' },
  { label: 'Behance', url: 'https://www.behance.net/dorcastemmanuel' },
  { label: 'Discord', url: 'https://discordapp.com/users/732937548690882561' },
  { label: 'WhatsApp', url: 'https://wa.me/qr/QRXAJCJVA5LTG1' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export type Experience = {
  id: number
  company: string
  tabLabel: string
  companyUrl?: string
  role: string
  period: string
  current: boolean
  type: 'full-time' | 'part-time' | 'volunteer' | 'training' | 'opensource'
  description: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Trailblazer',
    tabLabel: 'Trailblazer',
    companyUrl: 'https://trailblazing-website.vercel.app/',
    role: 'Backend Developer (Volunteer)',
    period: 'Aug 2025 – Present',
    current: true,
    type: 'volunteer',
    description: [
      'Volunteering as a backend developer, contributing to the organization\'s technical infrastructure.',
    ],
    techStack: ['Node.js', 'NestJS'],
  },
  {
    id: 2,
    company: 'Leadway Assurance',
    tabLabel: 'Leadway · Backend',
    role: 'Backend Developer Trainee',
    period: 'May 2025 – Present',
    current: true,
    type: 'full-time',
    description: [
      'Responsible for developing and maintaining product APIs.',
      'Authored technical documentation and API guidelines using Swagger.',
      'Working with NestJS, PostgreSQL, and MSSQL in a production environment.',
    ],
    techStack: ['NestJS', 'PostgreSQL', 'MSSQL', 'Swagger', 'TypeScript'],
  },
  {
    id: 3,
    company: 'Zerocardless (BuyRMB)',
    tabLabel: 'Zerocardless',
    companyUrl: 'https://buyrmb.ng/',
    role: 'Frontend Developer',
    period: 'Jan 2025 – Present',
    current: true,
    type: 'full-time',
    description: [
      'Developing and maintaining the UI for BuyRMB (formerly Mangoo), the company\'s flagship product.',
      'Implemented state management with Zustand and server-state handling with React Query.',
      'Authored technical documentation and guidelines for the product.',
    ],
    techStack: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'Tailwind CSS'],
  },
  {
    id: 4,
    company: 'Nexacore-Org (Drip / Open Source)',
    tabLabel: 'Open Source',
    companyUrl: 'https://www.drips.network/app',
    role: 'Open Source Contributor',
    period: 'Dec 2024 – Present',
    current: true,
    type: 'opensource',
    description: [
      'Led frontend and backend efforts on NexaFx, a decentralised Web3 currency exchange platform.',
      'Contributed to 15+ open-source projects across blockchain, infrastructure, and developer tooling.',
      'Enhanced UI/UX and resolved issues in the OnlyDust core platform.',
      'Participated in compiler tooling and developer experience improvements in the Starknet/Cairo ecosystem.',
      'Collaborated on Web3 experiments including NFT tools and Chain Mail.',
    ],
    techStack: ['NestJS', 'Next.js', 'TypeScript', 'Blockchain', 'Web3'],
  },
  {
    id: 5,
    company: 'Leadway Assurance',
    tabLabel: 'Leadway · SWE',
    role: 'Software Developer',
    period: 'Nov 2024 – Apr 2025',
    current: false,
    type: 'training',
    description: [
      'Completed a 6-month software development training covering backend, mobile development, and data analysis.',
      'Built dynamic backends for blog and school management applications.',
      'Implemented file upload with Amazon S3.',
      'Built mobile apps (food app, school management) using React Native.',
      'Co-led a team of 6 building a backend for a task management and event tracking platform.',
    ],
    techStack: ['Node.js', 'NestJS', 'React Native', 'AWS S3', 'TypeScript'],
  },
  {
    id: 6,
    company: 'Leadway Assurance',
    tabLabel: 'Leadway · Frontend',
    role: 'Frontend Developer',
    period: 'Apr 2024 – Oct 2024',
    current: false,
    type: 'training',
    description: [
      'Completed a 6-month frontend development training covering database management, data analysis, cybersecurity, and frontend development.',
      'Built dynamic applications including a Feedback App, GitHub Finder, and Real Estate App.',
      'Implemented client-side routing with React Router DOM and integrated Firebase.',
      'Gained foundational knowledge in MySQL, data analysis, and cybersecurity.',
    ],
    techStack: ['React', 'JavaScript', 'Firebase', 'React Router', 'MySQL'],
  },
  {
    id: 7,
    company: 'Shareqube',
    tabLabel: 'Shareqube',
    role: 'Frontend Developer',
    period: 'Mar 2021 – Aug 2021',
    current: false,
    type: 'part-time',
    description: [
      'Collaborated with an IT professional in designing and building a new specification for the website.',
      'Developed technical documents and guidelines for the website.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export type Project = {
  id: number
  title: string
  description: string
  image: string | null
  category: 'frontend' | 'opensource' | 'design'
  techStack: string[]
  links: {
    github?: string
    live?: string
    figma?: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NexaFx',
    description:
      'A decentralised Web3 currency exchange platform enabling seamless Naira-to-multi-currency and crypto conversions with real-time exchange rates and blockchain integration. Contributed to both the Next.js frontend and NestJS backend.',
    image: null,
    category: 'opensource',
    techStack: ['NestJS', 'Next.js', 'TypeScript', 'Web3', 'Blockchain'],
    links: {
      github: 'https://github.com/Nexacore-Org/NexaFx-backend',
      live: 'https://github.com/Nexacore-Org/NexaFx-web',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'Vuesax',
    description:
      'A full-featured e-commerce platform built solo, combining a product catalog, wishlist, checkout, and an admin analytics dashboard with graphical sales insights. Also integrates chat, email, and task management tools.',
    image: '/projects/vuesax.png',
    category: 'frontend',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'React Router'],
    links: {
      github: 'https://github.com/portableDD/vuesax',
      live: 'https://vuesax.netlify.app/',
    },
    featured: true,
  },
  {
    id: 3,
    title: 'Sefa Medical',
    description:
      'A healthcare super admin platform built in a team of six where she served as co-team lead. Owned the Overview and Finance tabs of a full admin panel covering patients, staff, pharmacy, labs, and analytics.',
    image: '/projects/hospital.png',
    category: 'frontend',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'React Router'],
    links: {
      github: 'https://github.com/portableDD/Sefa_medical_application',
      live: 'https://sefa-medical-application.vercel.app/',
    },
    featured: true,
  },
  {
    id: 4,
    title: 'Underwriter Dashboard',
    description:
      'A fintech risk management dashboard for underwriters, featuring an Overview tab with key metrics and a Request tab for processing incoming applications and risk assessments.',
    image: '/projects/underwriter.png',
    category: 'frontend',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/portableDD/Project-html-css',
      live: 'https://underwriter-tangerine.netlify.app/',
    },
    featured: false,
  },
  {
    id: 5,
    title: 'Glamour Cosmetic Store',
    description:
      'A fully functional mini e-commerce store with a home page, shop, cart, and about page. Built during the HNG internship with smooth navigation and an efficient cart system.',
    image: '/projects/mini-store.png',
    category: 'frontend',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'React Router'],
    links: {
      github: 'https://github.com/portableDD/HNG-mini-store',
      live: 'https://hng-mini-store.netlify.app/',
    },
    featured: false,
  },
  {
    id: 6,
    title: 'Surglife Medical',
    description:
      'A UI/UX design for a mobile healthcare app enabling patients to consult doctors online, book appointments, view medical records, and schedule surgeries — designed entirely in Figma.',
    image: '/projects/surglife.svg',
    category: 'design',
    techStack: ['Figma', 'UI/UX Design'],
    links: {
      figma:
        'https://www.figma.com/design/qC7dNE5gqIe8BalZ42yHaU/my-app?node-id=1-914&t=56DdhJona1K2lzJO-1',
    },
    featured: false,
  },
]

export const skills = {
  Frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'React Router',
    'Zustand',
    'React Query',
  ],
  Backend: [
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'MSSQL',
    'MySQL',
    'REST APIs',
    'Swagger',
    'AWS S3',
    'Firebase',
  ],
  'Design & Mobile': ['Figma', 'UI/UX Design', 'React Native', 'Responsive Design', 'Shadcn UI'],
  Tools: ['Git', 'GitHub', 'Open Source', 'Drip', 'Blockchain / Web3'],
}

export const awards = [
  { title: 'Frontend Developer', org: 'Leadway Assurance', year: '2024' },
  { title: 'Project Management', org: 'Pinnacle Coterie International', year: '2023' },
  { title: 'UI/UX Design', org: 'Geneza School of Design', year: '2023' },
  { title: 'Product Design', org: 'Zuri', year: '2022' },
]
