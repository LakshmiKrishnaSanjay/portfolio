"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const TECH_BADGES = [
  "React", "Next.js","JavaScript", "TypeScript", "Node.js","MongoDB", "Supabase","Firebase",
]

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/LakshmiKrishnaSanjay", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lakshmiksanjay/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lakshmiksanajay@gmail.com", label: "Email" },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}<br></br>
            <span className="text-gradient">Lakshmi Krishna Sanjay</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            Junior Backend Developer | Full Stack Developer (Early Career) &mdash; I build{" "}
            <span className="text-foreground font-semibold">scalable backend systems, APIs, and deploy real-world applications</span>{" "}
            using modern web technologies.
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground text-pretty"
          >
            Web Developer with 1+ year of experience developing web applications using Next.js, React, TypeScript, MongoDB and Supabase. 
            Passionate about building scalable applications, improving developer experience, and creating clean, efficient code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
              <Link href="#projects">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-border/60 hover:bg-secondary">
              <Link href="/resume.pdf" target="_blank">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="gap-2 hover:bg-secondary">
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center h-10 w-10 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <span className="h-px w-8 bg-border" />
            <span className="font-mono text-xs text-muted-foreground">lakshmiksanjay@gmail.com</span>
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-2">
            {TECH_BADGES.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono text-xs py-1 px-3 bg-secondary border border-border/50 text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
