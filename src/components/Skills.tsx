"use client";

import { skills } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import { useRef, useState } from "react";

type SkillCategory = "frontend" | "backend" | "tools";

const categoryConfig: Record<
  SkillCategory,
  { label: string; icon: React.ReactNode; color: string }
> = {
  frontend: {
    label: "Frontend",
    icon: <Monitor size={20} />,
    color: "bg-primary",
  },
  backend: {
    label: "Backend",
    icon: <Server size={20} />,
    color: "bg-accent",
  },
  tools: {
    label: "Tools & DevOps",
    icon: <Wrench size={20} />,
    color: "bg-secondary",
  },
};

function SkillBar({
  name,
  level,
  color,
  delay,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-2 bg-card-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<SkillCategory>("frontend");

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(Object.keys(categoryConfig) as SkillCategory[]).map((key) => {
            const cfg = categoryConfig[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === key
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-card border border-card-border text-muted hover:text-primary hover:border-primary"
                }`}
              >
                {cfg.icon}
                {cfg.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-card-border p-6 sm:p-8">
            {skills[activeTab].map((skill, index) => (
              <SkillBar
                key={`${activeTab}-${skill.name}`}
                name={skill.name}
                level={skill.level}
                color={categoryConfig[activeTab].color}
                delay={index * 0.1}
                animate={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
