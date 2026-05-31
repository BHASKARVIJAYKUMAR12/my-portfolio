"use client";

import { experiences, education, certifications } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            My professional journey and growth as a developer
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline - Work Experience */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-card-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background" />

                  <div className="bg-card rounded-2xl border border-card-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-primary/5 text-primary text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-2xl border border-card-border p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={22} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">Education</h3>
              </div>
              {education.map((edu) => (
                <div key={edu.degree} className="mb-4 last:mb-0">
                  <h4 className="font-semibold text-foreground text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-primary text-sm">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-muted mt-1">
                    <span>{edu.duration}</span>
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-2xl border border-card-border p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={22} className="text-accent" />
                <h3 className="text-lg font-bold text-foreground">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Briefcase
                      size={14}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
