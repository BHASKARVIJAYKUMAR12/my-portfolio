"use client";

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold gradient-text">
              &lt;{personalInfo.name.split(" ")[0]} /&gt;
            </a>
            <p className="text-sm text-muted mt-2">
              Full Stack Developer building scalable enterprise applications
              with React, TypeScript & .NET
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>

          {/* Social */}
          <div className="flex justify-end gap-3">
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border text-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted text-center">
            &copy; {currentYear} {personalInfo.name}. Built with{" "}
            <Heart size={14} className="inline text-red-500 fill-red-500" />{" "}
            using Next.js & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-card-border text-muted hover:text-primary hover:border-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
