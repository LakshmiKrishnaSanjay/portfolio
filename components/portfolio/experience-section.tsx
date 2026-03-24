"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { EXPERIENCE } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="My professional experience building web applications and working with development teams."
        />

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 h-4 w-4 rounded-full border-2 border-primary bg-background hidden sm:block -translate-x-1/2" />

                <div className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                          <Briefcase className="h-3.5 w-3.5" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        {job.duration}
                      </div>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs capitalize",
                          job.type === "freelance" && "text-chart-4 bg-chart-4/10 border-chart-4/20"
                        )}
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
