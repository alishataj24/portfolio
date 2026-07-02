import { motion } from "framer-motion";
import { Bot, Search, FileText, Cog, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Marketing",
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    items: ["Content Generation", "AI Research & Insights", "Campaign Planning", "Prompt Engineering", "Marketing Automation"],
  },
  {
    icon: Search,
    title: "SEO Strategy",
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50",
    items: ["Keyword Research", "Technical SEO", "Content Optimization", "Backlink Strategy", "SEO Audits"],
  },
  {
    icon: FileText,
    title: "Content Strategy",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    items: ["Blog Strategy", "Social Media Content", "Brand Storytelling", "Content Calendars", "Audience Research"],
  },
  {
    icon: Cog,
    title: "Marketing Automation",
    color: "from-teal-500 to-cyan-500",
    bg: "from-teal-50 to-cyan-50",
    items: ["AI Workflows", "Lead Nurturing", "Email Automation", "CRM Integration", "Analytics & Reporting"],
  },
];

const vp = { once: true, amount: 0.1 };

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Services</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            What I Bring
            <br />
            to the <span className="text-gradient">Table</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[440px] mx-auto">
            A full-stack approach to modern digital marketing, powered by artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, color, bg, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group bg-white rounded-3xl p-6 shadow-soft border border-border card-hover relative overflow-hidden cursor-default"
            >
              <div className={`absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br ${bg} opacity-50 blur-2xl -translate-y-7 translate-x-7 group-hover:opacity-90 transition-opacity duration-500`} />

              <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 relative z-10 shadow-md`}>
                <Icon size={18} className="text-white" />
              </div>

              <h3 className="font-grotesk font-bold text-ink text-[18px] mb-4 relative z-10">{title}</h3>

              <ul className="space-y-2 relative z-10">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-inter text-[13px] text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-5 flex items-center gap-1.5 text-primary font-inter font-semibold text-[12.5px] relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
