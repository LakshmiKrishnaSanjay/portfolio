"use client"

import { motion } from "framer-motion"
import { Code2, Layers, Lightbulb, Users } from "lucide-react"
import { SectionHeading } from "@/components/portfolio/section-heading"
import Image from "next/image"

const STATS = [
  // { label: "Years Experience", value: "1+" },
  // { label: "Projects Shipped", value: "10+" },
  // { label: "Happy Clients", value: "30+" },
  // { label: "GitHub Stars", value: "2.4k" },
]

const VALUES = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I focus on writing code that is readable, maintainable, and scalable. Good structure and clarity make software easier to evolve.",
  },
  {
    icon: Layers,
    title: "Full-Stack Thinking",
    description:
      "I enjoy working across the stack, from database design to user interface, ensuring everything works together efficiently.",
  },
  {
    icon: Lightbulb,
    title: "Product Mindset",
    description:
      "I think beyond features. Understanding the problem and building solutions that create real user value is always my priority.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great products are built by teams. I value clear communication, constructive code reviews, and collaborative problem solving.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Building and deploying real-world web applications"
              align="left"
            />

<div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground text-justify">
  <p>
    I’m a full stack developer with hands-on experience building and deploying real-world web
    applications. I’ve worked with technologies like{" "}
    <span className="text-foreground font-medium">React</span>,{" "}
    <span className="text-foreground font-medium">Next.js</span>,{" "}
    <span className="text-foreground font-medium">Supabase</span>,{" "}
    <span className="text-foreground font-medium">Firebase</span>, and{" "}
    <span className="text-foreground font-medium">MongoDB</span> to develop applications that handle
    authentication, data management, and user workflows.
  </p>

  <p>
    Recently, I worked on a multi-stakeholder safety management system where I contributed to backend
    development, including API logic, authentication, and workflow handling. This experience helped me
    understand how real-world systems operate beyond basic CRUD applications. 
  </p>

  <p>
    I also have experience deploying applications using platforms like{" "}
    <span className="text-foreground font-medium">Vercel</span> and{" "}
    <span className="text-foreground font-medium">Firebase</span>, and I’m currently learning cloud
    technologies like <span className="text-foreground font-medium">AWS</span> to improve my deployment
    and scalability skills.
  </p>

  <p>
    I enjoy building clean, functional applications and continuously improving my skills as a developer
    by working on real-world projects.
  </p>
</div>

            {/* Stats */}
            {/* <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-border/50 bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Values cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {VALUES.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}

            {/* Profile image placeholder */}
{/* <div className="sm:col-span-2 rounded-2xl border border-border/50 overflow-hidden aspect-video bg-secondary flex items-center justify-center">
  <Image
    src="/lakshmi_.jpeg"
    alt="Lakshmi profile photo"
    width={500}
    height={500}
    className="object-cover w-full h-full"
  />
</div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
