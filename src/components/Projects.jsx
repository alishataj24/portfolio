import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles, Search, Copy, RefreshCw, ChevronDown, TrendingUp, CheckCircle2, AlertCircle, FileText } from "lucide-react";

/* ─── ContentPilot AI Mockup ─────────────────────────────────── */
function ContentPilotMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-[0_24px_56px_rgba(0,0,0,0.13)] border border-gray-200 bg-white select-none">
      {/* Browser bar */}
      <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-gray-800 rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="font-inter text-[10px] text-gray-400">contentpilot.ai/generate</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-[320px]">
        {/* Sidebar */}
        <div className="w-[130px] bg-gray-50 border-r border-gray-100 hidden sm:flex flex-col py-3 flex-shrink-0">
          <div className="px-3 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Sparkles size={9} className="text-white" />
              </div>
              <span className="font-grotesk font-bold text-[10px] text-ink">ContentPilot</span>
            </div>
          </div>
          {[
            { label: "Generate", active: true },
            { label: "Templates" },
            { label: "History" },
            { label: "Settings" },
          ].map(({ label, active }) => (
            <div
              key={label}
              className={`mx-2 px-2.5 py-1.5 rounded-lg mb-0.5 font-inter text-[10px] font-medium cursor-default ${
                active ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
          {/* Top row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <div className="font-inter text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Content Type</div>
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                <span className="font-inter text-[10px] text-ink font-medium">Instagram Caption</span>
                <ChevronDown size={10} className="text-gray-400" />
              </div>
            </div>
            <div>
              <div className="font-inter text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Tone</div>
              <div className="flex gap-1">
                {["Professional", "Casual", "Creative"].map((t, i) => (
                  <div
                    key={t}
                    className={`flex-1 text-center py-1 rounded-md font-inter text-[8.5px] font-semibold cursor-default ${
                      i === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div>
            <div className="font-inter text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Your product or service</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-2">
              <span className="font-inter text-[10px] text-gray-500">AI-powered marketing automation platform...</span>
            </div>
          </div>

          {/* Generated output */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-3 relative">
            <div className="flex items-center gap-1.5 mb-2">
              <CheckCircle2 size={11} className="text-blue-600" />
              <span className="font-inter text-[9px] font-bold text-blue-700 uppercase tracking-wide">Generated Content</span>
            </div>
            <p className="font-inter text-[10px] text-gray-700 leading-relaxed mb-2.5">
              "Transform your marketing with the power of AI ✨ Stop spending hours on content — let intelligent automation handle it while you focus on strategy. Ready to scale smarter? 🚀 #AIMarketing #ContentCreation"
            </p>
            <div className="flex gap-1.5">
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1 cursor-default">
                <Copy size={8} className="text-gray-500" />
                <span className="font-inter text-[9px] text-gray-600 font-medium">Copy</span>
              </div>
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1 cursor-default">
                <RefreshCw size={8} className="text-gray-500" />
                <span className="font-inter text-[9px] text-gray-600 font-medium">Regenerate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SEOPilot AI Gallery Mockup (light mode, scrollable) ────── */
function SEOInsightMockup() {
  const [active, setActive] = useState(0);
  const trackRef = { current: null };

  const screens = [
    { id: 0, label: "Dashboard",   url: "seopilot.ai/dashboard",  nav: 0 },
    { id: 1, label: "Templates",   url: "seopilot.ai/templates",  nav: 1 },
    { id: 2, label: "History",     url: "seopilot.ai/history",    nav: 2 },
    { id: 3, label: "SEO Report",  url: "seopilot.ai/seo-report", nav: 3 },
    { id: 4, label: "Settings",    url: "seopilot.ai/settings",   nav: 4 },
  ];

  const navItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "📋", label: "Templates" },
    { icon: "🕐", label: "History" },
    { icon: "✨", label: "SEO Report" },
    { icon: "⚙️", label: "Settings" },
  ];

  /* shared light-mode sidebar */
  const Sidebar = ({ activeNav }) => (
    <div className="w-[110px] bg-white border-r border-gray-100 hidden sm:flex flex-col py-3 flex-shrink-0">
      <div className="px-3 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-grotesk text-white font-bold text-[9px]">S</div>
          <span className="font-grotesk font-bold text-[9.5px] text-gray-900">SEOPilot</span>
        </div>
      </div>
      <div className="flex-1 space-y-0.5 px-2">
        {navItems.map(({ icon, label }, i) => (
          <div key={label} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg ${i === activeNav ? "bg-blue-50 border border-blue-100" : ""}`}>
            <span className="text-[9px]">{icon}</span>
            <span className={`font-inter text-[9px] font-medium ${i === activeNav ? "text-blue-700" : "text-gray-400"}`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="px-3 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-lg px-1.5 py-1">
          <span className="text-[8px]">⚡</span>
          <span className="font-inter text-[8px] text-blue-600 font-semibold">AI Active</span>
        </div>
      </div>
    </div>
  );

  /* ── Screen 1: Dashboard ── */
  const ScreenDashboard = () => (
    <div className="flex h-[380px]">
      <Sidebar activeNav={0} />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-4 pt-3.5 pb-2.5 bg-white border-b border-gray-100">
          <div className="font-grotesk font-bold text-gray-900 text-[14px]">AI SEO Assistant</div>
          <div className="font-inter text-[9px] text-gray-400 mt-0.5">Upload your blog draft for instant SEO optimizations and FAQ schema.</div>
        </div>
        <div className="p-3 flex flex-col gap-2.5 flex-1">
          <div className="grid grid-cols-3 gap-2">
            {[["3","Total Audits Run"],["79","Avg Readability"],["4","Templates"]].map(([n,l]) => (
              <div key={l} className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
                <div className="font-grotesk font-bold text-gray-900 text-[20px] leading-none">{n}</div>
                <div className="font-inter text-[8px] text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center gap-2">
            <div className="text-2xl">📥</div>
            <div className="font-grotesk font-bold text-gray-800 text-[11px]">Drag and drop your blog draft here</div>
            <div className="font-inter text-[8.5px] text-gray-400">Supports .txt, .md, and .html files</div>
            <div className="font-inter text-[7.5px] text-gray-300 uppercase tracking-wider">or</div>
            <div className="px-3.5 py-1.5 bg-blue-600 rounded-lg font-inter text-[9px] font-semibold text-white cursor-default">Browse Local Files</div>
          </div>
          <div className="text-center font-inter text-[8px] text-gray-300 uppercase tracking-widest">or paste blog text</div>
        </div>
      </div>
    </div>
  );

  /* ── Screen 2: Templates ── */
  const ScreenTemplates = () => (
    <div className="flex h-[380px]">
      <Sidebar activeNav={1} />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-4 pt-3.5 pb-2.5 bg-white border-b border-gray-100">
          <div className="font-grotesk font-bold text-gray-900 text-[14px]">Content Templates</div>
          <div className="font-inter text-[9px] text-gray-400 mt-0.5">Structure outlines proven to rank well in search engines.</div>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2 overflow-hidden">
          {[
            { icon: "📘", title: "The Ultimate Guide",  desc: "Comprehensive, in-depth breakdowns of complex topics. Best for long-form content above 2,000 words." },
            { icon: "🔢", title: "Listicle Structure",   desc: "Quick, highly readable resources. Proven to earn backlinks and social shares at scale." },
            { icon: "📦", title: "Case Study Outline",   desc: "Narrative structure: Challenge → Strategy → Outcome. Trusted by B2B marketers and sales teams." },
            { icon: "⚔️",  title: "Product Comparison",  desc: "Help readers decide with clear A vs B comparisons. Drives high-intent organic traffic." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px]">{icon}</span>
                <span className="font-grotesk font-bold text-gray-900 text-[10px]">{title}</span>
              </div>
              <p className="font-inter text-[8px] text-gray-400 leading-relaxed flex-1">{desc}</p>
              <div className="w-full py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-center font-inter text-[8.5px] font-bold text-white cursor-default">Use Template</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── Screen 3: History ── */
  const ScreenHistory = () => (
    <div className="flex h-[380px]">
      <Sidebar activeNav={2} />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-4 pt-3.5 pb-2.5 bg-white border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="font-grotesk font-bold text-gray-900 text-[14px]">Audit History</div>
            <div className="font-inter text-[9px] text-gray-400 mt-0.5">Review and reload your previous analyses.</div>
          </div>
          <div className="px-2.5 py-1 bg-red-50 border border-red-100 rounded-lg font-inter text-[8.5px] font-semibold text-red-500 cursor-default">🗑️ Clear All</div>
        </div>
        <div className="flex-1 bg-white mx-3 mt-3 mb-3 rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-5 gap-2 px-3 py-2 bg-gray-50 border-b border-gray-100">
            {["Date & Time","Blog Title","Words","Score","Actions"].map(h => (
              <div key={h} className="font-inter text-[7.5px] font-bold text-gray-400 uppercase tracking-wider">{h}</div>
            ))}
          </div>
          {[
            ["29/06/2026, 13:09","The ultimate productivity...","1413 words","76",true],
            ["29/06/2026, 13:07","The ultimate productivity...","1413 words","76",false],
            ["29/06/2026, 13:06","The Ultimate Guide to...","97 words","86",false],
          ].map(([date, title, words, score, bold], i) => (
            <div key={i} className={`grid grid-cols-5 gap-2 px-3 py-2.5 border-b border-gray-50 items-center ${i === 0 ? "bg-blue-50/50" : ""}`}>
              <div className="font-inter text-[8px] text-gray-400">{date}</div>
              <div className={`font-inter text-[8px] truncate ${bold ? "text-gray-900 font-semibold" : "text-gray-600"}`}>{title}</div>
              <div className="font-inter text-[8px] text-gray-400">{words}</div>
              <div className="font-grotesk font-bold text-[8.5px]">
                <span className="text-blue-600">{score}</span><span className="text-gray-300">/100</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded font-inter text-[7.5px] text-gray-500 cursor-default">👁 View</div>
                <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded flex items-center justify-center cursor-default text-[8px]">🗑️</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── Screen 4: SEO Report ── */
  const ScreenSEOReport = () => (
    <div className="flex h-[380px]">
      <Sidebar activeNav={3} />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100 flex items-start justify-between gap-2">
          <div>
            <div className="font-grotesk font-bold text-gray-900 text-[13px]">SEO Optimization Report</div>
            <div className="font-inter text-[8.5px] text-gray-400 mt-0.5">AI-generated recommendations for search optimization.</div>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg flex items-center gap-1 cursor-default">
              <TrendingUp size={7} className="text-gray-400" /><span className="font-inter text-[8px] text-gray-500">Export</span>
            </div>
            <div className="px-2 py-1 bg-blue-600 rounded-lg flex items-center gap-1 cursor-default">
              <Sparkles size={7} className="text-white" /><span className="font-inter text-[8px] text-white font-semibold">New Audit</span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2.5 grid grid-cols-2 gap-2 content-start overflow-hidden">
          {/* Title Tags */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1"><span className="text-[9px]">🏷️</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">Title Tags</span></div>
              <div className="px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded font-inter text-[7.5px] text-gray-500 cursor-default">Copy</div>
            </div>
            <div className="space-y-1">
              <div className="bg-red-50 border border-red-100 rounded-lg p-1.5">
                <div className="font-inter text-[6.5px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Current</div>
                <div className="font-inter text-[8px] text-gray-700">The ultimate productivity hack is saying no.</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5">
                <div className="font-inter text-[6.5px] font-bold text-blue-500 uppercase tracking-wider mb-0.5">AI Suggested</div>
                <div className="font-inter text-[8px] text-gray-900 font-semibold">How to Master Productivity: The Ultimate Guide</div>
              </div>
            </div>
          </div>
          {/* Meta */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1"><span className="text-[9px]">📝</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">Meta Description</span></div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-1.5 mb-1">
              <div className="font-inter text-[8px] text-gray-500 leading-relaxed line-clamp-2">Discover strategies inside our deep-dive guide on mastering productivity through intelligent prioritization.</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-inter text-[7.5px] text-gray-400">207 / 160 chars</span>
              <span className="px-1.5 py-0.5 bg-red-50 border border-red-100 rounded font-inter text-[7px] text-red-500 font-semibold">Too Long</span>
            </div>
          </div>
          {/* Keywords */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center gap-1 mb-1.5"><span className="text-[9px]">🔑</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">Semantic Keywords</span></div>
            <div className="grid grid-cols-4 gap-x-1 mb-1">
              {["Keyword","Intent","Density","Vol"].map(h => <div key={h} className="font-inter text-[6.5px] text-gray-400 font-semibold uppercase">{h}</div>)}
            </div>
            {[["saying","Commercial","1.6%","High"],["time","Commercial","1.3%","High"],["have","Commercial","0.9%","Med"]].map(([k,it,d,v]) => (
              <div key={k} className="grid grid-cols-4 gap-x-1 py-0.5 border-t border-gray-50">
                <div className="px-1 py-0.5 bg-gray-50 border border-gray-100 rounded font-inter text-[7px] text-gray-700 w-fit">{k}</div>
                <div className="font-inter text-[7.5px] text-gray-400 self-center">{it}</div>
                <div className="font-inter text-[7.5px] text-gray-700 font-semibold self-center">{d}</div>
                <div className="font-inter text-[7.5px] text-emerald-600 font-semibold self-center">{v}</div>
              </div>
            ))}
          </div>
          {/* Readability */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center gap-1 mb-2"><span className="text-[9px]">📖</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">Readability & Tone</span></div>
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 44 44" className="w-full h-full -rotate-90">
                  <circle cx="22" cy="22" r="18" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <circle cx="22" cy="22" r="18" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="113" strokeDashoffset="27" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-grotesk font-bold text-gray-900 text-[11px]">76</div>
              </div>
              <div>
                <div className="font-inter text-[7.5px] text-gray-400">Flesch-Kincaid Level</div>
                <div className="font-grotesk font-bold text-gray-900 text-[9.5px]">Easy to Read</div>
                <div className="font-inter text-[7.5px] text-gray-400">6th Grade Level</div>
                <div className="mt-0.5 px-1.5 py-0.5 bg-blue-50 border border-blue-100 rounded font-inter text-[7px] text-blue-600 w-fit">Conversational</div>
              </div>
            </div>
          </div>
          {/* Headings */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center gap-1 mb-1.5"><span className="text-[9px]">🔤</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">Headings Outline</span></div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-2 py-1">
                <span className="px-1 bg-blue-100 rounded font-grotesk font-bold text-[7px] text-blue-700">H1</span>
                <span className="font-inter text-[7.5px] text-gray-700">The ultimate productivity hack</span>
              </div>
              {[["H2","Introduction & Key Insights"],["H2","Core Strategy Breakdown"]].map(([t,tx]) => (
                <div key={tx} className="flex items-center gap-1.5 ml-2 bg-gray-50 border border-gray-100 rounded-lg px-2 py-1">
                  <span className="px-1 bg-indigo-50 rounded font-grotesk font-bold text-[7px] text-indigo-600">{t}</span>
                  <span className="font-inter text-[7.5px] text-gray-500 truncate">{tx}</span>
                </div>
              ))}
            </div>
          </div>
          {/* FAQ */}
          <div className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1"><span className="text-[9px]">🤖</span><span className="font-grotesk font-bold text-gray-900 text-[9.5px]">FAQ Schema</span></div>
              <div className="px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded font-inter text-[7.5px] text-gray-500 cursor-default">Copy JSON-LD</div>
            </div>
            <div className="space-y-1">
              {["What is the importance of saying no?","How often should I review priorities?","How long should a blog post be for SEO?"].map(q => (
                <div key={q} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-2 py-1">
                  <span className="font-inter text-[7.5px] text-gray-600 truncate pr-1">{q}</span>
                  <span className="text-blue-500 font-bold text-[10px] leading-none flex-shrink-0">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── Screen 5: Settings ── */
  const ScreenSettings = () => (
    <div className="flex h-[380px]">
      <Sidebar activeNav={4} />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-4 pt-3.5 pb-2.5 bg-white border-b border-gray-100">
          <div className="font-grotesk font-bold text-gray-900 text-[14px]">Audit Settings</div>
          <div className="font-inter text-[9px] text-gray-400 mt-0.5">Configure thresholds and connect your Gemini API key.</div>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2.5 flex-1">
          <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-2.5"><span className="text-[10px]">🎯</span><span className="font-grotesk font-bold text-gray-900 text-[10px]">Analysis Thresholds</span></div>
            <div className="space-y-2">
              {[["Min Word Count","600"],["Max Keyword Density","2.5%"]].map(([label,val]) => (
                <div key={label}>
                  <div className="font-inter text-[8.5px] font-semibold text-gray-600 mb-1">{label}</div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 font-inter text-[9px] text-gray-700">{val}</div>
                </div>
              ))}
              <div>
                <div className="font-inter text-[8.5px] font-semibold text-gray-600 mb-1">Focus Keyword <span className="text-gray-300 font-normal">(Optional)</span></div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 font-inter text-[9px] text-gray-300">e.g. content marketing</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-2.5"><span className="text-[10px]">🔑</span><span className="font-grotesk font-bold text-gray-900 text-[10px]">Gemini AI Integration</span></div>
            <div className="font-inter text-[8.5px] font-semibold text-gray-600 mb-1">API Key</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 font-inter text-[9px] text-gray-300 mb-2">AIza•••••••••••••</div>
            <div className="font-inter text-[7.5px] text-gray-400 leading-relaxed mb-2">Stored locally only. Unlocks live recommendations via Gemini Flash.</div>
            <div className="flex items-center gap-1 p-2 bg-amber-50 border border-amber-100 rounded-lg mb-2">
              <span className="text-[8px]">⚠️</span>
              <span className="font-inter text-[7.5px] text-amber-600">No API key — using local simulation.</span>
            </div>
            <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg">
              <span className="font-inter text-[7.5px] text-gray-400">💡 Get your free key at </span>
              <span className="font-inter text-[7.5px] text-blue-500">aistudio.google.com</span>
            </div>
          </div>
          <div className="col-span-2 flex gap-2">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-inter text-[9.5px] font-bold text-white cursor-default flex items-center gap-1.5 shadow-sm">💾 Save Preferences</div>
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-inter text-[9.5px] font-semibold text-gray-500 cursor-default shadow-sm">Reset Defaults</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ScreenComponents = [ScreenDashboard, ScreenTemplates, ScreenHistory, ScreenSEOReport, ScreenSettings];

  const goTo = (i) => {
    setActive(i);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: i * trackRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-[0_24px_56px_rgba(0,0,0,0.12)] border border-gray-200 bg-white select-none">
      {/* Browser chrome */}
      <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-gray-800 rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-inter text-[10px] text-gray-400">{screens[active].url}</span>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 transition-colors text-[11px] font-bold"
          >‹</button>
          <button
            onClick={() => goTo(Math.min(4, active + 1))}
            disabled={active === 4}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 transition-colors text-[11px] font-bold"
          >›</button>
        </div>
      </div>

      {/* Scrollable track — 5 full-width panels */}
      <div
        ref={(el) => { trackRef.current = el; }}
        className="flex overflow-x-auto"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const i = Math.round(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth);
          if (i !== active) setActive(i);
        }}
      >
        {ScreenComponents.map((Screen, i) => (
          <div
            key={i}
            style={{ minWidth: "100%", scrollSnapAlign: "start" }}
          >
            <Screen />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="bg-white border-t border-gray-100 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex items-center gap-1.5 group"
            >
              <div className={`rounded-full transition-all duration-200 ${i === active ? "w-5 h-2 bg-blue-600" : "w-2 h-2 bg-gray-200 group-hover:bg-gray-300"}`} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`font-inter text-[9px] font-medium transition-colors ${i === active ? "text-blue-600" : "text-gray-300 hover:text-gray-500"}`}
            >
              {i + 1}. {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Project data ────────────────────────────────────────────── */
const projects = [
  {
    name: "ContentPilot AI",
    subtitle: "AI Marketing Content Studio",
    category: "AI · Content Creation",
    desc: "Businesses spend countless hours creating marketing content across multiple platforms. ContentPilot AI is an intelligent web application that helps generate marketing content in seconds using Generative AI.",
    features: ["Instagram Captions", "LinkedIn Posts", "Blog Ideas", "Product Descriptions", "Email Subject Lines", "CTA Generator", "Marketing Copy", "Content Tone Selection"],
    tech: ["React", "Tailwind CSS", "OpenAI API", "Node.js"],
    gradient: "from-blue-600 to-indigo-600",
    Mockup: ContentPilotMockup,
  },
  {
    name: "SEOInsight AI",
    subtitle: "AI SEO Assistant",
    category: "AI · SEO",
    desc: "An AI-powered assistant that analyses blog articles and provides intelligent SEO recommendations to improve search visibility and content quality.",
    features: ["SEO Title", "Meta Description", "Keywords", "Suggested Headings", "Readability Score", "FAQ Suggestions", "Content Improvements", "Search Intent Analysis"],
    tech: ["React", "Node.js", "Gemini API", "Tailwind CSS"],
    gradient: "from-blue-600 to-cyan-600",
    Mockup: SEOInsightMockup,
  },
];

const vp = { once: true, amount: 0.05 };

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-4"
        >
          <div className="section-label mb-3">Projects</div>
          <h2 className="font-grotesk text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-ink leading-[1.1]">
            What I've <span className="text-gradient">Built</span>
          </h2>
          <p className="font-inter text-gray-400 text-[15px] mt-3 max-w-[460px] mx-auto">
            Real AI applications I've designed and built as part of my journey into AI-powered marketing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          <CheckCircle2 size={13} className="text-green-500" />
          <span className="font-inter text-[13px] text-green-700 font-medium">Both projects are complete</span>
        </motion.div>

        <div className="space-y-14 lg:space-y-20">
          {projects.map(({ name, subtitle, category, desc, features, tech, gradient, Mockup }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                {/* Status badge */}
                <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="font-inter text-[11px] font-semibold text-green-700 uppercase tracking-wide">Completed</span>
                </div>

                <div className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">{category}</div>
                <h3 className="font-grotesk font-bold text-ink text-[22px] sm:text-[28px] lg:text-[34px] leading-tight tracking-tight mb-1">{name}</h3>
                <div className={`font-inter text-[14px] font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-5`}>
                  {subtitle}
                </div>

                <p className="font-inter text-gray-500 text-[14.5px] leading-relaxed mb-6">{desc}</p>

                {/* Features */}
                <div className="mb-6">
                  <div className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Features</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="font-inter text-[12.5px] text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <div className="font-inter text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-gray-50 border border-border rounded-full font-inter text-[12px] font-medium text-gray-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mockup side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Mockup />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
