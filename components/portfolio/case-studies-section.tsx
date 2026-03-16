// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronDown, CheckCircle2 } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { SectionHeading } from "@/components/portfolio/section-heading"
// import { CASE_STUDIES } from "@/lib/data"

// export function CaseStudiesSection() {
//   const [expanded, setExpanded] = useState<string | null>(CASE_STUDIES[0]?.id ?? null)

//   return (
//     <section id="case-studies" className="py-24 sm:py-32 bg-secondary/20">
//       <div className="mx-auto max-w-5xl px-6">
//         <SectionHeading
//           eyebrow="Case Studies"
//           title="How I approach problems"
//           description="Deep dives into selected projects — covering the problem, my role, the architecture, challenges faced, and outcomes delivered."
//         />

//         <div className="mt-14 space-y-4">
//           {CASE_STUDIES.map((cs) => (
//             <motion.div
//               key={cs.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="rounded-2xl border border-border/50 bg-card overflow-hidden"
//             >
//               {/* Header */}
//               <button
//                 className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
//                 onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
//                 aria-expanded={expanded === cs.id}
//               >
//                 <h3 className="font-bold text-lg text-foreground">{cs.title}</h3>
//                 <motion.div
//                   animate={{ rotate: expanded === cs.id ? 180 : 0 }}
//                   transition={{ duration: 0.25 }}
//                 >
//                   <ChevronDown className="h-5 w-5 text-muted-foreground" />
//                 </motion.div>
//               </button>

//               <AnimatePresence initial={false}>
//                 {expanded === cs.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.35, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="border-t border-border/40 px-6 pb-8 pt-6 space-y-8">
//                       {/* Overview */}
//                       <div>
//                         <h4 className="mb-2 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Overview</h4>
//                         <p className="text-sm leading-relaxed text-muted-foreground">{cs.overview}</p>
//                       </div>

//                       <div className="grid gap-8 sm:grid-cols-2">
//                         {/* Problem */}
//                         <div>
//                           <h4 className="mb-2 font-semibold text-sm text-primary uppercase tracking-wider font-mono">The Problem</h4>
//                           <p className="text-sm leading-relaxed text-muted-foreground">{cs.problem}</p>
//                         </div>

//                         {/* Role */}
//                         <div>
//                           <h4 className="mb-2 font-semibold text-sm text-primary uppercase tracking-wider font-mono">My Role</h4>
//                           <p className="text-sm leading-relaxed text-muted-foreground">{cs.role}</p>
//                         </div>
//                       </div>

//                       {/* Goals */}
//                       <div>
//                         <h4 className="mb-3 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Goals</h4>
//                         <ul className="space-y-2">
//                           {cs.goals.map((g) => (
//                             <li key={g} className="flex items-start gap-2.5 text-sm text-muted-foreground">
//                               <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
//                               {g}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="grid gap-8 sm:grid-cols-2">
//                         {/* Challenges */}
//                         <div>
//                           <h4 className="mb-3 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Challenges</h4>
//                           <ul className="space-y-2">
//                             {cs.challenges.map((c) => (
//                               <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
//                                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
//                                 {c}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         {/* Solutions */}
//                         <div>
//                           <h4 className="mb-3 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Solutions</h4>
//                           <ul className="space-y-2">
//                             {cs.solutions.map((s) => (
//                               <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
//                                 <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
//                                 {s}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>

//                       {/* Outcome */}
//                       <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
//                         <h4 className="mb-2 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Outcome</h4>
//                         <p className="text-sm leading-relaxed text-muted-foreground">{cs.outcome}</p>
//                       </div>

//                       {/* Tech */}
//                       <div>
//                         <h4 className="mb-3 font-semibold text-sm text-primary uppercase tracking-wider font-mono">Tech Stack</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {cs.tech.map((t) => (
//                             <Badge key={t} variant="secondary" className="font-mono text-xs border-border/50">
//                               {t}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
