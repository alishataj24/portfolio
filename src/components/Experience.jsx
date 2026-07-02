import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Senior AR Specialist",
    company: "AGS Health Care",
    location: "Bengaluru, India (Hybrid)",
    period: "Aug 2023 – Present",
    current: true,
    gradient: "from-blue-600 to-indigo-600",
    dot: "#2563EB",
    bullets: [
      "Managed end-to-end Accounts Receivable processes for US healthcare providers, ensuring timely claims resolution and payment recovery.",
      "Investigated denied and underpaid insurance claims — identifying root causes, coordinating with insurance representatives, and maximising reimbursements.",
      "Worked with PHI Phygen and multiple payer portals to resolve complex claim issues while maintaining full compliance with healthcare regulations.",
      "Collaborated across internal teams to improve claim turnaround time, documentation quality, and overall operational efficiency.",
      "Mentored junior team members on denial management, claims follow-up, and revenue cycle best practices.",
    ],
    tags: ["Claims Resolution", "Denial Management", "Revenue Cycle", "PHI Phygen", "Cross-team Communication", "Documentation"],
    bridge: "This role built the analytical thinking, structured communication, and process optimisation skills I now apply to learning AI and digital marketing.",
  },
  {
    title: "AR Specialist",
    company: "Elico LTD",
    location: "Hyderabad, India",
    period: "Dec 2020 – Mar 2022",
    current: false,
    gradient: "from-slate-500 to-gray-600",
    dot: "#64748B",
    bullets: [
      "Managed insurance claim follow-ups and payment collections for Medicare and Medicaid accounts.",
      "Resolved denied and pending claims through detailed account analysis and effective communication with insurance providers.",
      "Maintained accurate documentation and ensured compliance with revenue cycle management processes.",
      "Contributed to improving collection performance through proactive follow-ups and timely issue resolution.",
    ],
    tags: ["Medicare", "Medicaid", "Insurance Claims", "Revenue Cycle", "Documentation"],
    bridge: null,
  },
];

const vp = { once: true, amount: 0.08 };

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Career</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[460px] mx-auto">
            A foundation built in US healthcare revenue cycle operations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-20"
              >
                <div
                  className="absolute left-[27px] top-5 w-[18px] h-[18px] rounded-full border-2 border-white shadow-md hidden sm:flex items-center justify-center"
                  style={{ background: role.dot }}
                >
                  {role.current && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </div>

                <div className="bg-white rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow duration-300 overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${role.gradient} px-6 py-5`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-grotesk font-bold text-white text-[19px] leading-tight mb-1">{role.title}</h3>
                        <div className="flex items-center gap-1.5 text-white/80">
                          <Briefcase size={12} />
                          <span className="font-inter text-[13px] font-medium">{role.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        {role.current && (
                          <span className="px-2.5 py-0.5 bg-white/20 border border-white/30 rounded-full font-inter text-[10.5px] font-semibold text-white">
                            Current Role
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-white/70">
                          <Calendar size={11} />
                          <span className="font-inter text-[12px]">{role.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/70">
                          <MapPin size={11} />
                          <span className="font-inter text-[12px]">{role.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-5">
                    <ul className="space-y-2.5 mb-5">
                      {role.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={vp}
                          transition={{ duration: 0.35, delay: i * 0.1 + j * 0.05 }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[7px]" />
                          <span className="font-inter text-gray-500 text-[13.5px] leading-relaxed">{b}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {role.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-border rounded-full font-inter text-[11.5px] font-medium text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {role.bridge && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.45, delay: 0.25 }}
                        className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4"
                      >
                        <ArrowRight size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        <p className="font-inter text-[13px] text-blue-700 leading-relaxed">{role.bridge}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
