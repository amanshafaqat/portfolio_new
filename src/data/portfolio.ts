// ============================================================
// src/data/portfolio.ts — SINGLE SOURCE OF TRUTH
// ============================================================

export const SITE = {
  name: 'Aman Shafaqat',
  initials: 'AS',
  title: 'Software Engineer & Full-Stack Developer',
  tagline: 'Building software with a focus on security, usability, and maintainability.',
  email: 'amanshafaqt@gmail.com',
  phone: '+92-326-588-8900',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com/in/amanshafaqat',
  github: 'https://github.com/amanshafaqat',
  availability: 'Open to Internships & Full-Time Roles',
  heroVideo: '/videos/hero-bg.mp4',
  bio: 'Final-year BS Software Engineering student at UMT Lahore with hands-on experience in full-stack web development, secure web applications, and project-based AI/ML work. Currently completing my degree and open to software engineering, full-stack, and application security opportunities.',
  shortBio: 'BS Software Engineering @ UMT Lahore · Full-Stack Development · Application Security · AI/ML Projects',
  university: 'University of Management & Technology (UMT)',
  degree: 'Bachelor of Science in Software Engineering',
  graduationYear: 'Nov 2026',
  ielts: '',   // set e.g. '7.0' when available — leave '' to hide
  openGraph: {
    title: 'Aman Shafaqat — Software Engineer',
    description: 'Software engineering portfolio featuring full-stack development, secure web applications, and project-based AI/ML work.',
    url: 'https://amanshafaqat.dev',
    image: '/og-image.png',
  },
}

export const ROLES = [
  'Full-Stack Developer',
  'Web Developer',
  'Application Security',
  'Software Engineer',
]

export const STATS = [
  { value: 6, label: 'Projects Built', suffix: '' },
  { value: 7, label: 'Credentials', suffix: '' },
  { value: 4, label: 'Years in SE', suffix: '' },
  { value: 4, label: 'Core Areas' },
]

// ── TIMELINE / ABOUT ────────────────────────────────────────

export const TIMELINE = [
  {
    year: '2022',
    label: 'Started Journey',
    detail: 'Enrolled in BS Software Engineering at UMT Lahore — started with C++ and algorithms.',
    icon: '🎓',
    color: '#00c8ff',
  },
  {
    year: '2023–24',
    label: 'Built the Foundations',
    detail: 'Built hands-on projects with Flask, React, Node.js, databases, and OOP while developing a foundation in software engineering.',
    icon: '⚡',
    color: '#a78bfa',
  },
  {
    year: '2025',
    label: 'UA Specialist Intern',
    detail: 'Joined Gamerz Bridge Pvt. Ltd. as a User Acquisition Specialist Intern, working with campaign analysis, A/B testing, audience segmentation, and performance reporting.',
    icon: '🚀',
    color: '#f59e0b',
  },
  {
    year: '2026',
    label: 'Building Zyntra',
    detail: 'Developing Zyntra as my Final Year Project at UMT, contributing to the frontend, browser extension, database work, and AI-assisted features.',
    icon: '🤖',
    color: '#10b981',
  },
  {
    year: 'Now',
    label: 'Seeking Opportunities',
    detail: 'Actively looking for Software Engineering, Full-Stack, and AI internships and entry-level roles at companies building impactful products.',
    icon: '🌍',
    color: '#00c8ff',
  },
]

export const APPROACH_CARDS = [
  {
    icon: '⚙️',
    title: 'Practical Engineering',
    desc: 'I focus on clear structure, maintainable code, and solutions that match the requirements of the project.',
  },
  {
    icon: '🔒',
    title: 'Security in Development',
    desc: 'I apply practical web security measures such as parameterized queries, authentication, authorization, and selected OWASP practices.',
  },
  {
    icon: '🧠',
    title: 'Learning Through Projects',
    desc: 'I build projects to strengthen my understanding of software engineering, web development, databases, and security.',
  },
]

// ── EXPERIENCE ───────────────────────────────────────────────

export type ExperienceType = {
  id: string
  role: string
  company: string
  period: string
  location: string
  type: 'industry' | 'project' | 'education'
  description: string
  points: string[]
  tech: string[]
}

export const EXPERIENCE: ExperienceType[] = [
  {
    id: 'zyntra-fyp',
    role: 'Software Engineering Project Contributor',
    company: 'Zyntra — FYP, UMT Lahore',
    period: 'June 2026 – Ongoing',
    location: 'Lahore, Pakistan',
    type: 'project',
    description: 'Contributing to Zyntra, an Agentic AI university guidance platform that helps students explore programs and manage application-related tasks.',
    points: [
      'Contributed to the 9-dimension Profile Strength Analyzer, a weighted scoring model for evaluating student profiles.',
      'Contributed to university and program recommendations covering 25 universities across 5 countries.',
      'Developed a Chrome Extension (Manifest V3) that uses stored profile information to assist with university application forms.',
      'Built a centralized application tracking dashboard enabling students to monitor submission statuses across multiple institutions in one place.',
    ],
    tech: ['Python', 'Agentic AI', 'NLP', 'React.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'Browser Extension APIs'],
  },
  {
    id: 'gamerz-bridge',
    role: 'User Acquisition Specialist Intern',
    company: 'Gamerz Bridge Pvt. Ltd.',
    period: 'Jan 2025 – Jun 2025',
    location: 'Lahore, Pakistan',
    type: 'industry',
    description: 'Worked on mobile user acquisition campaigns, applying campaign analysis, A/B testing, audience segmentation, and performance reporting.',
    points: [
      'Analysed mobile user acquisition campaign data across Meta and Google Ads and supported budget and creative decisions.',
      'Ran A/B tests and audience segmentation experiments and monitored CPI, CTR, and ROAS to evaluate campaign performance.',
      'Prepared performance reports using metrics such as ROAS, CPI, CTR, and retention.',
    ],
    tech: ['Data Analysis', 'A/B Testing', 'Meta Ads', 'Google Ads', 'Campaign Analytics', 'Performance Dashboards'],
  },
  {
    id: 'umt',
    role: 'BS Software Engineering',
    company: 'University of Management & Technology (UMT)',
    period: 'Oct 2022 – Nov 2026',
    location: 'Lahore, Pakistan',
    type: 'education',
    description: 'Bachelor of Science in Software Engineering with coursework in software architecture, algorithms, databases, web development, testing, operating systems, and AI fundamentals.',
    points: [
      'Relevant coursework: Software Architecture, Data Structures & Algorithms, Database Design, Web Development, Mobile App Development, OOP, Software Testing & QA, Operating Systems, AI Fundamentals.',
      'Final Year Project: Zyntra — an AI-assisted university guidance platform.',
    ],
    tech: ['Software Engineering', 'Algorithms', 'Database Design', 'Web Development', 'AI Fundamentals'],
  },
]

// ── PROJECTS ─────────────────────────────────────────────────

export type Project = {
  id: string
  title: string
  description: string
  longDesc: string
  tech: string[]
  category: 'AI/ML' | 'Full Stack' | 'Security' | 'Desktop' | 'Frontend'
  github?: string
  live?: string
  demo?: string
  featured: boolean
  flagship?: boolean
  icon: string
  color: string
  highlights?: string[]
  challenges?: string[]
  future?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'zyntra',
    title: 'Zyntra',
    description: 'AI-assisted university guidance platform with profile analysis, program recommendations, and application tracking.',
    longDesc: 'Zyntra is my Final Year Project — an AI-assisted platform that brings university and program information together, analyses student profiles across nine dimensions, provides program recommendations, and supports application tracking.',
    tech: ['Python', 'Agentic AI', 'NLP', 'React.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'Chrome Extension MV3', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/amanshafaqat/zyntra',
    
    featured: true,
    flagship: true,
    icon: '🤖',
    color: '#00c8ff',
    highlights: [
      '9-dimension Profile Strength Analyzer using a weighted scoring model',
      'Covers 25 universities across 5 countries',
      'Chrome Extension (MV3) assists with university application form completion',
      'Centralized application tracking dashboard',
      'NLP-driven SOP content suggestions',
      'Scholarship filter integrated with program recommendations',
    ],
    challenges: [
      'Working with structured university and program data for recommendation features',
      'Building a Chrome Extension that works reliably across diverse university portal structures',
      'Designing recommendation features that can be extended as the university dataset grows',
    ],
    future: [
      'Expand to 100+ universities across 20+ countries',
      'Automated SOP generation with fine-tuned LLM',
      'Real-time scholarship and funding matching',
      'Direct end-to-end application submission',
    ],
  },
  {
    id: 'job-tracker',
    title: 'Job Tracker',
    description: 'Full-stack job application management system with authentication, role-based access control, and an admin dashboard.',
    longDesc: 'A full-stack job management application built with Flask and SQLite. It includes authentication, separate admin and applicant roles, an admin dashboard, CRUD operations, input validation, and structured database storage.',
    tech: ['Flask', 'Python', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'REST API', 'JWT', 'RBAC', 'bcrypt'],
    category: 'Full Stack',
    github: 'https://github.com/amanshafaqat/job_tracker',
    featured: true,
    icon: '📋',
    color: '#a78bfa',
    highlights: [
      'JWT authentication with bcrypt — zero plaintext credential storage',
      'Role-based access control: admin and applicant roles with separate dashboards',
      'RESTful API with 12 endpoints, Postman collection included',
      'Normalised SQLite schema with foreign key constraints',
      
    ],
  },
  {
    id: 'secure-web-app',
    title: 'Secure Web Application',
    description: 'Flask security project demonstrating SQL injection prevention, XSS/CSRF protections, authentication, authorization, and selected OWASP practices.',
    longDesc: 'A security-focused Flask application demonstrating parameterized queries, CSRF protection, password hashing, rate limiting, and role-based access control. The project focuses on practical secure web development and selected OWASP security practices.',
    tech: ['Flask', 'Python', 'SQLite', 'OWASP Top 10', 'CSP Headers', 'CSRF Tokens', 'Rate Limiting', 'bcrypt'],
    category: 'Security',
    github: 'https://github.com/amanshafaqat/secure-web-app',   // ← update with your real repo slug
    featured: true,
    icon: '🔒',
    color: '#10b981',
    highlights: [
      'Selected OWASP Top 10 (2021) practices applied',
      'Parameterized queries throughout — zero raw SQL concatenation',
      'CSRF tokens on every state-changing route; SameSite cookie policy',
      'Rate limiting applied to authentication endpoints',
      'Security issues and corresponding fixes documented in the project',
    ],
  },
  {
    id: 'hospital-mgmt',
    title: 'Hospital Management System',
    description: 'C++ desktop system for hospital staff and patient records using OOP, STL data structures, and graph-based department connectivity.',
    longDesc: 'A hospital management system developed in C++ using object-oriented programming and STL data structures. It includes patient and staff record management and graph-based connectivity between hospital departments.',
    tech: ['C++', 'OOP', 'STL', 'Graph Algorithms', 'BST', 'Priority Queue', 'Doxygen'],
    category: 'Desktop',
    github: 'https://github.com/amanshafaqat/Hospital_Management_System',
    featured: true,
    icon: '🏥',
    color: '#f59e0b',
    highlights: [
      'Adjacency-list graph + Dijkstra\'s shortest-path for department routing',
      'Structured patient record management using STL/data structures',
      'Priority queue for emergency triage with configurable severity levels',
      'Abstract Patient base class; DoctorPatient and AdminStaff subclasses',
      'Code documentation included with the project',
    ],
  },
  {
    id: 'library-mgmt',
    title: 'Library Management System',
    description: 'Python/Tkinter desktop application for library records, books, borrowing, returns, and fines.',
    longDesc: 'A GUI desktop application built with Python and Tkinter for book inventory, user management, borrowing, returns, and fines. Data is stored in SQLite.',
    tech: ['Python', 'Tkinter', 'OOP', 'SQLite', 'Factory Pattern', 'Observer Pattern', 'GUI'],
    category: 'Desktop',
    github: 'https://github.com/amanshafaqat/Library_Management_System',
    featured: false,
    icon: '📚',
    color: '#ec4899',
    highlights: [
      'Full GUI with Tkinter — multi-window navigation and form validation',
      'Object-oriented design used across the application',
      'SQLite database for books, members, transactions, and fines',
      'Complete borrow / return / overdue-fines workflow',
    ],
  },
  {
    id: 'iphone-clone',
    title: 'iPhone Homepage Clone',
    description: 'Responsive Apple iPhone homepage recreation using HTML, CSS, JavaScript, Grid, and Flexbox. Live on Netlify.',
    longDesc: 'A responsive recreation of Apple\'s iPhone homepage using semantic HTML5, CSS Grid/Flexbox, CSS animations, and vanilla JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox', 'CSS Animations', 'Responsive Design'],
    category: 'Frontend',
    github: 'https://github.com/amanshafaqat/Clone_Iphone_Homepage',
    live: 'https://harmonious-jalebi-967814.netlify.app/',
    featured: false,
    icon: '📱',
    color: '#64748b',
    highlights: [
      'Responsive layout across desktop and mobile breakpoints',
      'Pure CSS animations — no JS animation libraries',
      'Semantic HTML5 structure throughout',
    ],
  },
]

// ── SKILLS ───────────────────────────────────────────────────

export type SkillCategory = {
  id: string
  label: string
  icon: string
  color: string
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    color: '#00c8ff',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#a78bfa',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'CSS Grid', 'Flexbox', 'Responsive Design', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: '#10b981',
    skills: ['Node.js', 'Flask', 'REST APIs', 'Express.js', 'JWT Authentication', 'Session Management', 'Rate Limiting'],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: '🤖',
    color: '#f59e0b',
    skills: ['Python (ML)', 'NLP', 'Agentic AI', 'Azure ML Studio', 'Azure AI Services', 'Machine Learning', 'Pandas', 'Data Analysis'],
  },
  {
    id: 'security',
    label: 'Cybersecurity',
    icon: '🔒',
    color: '#ef4444',
    skills: ['OWASP Top 10', 'SQL Injection Prevention', 'XSS / CSRF Protection', 'Secure SDLC', 'Vulnerability Analysis', 'Auth & Authorization'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    color: '#0284c7',
    skills: ['Microsoft Azure', 'Azure ML Studio', 'Azure AI Services', 'Cloud Development', 'Vercel', 'Netlify'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    color: '#7c3aed',
    skills: ['SQLite', 'MySQL', 'MongoDB', 'Firebase', 'Database Design', 'Normalization (3NF)'],
  },
  {
    id: 'tools',
    label: 'Dev Tools',
    icon: '🛠️',
    color: '#6b7280',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Agile / Scrum', 'OOP Design Patterns', 'Software Testing', 'Doxygen'],
  },
]

// ── CERTIFICATIONS ───────────────────────────────────────────

export type Cert = {
  id: string
  title: string
  issuer: string
  issuerShort: string
  date: string
  credentialId?: string
  verifyUrl?: string
  category: 'Huawei' | 'Microsoft' | 'Forage' | 'Community'
  color: string
  icon: string
  description: string
}

export const CERTIFICATIONS: Cert[] = [
  {
    id: 'hcia-storage',
    title: 'HCIA-Storage V5.0 Course',
    issuer: 'Huawei ICT Academy',
    issuerShort: 'Huawei',
    date: 'Aug 2025',
    credentialId: '20250802000024',
    verifyUrl: '/images/cert-hcia-storage.png',
    category: 'Huawei',
    color: '#ef4444',
    icon: '🏆',
    description: 'Completed Huawei ICT Academy\'s HCIA-Storage V5.0 course — covers SAN, NAS, object storage, data protection, and Huawei OceanStor architecture.',
  },
  {
    id: 'huawei-python',
    title: 'Python Programming Basics',
    issuer: 'Huawei ICT Academy',
    issuerShort: 'Huawei',
    date: 'Mar 2026',
    credentialId: 'EBG20260304014654',
    verifyUrl: '/images/cert-python-basics.png',
    category: 'Huawei',
    color: '#ef4444',
    icon: '🐍',
    description: 'Completed Huawei ICT Academy training in Python fundamentals, including data types, control flow, functions, OOP, file I/O, and error handling.',
  },
  {
    id: 'azure-mlops',
    title: 'Design ML Operations Solution',
    issuer: 'Microsoft Azure',
    issuerShort: 'Microsoft',
    date: '2025',
    category: 'Microsoft',
    color: '#0078d4',
    icon: '☁️',
    description: 'Completed Microsoft Azure learning focused on MLOps concepts, model monitoring, deployment, and responsible AI practices.',
  },
  {
    id: 'azure-ai',
    title: 'Azure AI Services',
    issuer: 'Microsoft Azure',
    issuerShort: 'Microsoft',
    date: '2025',
    category: 'Microsoft',
    color: '#0078d4',
    icon: '🤖',
    description: 'Completed Microsoft Azure learning covering Azure AI Services, Azure ML, and AI application concepts.',
  },
  {
    id: 'azure-ml-intro',
    title: 'Introduction to Machine Learning & AI',
    issuer: 'Microsoft Azure',
    issuerShort: 'Microsoft',
    date: '2025',
    category: 'Microsoft',
    color: '#0078d4',
    icon: '📊',
    description: 'Completed introductory Microsoft Azure learning covering machine learning and AI concepts.',
  },
  {
    id: 'forage-cyber-bundle',
    title: 'Cybersecurity Job Simulations × 3',
    issuer: 'Deloitte · Commonwealth Bank · Mastercard (via Forage)',
    issuerShort: 'Forage',
    date: 'Jun 2026',
    credentialId: 'HGCE2aZDTKTPj7NZE',
    category: 'Forage',
    color: '#86bc25',
    icon: '🛡️',
    description: 'Completed three industry cybersecurity simulations: Deloitte (incident response & threat analysis), Commonwealth Bank (security analysis & reporting), and Mastercard (phishing awareness & security controls).',
  },
  {
    id: 'gdgoc-ai',
    title: 'AI Seekho Day 25',
    issuer: 'GDGoC BNU',
    issuerShort: 'GDGoC',
    date: 'Aug 2025',
    category: 'Community',
    color: '#4285f4',
    icon: '🎯',
    description: 'Participated in an AI-focused workshop and project activities covering practical AI and machine learning concepts.',
  },
]

// ── INTERESTS ────────────────────────────────────────────────
// Used in About section — professional interests, not research claims

export const INTERESTS = [
  'AI-assisted Software Development',
  'Full-Stack Web Development',
  'Application Security & Secure SDLC',
  'Cloud Development',
  'Natural Language Processing',
  'Software Engineering',
]

// ── ZYNTRA SHOWCASE DATA ─────────────────────────────────────

export const ZYNTRA = {
  problem: 'Students applying internationally often need to collect program requirements, compare universities, and track applications across multiple sources and portals.',
  solution: 'Zyntra is an AI-assisted platform that brings university data together, analyses student profiles across 9 weighted dimensions, provides program recommendations, and supports application tracking.',
  
  figmaDesign: 'https://www.figma.com/make/LrmpAu0aPsd44lLzS44umD/Zyntra-Application-Design',
  techStack: {
    frontend: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    backend: ['Node.js', 'REST APIs', 'Python', 'NLP Pipeline'],
    ai: ['Agentic AI', 'Machine Learning', 'Natural Language Processing', 'Weighted Scoring Models'],
    database: ['PostgreSQL'],
    extension: ['Chrome Extension Manifest V3', 'Browser Extension APIs'],
  },
  myContributions: [
    'Contributed to the Profile Strength Analyzer using a 9-dimension weighted scoring model',
    'Contributed to the university recommendation logic using weighted profile criteria',
    'Contributed to the React.js frontend, including dashboard, profile, recommendations, application tracking, and settings pages',
    'Developed the AI-driven Chrome Extension for form autofill and SOP content suggestions (Manifest V3)',
    'Integrated NLP pipeline for Statement of Purpose content generation',
    'Contributed to application architecture and database design',
    'Worked with the team through iterative development and project planning',
  ],
  
  roadmap: [
    { phase: 'Phase 1 · Current', items: ['25 universities, 5 countries', '9-factor Profile Strength Analyzer', 'AI Recommendations & Application Tracker', 'Chrome Extension for autofill'] },
    { phase: 'Phase 2 · Next', items: ['100+ universities', 'Automated SOP generation (LLM)', 'Real-time scholarship matching', 'More program types'] },
    { phase: 'Phase 3 · Future', items: ['Global platform (20+ countries)', 'Predictive analytics with continuous learning', 'End-to-end application submission', 'Multi-language support'] },
  ],
  scoringDimensions: [
    { name: 'Academics', weight: 25, icon: '📚' },
    { name: 'Language Proficiency', weight: 20, icon: '🌐' },
    { name: 'Work Experience', weight: 15, icon: '💼' },
    { name: 'Projects', weight: 10, icon: '⚡' },
    { name: 'Certifications', weight: 8, icon: '🏆' },
    { name: 'Research', weight: 8, icon: '🔬' },
    { name: 'Achievements', weight: 6, icon: '🥇' },
    { name: 'Leadership', weight: 5, icon: '👥' },
    { name: 'SOP Quality', weight: 3, icon: '📝' },
  ],
}

// ── SOFT SKILLS ──────────────────────────────────────────────

export const SOFT_SKILLS = [
  'Problem Solving',
  'Leadership',
  'Team Collaboration',
  'Critical Thinking',
  'Project Management',
  'Adaptability',
  'Communication',
]

export const LANGUAGES_SPOKEN = [
  { name: 'English', level: SITE.ielts ? `Professional Proficiency (IELTS ${SITE.ielts})` : 'Professional Proficiency' },
  { name: 'Urdu', level: 'Native' },
]
