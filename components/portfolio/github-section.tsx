"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { GITHUB_STATS, REPOS } from "@/lib/data"

export function GithubSection() {
  return (
    <section id="github" className="py-24 sm:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source &amp; coding activity"
          description="I believe in building in public. Here's a snapshot of my GitHub activity, contribution patterns, and highlighted open-source work."
        />

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GITHUB_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border/50 bg-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution grid placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 rounded-2xl border border-border/50 bg-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Github className="h-4 w-4 text-primary" />
              Contribution activity — 2024
            </div>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              View on GitHub <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Simulated contribution grid */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {Array.from({ length: 52 }).map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const intensity = Math.random()
                  return (
                    <div
                      key={dayIdx}
                      className="h-3 w-3 rounded-sm"
                      style={{
                        backgroundColor:
                          intensity > 0.85
                            ? "oklch(0.75 0.14 195 / 1)"
                            : intensity > 0.65
                            ? "oklch(0.75 0.14 195 / 0.6)"
                            : intensity > 0.4
                            ? "oklch(0.75 0.14 195 / 0.3)"
                            : intensity > 0.2
                            ? "oklch(0.75 0.14 195 / 0.12)"
                            : "oklch(0.22 0.008 240 / 1)",
                      }}
                      aria-hidden="true"
                    />
                  )
                })}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            {[0.12, 0.3, 0.6, 1].map((op) => (
              <div
                key={op}
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: `oklch(0.75 0.14 195 / ${op})` }}
                aria-hidden="true"
              />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Pinned repos */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border/50 bg-card p-5 h-full hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">{repo.description}</p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
