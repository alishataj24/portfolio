import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, X, ExternalLink, Calendar, Building2 } from "lucide-react";

const certs = [
  {
    title: "AI for Marketing Specialization",
    provider: "AI Business School × Coursera",
    providerShort: "ABS",
    subtitle: "3 Courses · AI Strategy, Prompting & AI Agents",
    status: "Completed",
    date: "Jun 27, 2026",
    color: "from-blue-600 to-indigo-600",
    providerColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "🤖",
    description: "Completed the full AI for Marketing specialization by AI Business School × Coursera — 3 courses covering AI fundamentals for marketers, practical AI and prompting, and AI agents and creator tools for marketing professionals.",
    skills: ["Prompt Engineering", "AI Content Workflows", "AI Agents", "Marketing AI Strategy", "Generative AI", "No-Code AI Apps"],
    hasLink: true,
  },
  {
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    provider: "Google",
    providerShort: "G",
    subtitle: "Digital Marketing & E-commerce",
    status: "Completed",
    date: "2026",
    color: "from-red-500 to-orange-500",
    providerColor: "bg-red-50 text-red-700 border-red-200",
    icon: "🎯",
    description: "Google's professional certificate covering all aspects of digital marketing and e-commerce, including SEO, SEM, email marketing, social media, and analytics.",
    skills: ["SEO", "Google Ads", "E-commerce", "Analytics", "Social Media"],
    hasLink: false,
  },
  {
    title: "Google AI Essentials",
    provider: "Google",
    providerShort: "G",
    subtitle: "Foundations of AI",
    status: "Completed",
    date: "2026",
    color: "from-green-500 to-teal-500",
    providerColor: "bg-green-50 text-green-700 border-green-200",
    icon: "✨",
    description: "Google's foundational course on Artificial Intelligence — covering key AI concepts, machine learning basics, and practical applications in the workplace.",
    skills: ["AI Fundamentals", "Machine Learning Basics", "AI Tools", "Responsible AI"],
    hasLink: false,
  },
  {
    title: "Google Prompting Essentials",
    provider: "Google",
    providerShort: "G",
    subtitle: "Effective AI Prompting",
    status: "Completed",
    date: "2026",
    color: "from-violet-600 to-purple-600",
    providerColor: "bg-violet-50 text-violet-700 border-violet-200",
    icon: "⚡",
    description: "Google's course on effective prompting techniques — how to craft clear, structured prompts that get better results from AI tools across writing, research, and creative tasks.",
    skills: ["Prompt Design", "AI Communication", "Structured Prompting", "AI Productivity"],
    hasLink: false,
  },
];

const CertModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 16 }}
      transition={{ duration: 0.26 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
    >
      <div className={`bg-gradient-to-br ${cert.color} p-7 relative`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <X size={14} />
        </button>
        <div className="text-4xl mb-3">{cert.icon}</div>
        <div className="font-inter text-[10px] font-semibold text-white/70 uppercase tracking-widest mb-1">{cert.provider}</div>
        <h3 className="font-grotesk text-[19px] font-bold text-white leading-snug">{cert.title}</h3>
        <p className="font-inter text-white/75 text-[12.5px] mt-1.5">{cert.subtitle}</p>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex items-center gap-2">
            <Building2 size={13} className="text-gray-400" />
            <span className="font-inter text-[13px] text-gray-600 font-medium">{cert.provider}</span>
          </div>
          {cert.date && (
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-gray-400" />
              <span className="font-inter text-[13px] text-gray-600">{cert.date}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 ml-auto">
            {cert.status === "Completed"
              ? <CheckCircle2 size={13} className="text-green-500" />
              : <Clock size={13} className="text-amber-500" />
            }
            <span className={`font-inter text-[12px] font-semibold ${cert.status === "Completed" ? "text-green-600" : "text-amber-600"}`}>
              {cert.status}
            </span>
          </div>
        </div>

        <p className="font-inter text-gray-500 text-[13.5px] leading-relaxed">{cert.description}</p>

        <div>
          <div className="font-grotesk font-semibold text-ink text-[12px] uppercase tracking-wide mb-2.5">Skills Covered</div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((s) => (
              <span key={s} className={`px-2.5 py-1 rounded-full font-inter text-[11.5px] font-medium border ${cert.providerColor}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {cert.hasLink && (
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-50 border border-border font-inter font-semibold text-[13px] text-gray-600 hover:text-primary hover:border-primary transition-colors duration-200"
          >
            <ExternalLink size={13} />
            View Certificate
          </button>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const vp = { once: true, amount: 0.05 };

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-slate-50/50 to-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Credentials</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            Learning <span className="text-gradient">Never Stops.</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[500px] mx-auto">
            Every certification represents another step in my journey of learning AI, Digital Marketing, and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onClick={() => setSelected(cert)}
              className="group bg-white rounded-2xl p-5 shadow-soft border border-border hover:shadow-card hover:border-gray-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Top color bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color}`} />

              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-inter text-[10.5px] font-semibold ${cert.status === "Completed" ? "bg-green-50 text-green-700 border-green-200" : "bg-amber-50 text-amber-700 border-amber-200"}`}>
                  {cert.status === "Completed"
                    ? <CheckCircle2 size={10} />
                    : <Clock size={10} />
                  }
                  {cert.status}
                </div>
              </div>

              <h3 className="font-grotesk font-bold text-ink text-[13.5px] leading-snug mb-1.5">{cert.title}</h3>
              <div className="font-inter text-gray-400 text-[11.5px] mb-1">{cert.provider}</div>
              {cert.date && (
                <div className="font-inter text-gray-300 text-[11px]">{cert.date}</div>
              )}

              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
