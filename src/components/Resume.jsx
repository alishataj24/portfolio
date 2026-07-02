import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react";

const vp = { once: true, amount: 0.1 };

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <div className="section-label mb-3">Resume</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            The Full <span className="text-gradient">Picture</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3">Everything you need, one download away.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-card border border-border overflow-hidden"
        >
          {/* macOS titlebar */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-3.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-gray-700/80 rounded-md px-3 py-1.5 flex items-center gap-2">
              <FileText size={11} className="text-gray-400" />
              <span className="font-inter text-[11.5px] text-gray-400">Roshan_Resume_AI_Marketing.pdf</span>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/20 p-8 relative">
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-soft border border-border p-6">
              <div className="flex items-start gap-3 mb-5 pb-5 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <span className="font-grotesk text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="font-grotesk font-bold text-ink text-[16px]">Shaik Roshan Jameer</h3>
                  <p className="font-inter text-gray-400 text-[12px] mt-0.5">AI-Powered Digital Marketing Professional</p>
                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    {["AI Marketing", "SEO", "Automation"].map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-blue-50 text-primary rounded-full font-inter text-[9.5px] font-semibold border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3.5">
                {[
                  { icon: Briefcase, title: "Experience", items: ["AI Marketing Specialist", "Digital Marketing Analyst", "Business Operations (4+ yrs)"] },
                  { icon: GraduationCap, title: "Education", items: ["Computer Science & AI", "Digital Marketing (Self-taught)"] },
                  { icon: Award, title: "Certifications", items: ["5+ Certifications", "Google · AI Business School · Coursera"] },
                ].map(({ icon: Icon, title, items }) => (
                  <div key={title} className="flex gap-3">
                    <Icon size={13} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-grotesk font-semibold text-ink text-[11.5px] mb-0.5">{title}</div>
                      {items.map((item) => (
                        <div key={item} className="font-inter text-gray-400 text-[11px] leading-relaxed">{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent rounded-b-2xl" />
            </div>
          </div>

          {/* Download footer */}
          <div className="px-7 py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-grotesk font-semibold text-ink text-[14px]">Roshan_Resume_AI_Marketing.pdf</div>
              <div className="font-inter text-gray-400 text-[12.5px] mt-0.5">Updated June 2026 · AI Marketing & Strategy</div>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Roshan_Resume.pdf"
              download
              className="btn-primary flex items-center gap-2 text-[13px] px-5 py-2.5"
            >
              <Download size={14} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
