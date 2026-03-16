export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export const SKILLS = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express",  "REST APIs",  "Authentication"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["Supabase",  "Firebase", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Vercel", "WordPress",  "Postman", "VS Code"],
  },
  // {
  //   category: "DevOps",
  //   icon: "Cloud",
  //   skills: ["CI/CD", "GitHub Actions", "AWS (EC2, S3)", "Nginx", "Railway", "Fly.io", "Cloudflare"],
  // },
]

export const PROJECTS = [
  {
    id: "moc-ptw-safety-management-system",
    title: "MOC-PTW Safety Management System — Workflow and Safety Approval Platform",
    summary:
      "A workplace safety management platform built to digitize Management of Change and Permit to Work processes. The system helps teams create requests, route approvals by role, monitor progress, and maintain clear audit visibility for safer and more structured operations.",
    image: "/images/unilever.png",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Role-based authentication and access control",
      "MOC request creation and review workflow",
      "Permit to Work approval process",
      "Progress tracking and closure logs",
      "Dashboard for activity and status monitoring",
    ],
    tags: ["Safety System", "Full Stack", "Workflow"],
    liveUrl: "https://unilever-alpha.vercel.app/",
    githubUrl: "https://github.com/LakshmiKrishnaSanjay/unilever",
    featured: true,
  },
  {
    id: "real-estate-listing-platform",
    title: "Real Estate Listing Platform — Property Search and Booking Experience",
    summary:
      "A real estate platform designed to help users explore property listings through a clean and responsive interface. It supports browsing, filtering, inquiry flow, and payment integration, making it easier for users to discover and engage with available properties online.",
    image: "/",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    features: [
      "Property listing and detail pages",
      "Advanced search and filter options",
      "Inquiry and booking flow",
      "Razorpay payment integration",
      "Responsive user interface for all devices",
    ],
    tags: ["Real Estate", "Full Stack", "Booking"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "event-scheduler-app",
    title: "Event Scheduler App — Event Planning and Management Tool",
    summary:
      "A web application created to simplify event scheduling and organization. Users can create events, manage time slots, and keep track of updates in a clean dashboard experience backed by Firebase for real-time data handling.",
    image: "/",
    tech: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "Create and manage events",
      "Schedule date and time slots",
      "Real-time data sync with Firebase",
      "Simple dashboard for event overview",
      "Responsive interface for easy planning",
    ],
    tags: ["Productivity", "Web App", "Scheduler"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "personal-developer-portfolio",
    title: "Personal Developer Portfolio — Interactive Showcase Website",
    summary:
      "A modern portfolio website built to present projects, skills, and experience in a clean and professional way. The site focuses on strong visual presentation, smooth interactions, and responsive design to create a polished first impression for recruiters and clients.",
    image: "/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive multi-section portfolio layout",
      "Smooth animations and transitions",
      "Project showcase with featured work",
      "Experience and skills presentation",
      "Contact section for client and recruiter outreach",
    ],
    tags: ["Portfolio", "Frontend", "Personal Brand"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "wordpress-business-website",
    title: "WordPress Business Website — Corporate Web Presence",
    summary:
      "A business website developed in WordPress to present company services, improve online presence, and provide a professional digital touchpoint for customers. The project focused on clear content structure, responsive styling, and a user-friendly experience for business audiences.",
    image: "/",
    tech: ["WordPress", "PHP", "CSS"],
    features: [
      "Custom business website pages",
      "Service-focused content structure",
      "Responsive layout for mobile and desktop",
      "Editable backend through WordPress admin",
      "Clean and professional UI styling",
    ],
    tags: ["WordPress", "Business Website", "CMS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export const CASE_STUDIES = [
  {
    id: "Unilever",
    title: "Unilever — Project Management SaaS",
    overview:
      "A real-time project management platform designed to replace expensive tools like Jira and Linear for small-to-mid-sized engineering teams.",
    problem:
      "Small engineering teams struggled with complex, expensive tools that were built for enterprise. They needed something simple, fast, and real-time.",
    goals: [
      "Build a real-time kanban board with optimistic UI",
      "Support team workspaces with role-based access control",
      "Integrate with Slack for notifications",
      "Launch in under 3 months",
    ],
    role: "Solo full-stack developer — responsible for product design, frontend, backend, database architecture, and deployment.",
    tech: ["Next.js 14", "Supabase (Postgres + Realtime)", "Tailwind CSS", "Framer Motion", "Vercel"],
    challenges: [
      "Implementing optimistic UI updates without sacrificing data consistency",
      "Managing Supabase Realtime subscriptions at scale across multiple workspaces",
      "Designing a flexible permission system without over-complicating the schema",
    ],
    solutions: [
      "Used Supabase Realtime with row-level security policies for per-workspace isolation",
      "Implemented an optimistic update pattern using React state with rollback on error",
      "Designed a simple role enum (owner, admin, member) scoped to workspace membership",
    ],
    outcome:
      "Launched in 10 weeks. Acquired 150 beta users in the first month. Received strong Product Hunt feedback with a 4.8/5 rating across 40+ reviews.",
  },
]

export const EXPERIENCE = [
  {
    title: "Backend Developer",
    company: "NEO DIGITAL HUB",
    location: "Remote (Dubai, UAE)",
    duration: "Feb 2025 — Present",
    type: "full-time",
    description:
      "Building backend APIs, database schemas, and integrating third-party services for web applications using Next.js, Node.js,  and Supabase.",
    achievements: [
      "Developed and maintained REST APIs and real-time features for internal projects",
      "Integrated Supabase for authentication and database management",
      "Optimized backend performance and data querying for faster response times",
      "Implemented secure user authentication and role-based access control"
    ],
    tech: ["Next.js", "Node.js", "Supabase", "TypeScript", "MongoDB" , "APIs"],
  },
{
  title: "Web Developer",
  company: "AdsPro Web Services",
  location: "Remote (Kochi, India)",
  duration: "Jul 2025 — Dec 2025",
  type: "full-time",
  description:
    "Built and customized WordPress websites for clients, and developed a React + Firebase web application for internal tools and small-scale projects.",
  achievements: [
    "Developed multiple WordPress websites with custom themes and plugin configurations",
    "Implemented responsive designs to ensure mobile and desktop compatibility",
    "Optimized website performance and SEO for client projects",
    "Built a React + Firebase application with authentication, database, and real-time features",
    "Managed deployment, hosting setup, and Git-based version control for projects"
  ],
  tech: ["WordPress", "React", "Firebase", "HTML", "CSS", "JavaScript",  "Tailwind CSS"],
},
  {
    title: "MERN Stack Intern",
    company: "IROHUB INFOTECH",
    location: "Remote (Kochi, India)",
    duration: "Jan 2025 — Jul 2025",
    type: "internship",
    description:
      "Completed a full-stack internship focusing on building MERN applications, understanding deployment workflows, and implementing CRUD operations.",
    achievements: [
      "Developed multiple full-stack projects using MongoDB, Express, React, and Node.js",
      "Integrated third-party APIs and authentication systems",
      "Learned version control with Git and project deployment best practices",
      "Gained experience with frontend-backend integration and database design"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs"],
  },
]

export const GITHUB_STATS = [
  { label: "Repositories", value: "87" },
  { label: "Stars Earned", value: "2.4k" },
  { label: "Contributions", value: "1,847" },
  { label: "Years Active", value: "7+" },
]

export const REPOS = [
  {
    name: "react-ui-kit",
    description: "Production-ready, accessible React component library with 40+ components and Tailwind CSS variants.",
    stars: 1240,
    forks: 98,
    language: "TypeScript",
  },
  {
    name: "next-auth-starter",
    description: "Full-stack Next.js starter with Auth.js, Supabase, Drizzle ORM, and pre-built auth flows.",
    stars: 734,
    forks: 61,
    language: "TypeScript",
  },
  {
    name: "Unilever-oss",
    description: "Open source version of Unilever — real-time kanban board with Supabase Realtime.",
    stars: 421,
    forks: 37,
    language: "TypeScript",
  },
]

export const TESTIMONIALS = [
  {
    name: "Sarah Kim",
    title: "Engineering Manager",
    company: "Stripe",
    avatar: "/images/avatar-sarah.jpg",
    quote:
      "Alex is one of the sharpest engineers I've worked with. Their ability to translate complex product requirements into clean, performant code is remarkable. They consistently raised the bar for our entire frontend team.",
  },
  {
    name: "Marcus Webb",
    title: "Co-founder & CTO",
    company: "Launchpad Studio",
    avatar: "/images/avatar-marcus.jpg",
    quote:
      "We hired Alex to rebuild our core SaaS dashboard from scratch. They delivered ahead of schedule, the code quality was exceptional, and the performance improvements were beyond what we expected. Highly recommend.",
  },
  {
    name: "Priya Nair",
    title: "Senior Product Designer",
    company: "Linear",
    avatar: "/images/avatar-priya.jpg",
    quote:
      "Working with Alex was a dream. They understood design intent deeply and always found a way to implement interactions that felt exactly right. They bridged the design-engineering gap better than anyone I've seen.",
  },
  {
    name: "James Okafor",
    title: "Founder",
    company: "EstateHub",
    avatar: "/images/avatar-james.jpg",
    quote:
      "Alex built our entire e-commerce platform end-to-end. The attention to detail, clean architecture, and proactive communication made the entire process smooth. The platform has processed over $2M in sales.",
  },
]


