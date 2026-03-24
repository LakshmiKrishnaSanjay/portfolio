"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/portfolio/section-heading"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "lakshmiksanjay@gmail.com",
    href: "mailto:lakshmiksanjay@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/LakshmiKrishnaSanjay",
    href: "https://github.com/LakshmiKrishnaSanjay",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/lakshmiksanjay",
    href: "https://www.linkedin.com/in/lakshmiksanjay",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai (Remote OK)",
    href: null,
  },
]

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitError("")

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitted(true)
      reset()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6 border-border/50"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Your Name
          </label>
          <Input
            id="name"
            placeholder="Name"
            {...register("name")}
            className="border-border/50 bg-secondary focus:border-primary/60"
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
            className="border-border/50 bg-secondary focus:border-primary/60"
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Share the job role, interview details, or your message here..."
          {...register("message")}
          className="h-60 resize-none border-border/50 bg-secondary focus:border-primary/60"
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && <p className="text-sm text-destructive">{submitError}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
        title="Open to opportunities"
        description="I’m currently exploring new opportunities. If you’re hiring or would like to discuss an interview, I’d be happy to connect."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/50 bg-card p-7 lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 lg:col-span-2"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <p className="text-sm font-semibold text-foreground">Currently available</p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                I&apos;m open to suitable opportunities in software development. If your team is hiring or would like to arrange an interview, I&apos;d be pleased to connect.

              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}