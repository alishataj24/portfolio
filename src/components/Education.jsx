import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const degrees = [
  {
    institution: "SV University",
    degree: "Master of Computer Applications",
    short: "MCA",
    period: "2021 – 2023",
    cgpa: "8.0",
    desc: "Built a strong foundation in software development, databases, programming, and web technologies.",
    focus: ["Software Development", "Database Management", "Programming", "Web Technologies"],
    gradient: "from-blue-600 to-indigo-600",
    dot: "#2563EB",
  },
  {
    institution: "Sri Venkateshwara University",
    degree: "Bachelor of Science in Computer Science",
    short: "B.Sc CS",
    period: "2018 – 2020",
    cgpa: "7.5",
    desc: "Developed core knowledge in computer science fundamentals, programming, algorithms, and software engineering.",
    focus: ["Computer Fundamentals", "Programming", "Algorithms", "Software Engineering"],
    gradient: "from-violet-500 to-purple-600",
    dot: "#7C3AED",
  },
];

const vp = { once: true, amount: 0.1 };

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-4"
        >
          <div className="section-label mb-3">Academic</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            Education
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-inter text-gray-400 text-[15px] text-center max-w-[480px] mx-auto mb-12"
        >
          A strong academic foundation in computer science combined with continuous learning in Artificial Intelligence and Digital Marketing.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {degrees.map(({ institution, degree, short, period, cgpa, desc, focus, gradient }, i) => (
            <motion.div
              key={institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${gradient} px-6 py-6`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center mb-3">
                      <GraduationCap size={18} className="text-white" />
                    </div>
                    <h3 className="font-grotesk font-bold text-white text-[20px] leading-tight mb-1">
                      {institution}
                    </h3>
                    <p className="font-inter text-white/75 text-[13px]">{degree}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="font-grotesk font-bold text-white/90 text-[22px] leading-none">{short}</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {/* Meta row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Calendar size={13} />
                    <span className="font-inter text-[12.5px]">{period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award size={13} className="text-primary" />
                    <span className="font-inter text-[12.5px] font-semibold text-ink">CGPA {cgpa}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-gray-500 text-[13.5px] leading-relaxed mb-4">{desc}</p>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-1.5">
                  {focus.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 bg-gray-50 border border-border rounded-full font-inter text-[11.5px] font-medium text-gray-500"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow divider */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-2 mt-14 text-gray-300"
        >
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
          <div className="flex items-center gap-6 text-[11px] font-inter font-medium text-gray-400 uppercase tracking-widest">
            <span>Education</span>
            <span>·</span>
            <span className="text-primary">Learning & Certifications</span>
            <span>·</span>
            <span>Projects</span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-border" />
        </motion.div>

      </div>
    </section>
  );
}
