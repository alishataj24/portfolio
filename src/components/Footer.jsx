import { motion } from "framer-motion";
import { ExternalLink, Mail, Link2, Download } from "lucide-react";

const navLinks = ["About", "Experience", "Education", "Projects", "Certifications", "Journey", "Contact"];

export default function Footer() {
  const scroll = (id) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Identity */}
          <div>
            <div className="font-grotesk font-bold text-[20px] text-ink mb-1">
              <span className="text-gradient">Shaik Roshan</span> Jameer
            </div>
            <div className="font-inter text-[12.5px] text-gray-400 mb-4">
              AI & Digital Marketing Professional
            </div>
            <p className="font-inter text-gray-400 text-[13px] leading-relaxed max-w-[240px]">
              Helping brands grow with AI, SEO, and modern marketing strategy.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-grotesk font-semibold text-ink text-[12px] uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scroll(l)}
                    className="font-inter text-[13px] text-gray-400 hover:text-ink transition-colors cursor-pointer"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-grotesk font-semibold text-ink text-[12px] uppercase tracking-wider mb-4">
              Connect
            </div>
            <div className="space-y-2.5">
              <a
                href="https://www.linkedin.com/in/shaik-roshan-jameer-971557322/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Link2 size={13} className="text-blue-600" />
                </div>
                <span className="font-inter text-[13px] text-gray-500 group-hover:text-ink transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:shaikroshan150@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-border flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <Mail size={13} className="text-gray-500" />
                </div>
                <span className="font-inter text-[13px] text-gray-500 group-hover:text-ink transition-colors">
                  shaikroshan150@gmail.com
                </span>
              </a>
              <a
                href="/Roshan_Resume.pdf"
                download
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Download size={13} className="text-primary" />
                </div>
                <span className="font-inter text-[13px] text-gray-500 group-hover:text-ink transition-colors">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-gray-300 text-[12.5px]">
            © 2026 Shaik Roshan Jameer · All rights reserved.
          </p>
          <p className="font-inter text-gray-300 text-[12px]">
            Built with React · Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
