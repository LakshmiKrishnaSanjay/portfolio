"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Database, Wrench, Cloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SKILLS } from "@/lib/data"

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Wrench,
  Cloud,
}

interface SkillCategoryProps {
  category: string
  icon: string
  skills: string[]
  index: number
}

function SkillCategory({ category, icon, skills, index }: SkillCategoryProps) {
  const Icon = ICON_MAP[icon] ?? Monitor
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="group rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-foreground">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="font-mono text-xs bg-secondary/70 border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A curated look at the tools, frameworks, and platforms I use to build modern, production-grade web applications from front to back."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <SkillCategory key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
