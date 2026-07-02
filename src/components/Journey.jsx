import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const milestones = [
  {
    phase: "Professional Experience",
    period: "2020 – Present",
    desc: "Worked as an AR Specialist in US healthcare — managing complex insurance claims, resolving denials, and improving revenue cycle processes. Built strong foundations in analytical thinking, documentation, communication, and process optimisation.",
    tags: ["Revenue Cycle Management", "Denial Management", "Claims Analysis", "Team Communication"],
    color: "from-slate-500 to-gray-600",
    dot: "#64748B",
  },
  {
    phase: "Technology",
    period: "2023 – 2024",
    desc: "Started learning Python to automate manual tasks. Then expanded into full-stack web development — React, Node.js, JavaScript, and MongoDB. Realised that technology could scale solutions far beyond what manual processes allow.",
    tags: ["Python", "JavaScript", "React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-blue-600",
    dot: "#2563EB",
  },
  {
    phase: "Artificial Intelligence",
    period: "2024 – 2025",
    desc: "Began deeply exploring AI tools — ChatGPT, Claude, Gemini, Perplexity, Runway, and Higgsfield. Learned prompt engineering, AI content creation, and how to build workflows that leverage generative AI for real marketing tasks.",
    tags: ["ChatGPT", "Claude", "Gemini", "Prompt Engineering", "AI Workflows", "Runway ML"],
    color: "from-violet-500 to-purple-600",
    dot: "#7C3AED",
  },
  {
    phase: "Digital Marketing",
    period: "2025",
    desc: "Started earning certifications in digital marketing — Google Digital Marketing & E-commerce, AI Business School (Coursera), Google AI Essentials, and Google Prompting Essentials. Learning SEO, content strategy, and how AI enhances modern marketing.",
    tags: ["SEO", "Content Strategy", "Google Certifications", "AI Business School", "Analytics"],
    color: "from-cyan-500 to-blue-500",
    dot: "#0891B2",
  },
  {
    phase: "Building AI Products",
    period: "2026 – Now",
    desc: "Actively building practical AI-powered tools — ContentPilot AI (an AI marketing content studio) and SEOInsight AI (an AI SEO assistant). Moving from learning to making.",
    tags: ["ContentPilot AI", "SEOInsight AI", "React", "OpenAI API", "Gemini API"],
    color: "from-blue-600 to-indigo-600",
    dot: "#2563EB",
    current: true,
  },
  {
    phase: "Continuous Learning",
    period: "Ongoing →",
    desc: "The goal is never to stop learning. Each skill, project, and certification compounds into the next. AI Marketing is not a destination — it's a practice.",
    tags: ["Growth Mindset", "AI Marketing", "Building in Public", "Always Improving"],
    color: "from-indigo-500 to-violet-600",
    dot: "#4F46E5",
    isGoal: true,
  },
];

const vp = { once: true, amount: 0.08 };

export default function Journey() {
  return (
    <section id="journey" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <div className="section-label mb-3">Journey</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-border shadow-soft p-6 mb-10 text-center max-w-xl mx-auto"
        >
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed">
            Learning is not a phase — it's a constant.{" "}
            <span className="text-ink font-medium">
              Every skill, project, and certification compounds into the next.
            </span>
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block" />

          <div className="space-y-5">
            {milestones.map((item, i) => (
              <div key={item.phase}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative sm:pl-20"
                >
                  <div
                    className="absolute left-[27px] top-3 w-[18px] h-[18px] rounded-full border-2 border-white shadow-md hidden sm:flex items-center justify-center"
                    style={{ background: item.dot }}
                  >
                    {item.current && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </div>

                  <div className={`bg-white rounded-2xl border shadow-soft hover:shadow-card transition-shadow duration-300 overflow-hidden ${item.isGoal ? "border-indigo-200" : "border-border"}`}>
                    <div className={`bg-gradient-to-r ${item.color} px-5 py-2.5 flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <span className="font-grotesk font-bold text-white text-[14.5px]">{item.phase}</span>
                        <span className="font-inter text-white/65 text-[11px]">{item.period}</span>
                      </div>
                      {item.current && (
                        <span className="px-2.5 py-0.5 bg-white/20 border border-white/30 rounded-full font-inter text-[10.5px] font-semibold text-white">
                          Now
                        </span>
                      )}
                      {item.isGoal && (
                        <span className="px-2.5 py-0.5 bg-white/20 border border-white/30 rounded-full font-inter text-[10.5px] font-semibold text-white">
                          Always
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="font-inter text-gray-500 text-[13.5px] leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-border rounded-full font-inter text-[11.5px] font-medium text-gray-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {i < milestones.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.3, delay: i * 0.07 + 0.18 }}
                    className="flex justify-center sm:justify-start sm:pl-[26px] py-0.5"
                  >
                    <ArrowDown size={14} className="text-border" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
