"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, Server, Coffee } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "UI Components Built", value: "15+" },
    { label: "Cost Reduction", value: "80%" },
    { label: "Test Coverage", value: "90%+" },
  ];

  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-relaxed mb-6">
              {personalInfo.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Code2 size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Frontend Development
                  </h3>
                  <p className="text-sm text-muted">
                    Building config-driven, reusable UI components with React,
                    TypeScript, and Material UI. 15+ components powering
                    enterprise workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Server size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Backend Development
                  </h3>
                  <p className="text-sm text-muted">
                    Designing robust APIs and services with ASP.NET Web API, C#,
                    and FastAPI. Task Manager & Rule Engine automation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg mt-1">
                  <Coffee size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Cloud & DevOps
                  </h3>
                  <p className="text-sm text-muted">
                    Docker, Kubernetes (GKE), GCP, Azure, and CI/CD pipelines.
                    Reduced cloud costs by 80% through automated scheduling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-card-border text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-card-border">
              <h3 className="font-semibold text-foreground mb-4">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Location</span>
                  <span className="text-foreground">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Email</span>
                  <span className="text-foreground">{personalInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Availability</span>
                  <span className="text-green-500 font-medium">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
