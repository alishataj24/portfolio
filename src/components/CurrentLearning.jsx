import { motion } from "framer-motion";

const items = [
  {
    emoji: "🤖",
    name: "AI Content Creation",
    desc: "Creating smarter content workflows using Generative AI.",
    color: "bg-blue-50 border-blue-100",
    labelColor: "text-blue-700",
  },
  {
    emoji: "🔍",
    name: "SEO & Content Strategy",
    desc: "Learning search optimization, keyword strategy, and AI-assisted content improvement.",
    color: "bg-green-50 border-green-100",
    labelColor: "text-green-700",
  },
  {
    emoji: "🎥",
    name: "AI Video Creation",
    desc: "Exploring Runway, Higgsfield, and AI-powered creative workflows for marketing videos.",
    color: "bg-pink-50 border-pink-100",
    labelColor: "text-pink-700",
  },
  {
    emoji: "⚡",
    name: "Marketing Automation",
    desc: "Learning how AI can automate repetitive marketing tasks and improve productivity.",
    color: "bg-amber-50 border-amber-100",
    labelColor: "text-amber-700",
  },
  {
    emoji: "✍️",
    name: "Prompt Engineering",
    desc: "Building structured prompts for content generation, research, and marketing use cases.",
    color: "bg-violet-50 border-violet-100",
    labelColor: "text-violet-700",
  },
  {
    emoji: "📈",
    name: "Analytics & Insights",
    desc: "Understanding Google Analytics and measuring digital performance.",
    color: "bg-orange-50 border-orange-100",
    labelColor: "text-orange-700",
  },
];

const vp = { once: true, amount: 0.1 };

export default function CurrentLearning() {
  return (
    <section id="learning" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Focus Areas</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            Exploring & <span className="text-gradient">Building</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[460px] mx-auto">
            Continuously exploring new technologies while building practical AI-powered marketing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ emoji, name, desc, color, labelColor }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`rounded-2xl border p-5 ${color}`}
            >
              <div className="text-2xl mb-3">{emoji}</div>
              <h3 className={`font-grotesk font-bold text-[15px] mb-1.5 ${labelColor}`}>{name}</h3>
              <p className="font-inter text-gray-500 text-[13px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
