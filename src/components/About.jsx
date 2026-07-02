import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Settings, Lightbulb } from "lucide-react";

const strengths = [
  {
    icon: BarChart3,
    title: "Analytical Thinking",
    desc: "Years of reviewing complex insurance claims trained me to spot patterns, identify root causes, and think systematically.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Regular coordination with insurance providers and internal teams built strong written and verbal communication skills.",
  },
  {
    icon: Settings,
    title: "Process Optimisation",
    desc: "Streamlining claim workflows gave me a deep appreciation for removing friction and improving operational efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Denied claims don't resolve themselves — I learned to investigate, adapt, and find solutions under pressure.",
  },
];

const vp = { once: true, amount: 0.1 };

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/25 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55 }}
              className="section-label mb-3"
            >
              About
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-tight text-ink mb-7"
            >
              From Healthcare
              <br />
              Operations to{" "}
              <span className="text-gradient">AI Marketing.</span>
            </motion.h2>

            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-inter text-[15px] leading-relaxed text-gray-500"
              >
                I enjoy solving real-world problems through technology and continuous learning. My professional experience taught me analytical thinking, communication, and process optimization, while my growing interest in Artificial Intelligence and Digital Marketing has inspired me to build modern marketing solutions, explore AI-powered workflows, and continuously expand my technical skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.19 }}
                className="font-inter text-[15px] leading-relaxed text-gray-500"
              >
                Over the past few years I have learned Python, web development with React and Node.js, and dived deep into AI tools — earning certifications from Google, Microsoft, and leading AI institutions along the way.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="font-inter text-[15px] leading-relaxed text-ink font-semibold border-l-2 border-primary pl-4"
              >
                I'm someone who builds, learns, and grows continuously — not someone pretending to have arrived.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-grotesk text-white font-bold text-[17px]">R</span>
              </div>
              <div>
                <div className="font-grotesk font-bold text-ink text-[14.5px]">Shaik Roshan Jameer</div>
                <div className="font-inter text-gray-400 text-[12.5px]">AI & Digital Marketing Professional</div>
              </div>
            </motion.div>
          </div>

          {/* Right — strengths from AR background */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-inter text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-4"
            >
              Skills built from 4 years of real work
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="bg-white rounded-2xl p-5 shadow-soft border border-border card-hover group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-grotesk font-semibold text-ink text-[14px] mb-1.5">{title}</h3>
                  <p className="font-inter text-gray-400 text-[12.5px] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
