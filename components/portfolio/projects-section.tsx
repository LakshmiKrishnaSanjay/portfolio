"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { PROJECTS } from "@/lib/data"

interface ProjectCardProps {
  title: string
  summary: string
  image: string
  tech: string[]
  features: string[]
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  index: number
}

function ProjectCard({
  title,
  summary,
  image,
  tech,
  features,
  tags,
  liveUrl,
  githubUrl,
  featured,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />
        {featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 px-2 py-0.5">
            <Star className="h-3 w-3 text-primary fill-primary" />
            <span className="font-mono text-xs text-primary">Featured</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-mono bg-secondary/50 text-muted-foreground border-border/40 px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
          {summary}
        </p>

        {/* Key features */}
        <ul className="mt-4 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2">
          <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs gap-1.5">
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1 border-border/50 hover:bg-secondary text-xs gap-1.5">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of real-world projects — from SaaS platforms to developer tools and open-source libraries. Each one represents a different challenge and set of technical decisions."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
