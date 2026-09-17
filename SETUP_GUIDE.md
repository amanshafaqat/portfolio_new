# Portfolio Setup Guide

## 1. Install dependencies

```bash
npm install
```

## 2. Configure the contact form

Create `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Do not commit this file or any secret keys.

## 3. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## 4. Update portfolio content

Most personal content is stored in:

```text
src/data/portfolio.ts
```

Update your name, links, skills, projects, experience, certifications, and other profile information there.

## 5. Verify before deployment

```bash
npm run type-check
npm run build
```

## 6. Deploy

Connect the repository to Vercel or another Next.js-compatible hosting provider and add `NEXT_PUBLIC_WEB3FORMS_KEY` to the deployment environment variables.
