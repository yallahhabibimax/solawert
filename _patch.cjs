const fs = require("fs");
let err = false;

/* ---------- home.js: FAQ-Markup ---------- */
let h = fs.readFileSync("home.js", "utf8");

const H_OLD = `  return React.createElement("section", {
    id: "faq",
    className: "relative overflow-hidden px-5 md:px-8 py-20 md:py-28",
    style: { background: "#2A2E36" }
  }, React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 pointer-events-none",
    style: { display: "none" }
  }), React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute pointer-events-none",
    style: { top: "-18%", left: "-12%", width: "640px", height: "640px", background: "radial-gradient(circle,rgba(245,179,1,0.12) 0%,transparent 62%)" }
  }), React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
  }, React.createElement("div", {
    className: "reveal-left",
    style: { position: "sticky", top: "110px" }
  }, React.createElement("span", {
    className: "inline-block font-heading font-bold uppercase tracking-[0.16em] text-[11px] px-3.5 py-1.5 rounded-full mb-6",
    style: { background: "rgba(245,179,1,0.12)", color: "#F5B301" }
  }, "FAQ"), React.createElement("h2", {
    className: "font-heading font-black tracking-tight mb-5",
    style: { color: "#ffffff", fontSize: "clamp(2.3rem,4.6vw,3.5rem)", lineHeight: "1.12" }
  }, "Häufig gestellte ", React.createElement("span", {
    style: { background: "#F5B301", color: "#14171C", padding: "0.05em 0.16em", borderRadius: "8px", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }
  }, "Fragen")), React.createElement("p", {
    className: "font-body font-bold leading-relaxed mb-8",
    style: { color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", maxWidth: "23rem" }
  }, "Alles, was Sie vor dem Start wissen wollen. Klare Antworten, keine Anzahlung, kein Kleingedrucktes."), React.createElement("a", {
    href: "#anfrage",
    className: "group inline-flex items-center gap-3 font-heading font-extrabold tracking-tight rounded-full transition-transform hover:-translate-y-0.5",
    style: { background: "#F5B301", color: "#2A2E36", fontSize: "16.5px", fontWeight: 800, padding: "8px 8px 8px 24px" }
  }, "Kostenlos anfragen", React.createElement("span", {
    className: "flex items-center justify-center rounded-full shrink-0",
    style: { width: "34px", height: "34px", background: "#2A2E36", color: "#F5B301" }
  }, React.createElement(Svg, { size: 18, sw: 2.4 }, ICO.arrow)))), React.createElement("div", {
    className: "space-y-3.5"
  }, faqs.map((f, i) => React.createElement("details", {
    key: i,
    className: "faq-item reveal group border border-white/10",
    style: { background: "#16181E", borderRadius: "18px", overflow: "hidden", transitionDelay: (i * 0.05) + "s", boxShadow: "0 14px 34px -22px rgba(20,16,2,0.7)" }
  }, React.createElement("summary", {
    className: "flex items-center justify-between gap-5",
    style: { padding: "19px 22px", cursor: "pointer", listStyle: "none" }
  }, React.createElement("span", {
    className: "font-heading font-semibold",
    style: { color: "#ffffff", fontSize: "16px", lineHeight: "1.3" }
  }, f.q), React.createElement("span", {
    className: "faq-icon shrink-0 flex items-center justify-center",
    style: { width: "34px", height: "34px", borderRadius: "50%", background: "#F5B301", color: "#2A2E36" }
  }, React.createElement(Svg, { size: 20, sw: 2.4 }, ICO.plus))), React.createElement("div", {
    className: "faq-body",
    style: { padding: "0 22px 20px", color: "rgba(255,255,255,0.62)", lineHeight: "1.7", fontSize: "14.5px" }
  }, React.createElement("div", {
    style: { height: "1px", background: "rgba(245,179,1,0.28)", marginBottom: "14px" }
  }), f.a))))));`;

const H_NEW = `  return React.createElement("section", {
    id: "faq",
    className: "relative overflow-hidden px-5 md:px-8 py-20 md:py-28",
    style: { background: "#2A2E36" }
  }, React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute pointer-events-none",
    style: { top: "-18%", left: "-12%", width: "640px", height: "640px", background: "radial-gradient(circle,rgba(245,179,1,0.12) 0%,transparent 62%)" }
  }), React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
  }, React.createElement("div", {
    className: "reveal-left",
    style: { position: "sticky", top: "110px" }
  }, React.createElement("span", {
    className: "faq-chip"
  }, React.createElement("span", { className: "faq-dot" }), "Häufige Fragen"), React.createElement("h2", {
    className: "font-heading",
    style: { color: "#ffffff", fontWeight: 900, fontSize: "clamp(2.1rem,4.4vw,3.2rem)", lineHeight: "1.07", letterSpacing: "-0.01em", margin: "1.3rem 0 1.1rem" }
  }, "Häufige ", React.createElement("span", { style: { color: "#F5B301" } }, "Fragen"), " und unsere Antworten"), React.createElement("p", {
    className: "font-body",
    style: { color: "rgba(255,255,255,0.62)", fontSize: "1.02rem", lineHeight: "1.6", maxWidth: "24rem", marginBottom: "2rem" }
  }, "Sieben Antworten auf die Fragen, die vor fast jedem Projekt kommen. Fehlt eine? Fragen Sie uns direkt."), React.createElement("a", {
    href: "#anfrage",
    className: "faq-cta group"
  }, React.createElement("div", {
    style: { display: "flex", flexDirection: "column", gap: "3px" }
  }, React.createElement("span", { className: "faq-cta-label" }, "Bleibt eine Frage?"), React.createElement("span", { className: "faq-cta-title font-heading" }, "Direkt mit uns sprechen"), React.createElement("span", { className: "faq-cta-sub font-body" }, "Erstgespräch · unverbindlich")), React.createElement("span", {
    className: "faq-cta-arrow"
  }, React.createElement(Svg, { size: 20, sw: 2.4 }, ICO.arrow)))), React.createElement("div", {
    className: "faq-list"
  }, faqs.map((f, i) => React.createElement("details", {
    key: i,
    className: "faq-item reveal",
    style: { transitionDelay: (i * 0.04) + "s" }
  }, React.createElement("summary", {
    className: "faq-head"
  }, React.createElement("span", { className: "faq-num font-heading" }, ("0" + (i + 1)).slice(-2)), React.createElement("span", { className: "faq-q font-heading" }, f.q), React.createElement("span", {
    className: "faq-icon"
  }, React.createElement(Svg, { size: 22, sw: 2.2 }, ICO.plus))), React.createElement("div", {
    className: "faq-body font-body"
  }, f.a)))));`;

if (!h.includes(H_OLD)) { console.error("H_OLD NOT FOUND"); err = true; }
else { h = h.replace(H_OLD, H_NEW); fs.writeFileSync("home.js", h); }

/* ---------- styles.css: FAQ-CSS ---------- */
let c = fs.readFileSync("styles.css", "utf8");
const C_OLD = `details > summary { list-style: none; cursor: pointer; }
details > summary::-webkit-details-marker { display: none; }
details[open] > summary .faq-icon { transform: rotate(45deg); color: #2A2E36; }
.faq-icon { transition: transform .35s cubic-bezier(.16,1,.3,1), color .35s ease; }
.faq-item { transition: border-color .3s ease, background .3s ease; }
.faq-item[open] { border-color: rgba(var(--accent-rgb), .45); }
details > div.faq-body { animation: faqOpen .4s cubic-bezier(.16,1,.3,1); }
@keyframes faqOpen { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }`;

const C_NEW = `details > summary { list-style: none; cursor: pointer; }
details > summary::-webkit-details-marker { display: none; }

/* FAQ – nummerierte Reihen (Editorial-Stil, Marcel-Davia) */
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-top: 1px solid rgba(255,255,255,.10); }
.faq-item:last-child { border-bottom: 1px solid rgba(255,255,255,.10); }
.faq-head { display: flex; align-items: center; gap: 1rem; padding: 22px 4px; }
.faq-num { width: 30px; flex-shrink: 0; font-weight: 700; font-size: 13px; letter-spacing: .04em; color: rgba(255,255,255,.34); transition: color .3s ease; }
.faq-q { flex: 1; min-width: 0; font-weight: 600; font-size: 17px; line-height: 1.3; color: #fff; transition: color .3s ease; }
.faq-icon { flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--accent); transition: transform .35s cubic-bezier(.16,1,.3,1); }
.faq-item:hover .faq-q { color: var(--accent); }
.faq-item:hover .faq-num { color: rgba(245,179,1,.7); }
details[open] > summary .faq-icon { transform: rotate(45deg); }
details[open] > summary .faq-q, details[open] > summary .faq-num { color: var(--accent); }
.faq-body { padding: 0 4px 22px 46px; color: rgba(255,255,255,.6); line-height: 1.7; font-size: 14.5px; animation: faqOpen .4s cubic-bezier(.16,1,.3,1); }
@keyframes faqOpen { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

/* FAQ – Chip + CTA-Karte (linke Spalte) */
.faq-chip { display: inline-flex; align-items: center; gap: .5rem; padding: .42rem .9rem .42rem .72rem; border-radius: 999px; background: rgba(245,179,1,.12); border: 1px solid rgba(245,179,1,.35); color: #F5B301; font-family: 'Archivo', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
.faq-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: sw-dot-pulse 1.8s ease-in-out infinite; }
.faq-cta { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: .5rem; padding: 18px 18px 18px 22px; border-radius: 18px; background: linear-gradient(155deg,#1B2029 0%,#15181D 60%,#101317 100%); border: 1px solid rgba(245,179,1,.2); box-shadow: 0 24px 50px -28px rgba(0,0,0,.7); transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease, border-color .35s ease; }
.faq-cta:hover { transform: translateY(-3px); border-color: rgba(245,179,1,.45); box-shadow: 0 30px 60px -26px rgba(0,0,0,.8); }
.faq-cta-label { font-family: 'Archivo', system-ui, sans-serif; font-weight: 800; font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); }
.faq-cta-title { font-weight: 800; font-size: 18px; color: #fff; line-height: 1.15; }
.faq-cta-sub { font-size: 12.5px; color: rgba(255,255,255,.55); }
.faq-cta-arrow { flex-shrink: 0; width: 46px; height: 46px; border-radius: 50%; background: var(--accent); color: #15181D; display: flex; align-items: center; justify-content: center; transition: transform .35s cubic-bezier(.16,1,.3,1); }
.faq-cta:hover .faq-cta-arrow { transform: rotate(-45deg); }
@media (prefers-reduced-motion: reduce) { .faq-dot, .faq-icon, .faq-cta-arrow { animation: none !important; transition: none !important; } }`;

if (!c.includes(C_OLD)) { console.error("C_OLD NOT FOUND"); err = true; }
else { c = c.replace(C_OLD, C_NEW); fs.writeFileSync("styles.css", c); }

if (err) process.exit(1);
console.log("PATCHED");
