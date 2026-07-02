import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Sparkles, BookOpen, Award, CheckCircle2, BadgeCheck, Volume2, VolumeX } from "lucide-react";

const FloatingCard = ({ icon: Icon, text, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 16 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    className={`glass absolute rounded-2xl px-3.5 py-2.5 hidden md:flex items-center gap-2 shadow-card animate-float ${className}`}
    style={{ animationDelay: `${delay * 0.4}s` }}
  >
    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
      <Icon size={13} className="text-white" />
    </div>
    <span className="font-inter text-[12px] font-semibold text-ink whitespace-nowrap">{text}</span>
  </motion.div>
);

const chips = [
  { icon: BadgeCheck, text: "AI Business School Certified" },
  { icon: BookOpen,   text: "Continuous Learner" },
  { icon: Sparkles,   text: "Building AI Marketing Projects" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [heroMuted, setHeroMuted] = useState(true);

  const toggleHeroSound = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroMuted;
    setHeroMuted(!heroMuted);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const blob1X = useTransform(springX, [-1, 1], [-30, 30]);
  const blob1Y = useTransform(springY, [-1, 1], [-20, 20]);
  const blob2X = useTransform(springX, [-1, 1], [20, -20]);
  const blob2Y = useTransform(springY, [-1, 1], [15, -15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <motion.div
        style={{ x: blob1X, y: blob1Y, background: "radial-gradient(circle, #2563EB 0%, #4F46E5 50%, transparent 70%)", filter: "blur(60px)" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y, background: "radial-gradient(circle, #06B6D4 0%, #4F46E5 50%, transparent 70%)", filter: "blur(60px)" }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left content */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 mb-6 shadow-soft"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="section-label text-[10.5px]">Open to Opportunities</span>
            </motion.div>

            {/* Name heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-grotesk text-[36px] sm:text-[52px] lg:text-[68px] font-bold leading-[1.06] tracking-tight text-ink mb-4"
            >
              Shaik Roshan
              <br />
              <span className="text-gradient">Jameer</span>
            </motion.h1>

            {/* Subheading with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex items-center gap-2 mb-5 flex-wrap"
            >
              <span className="font-inter text-[16px] text-gray-400 font-light">Exploring </span>
              <span className="font-grotesk text-[16px] font-semibold text-primary min-w-[160px] sm:min-w-[200px]">
                <TypeAnimation
                  sequence={[
                    "AI Marketing", 2200,
                    "Content Creation", 2200,
                    "SEO Strategy", 2200,
                    "Marketing Automation", 2200,
                    "Prompt Engineering", 2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-[15px] leading-relaxed text-gray-500 max-w-[460px] mb-6"
            >
              Helping businesses explore AI-powered content creation, SEO, marketing automation, and creative digital experiences — through continuous learning and practical projects.
            </motion.p>

            {/* Chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {chips.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 shadow-soft"
                >
                  <Icon size={12} className="text-primary flex-shrink-0" />
                  <span className="font-inter text-[11.5px] font-medium text-gray-600 whitespace-nowrap">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2 group"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Roshan_Resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              {[
                { n: "4+",  label: "Years Experience" },
                { n: "4",   label: "Certifications" },
                { n: "∞",   label: "Curiosity" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="font-grotesk text-[26px] font-bold text-ink leading-none">{n}</div>
                  <div className="font-inter text-[11.5px] text-gray-400 font-medium mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait + floating cards */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[540px] aspect-video"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[32px] pointer-events-none" style={{ background: "linear-gradient(135deg, #2563EB44, #4F46E522, #06B6D444)", filter: "blur(18px)", transform: "scale(1.04)" }} />

              {/* Gradient border */}
              <div className="w-full h-full rounded-[28px] p-[2px]" style={{ background: "linear-gradient(145deg, #2563EB, #4F46E5 50%, #06B6D4)" }}>
                <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-[#060d1f]">

                  {/* Video intro — drop hero-intro.mp4 into /public to activate */}
                  <video
                    ref={heroVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/photo.jpeg"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ filter: "contrast(1.08) brightness(1.0) saturate(0.85)" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "block";
                    }}
                  >
                    <source src="/hero-intro.mp4" type="video/mp4" />
                  </video>
                  {/* Fallback photo shown if video file is missing */}
                  <img
                    src="/photo.jpeg"
                    alt="Shaik Roshan Jameer"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ display: "none", filter: "contrast(1.05) brightness(1.05) saturate(0.8)" }}
                  />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] z-20" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4, #4F46E5)" }} />

                  {/* Vignette edges */}
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(6,13,31,0.55) 100%)" }} />

                  {/* Bottom gradient for name card legibility */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(6,13,31,0.75) 0%, rgba(6,13,31,0.35) 55%, transparent 100%)" }} />

                  {/* Sound toggle */}
                  <button
                    onClick={toggleHeroSound}
                    aria-label={heroMuted ? "Unmute video" : "Mute video"}
                    className="absolute top-4 left-4 z-30 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                    style={{ background: "rgba(6,13,31,0.55)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
                  >
                    {heroMuted
                      ? <VolumeX size={15} className="text-white/80" />
                      : <Volume2 size={15} className="text-cyan-300" />
                    }
                  </button>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="flex gap-1">
                        {[0,1,2].map(j => (
                          <div key={j} className="w-[3px] h-[3px] rounded-full" style={{ background: "rgba(6,182,212,0.5)" }} />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Name card */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="rounded-2xl px-4 py-3 flex items-center gap-4" style={{ background: "rgba(6,13,31,0.55)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(16px)" }}>
                      <div>
                        <div className="font-grotesk font-bold text-white text-[12px] tracking-[1px]">Shaik Roshan Jameer</div>
                        <div className="font-inter text-[10px] mt-0.5" style={{ color: "rgba(6,182,212,0.8)" }}>AI &amp; Digital Marketing</div>
                      </div>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
                        <span className="font-grotesk font-bold text-white text-[11px]">R</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <FloatingCard icon={Award}       text="AI Business School" delay={0.65} className="-left-10 -top-5 z-30" />
              <FloatingCard icon={CheckCircle2} text="Google Certified"    delay={0.8}  className="-right-8 -top-4 z-30" />
              <FloatingCard icon={BookOpen}     text="Always Learning"     delay={0.95} className="-left-12 -bottom-5 z-30" />
              <FloatingCard icon={Sparkles}     text="Exploring AI Tools"  delay={1.1}  className="-right-10 -bottom-4 z-30" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[10px] text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}
