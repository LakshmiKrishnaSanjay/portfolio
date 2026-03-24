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
    skills: ["Git", "GitHub", "Vercel", "WordPress", "Postman", "Firebase Hosting" ,  "VS Code"],
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
    title: "MOC-PTW Safety Management System",
    summary:
      "A multi-stakeholder safety workflow system that digitizes Management of Change (MOC) and Permit to Work (PTW) processes. Improves request tracking, approvals, and audit visibility for safer operations.",
    image: "/images/unilever.png",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Backend APIs and database design with Supabase",
      "Role-based authentication and access control",
      "MOC and PTW request creation and approval workflow",
      "Progress tracking and closure logs",
      "Dashboard for activity monitoring",
    ],
    tags: ["Safety System", "Full Stack", "Workflow"],
    liveUrl: "https://unilever-alpha.vercel.app/",
    githubUrl: "https://github.com/LakshmiKrishnaSanjay/unilever",
    featured: true,
  },
  {
    id: "crown-hostel-management-system",
    title: "Crown Hostel Management System",
    summary:
      "A full-stack hostel management system to manage resident data and track payments. Residents log in, upload payment proofs, and admins verify and update records.",
    image: "/images/crownhostel.png",
    tech: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "Resident registration and data management",
      "QR-based payment tracking system",
      "Upload and verification of payment screenshots",
      "Admin panel for managing hostel records",
    ],
    tags: ["Hostel Management", "Full Stack", "Admin Panel"],
    liveUrl: "https://crownhostel-bb4da.web.app/", // update if hosted
    githubUrl: "https://github.com/LakshmiKrishnaSanjay/CrownHostel", 
    featured: true,
  },
  {
    id: "real-estate-listing-platform",
    title: "Real Estate Listing Platform",
    summary:
      "A MERN stack platform to browse, filter, and book property listings online. Includes user authentication, inquiries, and payment workflow.",
    image: "/images/realestate.png",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    features: [
      "Property listing and detail pages",
      "Advanced search and filter options",
      "Inquiry and booking workflow",
      "Razorpay payment integration",
      "Responsive UI for all devices",
    ],
    tags: ["Real Estate", "Full Stack", "Booking"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com/LakshmiKrishnaSanjay/EstateHub",
    featured: true,
  },
  {
  id: "babymom-ecommerce-website",
  title: "BabyMom E-Commerce Website",
  summary:
    "An online shop for BabyMom, selling tailor-made baby dresses. Built to provide a seamless shopping experience with product listings, order management, and responsive design for all devices.",
  image: "/images/babymom.png",
  tech: ["WordPress", "Plugins", "CSS"],
  features: [
    "Product catalog with categories and detailed listings",
    "Order tracking and management system",
    "Responsive design for mobile and desktop",
    "Easy content and product management via WordPress admin"
  ],
  tags: ["WordPress", "E-Commerce", "Shop"],
  liveUrl: "https://babymomfashion.com/", // replace if hosted
  githubUrl: "https://github.com/LakshmiKrishnaSanjay", 
  featured: false,
},
{
  id: "nextrip-global",
  title: "NexTrip Global",
  summary:
    "A travel business website designed to showcase travel services, custom packages, and itinerary planning with a clean and professional user experience.",
  image: "/images/nextrip-global.png",
  tech: ["WordPress", "PHP", "CSS"],
  features: [
    "Travel service pages and package presentation",
    "Responsive design for mobile and desktop",
    "Editable backend via WordPress admin",
    "Clean and user-friendly interface",
  ],
  tags: ["WordPress", "Travel Website", "CMS"],
  liveUrl: "https://nextripglobal.com",
  githubUrl: "https://github.com/LakshmiKrishnaSanjay",
  featured: false,
},
];

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
    tech: ["Next.js", "Node.js","React", "Supabase", "TypeScript", "MongoDB" , "APIs"],
  },
{
  title: "Web Developer",
  company: "AdsPro Web Services",
  location: "Remote (Kochi, India)",
  duration: "Jul 2025 — Dec 2025",
  type: "full-time",
  description:
    "Built and customized WordPress websites for clients, and developed React + Firebase web application for internal tools and small-scale projects.",
  achievements: [
    "Developed multiple WordPress websites with custom themes and plugin configurations",
    "Implemented responsive designs to ensure mobile and desktop compatibility",
    "Optimized website performance and SEO for client projects",
    "Built React + Firebase application with authentication, database, and real-time features",
    "Managed deployment, hosting setup, and Git-based version control for projects"
  ],
  tech: ["WordPress", "React", "Firebase", "HTML", "CSS", "JavaScript",  "Tailwind CSS"],
},
  {
    title: "MERN Stack Intern",
    company: "IROHUB INFOTECH",
    location: "Remote (Kochi, India)",
    duration: "Jan 2025 — Jun 2025",
    type: "internship",
    description:
      "Completed a full-stack internship focusing on building MERN applications, understanding deployment workflows, and implementing CRUD operations.",
    achievements: [
      "Developed full-stack projects using MongoDB, Express, React, and Node.js",
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


