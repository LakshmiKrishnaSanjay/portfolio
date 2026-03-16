"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Download, FileText, Briefcase, Code2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="My background at a glance"
          description="A full-stack engineer with 7+ years of experience across product companies, agencies, and freelance work. Download my resume for the complete picture."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Download card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col rounded-2xl border border-primary/30 bg-card p-6 glow-accent"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl text-foreground">Lakshmi Krishna Sanjay</h3>
            <p className="text-sm text-muted-foreground mt-1">Full Stack Developer</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
              7+ years building web applications across the full stack. Specialized in React, Next.js,
              Node.js, and cloud-native architectures. Available for senior roles and high-impact freelance work.
            </p>
            <div className="mt-6 space-y-2">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-semibold">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="h-4 w-4" />
                  Download Resume (PDF)
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full border-border/50 hover:bg-secondary gap-2 text-xs">
                <Link href="#contact">
                  Get in touch instead
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Briefcase,
                title: "Work Experience",
                items: [
                  "Senior Full Stack Engineer @ Stripe (2023–Present)",
                  "Full Stack Developer @ Linear (2021–2022)",
                  "Frontend Engineer @ Vercel (2019–2021)",
                  "Freelance Web Developer (2017–2019)",
                ],
              },
              {
                icon: Code2,
                title: "Core Skills",
                items: [
                  "React, Next.js, TypeScript — Expert level",
                  "Node.js, Express, tRPC — Expert level",
                  "PostgreSQL, Supabase, Prisma — Advanced",
                  "System design, API architecture, CI/CD",
                ],
              },
              {
                icon: GraduationCap,
                title: "Education & Certifications",
                items: [
                  "B.Sc. Computer Science — University of California, Berkeley",
                  "AWS Certified Solutions Architect — Associate",
                  "Google Cloud Professional — Cloud Architect",
                ],
              },
            ].map((section, i) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-border/50 bg-card p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
