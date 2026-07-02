import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, Heart, MessageCircle, Send, Bookmark, Clapperboard } from "lucide-react";

const vp = { once: true, amount: 0.05 };

/* ── Vertical Instagram Reel phone (for portrait video) ── */
const ReelPhone = ({ delay }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, delay }}
      className="flex-shrink-0 flex justify-center"
    >
      {/* Phone shell */}
      <div className="relative w-[250px] sm:w-[270px]">
        <div className="relative rounded-[40px] bg-gray-900 p-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
          {/* Dynamic island */}
          <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />

          {/* Screen */}
          <div
            className="relative rounded-[32px] overflow-hidden bg-black cursor-pointer"
            style={{ aspectRatio: "9/16" }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/ai-video-sample.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Instagram Reel UI overlay */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">

              {/* Top bar */}
              <div className="pt-10 px-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-white font-bold" style={{fontSize:"7px"}}>R</span>
                    </div>
                  </div>
                  <span className="font-inter text-white text-[9px] font-semibold drop-shadow">roshan</span>
                  <span className="border border-white/70 rounded text-white px-1" style={{fontSize:"7px"}}>Follow</span>
                </div>
                <button
                  onClick={toggleMute}
                  className="pointer-events-auto w-6 h-6 rounded-full bg-black/40 flex items-center justify-center"
                >
                  {muted
                    ? <VolumeX size={10} className="text-white" />
                    : <Volume2 size={10} className="text-white" />
                  }
                </button>
              </div>

              {/* Play overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${playing ? "opacity-0" : "opacity-100"}`}>
                <div className="w-14 h-14 rounded-full bg-black/35 backdrop-blur-sm flex items-center justify-center">
                  <Play size={20} className="text-white ml-0.5" />
                </div>
              </div>

              {/* Right side actions */}
              <div className="absolute right-2.5 bottom-20 flex flex-col items-center gap-4">
                {[
                  { id: "like", icon: Heart, label: "2.4k" },
                  { id: "comment", icon: MessageCircle, label: "48" },
                  { id: "send", icon: Send, label: "" },
                  { id: "save", icon: Bookmark, label: "" },
                ].map(({ id, icon: Icon, label }) => (
                  <div key={id} className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={13} className="text-white" fill={Icon === Heart ? "white" : "none"} />
                    </div>
                    {label && <span className="font-inter text-white text-[8px] font-semibold drop-shadow">{label}</span>}
                  </div>
                ))}
              </div>

              {/* Bottom caption */}
              <div className="px-3 pb-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-8">
                <p className="font-inter text-white text-[9.5px] font-semibold leading-relaxed drop-shadow mb-1">
                  AI will automate work. Or will it? 🤖
                </p>
                <p className="font-inter text-white/75 text-[8.5px] leading-relaxed drop-shadow">
                  Created with <span className="text-white font-semibold">Higgsfield AI</span>
                </p>
                <div className="flex gap-1 flex-wrap mt-1.5">
                  {["#AIVideo", "#Higgsfield", "#AIMarketing"].map(t => (
                    <span key={t} className="font-inter text-[7.5px] text-blue-300 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

/* ── Widescreen cinematic player (for landscape video) ── */
const CinemaPlayer = ({ delay }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7, delay }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ background: "linear-gradient(135deg, #2563EB33, #4F46E51e, #06B6D433)", filter: "blur(24px)", transform: "scale(1.02) translateY(10px)" }}
      />

      {/* Gradient border frame */}
      <div className="relative rounded-[24px] p-[2px]" style={{ background: "linear-gradient(145deg, #2563EB, #4F46E5 50%, #06B6D4)" }}>
        <div className="rounded-[22px] overflow-hidden bg-[#060d1f]">

          {/* Cinema top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a1226] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Clapperboard size={12} className="text-white" />
              </div>
              <span className="font-grotesk font-bold text-white text-[12px] tracking-wide">Cinematic worlds, generated by AI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-400/10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="font-inter text-[9px] font-semibold text-cyan-300 uppercase tracking-wider">Higgsfield AI</span>
              </span>
            </div>
          </div>

          {/* Video — full frame, nothing cropped */}
          <div className="relative cursor-pointer group" style={{ aspectRatio: "16/9" }} onClick={togglePlay}>
            <video
              ref={videoRef}
              src="/ai-video-2.mp4"
              className="absolute inset-0 w-full h-full object-contain bg-black"
              muted
              playsInline
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Play overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${playing ? "opacity-0" : "opacity-100"}`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Play size={26} className="text-white ml-1" />
              </div>
            </div>

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center z-10"
            >
              {muted
                ? <VolumeX size={14} className="text-white/85" />
                : <Volume2 size={14} className="text-cyan-300" />
              }
            </button>

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3.5 pt-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none">
              <div className="flex gap-2 flex-wrap">
                {["#AIVideo", "#CinematicAI", "#GenerativeVideo"].map(t => (
                  <span key={t} className="font-inter text-[10.5px] text-blue-300 font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AIVideo() {
  return (
    <section id="ai-video" className="py-20 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-3">Creative Work</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            AI <span className="text-gradient">Video Creation</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[460px] mx-auto">
            Cinematic AI-generated videos made with Higgsfield — exploring storytelling through generative video tools.
          </p>
        </motion.div>

        {/* Row 1 — Reel phone + description */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-20">
          <ReelPhone delay={0.1} />

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-5">
              <span className="text-[11px]">🎬</span>
              <span className="font-inter text-[11px] font-semibold text-blue-700 uppercase tracking-wide">AI Generated</span>
            </div>

            <h3 className="font-grotesk font-bold text-ink text-[22px] sm:text-[26px] leading-tight tracking-tight mb-3">
              Stories without
              <br />
              <span className="text-gradient">a camera or crew.</span>
            </h3>

            <p className="font-inter text-gray-500 text-[14.5px] leading-relaxed mb-6 max-w-[400px] mx-auto lg:mx-0">
              Cinematic shorts exploring the future of AI, work, and generated worlds — created entirely with Higgsfield AI's video generation platform.
            </p>

            <div className="mb-6">
              <div className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools Used</div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Higgsfield AI", "AI Video Generation", "Cinematic Prompting", "Marketing Content"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white border border-border rounded-full font-inter text-[12px] font-medium text-gray-600 shadow-soft">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 max-w-[400px] mx-auto lg:mx-0">
              <div className="font-grotesk font-semibold text-blue-800 text-[13px] mb-1">Why AI video?</div>
              <p className="font-inter text-blue-700 text-[12.5px] leading-relaxed">
                AI video tools allow marketers to produce cinematic content without a production budget — making high-quality storytelling accessible at scale.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2 — Widescreen cinematic player */}
        <CinemaPlayer delay={0.15} />
      </div>
    </section>
  );
}
