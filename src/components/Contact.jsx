import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, MapPin, Send, CheckCircle } from "lucide-react";

const contactItems = [
  { icon: Mail,  label: "Email",    value: "shaikroshan150@gmail.com",                href: "mailto:shaikroshan150@gmail.com",                                              color: "from-blue-500 to-indigo-600" },
  { icon: Phone, label: "Phone",    value: "+91 7013093226",                           href: "tel:+917013093226",                                                            color: "from-green-500 to-teal-600"  },
  { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/shaik-roshan-jameer",      href: "https://www.linkedin.com/in/shaik-roshan-jameer-971557322/",                   color: "from-blue-600 to-blue-700"   },
  { icon: MapPin,label: "Location", value: "Hyderabad, India",                         href: null,                                                                           color: "from-red-500 to-rose-600"    },
];

const vp = { once: true, amount: 0.1 };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, #4F46E5 40%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3">Contact</div>
          <h2 className="font-grotesk text-[28px] sm:text-[38px] md:text-[56px] font-bold tracking-tight text-ink leading-[1.05]">
            Let's Build Something
            <br />
            <span className="text-gradient">Meaningful.</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-4 max-w-[400px] mx-auto">
            Have a project in mind? Let's explore what AI marketing can do for your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="space-y-3 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={15} className="text-white" />
                  </div>
                  <div>
                    <div className="font-inter text-[10.5px] font-semibold text-gray-400 uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="font-inter text-ink font-medium text-[14px] hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-inter text-ink font-medium text-[14px]">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-grotesk font-semibold text-green-800 text-[13.5px]">Available for New Projects</div>
                <div className="font-inter text-green-600 text-[12px] mt-0.5">Typical response time within 24 hours.</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="bg-white rounded-3xl p-5 sm:p-7 shadow-card border border-border"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h3 className="font-grotesk font-bold text-ink text-[19px] mb-2">Message Sent!</h3>
                <p className="font-inter text-gray-400 text-[13.5px] mb-5">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-secondary text-[13px] px-5 py-2.5">Send another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">{label}</label>
                    <input type={type} required value={form[id]} onChange={(e) => setForm({ ...form, [id]: e.target.value })} placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 font-inter text-[14px] text-ink placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..." rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 font-inter text-[14px] text-ink placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none" />
                </div>
                <motion.button type="submit" disabled={loading} whileHover={{ scale: loading ? 1 : 1.01 }} whileTap={{ scale: loading ? 1 : 0.99 }}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5">
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} className="relative z-10" />
                      <span className="relative z-10">Let's Connect</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
