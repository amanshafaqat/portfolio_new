# Aman Shafaqat — Portfolio

Personal portfolio website showcasing my software engineering projects, technical skills, academic work, and practical experience.



## About

I am a final-year BS Software Engineering student at the University of Management & Technology (UMT), Lahore, graduating in **November 2026**.

My work focuses on full-stack web development, secure web applications, software engineering, and project-based AI/ML work.

## Featured Project

### Zyntra

Zyntra is my Final Year Project at UMT. It is an AI-assisted university guidance platform that brings university information together, analyses student profiles across nine dimensions, recommends programs, and supports application tracking.

Key components include:

- Profile analysis using a weighted scoring model
- University and program recommendations
- Application tracking
- Chrome Extension (Manifest V3) for application form assistance
- NLP-based SOP assistance
- AI-assisted recommendation explanations
- University and program data management

The project uses React, Node.js, Python, REST APIs, PostgreSQL, and browser extension technologies.

Repository: https://github.com/amanshafaqat/zyntra

## Projects

| Project | Technologies | Description |
|---|---|---|
| Zyntra | React, Node.js, Python, AI/ML, PostgreSQL | University guidance and application assistance platform |
| Job Tracker | Flask, Python, SQLite | Job management system with authentication, roles, and an admin dashboard |
| Secure Web Application | Flask, Python, SQLite | Security-focused web application demonstrating practical OWASP protections |
| Hospital Management System | C++, STL, OOP | Desktop management system using data structures and graph-based functionality |
| Library Management System | Python, Tkinter, SQLite | Desktop GUI application for library operations |
| iPhone Homepage Clone | HTML, CSS, JavaScript | Responsive recreation of an Apple iPhone homepage |

## Technical Skills

### Languages

C++ · Python · Java · JavaScript · TypeScript · HTML5 · CSS3 · SQL

### Web Development

React.js · Next.js · Flask · Node.js · Express.js · Tailwind CSS · Bootstrap · REST APIs · Responsive Design

### Databases

SQLite · MySQL · MongoDB · Firebase · PostgreSQL · Database Design · Normalization

### AI / Data

Pandas · Natural Language Processing · Machine Learning Fundamentals · Microsoft Azure ML Studio · Azure AI Services

### Security

OWASP Top 10 · SQL Injection Prevention · XSS / CSRF Protection · Authentication · Authorization · Secure SDLC · Vulnerability Analysis

### Tools

Git · GitHub · VS Code · Figma · Postman · CodeBlocks · Replit · Doxygen

### Software Engineering

OOP · Data Structures · Algorithms · Software Architecture · Software Testing · Debugging · Agile / Scrum

## Experience

### User Acquisition Specialist Intern — Gamerz Bridge Pvt. Ltd.

**2025** · Lahore, Pakistan

Worked on mobile user acquisition campaigns, A/B testing, audience segmentation, campaign analysis, and performance reporting.

## Education

### Bachelor of Science in Software Engineering

**University of Management & Technology (UMT), Lahore**  
**October 2022 – November 2026**

Relevant coursework includes Software Architecture, Data Structures & Algorithms, Database Design, Web Development, Mobile Application Development, Object-Oriented Programming, Software Testing & QA, Operating Systems, and AI Fundamentals.

## Certifications & Credentials

- HCIA-Storage V5.0 Course — Huawei ICT Academy
- Python Programming Basics — Huawei ICT Academy
- Microsoft Azure learning credentials covering AI and ML topics
- Deloitte Cybersecurity Job Simulation — Forage
- Commonwealth Bank Cybersecurity Job Simulation — Forage
- Mastercard Cybersecurity Job Simulation — Forage
- AI Seekho Day 25 — GDGoC BNU

## Running Locally

### Requirements

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/amanshafaqat/portfolio.git
cd portfolio
npm install
```

Create `.env.local` when using the contact form:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

### Type Check

```bash
npm run type-check
```

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animations/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   └── portfolio.ts
├── hooks/
├── lib/
└── styles/
```

The main portfolio content is maintained in `src/data/portfolio.ts`.

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Optional | Enables the Web3Forms contact form |

Do not commit `.env.local` or any API/access keys to GitHub.

## Deployment

The project is a Next.js application and can be deployed on Vercel or another platform that supports Next.js.

For the contact form, add `NEXT_PUBLIC_WEB3FORMS_KEY` to the deployment environment variables.

## License

This project is licensed under the MIT License for its source code.

Personal information, photographs, branding, resume content, and other personal assets belonging to Aman Shafaqat are not intended for reuse without permission.

## Contact

- Email: amanshafaqt@gmail.com
- LinkedIn: https://linkedin.com/in/amanshafaqat
- GitHub: https://github.com/amanshafaqat
- Portfolio: https://amanshafaqat.dev
