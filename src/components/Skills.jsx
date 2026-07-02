import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Artificial Intelligence",
    color: "text-blue-600",
    accent: "bg-blue-50 border-blue-100",
    skills: [
      { name: "ChatGPT", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { name: "Gemini", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { name: "Claude", color: "bg-orange-50 text-orange-700 border-orange-200" },
      { name: "Perplexity AI", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
      { name: "Higgsfield AI", color: "bg-violet-50 text-violet-700 border-violet-200" },
      { name: "Runway ML", color: "bg-pink-50 text-pink-700 border-pink-200" },
      { name: "Prompt Engineering", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
      { name: "AI Content Creation", color: "bg-sky-50 text-sky-700 border-sky-200" },
      { name: "AI Research", color: "bg-teal-50 text-teal-700 border-teal-200" },
      { name: "AI Video Generation", color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
    ],
  },
  {
    label: "Digital Marketing",
    color: "text-indigo-600",
    accent: "bg-indigo-50 border-indigo-100",
    skills: [
      { name: "SEO", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { name: "Keyword Research", color: "bg-green-50 text-green-700 border-green-200" },
      { name: "Content Marketing", color: "bg-purple-50 text-purple-700 border-purple-200" },
      { name: "Content Strategy", color: "bg-violet-50 text-violet-700 border-violet-200" },
      { name: "Social Media Content", color: "bg-pink-50 text-pink-700 border-pink-200" },
      { name: "Marketing Automation", color: "bg-amber-50 text-amber-700 border-amber-200" },
      { name: "Google Analytics", color: "bg-orange-50 text-orange-700 border-orange-200" },
    ],
  },
  {
    label: "Creative Tools",
    color: "text-purple-600",
    accent: "bg-purple-50 border-purple-100",
    skills: [
      { name: "Canva", color: "bg-purple-50 text-purple-700 border-purple-200" },
      { name: "CapCut", color: "bg-gray-50 text-gray-700 border-gray-200" },
      { name: "Runway ML", color: "bg-pink-50 text-pink-700 border-pink-200" },
      { name: "Higgsfield AI", color: "bg-violet-50 text-violet-700 border-violet-200" },
      { name: "Figma (Basic)", color: "bg-rose-50 text-rose-700 border-rose-200" },
    ],
  },
  {
    label: "Technical",
    color: "text-cyan-600",
    accent: "bg-cyan-50 border-cyan-100",
    skills: [
      { name: "Python", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
      { name: "HTML", color: "bg-orange-50 text-orange-700 border-orange-200" },
      { name: "CSS", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { name: "JavaScript", color: "bg-amber-50 text-amber-700 border-amber-200" },
      { name: "React", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
      { name: "Node.js", color: "bg-green-50 text-green-700 border-green-200" },
      { name: "MongoDB", color: "bg-emerald-50 text-emerald-800 border-emerald-300" },
    ],
  },
];

const vp = { once: true, amount: 0.1 };

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50/50 to-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Skills</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            Tools of the <span className="text-gradient">Craft</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[420px] mx-auto">
            A curated stack spanning AI tools, marketing, creative tools, and technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ label, color, skills }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: gi * 0.09 }}
              className="bg-white rounded-2xl p-5 shadow-soft border border-border"
            >
              <div className={`font-grotesk text-[11.5px] font-bold uppercase tracking-[0.12em] mb-4 ${color}`}>
                {label}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, color: pillColor }, si) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.32, delay: gi * 0.09 + si * 0.04 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`px-3 py-1.5 rounded-full text-[12.5px] font-inter font-medium border cursor-default select-none transition-shadow hover:shadow-sm ${pillColor}`}
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
