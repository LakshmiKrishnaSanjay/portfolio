"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Code2 } from "lucide-react"
import { NAV_LINKS } from "@/lib/data"

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex@devhq.io", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Code2 className="h-4 w-4 text-primary" />
            <span>Lakshmi</span>
            <span className="text-primary">_</span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lakshmi Krishna Sanjay. Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Tailwind CSS</span>, and{" "}
            <span className="text-primary">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
