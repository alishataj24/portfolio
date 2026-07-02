import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 4,  suffix: "+", label: "Years Experience",  desc: "In professional operations" },
  { value: 4,  suffix: "",  label: "Certifications",    desc: "Google, Coursera & more" },
  { value: 6,  suffix: "",  label: "Projects Building", desc: "AI marketing tools" },
  { value: 8,  suffix: "+", label: "AI Tools Used",     desc: "Daily in my workflow" },
];

const vp = { once: true, amount: 0.1 };

function Counter({ end, suffix, delay = 0 }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800; // ms
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime - delay * 1000;
            if (elapsed < 0) { requestAnimationFrame(tick); return; }
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, delay]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, suffix, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="text-center"
              >
                <div className="font-grotesk text-[36px] sm:text-[48px] font-bold text-white leading-none mb-1.5">
                  <Counter end={value} suffix={suffix} delay={i * 0.15} />
                </div>
                <div className="font-grotesk font-semibold text-white text-[15px] mb-0.5">
                  {label}
                </div>
                <div className="font-inter text-white/55 text-[12.5px]">{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
