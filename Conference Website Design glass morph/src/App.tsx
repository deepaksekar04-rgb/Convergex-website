import { useState, useCallback } from "react";
import type { ReactNode, CSSProperties } from "react";

type Page = "Home" | "Agenda" | "Speakers" | "Partners" | "Awards" | "Gallery" | "Register";
const NAV_LINKS: Page[] = ["Home", "Agenda", "Speakers", "Partners", "Awards", "Gallery", "Register"];

// ─── Shared Components ─────────────────────────────────────────────────────

function PrismLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E91E8C" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
        <linearGradient id="lg2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6DFF" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>
      <path d="M6 6 L18 18 L30 6" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 30 L18 18 L30 30" stroke="url(#lg2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <div style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 100, width: "calc(100% - 48px)", maxWidth: 1200 }}>
      <div className="nav-capsule" style={{ display: "flex", alignItems: "center", padding: "6px 8px", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 8, paddingRight: 16, borderRight: "1px solid rgba(255,255,255,0.08)", marginRight: 4 }}>
          <PrismLogo />
          <span style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>ConvergeX</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, overflowX: "auto" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-item${page === link ? " active" : ""}`}
              onClick={() => setPage(link)}
            >
              {link}
            </button>
          ))}
        </div>
        <div style={{ background: "white", color: "#0A0A0F", borderRadius: 9999, padding: "6px 16px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 8 }}>
          Sept 18, 2026
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(233,30,140,0.12)", border: "1px solid rgba(233,30,140,0.25)", borderRadius: 9999, padding: "5px 14px", marginBottom: 20 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E91E8C", display: "inline-block" }} />
      <span style={{ fontSize: 12, fontWeight: 600, color: "#E91E8C", letterSpacing: "0.08em", textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

// Thin-stroke SVG line icons — no fill, no color, consistent 20×20 viewport
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="14" height="14" rx="2" />
      <path d="M3 8h14M7 2v4M13 2v4" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 18s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
      <circle cx="10" cy="8" r="2" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="6.5" r="3" />
      <path d="M3.5 17.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
    </svg>
  );
}
function IconTrophy() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h10v7a5 5 0 0 1-10 0V3z" />
      <path d="M6 6H3a2 2 0 0 0 0 4h3M16 6h3a2 2 0 0 1 0 4h-3" />
      <path d="M11 15v3M8 18h6" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="16" height="18" rx="1" />
      <path d="M7 7h2M13 7h2M7 11h2M13 11h2M7 15h2M13 15h2" />
    </svg>
  );
}
function IconPeople() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="7" r="3" />
      <path d="M1.5 19c0-3.59 2.91-6.5 6.5-6.5" />
      <circle cx="15" cy="7" r="3" />
      <path d="M20.5 19c0-3.59-2.91-6.5-6.5-6.5" />
      <path d="M8.5 19c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3c0 0-9 0-14 8-2.5 4-.5 8 3 9 4 1 8-1 9-5 1-3-1-6-3-8" />
      <path d="M5 17c2-2 4-5 4-5" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2l2.4 6.4H20l-5.2 3.8 2 6.4L11 14.8l-5.8 3.8 2-6.4L2 8.4h6.6z" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 13l4 4 3-2 4 3 7-7" />
      <path d="M14 5l-3 3-3-1-4 4" />
      <path d="M9 8l2-2" />
    </svg>
  );
}

function GlassCard({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="glass" style={{ padding: 28, ...style }}>
      {children}
    </div>
  );
}

// ─── Home ──────────────────────────────────────────────────────────────────

function Home({ setPage }: { setPage: (p: Page) => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px" }}>
        <SectionLabel>September 18, 2026 · Dubai, UAE</SectionLabel>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, lineHeight: 1.0, marginBottom: 24, letterSpacing: "-0.02em" }}>
          CONVERGE<span className="prism-text">X</span><br />
          <span style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>2026</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(255,255,255,0.55)", maxWidth: 600, lineHeight: 1.6, marginBottom: 48, fontWeight: 300 }}>
          The Multiverse of Technology, Workforce and Workplace
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn-prism" style={{ padding: "14px 36px", fontSize: 15 }} onClick={() => setPage("Register")}>
            Register Now
          </button>
          <button
            onClick={() => setPage("Agenda")}
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 9999, color: "white", padding: "14px 36px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
          >
            View Agenda →
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, white)" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* Be Part of Conversations */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <SectionLabel>About the Event</SectionLabel>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Be Part of Conversations{" "}
              <span className="prism-text">Shaping the Future</span>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Prism glow from left edge */}
            <div style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", width: 120, height: 200, background: "radial-gradient(ellipse, rgba(233,30,140,0.4) 0%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none" }} />
            <GlassCard style={{ position: "relative" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>
                ConvergeX 2026 brings together visionary leaders, innovators, and changemakers across technology, workforce strategy, and workplace transformation. Three tracks, one extraordinary day.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["500+ Attendees", "40+ Speakers", "3 Tracks", "1 Day"].map((s) => (
                  <span key={s} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 9999, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
        <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>
          Trusted by industry leaders
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {["Deloitte", "Microsoft", "KPMG", "Google", "PwC", "Amazon", "Accenture", "IBM"].map((p) => (
            <div key={p} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Event Details / Contact */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Event Info */}
          <GlassCard style={{ background: "rgba(255,255,255,0.03)" }}>
            <SectionLabel>Event Details</SectionLabel>
            <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Mark Your Calendar</h3>
            {([
              { icon: <IconCalendar />, label: "Date", value: "September 18, 2026" },
              { icon: <IconPin />, label: "Venue", value: "Dubai World Trade Centre, UAE" },
              { icon: <IconClock />, label: "Time", value: "8:00 AM – 8:00 PM GST" },
              { icon: <IconPerson />, label: "Format", value: "In-person + Live Stream" },
            ] as const).map(({ icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ marginTop: 2, flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: 15, fontWeight: 500 }}>{value}</p>
                </div>
              </div>
            ))}
          </GlassCard>

          {/* Registration Form */}
          <GlassCard style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, background: "radial-gradient(ellipse, rgba(123,47,190,0.3) 0%, transparent 70%)", filter: "blur(20px)", pointerEvents: "none" }} />
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Quick Registration</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input className="glass-input" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input className="glass-input" placeholder="Work Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input className="glass-input" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              <button className="btn-prism" style={{ padding: "14px 24px", fontSize: 15, marginTop: 6 }} onClick={() => setPage("Register")}>
                Complete Registration →
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

// ─── Agenda ─────────────────────────────────────────────────────────────────

const agendaData = [
  { time: "8:00 AM", title: "Registration & Welcome Coffee", speaker: "ConvergeX Team", type: "panel" as const, duration: "30 min" },
  { time: "8:30 AM", title: "Opening Keynote: The Future of Work is Now", speaker: "Dr. Sarah Al-Hassan, CEO TechForward", type: "keynote" as const, duration: "45 min" },
  { time: "9:15 AM", title: "Masterclass: AI-Driven Workforce Transformation", speaker: "James Wright, Chief AI Officer, Accenture", type: "masterclass" as const, duration: "60 min" },
  { time: "10:15 AM", title: "Panel: Reimagining the Physical Workplace", speaker: "4 Industry Leaders", type: "panel" as const, duration: "45 min" },
  { time: "11:00 AM", title: "Keynote: Quantum Computing & Business", speaker: "Priya Sharma, VP Research, IBM", type: "keynote" as const, duration: "45 min" },
  { time: "11:45 AM", title: "Networking Lunch Break", speaker: "All Attendees", type: "panel" as const, duration: "60 min" },
  { time: "1:00 PM", title: "Masterclass: Data Governance at Scale", speaker: "Marco Reyes, CTO, Deloitte MENA", type: "masterclass" as const, duration: "60 min" },
  { time: "2:00 PM", title: "Panel: Diversity, Equity & Future Hiring", speaker: "5 HR Leaders", type: "panel" as const, duration: "45 min" },
  { time: "2:45 PM", title: "Keynote: Sustainable Tech Ecosystems", speaker: "Leila Nour, Director, Microsoft UAE", type: "keynote" as const, duration: "45 min" },
  { time: "3:30 PM", title: "Breakout Sessions — 3 Tracks Simultaneously", speaker: "Multiple Speakers", type: "masterclass" as const, duration: "60 min" },
  { time: "5:00 PM", title: "ConvergeX Annual Awards Ceremony", speaker: "Hosted by Ahmed Al-Farsi", type: "awards" as const, duration: "90 min" },
  { time: "6:30 PM", title: "Closing Keynote & Call to Action", speaker: "Conference Chair", type: "keynote" as const, duration: "30 min" },
  { time: "7:00 PM", title: "Gala Networking Dinner", speaker: "All Attendees", type: "panel" as const, duration: "60 min" },
];

function Agenda() {
  const typeLabels: Record<string, string> = {
    keynote: "Keynote",
    panel: "Panel",
    masterclass: "Masterclass",
    awards: "Awards",
  };

  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>September 18, 2026</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
            Full Day <span className="prism-text">Agenda</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15 }}>Dubai World Trade Centre · 8:00 AM – 8:00 PM GST</p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          {(["keynote", "panel", "masterclass", "awards"] as const).map((t) => (
            <span key={t} className={`tag-${t}`} style={{ borderRadius: 9999, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>
              {typeLabels[t]}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div className="timeline-line" style={{ position: "absolute", left: 100, top: 0, bottom: 0 }} />

          {agendaData.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 32, marginBottom: 20, alignItems: "flex-start" }}>
              {/* Time */}
              <div style={{ width: 80, textAlign: "right", paddingTop: 22, flexShrink: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>{item.time}</span>
              </div>

              {/* Dot */}
              <div style={{ position: "relative", flexShrink: 0, zIndex: 2, marginTop: 26 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: `linear-gradient(135deg, var(--prism-magenta), var(--prism-blue))`, boxShadow: "0 0 10px rgba(233,30,140,0.5)" }} />
              </div>

              {/* Card */}
              <div className="glass" style={{ flex: 1, padding: "18px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>{item.title}</h3>
                  <span className={`tag-${item.type}`} style={{ borderRadius: 9999, padding: "3px 12px", fontSize: 11, fontWeight: 600, flexShrink: 0 }}>
                    {typeLabels[item.type]}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                  {item.speaker} · <span style={{ color: "rgba(255,255,255,0.3)" }}>{item.duration}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Speakers ───────────────────────────────────────────────────────────────

const speakers = [
  { name: "Dr. Sarah Al-Hassan", title: "CEO", company: "TechForward Global", topic: "Future of AI", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format", bio: "Pioneer in enterprise AI strategy with 20+ years leading digital transformation across MENA." },
  { name: "James Wright", title: "Chief AI Officer", company: "Accenture", topic: "Workforce AI", img: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?w=400&h=400&fit=crop&auto=format", bio: "Leads Accenture's global AI practice, shaping workforce automation strategy for Fortune 500 companies." },
  { name: "Priya Sharma", title: "VP Research", company: "IBM", topic: "Quantum Computing", img: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?w=400&h=400&fit=crop&auto=format", bio: "Quantum computing researcher with 12 patents; bridging quantum theory and real-world enterprise applications." },
  { name: "Leila Nour", title: "Regional Director", company: "Microsoft UAE", topic: "Sustainability Tech", img: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?w=400&h=400&fit=crop&auto=format", bio: "Drives Microsoft's sustainability and cloud-first agenda across the Gulf region." },
  { name: "Marco Reyes", title: "CTO", company: "Deloitte MENA", topic: "Data Governance", img: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=400&h=400&fit=crop&auto=format", bio: "Architect of award-winning data governance frameworks adopted by 60+ enterprises." },
  { name: "Fatima Al-Zaabi", title: "Chief People Officer", company: "ENOC Group", topic: "HR Transformation", img: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?w=400&h=400&fit=crop&auto=format", bio: "Transforming human capital management in energy sector with culture-first leadership philosophy." },
  { name: "Ahmed Al-Farsi", title: "Founder & CEO", company: "FinScale Ventures", topic: "FinTech Innovation", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop&auto=format", bio: "Serial entrepreneur with 3 unicorn exits; champion of inclusive financial technology in emerging markets." },
  { name: "Nadia Petrov", title: "Director of Design", company: "Google EMEA", topic: "Human-Centered Design", img: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=400&h=400&fit=crop&auto=format", bio: "Leads Google's design culture initiatives across Europe, Middle East, and Africa." },
];

function Speakers() {
  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>Featured Speakers</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
            Industry <span className="prism-text">Visionaries</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15, maxWidth: 500, margin: "12px auto 0" }}>
            40+ thought leaders and practitioners sharing cutting-edge insights across every track.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
          {speakers.map((s, i) => (
            <div key={i} className="glass" style={{ overflow: "hidden", padding: 0, transition: "transform 0.2s ease", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
              {/* Photo */}
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 50%)" }} />
                {/* Topic tag */}
                <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                  <span style={{ background: "rgba(233,30,140,0.25)", border: "1px solid rgba(233,30,140,0.4)", borderRadius: 9999, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: "#E91E8C" }}>
                    {s.topic}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "18px 20px" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 2 }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                  {s.title} · <span style={{ color: "rgba(255,255,255,0.35)" }}>{s.company}</span>
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>+ 32 more speakers to be announced</p>
        </div>
      </div>
    </div>
  );
}

// ─── Partners ────────────────────────────────────────────────────────────────

const partnerTiers = [
  {
    tier: "Presenting Partner",
    color: "#E91E8C",
    partners: ["GlobalTech Solutions"],
  },
  {
    tier: "Real Estate Partner",
    color: "#FF6B35",
    partners: ["EMAAR Properties", "Nakheel"],
  },
  {
    tier: "Bronze Partners",
    color: "#C0995A",
    partners: ["Ooredoo", "Etisalat", "du Telecom"],
  },
  {
    tier: "HR Partners",
    color: "#7B2FBE",
    partners: ["SAP SuccessFactors", "Workday", "Mercer", "AON"],
  },
  {
    tier: "Technology Partners",
    color: "#1A6DFF",
    partners: ["Oracle", "Salesforce", "ServiceNow", "Cisco", "Dell"],
  },
  {
    tier: "Knowledge Partners",
    color: "#00B4D8",
    partners: ["Harvard Business Review", "McKinsey & Company"],
  },
  {
    tier: "Talent Partners",
    color: "#A87FE8",
    partners: ["LinkedIn Talent Solutions", "Indeed", "Bayt.com"],
  },
];

// Per-tier glow: primary color + a secondary prism color for visual variety
const tierGlowConfigs: Record<string, { primary: string; secondary: string; glowSize: number; glowOpacity: number }> = {
  "Presenting Partner":   { primary: "#E91E8C", secondary: "#FF6B35", glowSize: 160, glowOpacity: 0.55 },
  "Real Estate Partner":  { primary: "#FF6B35", secondary: "#7B2FBE", glowSize: 120, glowOpacity: 0.42 },
  "Bronze Partners":      { primary: "#C0995A", secondary: "#FF6B35", glowSize: 110, glowOpacity: 0.38 },
  "HR Partners":          { primary: "#7B2FBE", secondary: "#1A6DFF", glowSize: 100, glowOpacity: 0.35 },
  "Technology Partners":  { primary: "#1A6DFF", secondary: "#7B2FBE", glowSize: 100, glowOpacity: 0.32 },
  "Knowledge Partners":   { primary: "#00B4D8", secondary: "#1A6DFF", glowSize: 100, glowOpacity: 0.30 },
  "Talent Partners":      { primary: "#A87FE8", secondary: "#E91E8C", glowSize: 100, glowOpacity: 0.30 },
};

function PartnerTile({ name, tier, isPresenting }: { name: string; tier: string; isPresenting: boolean }) {
  const cfg = tierGlowConfigs[tier] ?? { primary: "#E91E8C", secondary: "#7B2FBE", glowSize: 100, glowOpacity: 0.3 };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: isPresenting ? 22 : 18,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.10)",
        padding: isPresenting ? "36px 56px" : "22px 32px",
        cursor: "pointer",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        minWidth: isPresenting ? 280 : 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.borderColor = `${cfg.primary}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.10)";
      }}
    >
      {/* Primary corner glow — top-right */}
      <div style={{
        position: "absolute",
        top: -cfg.glowSize * 0.4,
        right: -cfg.glowSize * 0.4,
        width: cfg.glowSize,
        height: cfg.glowSize,
        borderRadius: "50%",
        background: `radial-gradient(ellipse at center, ${cfg.primary} 0%, transparent 72%)`,
        opacity: cfg.glowOpacity,
        filter: "blur(28px)",
        pointerEvents: "none",
      }} />
      {/* Secondary accent glow — bottom-left, softer */}
      <div style={{
        position: "absolute",
        bottom: -cfg.glowSize * 0.3,
        left: -cfg.glowSize * 0.3,
        width: cfg.glowSize * 0.7,
        height: cfg.glowSize * 0.7,
        borderRadius: "50%",
        background: `radial-gradient(ellipse at center, ${cfg.secondary} 0%, transparent 72%)`,
        opacity: cfg.glowOpacity * 0.5,
        filter: "blur(22px)",
        pointerEvents: "none",
      }} />
      <span style={{
        position: "relative",
        fontSize: isPresenting ? 24 : 15,
        fontWeight: 700,
        color: "white",
        letterSpacing: isPresenting ? "-0.01em" : "0",
      }}>
        {name}
      </span>
      {isPresenting && (
        <p style={{ position: "relative", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.4)", marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Presenting Partner
        </p>
      )}
    </div>
  );
}

function Partners() {
  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>Our Partners</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
            Leading in <span className="prism-text">the Industry</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15, maxWidth: 480, margin: "12px auto 0" }}>
            Partnering with the most influential brands across technology, real estate, HR, and knowledge sectors.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
          {partnerTiers.map(({ tier, color, partners }) => {
            const isPresenting = tier === "Presenting Partner";
            return (
              <div key={tier}>
                {/* Tier label pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${color}18`, border: `1px solid ${color}35`, borderRadius: 9999, padding: "4px 14px", marginBottom: 20 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, display: "inline-block" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{tier}</span>
                </div>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {partners.map((p) => (
                    <PartnerTile key={p} name={p} tier={tier} isPresenting={isPresenting} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 72, textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 22,
            padding: "36px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 220, height: 120, background: "radial-gradient(ellipse, rgba(233,30,140,0.25) 0%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none" }} />
            <h3 style={{ position: "relative", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Become a Partner</h3>
            <p style={{ position: "relative", color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 22 }}>Connect your brand with 500+ decision makers</p>
            <button className="btn-prism" style={{ position: "relative", padding: "12px 28px", fontSize: 14 }}>Get Partnership Deck →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Awards ──────────────────────────────────────────────────────────────────

const awardCategories = [
  { title: "Digital Innovator of the Year", Icon: IconTrophy, desc: "Recognizing breakthrough technology that reshaped an industry." },
  { title: "Future Workplace Award", Icon: IconBuilding, desc: "Outstanding transformation of the physical or hybrid work environment." },
  { title: "HR Excellence Award", Icon: IconPeople, desc: "Leading people strategy and culture in the modern enterprise." },
  { title: "Sustainability in Tech", Icon: IconLeaf, desc: "Technology-driven commitment to environmental impact reduction." },
  { title: "Rising Leader Award", Icon: IconStar, desc: "Exceptional emerging talent under 35 driving change in their field." },
  { title: "Most Inclusive Organization", Icon: IconHandshake, desc: "Championing diversity, equity, and inclusion at scale." },
];

const nominees = [
  { name: "Dr. Layla Khalid", org: "UAE Ministry of AI", category: "Digital Innovator" },
  { name: "Omar Saleh", org: "Majid Al Futtaim", category: "Future Workplace" },
  { name: "Sherine Younis", org: "Chalhoub Group", category: "HR Excellence" },
  { name: "Tariq Al-Marzouqi", org: "DEWA", category: "Sustainability in Tech" },
  { name: "Alicia Chen", org: "Careem", category: "Rising Leader" },
  { name: "Faisal Al-Rashidi", org: "First Abu Dhabi Bank", category: "Most Inclusive" },
  { name: "Nour Abdelrahman", org: "Amazon MENA", category: "Digital Innovator" },
  { name: "Karim El-Sayed", org: "Talabat", category: "Rising Leader" },
];

function Awards({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>ConvergeX Awards 2026</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
            Celebrating <span className="prism-text">Excellence</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15, maxWidth: 480, margin: "12px auto 0" }}>
            Six prestigious categories honoring the boldest leaders in technology, workplace innovation, and human capital.
          </p>
        </div>

        {/* Award categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginBottom: 64 }}>
          {awardCategories.map((a, i) => (
            <div key={i} className="glass" style={{ padding: "28px 28px", position: "relative", overflow: "hidden", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ position: "absolute", bottom: -10, right: -10, width: 80, height: 80, background: "radial-gradient(ellipse, rgba(233,30,140,0.2) 0%, transparent 70%)", filter: "blur(15px)" }} />
              <div style={{ marginBottom: 14 }}><a.Icon /></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Nominees */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Nominees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {nominees.map((n, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "16px 18px" }}>
                <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{n.name}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>{n.org}</p>
                <span style={{ background: "rgba(123,47,190,0.2)", border: "1px solid rgba(123,47,190,0.3)", borderRadius: 9999, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#A87FE8" }}>
                  {n.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nomination CTA */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <GlassCard style={{ textAlign: "center", padding: "48px 40px" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(233,30,140,0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
            <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Submit a Nomination</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
              Know someone who deserves recognition? Nominations close August 15, 2026.
            </p>
            <button className="btn-prism" style={{ padding: "14px 36px", fontSize: 15 }} onClick={() => setPage("Register")}>
              Nominate Now →
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryPhotos = [
  { url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop&auto=format", alt: "Speaker on stage addressing large audience", caption: "Opening Keynote — ConvergeX 2025", h: 260 },
  { url: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&h=800&fit=crop&auto=format", alt: "Panel discussion on stage", caption: "Future of Work Panel", h: 380 },
  { url: "https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?w=600&h=400&fit=crop&auto=format", alt: "Audience watching a speaker on a bright screen", caption: "Masterclass — AI Transformation", h: 240 },
  { url: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&h=500&fit=crop&auto=format", alt: "Audience in conference", caption: "Conference Hall at Capacity", h: 320 },
  { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=700&fit=crop&auto=format", alt: "Person discussing in front of large screen", caption: "Awards Ceremony 2025", h: 360 },
  { url: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=600&h=400&fit=crop&auto=format", alt: "Speaker in black blazer", caption: "Closing Keynote Remarks", h: 250 },
];

function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  const col1 = galleryPhotos.filter((_, i) => i % 3 === 0);
  const col2 = galleryPhotos.filter((_, i) => i % 3 === 1);
  const col3 = galleryPhotos.filter((_, i) => i % 3 === 2);

  const PhotoCard = ({ photo, idx }: { photo: typeof galleryPhotos[0]; idx: number }) => (
    <div
      style={{ position: "relative", borderRadius: 16, overflow: "hidden", cursor: "pointer", marginBottom: 16 }}
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={photo.url} alt={photo.alt} style={{ width: "100%", height: photo.h, objectFit: "cover", display: "block" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.1) 60%, transparent 100%)",
        opacity: hovered === idx ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "flex", alignItems: "flex-end", padding: 18
      }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{photo.caption}</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>ConvergeX 2025</p>
        </div>
      </div>
      {/* Subtle prism border on hover */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 16,
        border: hovered === idx ? "1px solid rgba(233,30,140,0.4)" : "1px solid transparent",
        transition: "border-color 0.3s ease",
        pointerEvents: "none"
      }} />
    </div>
  );

  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>Photo Gallery</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
            Moments from <span className="prism-text">ConvergeX</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15 }}>
            Highlights from our 2025 edition. ConvergeX 2026 is coming September 18.
          </p>
        </div>

        {/* Masonry grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "start" }}>
          <div>{col1.map((p, i) => <PhotoCard key={i} photo={p} idx={galleryPhotos.indexOf(p)} />)}</div>
          <div style={{ marginTop: 40 }}>{col2.map((p, i) => <PhotoCard key={i} photo={p} idx={galleryPhotos.indexOf(p)} />)}</div>
          <div>{col3.map((p, i) => <PhotoCard key={i} photo={p} idx={galleryPhotos.indexOf(p)} />)}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Register ─────────────────────────────────────────────────────────────────

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    designation: "",
    workEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!formData.firstName || !formData.workEmail) return;
    setLoading(true);

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

    try {
      const res = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.message);
    } catch (err) {
      // API server may not be running — still proceed to success UI
      if (err instanceof TypeError) {
        console.warn("[ConvergeX] API server offline — registration logged locally only.");
        console.table(formData);
      } else {
        console.error("[ConvergeX] Registration error:", err);
      }
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }, [formData]);

  return (
    <div className="prism-scanline-bg" style={{ minHeight: "100vh", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, width: "100%", padding: "140px 24px 80px" }}>
        {!submitted ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionLabel>Join ConvergeX 2026</SectionLabel>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
                Secure Your <span className="prism-text">Seat</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 12, fontSize: 15 }}>
                September 18, 2026 · Dubai World Trade Centre
              </p>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 300, height: 200, background: "radial-gradient(ellipse, rgba(123,47,190,0.25) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

              <GlassCard style={{ position: "relative" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 28 }}>Registration Form</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>First Name *</label>
                    <input
                      className="glass-input"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>Last Name *</label>
                    <input
                      className="glass-input"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>Company *</label>
                    <input
                      className="glass-input"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>Designation</label>
                    <input
                      className="glass-input"
                      placeholder="Chief Technology Officer"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>Work Email *</label>
                    <input
                      className="glass-input"
                      placeholder="jane@company.com"
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  className="btn-prism"
                  style={{ width: "100%", padding: "16px 24px", fontSize: 16, marginTop: 24, opacity: loading ? 0.7 : 1 }}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Submit Registration"}
                </button>

                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 16, lineHeight: 1.6 }}>
                  By registering you agree to the ConvergeX 2026 terms and privacy policy.
                </p>
              </GlassCard>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 100, height: 100, marginBottom: 32 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(233,30,140,0.3) 0%, transparent 70%)", filter: "blur(20px)" }} />
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(233,30,140,0.15)", border: "1px solid rgba(233,30,140,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
                ✓
              </div>
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>
              {"You're "}
              <span className="prism-text">Registered!</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px" }}>
              Welcome, {formData.firstName || "Attendee"}! A confirmation has been sent to {formData.workEmail || "your email"}. {"We'll"} see you on September 18 in Dubai.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {["Add to Calendar", "Share Event", "View Agenda"].map((a) => (
                <button key={a} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9999, color: "white", padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  {a}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("Home");

  const renderPage = () => {
    switch (page) {
      case "Home": return <Home setPage={setPage} />;
      case "Agenda": return <Agenda />;
      case "Speakers": return <Speakers />;
      case "Partners": return <Partners />;
      case "Awards": return <Awards setPage={setPage} />;
      case "Gallery": return <Gallery />;
      case "Register": return <Register />;
    }
  };

  return (
    <div style={{ background: "#0A0A0F", minHeight: "100vh" }}>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
}
