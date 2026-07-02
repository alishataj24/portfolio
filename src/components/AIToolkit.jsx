import { motion } from "framer-motion";

const tools = [
  { name: "ChatGPT",    emoji: "💬", desc: "Daily content creation and brainstorming",          color: "bg-emerald-50 border-emerald-100 hover:border-emerald-300" },
  { name: "Claude",     emoji: "🟠", desc: "Long-form writing and research",                    color: "bg-orange-50 border-orange-100 hover:border-orange-300" },
  { name: "Gemini",     emoji: "✨", desc: "Research and idea generation",                      color: "bg-blue-50 border-blue-100 hover:border-blue-300" },
  { name: "Perplexity", emoji: "🔮", desc: "Research and competitor analysis",                  color: "bg-indigo-50 border-indigo-100 hover:border-indigo-300" },
  { name: "Runway",     emoji: "🎬", desc: "AI video editing",                                  color: "bg-pink-50 border-pink-100 hover:border-pink-300" },
  { name: "Higgsfield", emoji: "🎥", desc: "AI-generated cinematic videos",                     color: "bg-violet-50 border-violet-100 hover:border-violet-300" },
  { name: "Canva",      emoji: "🎨", desc: "Marketing creatives",                               color: "bg-purple-50 border-purple-100 hover:border-purple-300" },
  { name: "CapCut",     emoji: "✂️", desc: "Short-form video editing",                          color: "bg-gray-50 border-gray-200 hover:border-gray-300" },
];

const vp = { once: true, amount: 0.05 };

export default function AIToolkit() {
  return (
    <section id="toolkit" className="py-20 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Toolkit</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            My <span className="text-gradient">AI Toolkit</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[400px] mx-auto">
            Tools I use daily to research, create, optimize, and automate marketing workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.38, delay: i * 0.04 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`${tool.color} border rounded-2xl p-4 flex flex-col items-center text-center cursor-default shadow-soft hover:shadow-card transition-all duration-200`}
            >
              <div className="text-2xl mb-2">{tool.emoji}</div>
              <div className="font-grotesk font-bold text-ink text-[12px] mb-0.5 leading-tight">{tool.name}</div>
              <div className="font-inter text-gray-400 text-[10.5px] leading-tight">{tool.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
